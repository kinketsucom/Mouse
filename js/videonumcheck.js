function check_after(itemquery){

var return_value = $.ajax({
type: "POST",
url:"../videonumcheck.php",
cache: false,
async: false,
data: "itemquery="+itemquery,
  success: function(num){
  // console.log("videocheckafter通信成功");
  // console.log(num);
  // console.log("*****");
  },
//ajax通信エラー
  error : function(XMLHttpRequest, textStatus, errorThrown) {
    console.log("ajax通信に失敗しました");
    console.log("XMLHttpRequest : " + XMLHttpRequest.status);
    console.log("textStatus     : " + textStatus);
    console.log("errorThrown    : " + errorThrown.message);
  }
  }).responseText;;

  return return_value;
}
//
//
// check_after().done(function(num) {
//   console.log(num.responseText);
//   console.log("doneの後");
//   console.log(num);
//   console.log("****");
//   return num;
// }).fail(function(result) {
//     console.log("失敗してます");
// });
