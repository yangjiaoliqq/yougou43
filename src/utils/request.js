const BASE_URL = 'https://api.zbztb.cn'

export default function request (options) {
  return new Promise((resolve, reject) => {
    //   请求前开启loading
    if (!options.noLoading) {
      wx.showLoading({
        title: '加载中...',
        mask: true // 显示透明蒙层，防止触摸穿透,
      })
    }
    wx.request({
      url: BASE_URL + options.url,
      success: res => {
        let { meta, message } = res.data
        if (meta.status === 200) {
          resolve(message)
        }
      },
      fail: err => {
        reject(err)
      },
      complete () {
        // 请求结束时关闭loading
        if (!options.noLoading) {
          wx.hideLoading()
        }
      }
    })
  })
}
