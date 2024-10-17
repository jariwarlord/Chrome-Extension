// Function to change video speed
function changeVideoSpeed(speed) {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.playbackRate = speed;
  });
}

// Function to change video volume
function changeVideoVolume(volume) {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.volume = volume;
  });
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'changeSpeed') {
    changeVideoSpeed(request.speed);
  } else if (request.action === 'changeVolume') {
    changeVideoVolume(request.volume);
  }
});
