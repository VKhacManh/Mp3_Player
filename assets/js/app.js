const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
const nextBtn = document.querySelector(".play-forward");
const prevBtn = document.querySelector(".play-back");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
const musicName = document.querySelector(".music-name");
const musicSinger = document.querySelector(".music-singer");
const musicThumbnail = document.querySelector(".music-thumb");
const musicImage = document.querySelector(".music-thumb img");
const backgroundImg = document.querySelector(".image img")
const playRepeat = document.querySelector(".play-repeat");
const navbarMenu = document.querySelector(".icon-menu");
const navbarSetting = document.querySelector(".icon-setting");
const playInf = document.querySelector(".play-infinite");
playRepeat.addEventListener("click", function () {});

/* let isNext = false;
let isPrev = false; */
let isSetting = false;
let isMenu = false;
let isPlaying = true;
let indexSong = 0;
let isRepeat = false;
let isInf = false;
displayTimer();
let timer;
let repeatCount = 0;

/* Prev Active */
prevBtn.addEventListener("click", function () {
  prevBtn.style.color = "#ffb86c";
  setTimeout(function () {
    prevBtn.removeAttribute("style");
  }, 300);
});
/* Next Active */
nextBtn.addEventListener("click", function () {
  nextBtn.style.color = "#ffb86c";
  setTimeout(function () {
    nextBtn.removeAttribute("style");
  }, 300);
});

/* Navbar-Active */
navbarMenu.addEventListener("click", function () {
  if (isMenu) {
    isMenu = false;
    navbarMenu.removeAttribute("style");
  } else {
    isMenu = true;
    navbarMenu.style.color = "#ffb86c";
  }
});

navbarSetting.addEventListener("click", function () {
  if (isSetting) {
    isSetting = false;
    navbarSetting.removeAttribute("style");
  } else {
    isSetting = true;
    navbarSetting.style.color = "#ffb86c";
  }
});

/* Repeat */
playRepeat.addEventListener("click", function () {
  if (isRepeat) {
    isRepeat = false;
    playRepeat.removeAttribute("style");
  } else {
    isRepeat = true;
    playRepeat.style.color = "#ffb86c";
  }
});

/* Repeat */
song.addEventListener("ended", handleEndedSong);
function handleEndedSong() {
  console.log({ isInf });
  if (isInf) {
    isPlaying = true;
    playPause();
    return;
  }

  repeatCount++;
  if (isRepeat && repeatCount === 1) {
    isPlaying = true;
    playPause();
    return;
  }

  changeSong(1);
}

/* Infinite */
playInf.addEventListener("click", function () {
  if (isInf) {
    isInf = false;
    playInf.removeAttribute("style");
  } else {
    isInf = true;
    isRepeat = false;
    playInf.style.color = "#ffb86c";
  }
});

/* song.addEventListener("ended", handleInfSong);
function handleInfSong() {
    if (isInf) {
        isPlaying = true;
        playPause();
    } else {
        changeSong(1);
    }
} */

const musics = [
  {
    id: 1,
    title: "All By Myself",
    singer: "Lady May",
    file: "all_by_myself.mp3",
    background: "https://images.unsplash.com/photo-1663051346122-73469cc251fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    image:
      "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Buoc Den Ben Em",
    singer: "Song Luan",
    file: "buocdenbenem.mp3",
    background: "https://images.unsplash.com/photo-1531737212413-667205e1cda7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    image:
      "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Sao Cha Khong",
    file: "saochakhong.mp3",
    singer: "Luong Bich Huu",
    background: "https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    image:
      "https://images.unsplash.com/photo-1610194978275-8eee57ceafdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "Viet Nam trong toi la",
    file: "VietNamtrongtoila.mp3",
    singer: "Ti Nau",
    background: "https://images.unsplash.com/photo-1529304344766-6b537de190f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];
nextBtn.addEventListener("click", function () {
  changeSong(1);
});

prevBtn.addEventListener("click", function () {
  changeSong(-1);
});

function changeSong(dir) {
  if (dir === 1) {
    indexSong++;
    if (indexSong >= musics.length) {
      indexSong = 0;
    }
    isPlaying = true;
  } else if (dir === -1) {
    indexSong--;
    if (indexSong < 0) {
      indexSong = musics.length - 1;
    }
    isPlaying = true;
  }
  init(indexSong);
  /* song.setAttribute("src", `./assets/music/${musics[indexSong].file}`); */
  playPause();
}

playBtn.addEventListener("click", playPause);
function playPause() {
  if (isPlaying) {
    console.log("current song play");
    musicThumbnail.classList.add("is-playing");
    song.play();
    playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
    isPlaying = false;
    timer = setInterval(displayTimer, 500);
  } else {
    musicThumbnail.classList.remove("is-playing");
    song.pause();
    playBtn.innerHTML = `<ion-icon name="play"></ion-icon>`;
    isPlaying = true;
    clearInterval(timer);
  }
}

// Timer
function displayTimer() {
  const { duration, currentTime } = song;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
  remainingTime.textContent = formatTimer(currentTime);
  if (!duration) {
    durationTime.textContent = "00:00";
  } else {
    durationTime.textContent = formatTimer(duration);
  }
}
function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}
displayTimer();
setInterval(displayTimer, 500);

rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar(e) {
  song.currentTime = e.target.value;
}

function init(indexSong) {
  displayTimer();
  song.setAttribute("src", `./assets/music/${musics[indexSong].file}`);
  musicImage.setAttribute("src", musics[indexSong].image);
  backgroundImg.setAttribute("src", musics[indexSong].background);
  musicSinger.textContent = musics[indexSong].singer;
  musicName.textContent = musics[indexSong].title;
}
init(indexSong);
