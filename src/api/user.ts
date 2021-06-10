import { AxiosPromise } from 'axios'
import httpUtil from './httpUtil'

interface Uesr {
  name: string
  id: string
}
interface UserDetail {
  id: string
  name: string
  gender: number
}

/**
 * @param {user} params
 * @return {userList}
 */
export function getUerInfo(params: Uesr): AxiosPromise<UserDetail> {
  return httpUtil({
    method: 'get',
    url: '/api/user',
    params,
  })
}
/**
 * @param {any} params
 * @return {any}
 */
export function addUser(params): AxiosPromise<any> {
  return httpUtil({
    method: 'post',
    url: '/api/addUser',
    data: params,
  })
}
/**
 * @param {any} params
 * @return {promise}
 */
export function userList(params): AxiosPromise<any> {
  return httpUtil({
    method: 'post',
    url: '/api/userlist',
    data: params,
  })
}
