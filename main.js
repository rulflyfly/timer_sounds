const button = document.getElementById('button');
const button_2 = document.getElementById('button_2');
const audio = new Audio('timer.wav');
const audio_2 = new Audio('timer_2.wav');
audio.loop = true;
audio_2.loop = true;

let stop = false;
let stop_2 = false;
let playing_1 = false;
let playing_2 = false;

button.addEventListener('click', () => {
    if (!stop) {
        audio.play()
        stop = true;
        playing_1 = true;
        button.textContent = 'Stop';
        return;
    }  else {
        audio.pause()
        audio.currentTime = 0;
        stop = false;
        playing_1 = false;
        button.textContent = 'Play';
    }
    
})

button_2.addEventListener('click', () => {
    if (!stop_2) {
        audio_2.play()
        stop_2 = true;
        playing_2 = true;
        button_2.textContent = 'Stop';
        return;
    } else {
        audio_2.pause()
        audio_2.currentTime = 0;
        stop_2 = false;
        playing_2 = false;
        button_2.textContent = 'Play';
    }
    
})

