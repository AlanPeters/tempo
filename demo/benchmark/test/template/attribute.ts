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

import { div } from 'tempo-dom/lib/html'

export interface TestAttributes {
  id: string
  className: string
  title: string
}

export const attribute = div<TestAttributes, unknown, unknown>($ =>
  $.id(s => s.id)
    // .attr('class', s => s.className)
    .class(s => s.className)
    .title(s => s.title)
    .text('content')
).build()
