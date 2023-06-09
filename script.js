var images = ["https://artes.su/wallpapers/40b6081fbc76ba0a08d7f8fda88b105e/5983_1.jpg", "https://photopoint.com.ua/wp-content/uploads/2015/01/Kak-snimat-peyzazh-2.jpg", "https://kartinkof.club/uploads/posts/2022-09/1662135624_1-kartinkof-club-p-novie-i-krasivie-kartinki-peizazhi-1.jpg", "https://bigpicture.ru/wp-content/uploads/2013/04/Riverof01-800x600.jpg"]; // Замените названия файлов на свои
    
var currentImageIndex = 0;
var currentImageElement = document.getElementById('current-image');
    
function previousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateImage();
}
    
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateImage();
}
    
function updateImage() {
    var imagePath = images[currentImageIndex];
    currentImageElement.src = imagePath;
    currentImageElement.alt = "Image " + (currentImageIndex + 1);
}