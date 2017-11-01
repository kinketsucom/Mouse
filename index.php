<link href="css/bootstrap.min.css" rel="stylesheet">
<script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
<script src="./js/bootstrap.min.js"></script>

<style type="text/css">
div#bg{
  border:1px solid black;
  background: gray;
  height: auto;
  text-align: center;
}

canvas{
  background-color: gray;
}
</style>


<body>
<input type="file" id="selectfile" accept='image/*'>
<canvas id="canvas" width="640" height="480"></canvas>
<script type="text/javascript">
//ファイルオープンの際のイベント
var ofd = document.getElementById("selectfile");
ofd.addEventListener("change", function(evt) {
    //ここに画像データを入力
    var img = null;

    var file = evt.target.files;
    var reader = new FileReader();

    //dataURL形式でファイルを読み込む
    reader.readAsDataURL(file[0]);

    //ファイルの読込が終了した時の処理
    reader.onload = function(){
        img = new Image();
        img.onload = function(){
                /*読み込み終了後ここで画像を加工して表示する*/
                //キャンバスに画像をセット
        var canvas = document.getElementById('canvas');
        //var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var width = img.width;
        var height = img.height;
        canvas.width = width;
        canvas.height = height;
        context.drawImage(img, 0, 0);





        }
        //読み込んだ画像ソースを入れる
        img.src = reader.result;
    }
}, false);
</script>


</body>
