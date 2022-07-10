import service from "@/service";

// 获得首页接口
export function apiGetUser() {
    return service({
        url: `/api/user/`,
        method: 'get',
    })
}
