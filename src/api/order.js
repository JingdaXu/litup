import http from "@/service";

// 获取用户信息
export function apiGetOrder(param) {
    return http({
        url: '/order',
        method: 'get',
        data: param,
    })
}
