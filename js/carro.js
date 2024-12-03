async function enviaFormulario() {
    //recuperar as informações do formulário e colocar em objeto JSON
    const carroDTO = {
        "marca": document.querySelectorAll("input")[0].value,
        "modelo": document.querySelectorAll("input")[1].value,
        "ano": Number(document.querySelectorAll("input")[2].value),
        "cor": document.querySelectorAll("input")[3].value
    }

    try {
        const respostaServidor =  await fetch("http//localhost:333/novo/carro", {
            method: "POST",
            body: JSON.stringify(carroDTO)
        });
    
        if(!respostaServidor.ok) {
            throw new Error("Erro ao enviar os dados para o servidor. Contate o administrador do sistema");
        }
    
        alert("Carro cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        alert(`Erro ao se comunicar com o servidor. ${error}`);
        
    }
}

async function recuperarListaCarro() {

    try {
        constrespostaServidor = await fetch("http://localhost:333/lista/carros");

        if(!respostaServidor.ok){
            throw new Error('Error ao comunicar com o servidor.');
        }

        const listaDeCarros = await respostaServidor.json();

        console.log(listaDeCarros);
    } catch (error) {
        console.log('erro ao comunicar com o servidor');
        console.log(error);
    }
}
    
    async function criarTabelaCarros() {

    }
