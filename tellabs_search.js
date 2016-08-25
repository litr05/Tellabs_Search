function select_map(){var cur_index=document.weathermap_select.id.options.selectedIndex;
    var x=document.weathermap_select.id;var i;var str='';var massiv=[];var result=[];
    for (i=cur_index-1;i>=0;i--){str=x.options[i].innerHTML.substr(1,1);if(str=="-"){massiv[i]=x.options[i].value;}else break;}
    for (i=cur_index+1;i<x.length;i++){str=x.options[i].innerHTML.substr(1,1);if(str=="-"){massiv[i]=x.options[i].value;}else break;}
    for (i=0;i<massiv.length;i++){if (i in massiv){result.push(massiv[i]);}}return result;}
function del_canvas(){var canv = document.getElementById("canv");var elements=document.getElementsByTagName('div')[2];
    if (canv!=null) elements.removeChild(canv);}
function mbh_node(p1){var p="";if(p1[6]=="_"){p=p1.substring(0,6);return p;}else return p1;}
function color_node(node){var r=0;var b=0;var i=510;setInterval(frame,0);
    function frame(){if(i>510){i=0;}else{if(i>255){r=510-i;b=255-r;}else{r=i;b=255-r;}i++;node.style.border='5px solid rgb('+r+','+0+','+b+')';}}}
function draw_node(id){var coords = id.coords;var div_image = document.getElementById('wmapimage');var newDiv=document.createElement('canvas');newDiv.id='canv';
    newDiv.setAttribute("onmouseover",id.getAttribute('onmouseover'));newDiv.setAttribute("onmouseout",id.getAttribute('onmouseout'));
    newDiv.addEventListener("mouseup",del_canvas,false);var elements=document.getElementsByTagName('div')[2];
    elements.appendChild(newDiv);var c=document.getElementById("canv");var h=parseInt(div_image.getAttribute('height'));
    var arr=coords.split(",");var x1=parseInt(arr[0]);var y1=parseInt(arr[1]);var x2=parseInt(arr[2]);var y2=parseInt(arr[3]);
    var canvas_height=y2-y1-1;var canvas_width=x2-x1-1;c.style.position='relative';c.style.width=canvas_width+'px';c.style.height=canvas_height+'px';
    c.style.left=(x1-4)+'px';c.style.top=(-h-5)+y1+'px';window.scrollTo(x1-(document.documentElement.clientWidth/2), y1-(document.documentElement.clientHeight/2));
    color_node(c);}
function req(){var a=select_map();var map;var nodes;var count;
    for(var i=0;i<=a.length-1;i++){count=a.length;$('#load').show();
        $.get(window.location.pathname,{action: 'viewmap',id: a[i]})
            .done(function(data){map=$('#wmapimage',data).attr('usemap').split('_')[1];
                nodes = $(data).find("area[id^='NODE']");$('body').append("<div id="+map+">");
                $(nodes).map(function(indx, element){
                    $("#"+map).append("<div id="+$(element).attr('id')+
                        " name="+$(element).attr('onmouseover').match(/[0-9]{2}\-[0-9]{3,4}/)+
                        // " coords="+$(element).attr('coords')+
                        ">");});})
            .always(function(){count--;if(count==0)$('#load').hide();})
            .fail(function(){console.log("Error");});}}
function my(p1){del_canvas();var obj_map;var map_id;var node_id;var obj_node;
    if((p1!="")&&(p1!="__-____")){var id=$("area[onmouseover*="+mbh_node(p1)+"]")[0];
        if (id!=undefined) draw_node(id);
        else {obj_map=$("div[name="+mbh_node(p1)+"]").parent()[0];
            if (obj_map!=undefined){
                map_id=obj_map.id;node_id=$("div[name="+mbh_node(p1)+"]")[0].id;localStorage.setItem("node",node_id);
                var newURL=window.location.pathname;document.location.href = newURL+'?action=viewmap&id='+map_id;
            }else alert("ничего не найдено, скорректируйте запрос\nxx-xxx_ - площадка 5 обязательных цифр");
        }}else{alert("введите строку поиска")}}
$(document).ready(function(){
    req();
    if (localStorage.getItem("node")!=null){
        var id = document.getElementById(localStorage.getItem("node"));
        if (id!=undefined){
            var timer = setInterval(frame,5);
            function frame() {
                localStorage.clear();draw_node(id);
                clearInterval(timer);
            }}}});