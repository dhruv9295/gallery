	var x = 1;
	var count=10;
	var upperLimit=132;
	var lowerLimit=1;
	var filePath="G:\\Walpapers\\w (";
	var fileFormat="jpeg";
	var randomToggle=true;
	var slideshow=false;
	var visible=false;
	var random;
	var favourite=true;
	var height=150;
	
	function reset(){
			lowerLimit=1;//comments
			//count=4;
			x = 1;
			}
function addCode() { 
var strOBJ='';

		//alert('x-'+x+'::count-'+count+'::upperLimit-'+upperLimit+'::lowerLimit-'+lowerLimit);
		var y=x;
		for(var i= 1; i<=count; i++){
		//var random = Math.floor(Math.random() * (upperLimit-lowerLimit+1)) + lowerLimit;
		if(y>=upperLimit){y=lowerLimit;}else if(y<lowerLimit){y=upperLimit;}else{y++;}
		random=randomFunc(y);
             strOBJ+='<div style="height: '+height+'px;">';
			 //if(!favourite)strOBJ+='<a target="_blank" href="FullScreenV1.1.html?filePath='+filePath+'&upperLimit='+upperLimit+'&random='+random+'&fileFormat='+fileFormat+'">';
			 strOBJ+='<img class="image"';
			 //strOBJ+=' data-toggle="tooltip" title="'+random+'"';
			 //if(favourite)strOBJ+='onclick="addToFav(this)" ';
			 strOBJ+='src="'+filePath+random+').'+fileFormat+'" width="auto" height="100%" alt="'+random+'">'; 
			 //if(!favourite)strOBJ+='</a>';
			 strOBJ+='</div>'
}
//$("#container").append('<div class="d-flex flex-wrap">');
$("#container").empty().append(strOBJ);
//$("#container").append('</div>');
if(x>=upperLimit){x=lowerLimit;}else if(x<lowerLimit){x=upperLimit;}
} 
		

function nextImg(){ x=x+count; addCode();}	
function previous(){x=x-count; addCode();}
function decrease(){count-=1; addCode();}
function increase(){count+=1; addCode();}
function randomFunc(i){
if(randomToggle){
return Math.floor(Math.random() * (upperLimit-lowerLimit+1)) + lowerLimit;
}else 
{return i;}
}
function selectCategory(inputFilePath,NumberOfFiles,Format){
		filePath=inputFilePath;
		upperLimit=NumberOfFiles;
		fileFormat=Format;
		reset();
		addCode() ;
		}

document.onkeydown = function(e) { 
            switch (e.keyCode) { 
                case 37: 
                    previous();// 'Left Key pressed!'; 
					break; 
                case 38: 
                    NextCategory('-1');//'Up Key pressed!'; 
                    break; 
                case 39: 
                    nextImg();//'Right Key pressed!'; 
                    break; 
                case 40: 
                    NextCategory('+1');//'Down Key pressed!'; 
                    break; 
				case 187:// '+' key pressed 
				toggleZoomScreen(5);
				break;
				case 189:// '-' key pressed 
				toggleZoomScreen(-5);
				break;
				case 188:// '<' key pressed 
				decrease();
				break;
				case 190:// '>' key pressed 
				increase();
				break;
				case 82:// 'R' key pressed 
				randomTogglefunc();
				break;
				case 83:// 'S' key pressed 
				slideshowfunc();
				break;
				case 86:// 'V' key pressed 
				visibleFunc();
				break;
				case 70:// 'F' key pressed 
				favouritefunc();
				break;
            } 
        }; 
		
