var dataContainer = document.getElementById("data-info");
var btn = document.getElementById("btn");
var showNum = document.getElementById("showNum");

var obj = document.getElementById("showNum");
for(i = 1; i <= 1000; i++) obj.add(new Option(i, i));
obj.value = 10;

btn.addEventListener("click", f);

function f(){
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://shift6410.github.io/hwforttu/jsondata.json');
	myRequest.onload = function(){
		var theData = JSON.parse(myRequest.responseText);
		console.log(theData[0]);
		renderHTML(theData);
	};
	myRequest.send();
}

function renderHTML(data){
	dataContainer.innerHTML= "";
	var htmlString = "";
	for(i = 0; i < data.length && i < showNum.value; i++)
	{
		htmlString += "<p>" + data[i].交易日期 + " 作物代號：" + data[i].作物代號 + " 作物名稱： " + data[i]. 作物名稱+ "市場代號： " + data[i].市場代號 + " 交易量: " + data[i].交易量 + "</p><br>";
	}
	dataContainer.insertAdjacentHTML('beforeend', htmlString);
}

obj.addEventListener("change", f);
