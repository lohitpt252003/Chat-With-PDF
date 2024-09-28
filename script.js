document.getElementById("pdf-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    
    if (file) {
        // Simulate the upload process
        let uploadProgress = 0;
        const progressBar = document.getElementById("uploadProgress");
        const uploadPercentage = document.getElementById("uploadPercentage");
        const reuploadBtn = document.getElementById("reupload-btn");

        const interval = setInterval(() => {
            uploadProgress += 10;
            progressBar.value = uploadProgress;
            uploadPercentage.textContent = `${uploadProgress}%`;

            if (uploadProgress >= 100) {
                clearInterval(interval);
                reuploadBtn.classList.remove("hidden");
                reuploadBtn.classList.add("reupload-btn");
            }
        }, 300);
    }
});

document.getElementById("reupload-btn").addEventListener("click", function() {
    const progressBar = document.getElementById("uploadProgress");
    const uploadPercentage = document.getElementById("uploadPercentage");
    progressBar.value = 0;
    uploadPercentage.textContent = "0%";
    this.classList.add("hidden");
});
