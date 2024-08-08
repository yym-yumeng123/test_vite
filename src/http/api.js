import request from "./request"

const DeskApi = {
  allApp: "/api/mo/desktop/market/apps",
  userApp: '/api/mo/desktop/user/apps',
  updateAction: '/api/mo/desktop/user/action', // 用户使用行为: 点击 app 
  updateAppConfig: '/api/mo/desktop/user/apps', // 更新用户的桌面配置: 删除应用 布局 主题
}

export const getAllApps = () => {
  return request({
    url: DeskApi.allApp,
    method: "get",
  })
}

export const getUserApps = () => {
  return request({
    url: DeskApi.userApp,
    method: "get",
  })
}
