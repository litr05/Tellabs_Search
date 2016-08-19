function del_canvas() {
    var canv = document.getElementById("canv");
    var elements = document.getElementsByTagName('div')[2];
    if (canv != null) elements.removeChild(canv);}
function mbh_node(p1) {
    var p = "";if (p1[6]=="_") {p=p1.substring(0, 6);return p;}else return p1;}
function search_node(node) {
    var map = document.getElementsByTagName('area');var node_id = "";var node_str = mbh_node(node);
    for(var i=0;i<map.length;i++){
        var str_node=map[i].getAttribute('onmouseover');
        if(~str_node.indexOf(node_str)){node_id = map[i].id;break;}}
    if (node_id!="")return node_id;else return undefined;}
function color_node(node) {
    var r=0;var b=0;var i=510;
    setInterval(frame, 0);
    function frame(){if(i>510){i=0;
        } else {if(i>255){r=510-i;b=255-r;}
            else {r=i;b=255-r;}
            i++;node.style.border = '5px solid rgb('+r+','+0+','+b+')';}}}
function my(p1) {
    del_canvas();
    if (p1!=""){
        var id = document.getElementById(search_node(p1));
        if (id!=undefined){
            var coords = id.coords;var div_image = document.getElementById('wmapimage');
            var newDiv = document.createElement('canvas');newDiv.id='canv';
            newDiv.setAttribute("onmouseover",id.getAttribute('onmouseover'));
            newDiv.setAttribute("onmouseout",id.getAttribute('onmouseout'));
            newDiv.addEventListener("mouseup", del_canvas, false);
            var elements = document.getElementsByTagName('div')[2];
            elements.appendChild(newDiv);
            var c = document.getElementById("canv");var h = parseInt(div_image.getAttribute('height'));
            var arr = coords.split(",");
            var x1 = parseInt(arr[0]);var y1 = parseInt(arr[1]);var x2 = parseInt(arr[2]);var y2 = parseInt(arr[3]);
            var canvas_height = y2-y1-1; var canvas_width = x2-x1-1;
            c.style.position='relative';c.style.width=canvas_width+'px';c.style.height=canvas_height+'px';
            c.style.left = (x1-4) +'px';c.style.top = (-h-5)+y1+'px';
            window.scrollTo(x1-(document.documentElement.clientWidth/2), y1-(document.documentElement.clientHeight/2));
            color_node(c);
        }else{alert("ничего не найдено, скорректируйте запрос\nxx-xxx_ - площадка 5 обязательных цифр")}}
    else {alert("введите строку поиска")}}