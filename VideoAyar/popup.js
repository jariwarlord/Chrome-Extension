document.addEventListener('DOMContentLoaded', function() {
  const speedSlider = document.getElementById('speed');
  const speedValue = document.getElementById('speedValue');
  const volumeSlider = document.getElementById('volume');
  const volumeValue = document.getElementById('volumeValue');
  const applyButton = document.getElementById('applyButton');

  speedSlider.addEventListener('input', function() {
      const speed = parseFloat(this.value);
      speedValue.textContent = speed.toFixed(1) + 'x';
  });

  volumeSlider.addEventListener('input', function() {
      const volume = parseFloat(this.value);
      volumeValue.textContent = (volume * 100).toFixed(0) + '%';
  });

  applyButton.addEventListener('click', function() {
      const speed = parseFloat(speedSlider.value);
      const volume = parseFloat(volumeSlider.value);
      
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {action: 'changeSpeed', speed: speed});
          chrome.tabs.sendMessage(tabs[0].id, {action: 'changeVolume', volume: volume});
      });
  });
});
