// scripts.js
function playVideo(videoId) {
  var videoFrame = document.getElementById('videoFrame');
  videoFrame.src = 'https://www.youtube.com/embed/' + videoId;
}

function searchVideos() {
  var searchInput = document.getElementById('searchInput');
  var query = searchInput.value;
  // TODO: Implement video search functionality
  alert('Search for "' + query + '" not implemented yet!');
}
