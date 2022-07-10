import service from "@/service";

// 获取合约信息
export function apiGetOrder(params) {
    return service({
        url: '/api/order/of_user',
        method: 'get',
        data:params
    })
}
// 获得合约详情
export function apiGetOrderDetail(data) {
    return service({
        url: `/api/order/detail-of/${data}`,
        method: 'get',
    })
}
