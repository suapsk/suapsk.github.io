let songs = [
  {
    name: "VILLAIN",
    cover: "./assets/images/evelynn-kda.jpg",
    artist: "KDA",
    audio: null,
    id: 0,
  },
  {
    name: "r",
    cover: "r",
    artist: "r",
    audio: null,
    id: 1,
  },
  {
    name: "",
    cover: "",
    artist: "",
    audio: null,
    id: 2,
  },
  {
    name: "",
    cover: "",
    artist: "",
    audio: null,
    id: 3,
  },
];
/*
storageRef
  .child("default")
  .child("quran.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[0].audio = url;
  });

storageRef
  .child("default")
  .child("quran1.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[1].audio = url;
  });
storageRef
  .child("default")
  .child("quran2.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[2].audio = url;
  });
storageRef
  .child("default")
  .child("quran3.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[3].audio = url;
  });
storageRef
  .child("default")
  .child("quran4.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[4].audio = url;
  });
storageRef
  .child("default")
  .child("quran5.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[5].audio = url;
  });
