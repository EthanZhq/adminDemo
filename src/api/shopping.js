import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/admin/goods',
    method: 'GET',
    data
  })
}
export function addCommentDetail(data) {
  return request({
    url: '/admin/addCommentDetail',
    method: 'POST',
    data
  })
}
export function batchDelete(data) {
  return request({
    url: '/admin/goods/batchDelete',
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
export function updateDetail(data) {
  return request({
    url: '/admin/goods/updateDetail',
    method: 'PUT',
    data
  })
}
