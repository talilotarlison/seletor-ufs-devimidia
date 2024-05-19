const show = document.querySelector('.showResultado')
const titulo = document.querySelector('.resultado')
const seletUf = document.getElementById('ufs-select')
const form = document.querySelector('form');
const input = document.querySelector('#ufs');

// canelar evento formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // faça a validação ou processamento adicional aqui
});

// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild

export let selectHtmlList = (dadosUF) => {
    dadosUF.forEach((dataUf) => {
        seletUf.innerHTML += `<option value='${dataUf.id}'>${dataUf.uf}</option>`
    })
}

var componente = ({ id, uf, nomeUf }) => {
    return (
        show.innerHTML = ` <div class="card">
                                <h2>Resultado</h2>
                                <p><strong>ID:</strong> ${id}</p>
                                <p><strong>Sigla:</strong> ${uf}</p>
                                <p><strong>Nome:</strong> ${nomeUf}</p>
                           </div>
                         `
    )
}

export let showTelaSelect = (dadosUF) => {
    show.innerHTML = ' '
    seletUf.addEventListener('change', () => {
        var opcaoValor = seletUf.options[seletUf.selectedIndex].value;
        //console.log(opcaoValor)
        var filtro = dadosUF.find((uf) => {
            return uf.id == parseInt(opcaoValor)
        })
        //console.log(filtro)
        componente(filtro)
        titulo.style.display = "none"
    })
}

// https://www.w3schools.com/jsref/event_onkeypress.asp
// https://www.w3schools.com/jsref/jsref_foreach.asp
// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/keypress_event

export let showKeyBusca = (dadosUF) => {
    input.addEventListener('keyup', (e) => {
        show.innerHTML = ''
        let buscarUser = e.target.value
        //console.log(dadosUF)
        let filtroEstados = dadosUF.filter((estado) => {
            return estado.nomeUf.toLowerCase().includes(buscarUser.toLowerCase());
        })
        //console.log(filtroEstados)
        if (filtroEstados.length != 0) {
            filtroEstados.map((busca) => {
                componente(busca)
                titulo.style.display = "none"
            })
        } else {
            naoEncontrou("Nao encontrou!")
            titulo.style.display = "block"
        }

    })
}
// https://www.w3schools.com/jsref/prop_style_display.asp
let naoEncontrou = (msg) => {
    titulo.textContent = msg
}

