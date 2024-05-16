const myVideo = document.querySelector("#my-video");
console.log(myVideo);

//---------------------------------------------------------------------------------
// The following code block allowws us tp play and pause video on a click

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img")
console.log(playPauseImg);

function toggleVideo()
{
    if (myVideo.paused || myVideo.ended){
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
        myVideo.play();
    } else {
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
        myVideo.pause();
    }
}
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
// The following code block allowws us tp mute and unmute video on a click

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound()
{
    if (myVideo.muted) {
        muteUnmuteButton.style.backgroundColor = "#d5cea3";
        myVideo.muted = false;
     } else {
        muteUnmuteButton.style.backgroundColor = "#75715d";
        myVideo.muted = true;
     }
}
//---------------------------------------------------------------------------------

// the following code allows us to set a progres bar for video

myVideo.addEventListener("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector("#progress-bar-fill")
console.log(progressBarFill);

function updateProgressBar(){
    const progress =(myVideo.currentTime / myVideo.duration) * 100;
    // console.log(progress);
    progressBarFill.style.width = progress + "%";
}
//---------------------------------------------------------------------------------

// the following code allows us to nevigate through different timestamps

const step1Button = document.querySelector("#step-1-button")
console.log(step1Button);
step1Button.addEventListener("click", gotoStep1);

function gotoStep1(){
    myVideo.currentTime = 17.0
}

const step2Button = document.querySelector("#step-2-button")
console.log(step2Button);
step2Button.addEventListener("click", gotoStep2);

function gotoStep2(){
    myVideo.currentTime = 52.0
}
//---------------------------------------------------------------------------------

// the following code allows us to make the video full screen 

myVideo.addEventListener("dblclick", goFullScreen);

const fullscreenButton = document.querySelector("#fullscreen-button")
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullScreen);

function goFullScreen(){
    
    if(!document.fullscreenElement){
        myVideo.requestFullscreen();
    } else{
        document,exitFullscreen();
    }
}

//---------------------------------------------------------------------------------

// following code allows us to control volume of the video
const increaseVolumeButton = ("#increase-volume-button");
console.log(increaseVolumeButton);

increaseVolumeButton.addEventListener("click", increaseVolume);

// volume ranges from 0 to 1 with increment of 0.1
function increaseVolume(){
    if(myVideo.volume < 0.9){
        myVideo.volume += 0.1;
    }
}

const decreaseVolumeButton = ("#decrease-volume-button");
console.log(decreaseVolumeButton);

decreaseVolumeButton.addEventListener("click", decreaseVolume);

// volume ranges from 0 to 1 with increment of 0.1
function decreaseVolume(){
    if(myVideo.volume > 0.11){
        myVideo.volume -= 0.1;
    }
}

myVideo.addEventListener("volumechange", updateVolume);

function updateVolume(){
    console.log("current volume is", myVideo.volume);
}
//---------------------------------------------------------------------------------