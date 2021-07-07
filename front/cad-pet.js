const btEnviar = document.getElementById('cad-pet')

btEnviar.onclick = (e) => {
    e.preventDefault()

    const inputNome = document.getElementById('nome')
    const inputCPF = document.getElementById('cpf')
    const inputNomePet = document.getElementById('nomePet')
    const inputRaca = document.getElementById('raca')
    const inputAno =  document.getElementById('ano')
    
    const dados = {
        nome: inputNome.value,
        cpf: inputCPF,
        nomePet: inputNomePet.value,
        raca: inputRaca.value,
        ano: inputAno
    }

    params = {
        method: "POST",
        body: JSON.stringify(dados),
        headers:{
            "Content-type": "application/json"
        }
    }

    fetch('http://localhost:3000/animais/', params)
        .then(resposta => resposta.json())
        .then(dados => console.log(dados))
        .catch(erro => console.log(erro))
}