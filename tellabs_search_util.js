function select_map(){
    var cur_value = document.weathermap_select.id.value;
    var cur_index = document.weathermap_select.id.options.selectedIndex;
    var x = document.weathermap_select.id;var i;var start;var str='';var stop;var massiv=[];
    for (i=cur_index-1;i>=0;i--){str=x.options[i].innerHTML.substr(1,1);if(str!="-"){start=i;break;}}
    for (i=cur_index;i<x.length;i++){str=x.options[i].innerHTML.substr(1,1);if(str!="-") {stop = i; break;} else {if(i==x.length-1){stop=i;}}}
    for (i=start+1;i<=stop;i++){if(x.options[i].value!=cur_value){massiv[i]=x.options[i].value;}}
    return massiv;}
function req(node) {
    var a = select_map();var i = 1; var txt='';var id;
    function send() {
        if (i>a.length-1){
        }else {
            if (a[i]!=undefined){
                $.ajaxSetup({async:false});
                $.get("/cacti/plugins/weathermap/weathermap-cacti-plugin.php", {
                    action: 'viewmap',id: a[i]})
                    .success(function(data) {
                        var map = $(data).find("area[id^='NODE']"); id = search_node(node,map);

                    }).error(function() { alert("Ошибка выполнения"); }).complete(function(){
                    if (id!=undefined){
                        localStorage.setItem("save_node",id.id);
                        document.weathermap_select.id.options[a.indexOf(a[i])].selected = true;
                        document.weathermap_select.submit();
                    }
                });
            }
            i++;send();
        }
    }
    send();
}
req('15-084_');
document.location.href = "http://10.40.254.159/cacti/plugins/weathermap/weathermap-cacti-plugin.php?action=viewmap&id=49d698c37f856528133d";
my('15-084_');

var search = document.getElementById('search');
    search.value ='15-084_';
    search.onkeydown = '13';



var id = search_node(localStorage.getItem("save_node"));

draw_node(id);

var current_map = document.weathermap_select.id.value;
var a = select_map(current_map);
console.log(id);

console.log(a);

document.weathermap_select.id.options[a.indexOf('63e40c9380f32e296f65')].selected = true;
document.weathermap_select.submit();

