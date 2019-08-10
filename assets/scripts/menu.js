/**CHROME HAVE A SECURITY WITH THE SOUNDS IF CLICKED BEFORE WORK GOOD*/
$(document).ready(function () {
    var sound = document.createElement("audio");
    sound.src = "../assets/sounds/sound_menu.wav";
    sound.volume = 0.2;
    sound.autoPlay = false;
    sound.muted = false;

    var soundClick = document.createElement("audio");
    soundClick.src = "../assets/sounds/sound_menu_click.mp3";
    soundClick.volume = 0.5;

    $("li.menu-seleccion").mouseover(function () {
        sound.play();
    });

    $("li.menu-seleccion a").on("click", function (e) {
        e.preventDefault();
        target = $(this).attr('href');
        soundClick.play();
        setTimeout(checkAudio, 600);
    });

    function checkAudio() {
        window.location.href = target;
    }
});