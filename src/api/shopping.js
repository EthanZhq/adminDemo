import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/admin/goods',
    method: 'GET',
    params: query
  })
}
export function creatComment(data) {
  return request({
    url: '/admin/goods/comments',
    method: 'POST',
    data
  })
}
export function batchDelete(data) {
  return request({
    url: '/admin/goods',
    method: 'DELETE',
    data
  })
}
export function searchList(data) {
  return request({
    url: '/admin/goods',
    method: 'GET',
    data
  })
}
export function upDown(params) {
  return request({
    url: '/admin/goods/upDown',
    method: 'PUT',
    params
  })
}
export function getRole(gId) {
  return request({
    url: `/admin/goods/comments/add/${gId}`,
    method: 'GET'
  })
}
