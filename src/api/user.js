import service from "@/service";

// 获得首页接口
export function apiGetUser(data) {
    return service({
        url: `/api/user/${data}`,
        method: 'get',
    })
}
// 获得用户接口
// export function apiGetUser() {
//     return service({
//         url: `/api/user/`,
//         method: 'get',
//     })
// }
// "_id": "d0c568539f65",
// "nick_name": "阿皮量化",
// "avatar": "https://",
// "motto": "自己做的智能网格，...",
// "extra-info": {
//   "label1": "净多1.66倍",
//   "label2": "欧易OKX",
//   "label2-icon": "https://xxxx.com/1.gif"
// },
// "balance": 8552,
// "balance-unit": "CNY",
// "monthly-yield": "0.566",
// "monthly-yield-in-unit": "12312",
// "total-yield": "0.266",
// "total-yield-in-unit": "8999932",
// "total-refill": 6688,
// "refill-currency": "CNY",
// "win-rate": 0.75,
// "total-pnl-rate-iframe-url": "https://xxx",
// "total-pnl-iframe-url": "https://xxx",
// "monthly-pnl-iframe-url": "https://xxx",
// "account-balance-iframe-url": "https://xxx"