(() => {
  const player = document.getElementById("audio-player");
  const playButton = document.getElementById("audio-control");
  const btnIcon = document.getElementById("audio-control-icon");
 try {

  setCurrentTime();
  window.onload = setInterval(autoplay, 1000 / 10); //10fps

  playButton.addEventListener("click", () => {
    sessionStorage.setItem("user-controlled", true);
    if (player.paused) {
      setCurrentTime();
      player.play();
      btnIcon.classList.replace("ion-ios-play", "ion-ios-pause");
    } else {
      player.pause();
      btnIcon.classList.replace("ion-ios-pause", "ion-ios-play");
    }
  });

  player.volume = 0.1;

  function autoplay() {
    sessionStorage.setItem("engeneplay", player.currentTime);
    if (player.paused && sessionStorage.getItem("user-controlled") === "true")
      return;

    player.play();

    if (player.paused) {
      setCurrentTime();
      player.play();
    }
  }

  function setCurrentTime() {
    player.currentTime = parseFloat(sessionStorage.getItem("engeneplay") || 0);
  }
 } catch (error) {
  console.error(error);
  document.removeChild(player);
  document.removeChild(playButton);
 }
})();
