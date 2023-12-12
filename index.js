document.getElementById('updateButton').addEventListener('click', function() {
    var brightness = document.getElementById('brightnessSlider').value;
    updateBrightness(brightness);
});

function updateBrightness(brightness) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.thingspeak.com/update?api_key=XUH1IVZHH7DH791Q&field3=" + brightness, true);
    xhr.send();
}
