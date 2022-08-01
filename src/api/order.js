import service from "@/service";

// 获取合约信息
export function apiGetOrder(data) {
    return service({
        url: `/api/order/${data}`,
        method: 'get',
    })
}
// 获得合约详情
export function apiGetOrderDetail(data) {
    return service({
        url: `/api/order/detail-of/${data}`,
        method: 'get',
    })
}
