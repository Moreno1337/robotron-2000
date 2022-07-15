const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },

    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },

    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 96
    },

    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        evento.preventDefault();
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle, evento.target.parentNode);
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if(operacao === '-' && peca.value > 0) {
        peca.value = parseInt(peca.value) - 1;
    } else if(operacao === '+') {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca, operacao, controle) {
    const contador = controle.querySelector('[data-contador]');

    estatisticas.forEach( (elemento) => {
        if(operacao === '+'){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        } else if(operacao === '-' && contador.value > 0) {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }
    });
}