function NextCategory(value){
var vcategListObj = document.getElementById("categList");
var objValue=parseFloat(vcategListObj.selectedIndex)+parseFloat(value);
if((objValue)>=(vcategListObj.options.length)){
vcategListObj.selectedIndex=0;
}else if(objValue<0){
vcategListObj.selectedIndex=vcategListObj.options.length-1;
}else
{vcategListObj.selectedIndex=objValue;}
selectMenu(vcategListObj.value);
//str+='@@objValue-'+objValue+'::length-'+vcategListObj.options.length+'::selectedIndex-'+vcategListObj.selectedIndex;
//document.getElementById("test").value=str;<input type="button" id="test" value=""></input>
}
function selectMenu(value){
if(value=='4'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\nphotos\\n'+' (','66','gif');}
if(value=='2'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\hphotos\\h'+' (','64','gif');}
if(value=='6'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\hnphotos\\hn'+' (','455','gif');}
if(value=='3'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\sphotos\\s'+' (','43','gif');}
if(value=='1'){selectCategory('G:\\Walpapers\\w'+' (','132','jpeg');}
if(value=='5'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\Wallpaper\\w'+' (','242','jpg');}
if(value=='7'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\rbulk\\rbulk'+' (','907','gif');}
if(value=='8'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\bbulk\\b'+' (','170','gif');}
}

function toggleZoomScreen(value){
	height=height+value;
	addCode();
}

function randomTogglefunc(){
randomToggle=!randomToggle;
document.getElementById("randomToggleid").value=''+returnFlag(randomToggle)+':Random';
}

function slideshowfunc(){
slideshow=!slideshow;
document.getElementById("slideshowid").value=''+returnFlag(slideshow)+':SlideShow';
check();
}
function favouritefunc(){
favourite=!favourite;
document.getElementById("favouriteid").value=''+returnFlag(favourite)+':Favourite';
document.getElementById("favouriteDiv").innerHTML='';
}
var check = function(){
    if(slideshow){
        nextImg();
        setTimeout(check, 4000); // check again in a second
    }
    else {
    }
}	
function returnFlag(value){
if(value)return 'Y'; else return 'N';
}
$(document).ready(function(){
addCode();

$("#config").click(function(){
		$("#count").val(count);
		$("#lowerLimit").val(lowerLimit);
		$("#upperLimit").val(upperLimit);
		$("#x").val(x);
		$("#filePath").val(filePath);
		$("#fileFormat").val(fileFormat);
		$("#randomToggle").val(randomToggle);
		$("#slideshow").val(slideshow);
});

$("#submitConf").click(function(){
	x = parseInt($("#x").val());
	count=parseInt($("#count").val());
	upperLimit=parseInt($("#upperLimit").val());
	lowerLimit=parseInt($("#lowerLimit").val());
	filePath=$("#filePath").val();
	fileFormat=$("#fileFormat").val();
	randomToggle=$("#randomToggle").val();
	slideshow=$("#slideshow").val();
	//$("#confTable").hide();
	addCode();
});

$("option").click(function(){
	var value;
	value=$(this).val();
	if(value=='4'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\nphotos\\n'+' (','66','gif');}
if(value=='2'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\hphotos\\h'+' (','64','gif');}
if(value=='6'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\hnphotos\\hn'+' (','455','gif');}
if(value=='3'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\sphotos\\s'+' (','43','gif');}
if(value=='1'){selectCategory('G:\\Walpapers\\w'+' (','132','jpeg');}
if(value=='5'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\Wallpaper\\w'+' (','242','jpg');}
if(value=='7'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\rbulk\\rbulk'+' (','907','gif');}
if(value=='8'){selectCategory('C:\\Users\\Work\\Desktop\\LossLess\\Sources\\bbulk\\b'+' (','170','gif');}
});

$("#previous").click(function(){
previous();
});
$("#nextImg").click(function(){
nextImg();
});
$("#increase").click(function(){
increase();
});
$("#decrease").click(function(){
decrease();
});
$("#randomToggleid").click(function(){
randomTogglefunc();
});
$("#slideshowid").click(function(){
slideshowfunc();
});

$(document)
.on('click', '.image', function()
{
document.getElementById("overlay").style.display = "block";
 $("#overlay").empty().append('<img src="'+$(this).attr("src")+'" width="100%" height="100%" >');
});

$("#overlay").click(function(){
  document.getElementById("overlay").style.display = "none";
});

$('body').tooltip({
    selector: '[data-toggle="tooltip"]'
});

$("img").hover(function(){
  $("img").attr("data-toggle","tooltip").attr("title",$(this).attr("src"));
});

});
