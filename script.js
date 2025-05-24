document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("redeemForm");
  const reward = document.getElementById("reward");
  const points = document.getElementById("points");
  const progressBar = document.getElementById("progressBar");
  const message = document.getElementById("message");
  const clearBtn = document.getElementById("clearBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const rewardValue = reward.value;
    const pointsValue = parseInt(points.value);

    if (!rewardValue || isNaN(pointsValue) || pointsValue <= 0) {
      showMessage("Please select a reward and enter valid points.", "error");
      return;
    }

    // Simulate successful redemption
    showMessage(`🎉 ${pointsValue} points redeemed for "${rewardValue}"!`, "success");

    // Update progress bar (simulate progress)
    let progress = Math.min(100, pointsValue / 5); // Simulated calculation
    animateProgressBar(progress);
  });

  clearBtn.addEventListener("click", function () {
    reward.value = "";
    points.value = "";
    progressBar.style.width = "0%";
    message.innerHTML = "";
  });

  function showMessage(text, type) {
    message.innerHTML = text;
    message.className = type === "success" ? "success-msg" : "error-msg";
  }

  function animateProgressBar(target) {
    let width = 0;
    const interval = setInterval(() => {
      if (width >= target) {
        clearInterval(interval);
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }, 10);
  }
});
