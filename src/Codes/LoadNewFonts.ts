/***
 * 加载字体库
 * url 自定义
 */
(function ()
{
	
	var timeId=setInterval(function(){
        //获取URL下传递的资源,"$serverData"可以是SDK约定好的名称
		var sdtata=window["$serverData"]
		if(sdtata && sdtata.cdnUrl)
		{
			clearInterval(timeId)
			var obj = {
				url: sdtata.cdnUrl+"resource/Exo2.otf",
				fontFamily: "Exo2"
			};
			if (document["fonts"] && !checkFont(obj.fontFamily))
			{
				var fontFamily = obj.fontFamily;
				var fontFace = new window["FontFace"](obj.fontFamily, `local('${obj.fontFamily}'),url('${obj.url}') format('otf'),url('${obj.url}')`);
				fontFace.load().then(function (loadedFontFace)
				{
					document["fonts"].add(loadedFontFace);
					console.log("加载字体完毕!", fontFamily);
				});
			}
		}
	},100)
	

	//检测字体文件是否已加载
	function checkFont(name)
	{
		var values = document["fonts"].values();
		var isHave = false;
		var item = values.next();
		while (!item.done && !isHave)
		{
			var fontFace = item.value;
			if (fontFace.family == name)
			{
				isHave = true;
			}
			item = values.next();
		}
		return isHave;
	}
})()