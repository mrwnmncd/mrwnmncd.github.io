(() => {
  const player = document.getElementById("audio-player");
  const playButton = document.getElementById("audio-control");
  const btnIcon = document.getElementById("audio-control-icon");

  setCurrentTime();
  window.onload = setInterval(autoplay, 1000 / 10); //10fps

  playButton.addEventListener("click", () => {
    player["user-controlled"] = true;
    document.cookie = "user-controlled=true; path=/;";
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
    const cookies = document.cookie.split(";");
    document.cookie = `engeneplay=${player.currentTime}; path=/;`;
    if (
      player.paused &&
      cookies.find((cookie) => cookie.includes("user-controlled"))
    )
      return;

    player.play();

    if (player.paused) {
      setCurrentTime();
      player.play();
    }
  }

  function setCurrentTime() {
    const cookies = document.cookie.split(";");
    player.currentTime = parseFloat(
      cookies.find((cookie) => cookie.includes("engeneplay")).split("=")[1] || 0
    );
  }
})();
