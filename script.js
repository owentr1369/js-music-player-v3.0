const musicContainer = document.querySelector(".music-container");

const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.getElementById("progress-container");

const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

// Song titles
const songs = [
  "okeokeoke - Low G",
  "Simple Cypher - Low G",
  "Tam Giác - Anh Phan ft Low G",
];

// Keep track of songs
let songIndex = 1;

// Innitially load song info DOM
loadSong(songs[songIndex]);

// Update song detail
function loadSong(song) {
  title.innerText = song;
  audio.src = `./music/mp3/${song}.mp3`;
  cover.src = `./music/thumbnail/${song}.jpg`;
}

// Event listeners
playBtn.addEventListener("click", function () {
  // Check does .play exist in musicContainer
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

// Change song events
prevBtn.addEventListener("click", function () {
  prevSong();
});
nextBtn.addEventListener("click", function () {
  nextSong();
});

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Change audio time
audio.addEventListener("timeupdate", updateProgress);
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;

  progress.style.width = `${progressPercent}%`;
}

progressContainer.addEventListener("click", setProgress);
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
// Next song when end
audio.addEventListener("ended", nextSong);
