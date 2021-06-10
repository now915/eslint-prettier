import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
// const baseUrl = 'http://192.168.5.14:8080'

const Random = Mock.Random
interface Info {
  id: number
  name: string
  email: string
  score: number
  bobby: string
  sex: string
}
/**
 * @return {Array<Info>}
 */
function getData() {
  const data: Array<Info> = []
  for (let i = 0; i < 10; i++) {
    const info = Mock.mock({
      id: '@increment()',
      name: Random.cname(),
      email: Random.email(),
      // score: Random.integer(0, 100),
      score: `@integer(0, 100)`,
      bobby: ['draw', 'ball', 'run', 'sleep', 'eat'][Random.integer(0, 100) % 5],
      sex: ['girl', 'boy'][Random.integer(0, 100) % 2],
    })
    data.push(info)
  }
  return data
}
export default [
  {
    url: '/api/addUser',
    method: 'post',
    timeout: 10000,
    response: () => {
      // response: ({ url, body, type }) => {
      // console.log('options---', url, body, type)
      return {
        code: 0,
        data: {
          add: Random.boolean(),
        },
      }
    },
  },
  {
    url: '/api/user',
    method: 'get',
    timeout: 10000,
    response: () => {
      return {
        code: 0,
        data: getData(),
      }
    },
  },
] as MockMethod[]
