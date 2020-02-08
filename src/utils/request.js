const BASE_URL = 'https://api.zbztb.cn'

export default function request (options) {
  return new Promise((resolve, reject) => {
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
      }
    })
  })
}
