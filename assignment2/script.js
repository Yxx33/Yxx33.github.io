const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const video = document.querySelector("#my-video");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");


// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

//---------------------------------------------------------------------------------
// The following code block allows us to mute or unmute a video on a click

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteButton.style.backgroundColor = "rgb(223, 199, 218) ";
    myVideo.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "rgb(87, 58, 95)";
    myVideo.muted = true;
  }
}

//---------------------------------------------------------------------------------
// following code allows us to control volume of the video
const increaseVolumeButton = document.querySelector("#increase-volume-button");
console.log(increaseVolumeButton);

increaseVolumeButton.addEventListener("click", increaseVolume);

// volume ranges from 0 to 1 with increment of 0.1
function increaseVolume(){
    if(myVideo.volume < 0.9){
        myVideo.volume += 0.1;
    }
}

const decreaseVolumeButton = document.querySelector("#decrease-volume-button");
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
// Replay video function
function replayVideo() {
    const video = document.getElementById('my-video');
    video.currentTime = 0;
    video.play();
  }
  
  // Initial setup
  document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('my-video');
    const progressBarFill = document.getElementById('progress-bar-fill');
  
    video.addEventListener('timeupdate', () => {
      const progress = (video.currentTime / video.duration) * 100;
      progressBarFill.style.width = `${progress}%`;
    });
  });

//---------------------------------------------------------------------------------
