import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/admin/goods/comments',
    method: 'GET',
    params
  })
}
export function editFlag(cId) {
  return request({
    url: `/admin/goods/comments/${cId}`,
    method: 'PUT'
  })
}
export function detail(cId) {
  return request({
    url: `/admin/goods/comments/${cId}`,
    method: 'GET'
  })
}
export function deleteComments(data) {
  return request({
    url: '/admin/goods/comments',
    method: 'DELETE',
    data
  })
}
