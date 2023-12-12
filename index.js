function updateBrightness(brightness) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.thingspeak.com/update?api_key=XUH1IVZHH7DH791Q&field3=" + brightness, true);
    
    // Set the responseType after calling open() and before send()
    xhr.responseType = "json";
    
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Since the responseType is set to "json", you can directly access xhr.response
            const data = xhr.response;
            console.log(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

    // Send the request after setting up the onload callback
    xhr.send();
}

document.getElementById('updateButton').addEventListener('click', function() {
    var brightness = document.getElementById('brightnessSlider').value;
    updateBrightness(brightness);
});