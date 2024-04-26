var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    }
    else {
        var img = document.createElement("img");
        img.src = "https://a.d-cd.net/-8AAAgHI8-A-960.jpg"
        document.getElementById("demo").appendChild(img)
    }
}