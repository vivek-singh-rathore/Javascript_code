var song;
var button;
var amp;
var volarr=[];
var path="";

function f(){
var file=document.getElementById('myfile');
var filename= file.value;
filename=filename.replace(/.*[\/\\]/, '');
var str1="sound/";
path=str1.concat(filename);
console.log(path);
if(song!=null)

 song.pause();
preload();

}

//var file="sound/sound.mp3";
function preload(){
	if(path!="")
    song=loadSound(path,play);
}
function play(){song.play();}
function setup(){
	
	createCanvas(500,500);
	amp=new p5.Amplitude();
	button=createButton('toggle');
	button.mouseClicked(toggle);
//	song.play();

}
function toggle(){
	if(song.isPlaying())	
		song.pause();	
	else
		song.play();	
}
function draw(){

        

	    background(0);
	    if(path!=""){

				var vol=amp.getLevel();
				stroke(255,233,4);
				noFill();
				beginShape();
		        
				volarr.push(vol);

				for(var i=0;i<volarr.length;i++){
				
					var y=map(volarr[i],0,1,height,100);
					if( y<320)stroke(255,0,0);
					else stroke(255,233,4);

					vertex(i,y);
				}
				endShape();
				if(volarr.length >width){		
				    volarr.splice(0,1);
				}	
			
			}		//ellipse(width/2,height/2,500,vol*200);	
}
