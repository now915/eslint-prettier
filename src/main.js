import { createApp } from 'vue'
import App from './App.vue'

import { escape, uniqueId } from 'lodash-es'

// import mock from '../mock/api'

// console.log('mock------', mock)
// const openMock = import.meta.env.VITE_MOCK

// if (openMock) {
//   // mock._mocked = undefined
//   const modules = import.meta.glob('../mock/api.ts')
//   console.log('dog-----', modules)
//   for (const path in modules) {
//     if (Object.hasOwnProperty.call(modules, path)) {
//       modules[path]()
//     }
//   }
// }

console.log(escape('asdasd<>asdasd'))
console.log(uniqueId('conter_'))
console.log(uniqueId('conter_'))

createApp(App).mount('#app')
