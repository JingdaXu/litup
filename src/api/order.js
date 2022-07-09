import service from "@/service";

// 获取合约信息
export function apiGetOrder() {
    return service({
        url: '/api/order/of_user',
        method: 'get',
    })
}
export function apiGetOrderDetail(data) {
    return service({
        url: `/api/order/detail-of/${data}`,
        method: 'get',
    })
}
