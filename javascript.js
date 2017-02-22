

var folderList=[
	{
		"name":"Lovers in a dangerous space",
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

function getGameClick(thing){
	console.log(thing.id);
	//var files = fs.readdirSync("media/"+thing.id);
	//console.log(files);

	var source = "media/"+thing.id+"/text.txt";
	var client = new XMLHttpRequest();
client.open('GET', source);
console.log(source);
client.onreadystatechange = function() {
  console.log(client.responseText);
}
client.send();
	//var txt = new 
	//var txt = file(sourceFolder+"/text";
	//console
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


