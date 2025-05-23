document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('redeemForm');
  const rewardSelect = document.getElementById('reward');
  const quantityInput = document.getElementById('quantity');
  const messageDiv = document.getElementById('message');
  const progressBar = document.getElementById('progress-bar');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const reward = rewardSelect.value;
    const quantity = parseInt(quantityInput.value);

    // Client-side validation
    if (!reward || isNaN(quantity) || quantity <= 0) {
      showError('Please select a reward and enter a valid quantity.');
      return;
    }

    try {
      const response = await fetch('/api/redeem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reward, quantity, userId: 123 })
      });

      const data = await response.json();

      if (response.ok) {
        showSuccess(`✅ You redeemed ${quantity} points for ${reward}.`);
        updateProgress(quantity);
      } else {
        showError('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      showError('❌ Something went wrong. Please try again.');
    }
  });

  function showSuccess(message) {
    messageDiv.className = 'success';
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
  }

  function showError(message) {
    messageDiv.className = 'error';
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
  }

  function updateProgress(quantity) {
    let current = parseInt(progressBar.getAttribute('data-value') || '0');
    let newValue = Math.min(current + quantity, 100);
    progressBar.style.width = `${newValue}%`;
    progressBar.setAttribute('data-value', newValue);
  }
});
