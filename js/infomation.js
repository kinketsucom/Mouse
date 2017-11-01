$.toast({
  text : "サンプルテキスト", //表示したいテキスト(HTML使用可)
  showHideTransition : 'slide',  // 表示・消去時の演出
  bgColor : 'blue',              // 背景色
  textColor : '#eee',            // 文字色
  allowToastClose : false,       // 閉じるボタンの表示・非表示
  hideAfter : 5000,              // 自動的に消去されるまでの時間(ミリ秒)(falseを指定すると自動消去されない)
  stack : 5,                     // 一度に表示できる数
  textAlign : 'left',            // テキストの配置
  position : 'bottom-left'       // ページ内での表示位置
})
