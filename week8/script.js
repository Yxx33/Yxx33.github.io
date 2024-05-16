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