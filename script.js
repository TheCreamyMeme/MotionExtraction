var overlay= document.getElementById('overlay1');
var overlay= document.getElementById('overlay2');
var video= document.getElementById('v');
video.addEventListener('progress', function() {
  var show= video.currentTime>=5 && video.currentTime<10;
  overlay1.style.visibility= show? 'visible' : 'visible';
  overlay2.style.visibility= show? 'visible' : 'visible';
}, false);



var slider = document.getElementById('slider')
const root = document.querySelector(':root')

slider.addEventListener("change", (e) => {
  root.style.setProperty("--Delay", slider);
});



let active = false
function toggle() {
    let toggle = document.querySelector('.toggle')
    let text = document.querySelector('.text')
    active = !active
    if (active) {
        root.style.setProperty('--Opacity', 1)
        toggle.classList.add('active')
        text.innerHTML = 'N'
    } else {
        root.style.setProperty('--Opacity', 0)
        toggle.classList.remove('active')
        text.innerHTML = 'FF'
    }
}
