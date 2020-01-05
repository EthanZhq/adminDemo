import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/admin/orders/list',
    method: 'GET',
    params
  })
}
export function getDeliveryOrdersList(params) {
  return request({
    url: '/admin/orders/deliveryOrders',
    method: 'GET',
    params
  })
}
export function deliveryOrder(params) {
  return request({
    url: '/admin/orders/deliveryOrders',
    method: 'POST',
    params
  })
}
export function getShippingList(params) {
  return request({
    url: '/admin/orders/deliveryOrders/shipping',
    method: 'GET',
    params
  })
}
export function getOrderDetail(id) {
  return request({
    url: `/admin/orders/detail/${id}`,
    method: 'GET'
  })
}
export function deliveryDetail(id) {
  return request({
    url: `/admin/orders/deliveryOrders/${id}`,
    method: 'GET'
  })
}
