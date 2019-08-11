/**CHROME HAVE A SECURITY WITH THE SOUNDS IF CLICKED BEFORE WORK GOOD*/
$(document).ready(function () {
    var soundClick = document.createElement("audio");
    soundClick.src = "../assets/sounds/sound_menu_click.mp3";
    soundClick.volume = 0.5;

    $("#exit").on("click", function (e) {
        e.preventDefault();
        target = $(this).attr('href');
        soundClick.play();
        setTimeout(checkAudio, 600);
    });

    function checkAudio() {
        window.location.href = target;
    }
});