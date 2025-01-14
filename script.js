function updateTimer() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentSecond = now.getSeconds();

  // 今日の18時
  const targetTime = new Date();
  targetTime.setHours(18, 0, 0, 0);

  let diff;
  let isCountdown = true;

  if (now < targetTime) {
    // カウントダウン（現在時刻が18時前の場合）
    diff = targetTime - now;
  } else {
    // カウントアップ（現在時刻が18時以降の場合）
    isCountdown = false;
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // 翌日の0時
    diff = now - targetTime;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const formattedTime = `
                ${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;

  document.getElementById("timer").textContent = isCountdown
    ? `${formattedTime}`
    : `${formattedTime}`;
}

// タイマーの更新を毎秒行う
setInterval(updateTimer, 1000);

// 初回のタイマー表示を更新
updateTimer();
