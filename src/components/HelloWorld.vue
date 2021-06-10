<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentatio啊实打实的sdasdasdasdasdasdasdn
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>
    <div id="main" style="width: 1000px; height: 400px"></div>
    <button @click="handleOutput">导出数据</button>
    <button @click="handleRefresh">刷新</button>
    <br />
    <!-- <button @click="add">count is: {{ state.count }}</button> -->
    <p>
      Edit
      <code>components/HelloWorld.vue</code>
      to test hot module replacement.
    </p>
    <div>{{ sum1 }}</div>
    <div>{{ sum2 }}</div>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  import addOne from '../utils/addOne'
  import addTen from '../utils/addTen'
  import { debounce, delay } from 'lodash-es'
  import * as echarts from 'echarts'
  import * as Mock from 'mockjs'
  import { getUerInfo, addUser } from '@/api/user'
  import { writeFile, utils } from 'xlsx'
  // import axios from 'axios'
  export default {
    props: {
      msg: {
        type: String,
        default: undefined,
      },
      color1: {
        type: String,
        default: '',
      },
      color2: {
        type: String,
        default: '',
      },
      color3: {
        type: String,
        default: '',
      },
      colo4: {
        type: String,
        default: '',
      },
      color5: {
        type: String,
        default: '',
      },
      color6: {
        type: String,
        default: '',
      },
      color7: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const state = reactive({ count: 0 })
      const handleclick = debounce(() => {
        state.count++
      }, 1000)
      const add = function () {
        state.count++
      }
      delay(add, 2000)
      return {
        state,
        handleclick,
        add,
      }
    },
    data() {
      return {
        sum1: addOne(1),
        sum2: addTen(1),
        obj: {
          name: 'corgi',
          age: 26,
        },
        myEcharts: null,
        userList: [],
      }
    },
    mounted: async function () {
      addUser({
        name: 'asdasd',
      }).then((res) => {
        console.log('res------', res)
      })
      this.myEcharts = echarts.init(document.getElementById('main'))
      // await this.initData()
      this.handleRefresh()

      // const data = Mock.mock({
      //   'list|1-10': [
      //     {
      //       'id|+3': 3,
      //       'name|2': 'asd',
      //       'number1|10-100': -1,
      //       'number2|10-30.2': -1,
      //       'isDog|1': true,
      //       'Dog|2': {
      //         prop1: '1',
      //         prop2: '2',
      //         prop3: '3',
      //         prop4: '4',
      //       },
      //       'array|+1': [1, 2, 3, 4],
      //       'vlaueIsFunc': () => {
      //         return parseInt(Math.random() * 20)
      //       },
      //       'regexp1': /([a-z]|[A-Z]){4}[0-9]/,
      //     },
      //   ],
      // })

      const data = Mock.mock({
        'list|1-10': [
          {
            name: `@first · @last`,
            somthing: '@something',
          },
        ],
      })
      console.log('mock----------------', data)
    },
    methods: {
      handleOutput() {
        writeFile(
          {
            SheetNames: ['sheetOne'],
            Sheets: {
              'sheetOne': utils.json_to_sheet(this.userList, {}),
            },
          },
          'test.xlsx',
          {
            bookType: 'xlsx',
          },
        )
      },
      handleRefresh: async function () {
        await this.initData()
        this.myEcharts.setOption({
          xAxis: {
            type: 'category',
            data: this.userList.map((el) => el.name),
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: this.userList.map((el) => el.score),
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
              },
            },
          ],
        })
      },
      initData: async function () {
        this.userList = await getUerInfo({
          name: 'Corgi',
          id: '123',
        })
        // this.userList = this.userList.sort((a, b) => a.score - b.score)
        console.log('data-------', this.userList)
      },
    },
  }
</script>
<style scoped>
  a {
    color: #42b983;
  }
</style>
