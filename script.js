const uploadForm = document.getElementById('upload-form');
const videoFileInput = document.getElementById('video-file');
const videoContainer = document.getElementById('video-container');

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const videoFile = videoFileInput.files[0];
    if (!videoFile) {
        return;
    }

    const videoElement = document.createElement('video');
    videoElement.src = URL.createObjectURL(videoFile);
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoContainer.appendChild(videoElement);
});

