/**
 * 封装get,post等请求方法
 * Created by chenmao on 2017/6/28.
 */

export const commonUrl = ''

export const get = (url, successCallback, failCallback) => {
  $.ajax({
    type: 'GET',
    url: commonUrl + url,
    dataType: 'json',
    success: function(data) {
      successCallback(data)
    },
    error: function (err) {
      failCallback(err)
    }
  })
}
export const post = (url, data, successCallback, failCallback) => {
  let Url = commonUrl + url
  console.log(url)
  $.ajax({
    type: 'POST',
    url: Url,
    data: data,
    dataType: 'json',
    cache: false,
    beforeSend: function() {
      // 发送之前的回调，返回false可以取消本次请求
    },
    success: function(data) {
      successCallback(data)
    },
    error: function (err) {
      failCallback(err)
    },
    complete: function () {
      // 不管成功失败都走这个回调
    }
  })
}
