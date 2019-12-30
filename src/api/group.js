import request from '@/utils/request'

export function getGroupList() {
  return request({
    url: '/admin/goods/groups',
    method: 'GET'
  })
}
export function addGroup(data) {
  return request({
    url: `/admin/goods/groups`,
    method: 'POST',
    data
  })
}
export function deleteGroup(id) {
  return request({
    url: `/admin/goods/groups/${id}`,
    method: 'DELETE'
  })
}
export function detail(id) {
  return request({
    url: `/admin/goods/groups/${id}`,
    method: 'GET'
  })
}
export function editGroup(id, data) {
  return request({
    url: `/admin/goods/groups/${id}`,
    method: 'PUT',
    data
  })
}

