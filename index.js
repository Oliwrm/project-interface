function updateBrightness(brightness) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.thingspeak.com/update?api_key=XUH1IVZHH7DH791Q&field3=10" + brightness, true);
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const data = xhr.response;
        console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};

    
}document.getElementById('updateButton').addEventListener('click', function() {
    var brightness = document.getElementById('brightnessSlider').value;
    updateBrightness(brightness);
});


