const musicPlayer=document.getElementById("musicPlayer");
const bgMusic=document.getElementById("bgMusic");

let playing=false;


musicPlayer.addEventListener("click",()=>{

    if(playing){

        bgMusic.pause();

    }

    else{

        bgMusic.play();

    }

    playing=!playing;

});

musicPlayer.classList.toggle("playing");