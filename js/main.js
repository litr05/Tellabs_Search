	function select_map(){
		var cur_index=document.map.id.options.selectedIndex;
		var x=document.map.id;
		var i;
		var str='';
		var massiv=[];
		var result=[];
		for (i=cur_index-1;i>=0;i--){str=x.options[i].innerHTML.substr(1,1);
			if(str=="-"){massiv[i]=x.options[i].value;}else break;}
		for (i=cur_index+1;i<x.length;i++){str=x.options[i].innerHTML.substr(1,1);
			if(str=="-"){massiv[i]=x.options[i].value;}else break;}
		for (i=0;i<massiv.length;i++){if (i in massiv){result.push(massiv[i]);}}return result;}
	function select_map(){
		var cur_index=document.weathermap_select.id.options.selectedIndex;
		var x=document.weathermap_select.id;
		var i;
		var str='';
		var massiv=[];
		var result=[];
		for (i=cur_index-1;i>=0;i--){str=x.options[i].innerHTML.substr(1,1);
			if(str=="-"){massiv[i]=x.options[i].value;}else break;}
		for (i=cur_index+1;i<x.length;i++){str=x.options[i].innerHTML.substr(1,1);
			if(str=="-"){massiv[i]=x.options[i].value;}else break;}
		for (i=0;i<massiv.length;i++){if (i in massiv){result.push(massiv[i]);}}return result;}
	function req(){
		var a=select_map();var map;var nodes;
		for(var i=0;i<=a.length-1;i++){
			$.get("http://10.40.254.159/"+a[i]+".html")
				.done(function(data){
				// id.push($(data).find("area[id^='NODE']"));
				map=$('img',data).attr('usemap').split('_')[1];
				nodes = $(data).find("area[id^='NODE']");
				$('body').append("<div id="+map+">");
				$(nodes).map(function(indx, element){
					$("#"+map).append("<div "+
						" name="+$(element).attr('onmouseover').match(/[0-9]{2}\-[0-9]{3,4}/)+
						" coords="+$(element).attr('coords')+
						">");});})
			;}

	}
	//$("div[name='07-036']").parent()[0].id
	function parserGo(){
		var id = req();


		console.log(id);
	}
