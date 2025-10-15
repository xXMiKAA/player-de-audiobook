const botaoPlayPause = document.getElementById('play-pause');
const botaoAnterior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');
const audio = document.getElementById('audio-capitulo');


// Dar play e pausar
let tocando = false;

function tocar() {
    audio.play();
    tocando = true;
    botaoPlayPause.classList.add('tocando');
}

function pausar() {
    audio.pause();
    tocando = false;
    botaoPlayPause.classList.remove('tocando');
}

botaoPlayPause.addEventListener('click', function() {
    if (!tocando) {
        tocar();
    } else {
        pausar();
    }
});

let audioAtual = 1;
let quantidadeAudios = 10;
const tituloAudio = document.getElementById('capitulo');

// passar para o próximo áudio
function proximoAudio () {
    pausar();
    if (audioAtual < quantidadeAudios) {
        audioAtual++;
    } else if (audioAtual == quantidadeAudios) {
        audioAtual = 1;
    }

    audio.src = "audios/" + audioAtual + ".mp3";
    tituloAudio.innerText = 'Capítulo ' + audioAtual;
}

botaoProximo.addEventListener('click', proximoAudio);

// passar para o áudio anterior
function audioAnterior () {
    pausar();
    if (audioAtual > 1) {
        audioAtual--;
    } else if (audioAtual == 1) {
        audioAtual = quantidadeAudios;
    }

    audio.src = "audios/" + audioAtual + ".mp3";
    tituloAudio.innerText = 'Capítulo ' + audioAtual;
}

botaoAnterior.addEventListener('click', audioAnterior);


// app13