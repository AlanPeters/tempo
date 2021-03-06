/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { TestDescription, TestOptions } from './state'

function setup() {}

function teardown() {
  document.getElementById('test')!.innerHTML = ''
}

const loadScript = (runnerId: string): Promise<any> =>
  new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script')
      script.onload = () => {
        console.log(`loaded tests for '${runnerId}', executing now ...`)
        const anyWin = window as any
        const mod = anyWin.__tests__
        delete anyWin.__tests__
        document.body.removeChild(script)
        resolve(mod)
      }
      script.src = `./${runnerId}/main.js`
      document.body.appendChild(script)
    } catch (e) {
      reject(e)
    }
  })

const makeSuite = (
  runnerId: string,
  testDescriptions: TestDescription[],
  options: TestOptions,
  dispatch: (
    runnerId: string,
    testId: string,
    target: TestResult | undefined
  ) => void
) =>
  new Promise<Record<string, TestResult>>(async resolve => {
    const mod = await loadScript(runnerId)
    const suite = new Benchmark.Suite()

    for (const test of testDescriptions) {
      if (!mod[test.fn]) {
        console.log(`skip (no implementation): ${runnerId}: ${test.id}`)
        dispatch(runnerId, test.id, undefined)
        continue
      }

      suite.add({
        id: test.id,
        async: true,
        fn: function () {
          mod[test.fn](test.args)
        },
        name: test.name,
        setup: setup,
        teardown: teardown,
        maxTime: options.maxTime
      })
    }

    suite.on('cycle', function (event: { target: TestResult }) {
      console.log(`${runnerId}: ${String(event.target)}`)
      dispatch(runnerId, event.target.id, event.target)
    })

    suite.on('complete', resolve)

    suite.run({ async: true, queued: true })
  })

export const runTests = async (
  runnerIds: string[],
  testDescriptions: TestDescription[],
  options: TestOptions,
  dispatch: (
    runnerId: string,
    testId: string,
    target: TestResult | undefined
  ) => void
) => {
  for (const id of runnerIds) {
    await makeSuite(id, testDescriptions, options, dispatch)
  }
}
