var song;
var button;
var amp;
var volarr=[];
function preload(){

	song=loadSound("/Users/hp/Desktop/music/kyoto.mp3");
}

function setup(){
	createCanvas(500,500);
	amp=new p5.Amplitude();
	button=createButton('toggle');
	button.mouseClicked(toggle);
	song.play();

}
function toggle(){
	if(song.isPlaying())	
		song.pause();	
	else
		song.play();	
}
function draw(){

	    background(0);
		var vol=amp.getLevel();
		stroke(255,255,255);
		noFill();
		beginShape();
        
		volarr.push(vol);

		for(var i=0;i<volarr.length;i++){
		
			var y=map(volarr[i],0,1,height,100);

			vertex(i,y);
		}
		endShape();
		if(volarr.length >width){		
		    volarr.splice(0,1);
		}		//ellipse(width/2,height/2,500,vol*200);	
}