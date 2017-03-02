

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
var once=true;

function getPageText(source, name,index){
	//var source = "media/"+elem.id+"/text.txt";
	var client = new XMLHttpRequest();
	client.open('GET', source);

	client.onreadystatechange = function() {
  		var text =client.responseText;
  		//check off this part of loader
	  	document.getElementById("customText"+index).innerHTML = text;
	  	if (once){
	  		removeElem("summaryTable_wrapper");
	  		once = false;
	  	}
	}
	client.send();
}

function removeElem(id){
	var elem = document.getElementById(id);
  	elem.parentNode.removeChild(elem);
  	return true;
}


function getImage(src,holder){

	var image = new Image();
	//image.src = src;
	image.onload = function() {
    	//index++;
		document.getElementById(holder).appendChild(image);

    	/*if(index < idlist.length) {
        	loadImage(index);
    	}*/
	}
	image.onerror = function(e) {
      console.log("error: no file: "+src +" found");
   }
   image.src = src;
}
function loadImage(index){
   var image = document.getElementById(idlist[index]);
   
   image.src = srclist[index];
}

function getGameClick(elem){
	var source = "media/"+elem.id+"/";
	var name = document.getElementById(elem.id).innerHTML;
	//start loader??
  	document.getElementById("gamesHeader").innerHTML = name;

	getPageText(source+"text1.txt", name,1);
	getPageText(source+"text2.txt", name,2);
	getPageText(source+"text3.txt", name,3);

	getImage(source+"banner.png","bannerHolder");//, name+" banner"
	getImage(source+"screen1.png","screen1Holder");
	getImage(source+"screen2.png","screen2Holder");

}

function fillTable(list){
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


