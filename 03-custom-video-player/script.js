const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// lay and Pause Video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update the PLay\Pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
    } else {
        play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
    }
}


// UPdate Progress and TimeStamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    mins = mins < 10 ? '0' + mins : mins;

    // Get Seconds
    let seconds = Math.floor(video.currentTime % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timestamp.innerHTML = `${mins}:${seconds}`;
}


// Set video time 
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}


// Stop the video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}


// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
