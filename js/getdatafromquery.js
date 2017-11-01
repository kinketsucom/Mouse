function sendQuery(itemquery){
return $.ajax({
type: "POST",
url:"../getdatafromquery.php",
cache: false,
data: "itemquery="+itemquery,
success: function(html){
  console.log("sendquery通信成功");
  // jQueryで実装
  jQuery(function ($) {
      $("#container").append(html);
  });
},
//ajax通信エラー
error : function(XMLHttpRequest, textStatus, errorThrown) {
  console.log("ajax通信に失敗しました");
  // console.log("XMLHttpRequest : " + XMLHttpRequest.status);
  // console.log("textStatus     : " + textStatus);
  // console.log("errorThrown    : " + errorThrown.message);
}

});
return itemquery;
}


//ここはそのうち消す
function sendDmmQuery(itemquery){
$.ajax({
type: "POST",
url:"../getdmmdatafromquery.php",
cache: false,
data: "itemquery="+itemquery,
success: function(html){
  console.log("sendDmmQuery通信成功");
},
//ajax通信エラー
error : function(XMLHttpRequest, textStatus, errorThrown) {
  console.log("ajax通信に失敗しました");
  // console.log("XMLHttpRequest : " + XMLHttpRequest.status);
  // console.log("textStatus     : " + textStatus);
  // console.log("errorThrown    : " + errorThrown.message);
}
});
return itemquery;
}

function enter_textbox(code){
  // var $input = $('.input');
  // $input.on('compositionend', function() {
  //   // 確定・予測変換時に処理したいイベント
  //   var query = document.getElementById("input_text").value;
  //   // alert(query+"が押された!");
  //   sendQuery(query);
  //   sendDmmQuery(query);
  // });

  //エンターキー押下なら
  if(13 === code)
  {
    var query = document.getElementById("input_text").value;
    sendQuery(query);
    sendDmmQuery(query);
  }
}
