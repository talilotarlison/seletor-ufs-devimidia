import {selectHtmlList, showTelaSelect,showKeyBusca} from './script.js'

let dadosApi =[]

const fetchData = async () => {
    try {
        const response = await fetch('https://api-ufs.onrender.com/ufs', {
            method: 'GET',
            // Você pode adicionar mais opções de configuração aqui, como headers, etc.
        });

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();
        //console.log('Dados recebidos:', data);
        data.forEach((dado) => {
            dadosApi.push({
                id: dado.id,
                uf: dado.uf,
                nomeUf: dado.nome
            })
        })
        //console.log(dadosApi)
        selectHtmlList(dadosApi)
        showTelaSelect(dadosApi)
        showKeyBusca(dadosApi)
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
};


fetchData();
