const musicContainer = document.querySelector(".music-container");

const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");

const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

// Song titles
const songs = [
  "okeokeoke - Low G",
  "Simple Cypher - Low G",
  "Tam Giác - Anh Phan ft Low G",
];

// Keep track of songs
let songIndex = 2;

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
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
