import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/admin/goods/tags',
    method: 'GET',
    params
  })
}
export function creatTags(params) {
  return request({
    url: '/admin/goods/tags',
    method: 'POST',
    params
  })
}
export function editTags(id, params) {
  return request({
    url: `/admin/goods/tags/${id}`,
    method: 'PUT',
    params
  })
}
export function deleteTags(data) {
  return request({
    url: '/admin/goods/tags',
    method: 'DELETE',
    data
  })
}
