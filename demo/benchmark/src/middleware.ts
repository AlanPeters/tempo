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

import { State, getSelectedTests } from './state'
import { Action } from './action'
import { Middleware } from 'tempo-dom/lib/tempo'
import { runTests } from './test_runner'
import { tests as testDescriptions } from './tests'

export const middleware: Middleware<State, Action> = dispatch => (
  state: State,
  action: Action
) => {
  switch (action.kind) {
    case 'ExecuteSelectedTests':
      const { tests, versions } = getSelectedTests(state)
      dispatch(Action.executeTests(versions, tests))
      return
    case 'ExecuteTests':
      const { versionIds, testIds } = action
      const { options } = state
      const set = new Set(testIds)
      const testsToRun = testDescriptions.filter(test => set.has(test.id))

      setTimeout(() => {
        runTests(
          versionIds,
          testsToRun,
          options,
          (
            runnerId: string,
            testId: string,
            target: TestResult | undefined
          ) => {
            dispatch(Action.updateResult(runnerId, testId, target))
          }
        ).then(() => dispatch(Action.testsExecuted()))
      }, 1)
      return
    default:
    // do nothing
  }
}
