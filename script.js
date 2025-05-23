document.getElementById("redeemBtn").addEventListener("click", async () => {
  const reward = document.getElementById("reward").value;
  const points = document.getElementById("points").value;
  const messageDiv = document.getElementById("message");

  if (!reward || !points || points <= 0) {
    messageDiv.innerHTML = "<div class='error'>Please fill all fields correctly.</div>";
    return;
  }

  try {
    const response = await fetch("/api/redeem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reward, quantity: points, userId: 123 }),
    });

    if (!response.ok) throw new Error();

    messageDiv.innerHTML = `<div class="success">✅ You redeemed ${points} points for "${reward}".</div>`;
    updateProgressBar(points);
  } catch (err) {
    messageDiv.innerHTML = "<div class='error'>❌ Something went wrong. Please try again.</div>";
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("reward").value = "";
  document.getElementById("points").value = "";
  document.getElementById("message").innerHTML = "";
  updateProgressBar(0);
});

function updateProgressBar(value) {
  const max = 1000; // Mock goal
  const percentage = Math.min((value / max) * 100, 100);
  document.getElementById("progressBar").style.width = `${percentage}%`;
}
