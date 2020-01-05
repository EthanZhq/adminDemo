import request from '@/utils/request'

export function upLoad(data) {
  return request({
    url: '/addin/files',
    method: 'POST',
    data
  })
}
