function sendcount(itemid){
$.ajax({

type: "POST",
url:"../counter.php",
cache: false,
data: "itemid="+itemid,
success: function(html){
  console.log("通信成功");
}
});
return itemid;
}
