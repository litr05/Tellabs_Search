function select_map(){var cur_index=document.weathermap_select.id.options.selectedIndex;
    var x=document.weathermap_select.id;var i;var str='';var massiv=[];var result=[];
    for (i=cur_index-1;i>=0;i--){str=x.options[i].innerHTML.substr(1,1);if(str=="-"){massiv[i]=x.options[i].value;}else break;}
    for (i=cur_index+1;i<x.length;i++){str=x.options[i].innerHTML.substr(1,1);if(str=="-"){massiv[i]=x.options[i].value;}else break;}
    for (i=0;i<massiv.length;i++){if (i in massiv){result.push(massiv[i]);}}return result;}

function search_node(node,map){
    var node_id;
    if(map==undefined) node_id=$("area[onmouseover*="+mbh_node(node)+"]")[0];
    else node_id=$(map).find("area[onmouseover*="+mbh_node(node)+"]")[0];
    if(node_id!="")return node_id;
    else return undefined;}



var map=$("area[id^='NODE']");
search_node('15-084_',map);


function search_node(node,map){
    var node_id;
    if(map==undefined) node_id=$("area[onmouseover*="+mbh_node(node)+"]")[0];
    else node_id=$(map).find("area[onmouseover*="+mbh_node(node)+"]")[0];
    if(node_id!="")return node_id;
    else return undefined;}
function Go(node){
    var a=select_map();var stat=false;var id;var map;var map2;
    for(var i=0;i<=a.length-1;i++){
        $.get("/cacti/plugins/weathermap/weathermap-cacti-plugin.php",{action: 'viewmap',id: a[i]})
            .success(function(data){map2=$(data).find("map[id^='weathermap']")[0].id.split('_')[1];id=$(data).find("area[onmouseover*="+mbh_node(node)+"]")[0];})
            .error(function(){console.log("Error");})
            .complete(function(){if(id!=undefined){localStorage.setItem("save_node",id.id);localStorage.setItem("save_map",map2);stat=true;}});}}
Go('15-084_');

var map = $(document).find("map[id^='weathermap']").find('url');
console.log(map);

function req(){
    var a=select_map();var map;var nodes;
    for(var i=0;i<=a.length-1;i++){
        $.get(window.location.pathname,{action: 'viewmap',id: a[i]})
            .done(function(data){
                map=$('#wmapimage',data).attr('usemap').split('_')[1];
                nodes = $(data).find("area[id^='NODE']");
                $('body').append("<div id="+map+">");
                $(nodes).map(function(indx, element){
                    $("#"+map).append("<div id="+$(element).attr('id')+
                        " name="+$(element).attr('onmouseover').match(/[0-9]{2}\-[0-9]{3,4}/)+
                        // " coords="+$(element).attr('coords')+
                        ">");});});}}
req();

// var newURL=window.location.pathname;
// document.location.href = newURL+'?action=viewmap&id='+a[i];

console.log(select_map());



my('15-000_');


$(document).ready(function(){
    if (localStorage.getItem("save_node")!=null){
        var id = document.getElementById(localStorage.getItem("save_node"));
        if (id!=undefined){localStorage.clear();
            draw_node(id);}}}



document.location.href = "http://10.40.254.159/cacti/plugins/weathermap/weathermap-cacti-plugin.php?action=viewmap&id=49d698c37f856528133d";
// document.weathermap_select.id.options[a.indexOf(a[i])].selected = true;
// document.weathermap_select.submit();







var current_map = document.weathermap_select.id.value;
var a = select_map(current_map);
console.log(id);

console.log(a);

document.weathermap_select.id.options[a.indexOf('63e40c9380f32e296f65')].selected = true;
document.weathermap_select.submit();

