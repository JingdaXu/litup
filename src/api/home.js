import service from "@/service";

// 获得首页接口
export function apiGetHome(params) {
    return service({
        url: `/api/user/`,
        method: 'get',
        data:params
    })
}
