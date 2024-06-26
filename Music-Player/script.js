let progress = document.getElementById('progress');
let song = document.getElementById('song');
let cltrIcon = document.getElementById('cltrIcon');

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(cltrIcon.classList.contains("fa-pause")){
        song.pause();
        cltrIcon.classList.remove("fa-pause");
        cltrIcon.classList.add("fa-play");
    }
    else{
        song.play();
        cltrIcon.classList.add("fa-pause");
        cltrIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    cltrIcon.classList.add("fa-pause");
    cltrIcon.classList.remove("fa-play");
}