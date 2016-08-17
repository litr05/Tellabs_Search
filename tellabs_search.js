function del_canvas() {
    var canv = document.getElementById("canv");
    var elements = document.getElementsByClassName('weathermapimage');
    if (canv != null) elements[0].removeChild(canv);}
function mbh_node(p1) {
    if (p1.length>5){ return p1[0]+p1[1]+"-"+p1[2]+p1[3]+p1[4]+p1[5];}
    else{return p1[0]+p1[1]+"-"+p1[2]+p1[3]+p1[4];}}
function search_node(node) {
    var map = document.getElementsByTagName('area');
    var node_id = "";
    var node_str = mbh_node(node);
    for (var i = 0; i < map.length; i++) {
        var str_node=map[i].getAttribute('onmouseover');
        if (~str_node.indexOf(node_str)) {
            node_id = map[i].id;
            break;}}
    if (node_id!=""){return node_id;}
    else {return undefined;}}
function my(p1) {
    del_canvas();
    if (p1!=""){
        var id = document.getElementById(search_node(p1));
        if (id!=undefined){
            var coords = id.coords;
            var div_image = document.getElementById('wmapimage');
            var newDiv = document.createElement('canvas');
            newDiv.id='canv';
            newDiv.setAttribute("style", "height:320px; width: 480px; border: 5px solid red;");
            newDiv.setAttribute("onmouseover",id.getAttribute('onmouseover'));
            newDiv.setAttribute("onmouseout",id.getAttribute('onmouseout'));
            newDiv.addEventListener("mouseup", del_canvas, false);
            var elements = document.getElementsByClassName('weathermapimage');
            elements[0].appendChild(newDiv);
            var c = document.getElementById("canv");
            var h = parseInt(div_image.getAttribute('height'));
            var arr = coords.split(",");
            var x1 = parseInt(arr[0]);var y1 = parseInt(arr[1]);var x2 = parseInt(arr[2]);var y2 = parseInt(arr[3]);
            var canvas_height = y2-y1-1; var canvas_width = x2-x1-1;
            c.style.position='relative';
            c.style.width=canvas_width+'px';
            c.style.height=canvas_height+'px';
            var x_point = x1-4;
            var y_point = (-h-5)+y1;
            c.style.top = y_point+'px';
            c.style.left = x_point +'px';
            window.scrollTo(x1-(document.documentElement.clientWidth/2), y1-(document.documentElement.clientHeight/2));
        }else{alert("ничего не найдено, скорректируйте запрос\nxxxxx - площадка 5 обязательных цифр")}}
    else {alert("введите строку поиска")}}