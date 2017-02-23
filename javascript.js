

var folderList=[
	{
		"name":"Lovers in a dangerous spacetime",
		"gwgRel":"1/1/1",
		"platform": "xbox",
		"origRel": "1/1/1"
	},
	{
		"name":"Project Cars",
		"gwgRel":"1/1/1",
		"platform": "xbox",
		"origRel": "1/1/1"	
	}
]

var summaryDataSet = [];


function fillHome(){
	var holder =document.getElementById("gamesHolder");
	for(var key in folderList){
		var li = document.createElement("li");
		li.id = folderList.key;
		li.innerHTML = key.replace(/[._-]/g , " ");
//		li.value = key.replace(/[._-]/g , " ");
		holder.appendChild(li);
	}
}


function fillHomeCarousel(){
	
}


function makeClickable(click, name){
  /*if(!(click == null || click == "null")){
    var label = "<label onclick= \""+click+" \">"+name+"</label>";
    return label;
  }*/

  var newId = name.replace(/ /g , "_").toLowerCase();
  if(!(click == null || click == "null")){
    var label = "<label id = \""+newId+"\" onclick= \""+click+"\">"+name+"</label>";
    return label;
  }
  return name;
}


function getPageText(source, name){
	//var source = "media/"+elem.id+"/text.txt";
	var client = new XMLHttpRequest();
	client.open('GET', source);
	client.onreadystatechange = function() {
  	var text =client.responseText;
  	//check off this part of loader
  	document.getElementById("gamesHeader").innerHTML = name;
  	document.getElementById("customText").innerHTML = text;
  	removeElem("summaryTable_wrapper");
	}
	client.send();
}

function removeElem(id){
	var elem = document.getElementById(id);
  elem.parentNode.removeChild(elem);
  return true;
}


function getImage(src,name){
	var image = new Image();
	image.src = src;

  document.getElementById("bannerHolder").appendChild(image);
}


function getGameClick(elem){
	var source = "media/"+elem.id+"/";
	var name = document.getElementById(elem.id).innerHTML;
	//start loader??
	getPageText(source+"text.txt", name);

	getImage(source+"banner.png", name+" banner");
	//var screen1 = getImage(source+"screen1.png");
	//var screen2 = getImage(source+"screen2.png");
	
	
}

function fillTable(){
	for(var i = 0; i<folderList.length; ++i){
    var clickName = makeClickable(
    	"getGameClick(this)"
    ,folderList[i].name);
    summaryDataSet.push([clickName,folderList[i].platform,folderList[i].gwgRel,folderList[i].origRel]);
    }
  displaySummaryTable();
}



var tableAlive=false;
var init = false;
function displaySummaryTable(){
  
   $('#summaryTable').DataTable( {
        data: summaryDataSet,
        columns: [
            { title: "Title" },
            { title: "Platform" },
            { title: "GWG Release" },
            { title: "Orig. Release" }
        ]
    } );
}


