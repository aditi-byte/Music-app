console.log("Welcome to Musica");
let songIndex=0;
let audioElement=new Audio('Songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    
        {songName: "Aaj Sajeya",filePath:"Songs/1.mp3",coverPath:"covers/music1cover.jpg"},
        {songName: "Badhai ho Badhai",filePath:"Songs/2.mp3",coverPath:"covers/music1cover.jpg"},
        {songName: "Piya ghar avenge",filePath:"Songs/3.mp3",coverPath:"covers/music1cover.jpg"},
        {songName: "tere dil ka rishta",filePath:"Songs/4.mp3",coverPath:"covers/music1cover.jpg"},
        {songName: "wah wah ram ji",filePath:"Songs/5.mp3",coverPath:"covers/music1cover.jpg"},
        {songName: "Achutam keshvam",filePath:"Songs/6.mp3",coverPath:"covers/music1cover.jpg"},
        {songName: "Azeemo shaan",filePath:"Songs/7.mp3",coverPath:"covers/music1cover.jpg"},
        {songName: "Congratulations",filePath:"Songs/8.mp3",coverPath:"covers/music1cover.jpg"},
        {songName: "Hum saath saath hai",filePath:"Songs/9.mp3",coverPath:"covers/music1cover.jpg"},

]
songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;

})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
    

audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myprogressbar.value=progress;

})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        
        element.classList.add('fa-play-circle');
    })
}
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100;
})
Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }

    audioElement.src = `Songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
//audioElement.play();