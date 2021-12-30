function init(){
     MAX=400;

media=document.getElementById("media");
play=document.getElementById("play");
mute=document.getElementById("mute");
bar=document.getElementById("bar");
progress=document.getElementById("progress");
volume=document.getElementById("volume");

play.addEventListener("click", push)
media.addEventListener("click", push)

mute.addEventListener("click", sound)

bar.addEventListener("click", move)
volume.addEventListener("change", level)
}
addEventListener("load", init);

function level(){
media.volume=volume.value;


}




function push(){
if (!media.paused && !media.ended){
media.pause(); 
play.value="Play";
clearInterval(loop);
}else { 
media.play();
play.value="Pause";
loop=setInterval(playStatus,100)                                      //для прогресс бара

}
};

function move(e){
   // e= Event;
   let mousX=e.pageX-bar.offsetLeft;            //переменная для фиксирования координаты клика мышки      
   let newTime=mousX*media.duration/MAX;

   progress.style.width= `${mousX}px`;  
   media.currentTime=newTime;
}



function playStatus(){
    
if (!media.ended){
let size=media.currentTime*MAX/media.duration;
progress.style.width=`${parseInt(size)}px`;
}else {
    progress.style.width= "0";  
    play.value="Play";
    clearInterval(loop);
    currentTime=0.1;
}
}

function sound(){

if (media.muted){
media.muted=false;
mute.value="Mute";
mute.style.background="white";
}
else {
    media.muted=true;
mute.value="unmute";
mute.style.background="salmon";
}

};
