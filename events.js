// rootcf
document.onkeydown = function (e) {
        e = window.event; 
        let _key = document.querySelector(`div[id=${e.key}]`)
        let _sound = document.querySelector(`div[id=${e.key}] #sound`)
        document.getElementById(_key.id).style = "color :  goldenrod; border: 2px goldenrod solid"; //Optinal!
        var _audio = new Audio(`sounds/${_sound.innerText}.wav`)
        _audio.volume = 0.20;
        _audio.currentTime = 0;
        _audio.play().then(() => {
        document.getElementById(_key.id).style = "color :  white; border: 2px darkgray solid"; //Optinal!
        });
}
