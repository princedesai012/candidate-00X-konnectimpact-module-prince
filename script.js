document.getElementById('redeemForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const reward = document.getElementById('reward').value;
    const quantity = document.getElementById('quantity').value;
  
    if (!reward || !quantity || quantity <= 0) {
      alert('Please enter valid reward and quantity');
      return;
    }
  
    fetch('/api/redeem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ reward, quantity })
    }).then(() => {
      const message = `✅ You redeemed ${quantity} points for "${reward}".`;
      const confirmationDiv = document.getElementById('confirmation');
      confirmationDiv.textContent = message;
      confirmationDiv.style.display = 'block';
      document.getElementById('pointFill').style.width = Math.min(quantity, 100) + "%";
  
      document.getElementById('redeemForm').reset();
    }).catch(() => {
      alert('Something went wrong. Please try again.');
    });
  });
  