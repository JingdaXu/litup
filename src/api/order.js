import service from "@/service";

// 获取用户信息
export function apiGetOrder() {
    return service({
        url: '/api/order/of_user',
        method: 'get',
    })
}
