<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite
        Documentasdasdasdasdasdsdasdasdationuyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>
    <button @click="handleClick">导出 Excel</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code>
      to test hot module replacement.
    </p>
    <div>{{ sum1 }}</div>
    <div>{{ sum2 }}</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import addOne from '../utils/addOne'
  import addTen from '../utils/addTen'
  import { writeFile, utils } from 'xlsx'
  export default defineComponent({
    props: {
      msg: {
        type: String,
        default: '',
      },
      color: {
        type: String,
        default: '',
      },
    },
    setup() {
      const state = reactive({ count: 0 })
      console.log(1111)
      return {
        state,
      }
    },
    data() {
      interface Dog {
        name: string
      }
      const dog: Dog = {
        name: 'corgi',
      }
      return {
        sum1: addOne(1),
        sum2: addTen(1),
        obj: {
          name: 'corgi',
          age: 26,
        },
        pet: dog,
      }
    },
    methods: {
      handleInput() {},
      handleClick() {
        const data = [
          {
            name: 'Eric',
            age: '20',
            hobby: 'ball',
            sex: 'boy',
          },
          {
            name: 'Lucy',
            age: '22',
            hobby: 'draw',
            sex: 'girl',
          },
          {
            name: 'Selina',
            age: '27',
            hobby: 'run',
            sex: 'girl',
          },
        ]
        writeFile(
          {
            SheetNames: ['sheetOne'],
            Sheets: {
              'sheetOne': utils.json_to_sheet(data, {}),
            },
          },
          'test.xlsx',
          {
            bookType: 'xlsx',
          },
        )
      },
    },
  })
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>
