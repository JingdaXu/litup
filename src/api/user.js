import service from "@/service";

// 获得用户详情接口
export function apiGetUser(data) {
    return service({
        url: `/api/user/${data}`,
        method: 'get',
    })
}
// 获得用户操作接口
export function apiGetUserActions(data) {
    return service({
        url: `/api/action/${data}`,
        method: 'get',
    })
}
