document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const yes = document.getElementById('yes');
    const no = document.getElementById('no');
    const audioWow = document.getElementById('wow');
    const audioAayein = document.getElementById('aayein');

    const contRect = container.getBoundingClientRect();
    const noRect = no.getBoundingClientRect();

    let counter = 0;


    function playAudio(audio) {
        audio.play();
    };

    function moveButton() {
        let x = Math.floor(Math.random() * (contRect.width - noRect.width));
        let y = Math.floor(Math.random() * (contRect.height - noRect.height - 400));
        no.style.left = `${x}px`;
        no.style.top = `${y}px`;
    };

    yes.addEventListener('click', function() {
        playAudio(audioWow);
        setTimeout(function() {
            alert('Yeeee!! Thank You 😍😍😍');
        }, 100);
        no.style.left = `auto`;
        no.style.top = `300px`;
        counter = 0;
    });

    no.addEventListener('mouseenter', function() {
        moveButton();
        playAudio(audioAayein);
    });

    no.addEventListener('click', function() {
        moveButton();
        playAudio(audioAayein);
    });
});
