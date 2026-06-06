const ctx = document.getElementById('growthChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Monthly Growth',
      data: [1200, 1900, 3000, 2500, 4000, 5000],
      borderColor: 'blue',
      tension: 0.4
    }]
  }
});

// Simple filter interaction
document.getElementById("range").addEventListener("change", function () {
  alert("Data updated for: " + this.value);
});