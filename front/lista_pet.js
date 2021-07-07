const btSubmeter = document.getElementById('cad-pet')
const formPet = document.getElementById('form-pet')
const inputNome = document.getElementById('name')
const inputCPF = document.getElementById('cpf')
const inputNomePet = document.getElementById('name-pet')
const inputRaca = document.getElementById('raca')
const inputAno =  document.getElementById('ano')
const tablePet = document.getElementById('table-pets')

formPet.onsubmit = (e) =>{
    e.preventDefault()
    const tabela = criaTable(inputNome.value, inputCPF.value, inputNomePet.value, inputRaca.value, inputAno.value)
    tablePet.appendChild(tabela)
    formPet.reset()
    alert('Pet Cadastrado com Sucesso!')
}

function criaTable(nomeDono, cpf, nomePet, raca, ano){
    const divLinha = document.createElement('tr')
    divLinha.classList.add('linha')

    //Div coluna para Nome
    const divColunaNome = document.createElement('td')
    divColunaNome.classList.add('colunaNome')
    divColunaNome.innerText = nomeDono
    divLinha.appendChild(divColunaNome)

    //Div coluna para CPF
    const divColunaCPF = document.createElement('td')
    divColunaCPF.classList.add('colunaCPF')
    divColunaCPF.innerText = cpf
    divLinha.appendChild(divColunaCPF)

    //Div coluna para Nome Pet
    const divColunaNomePet = document.createElement('td')
    divColunaNomePet.classList.add('colunaNomePet')
    divColunaNomePet.innerText = nomePet
    divLinha.appendChild(divColunaNomePet)

    //Div coluna para Raça
    const divColunaRaca = document.createElement('td')
    divColunaRaca.classList.add('colunaRaca')
    divColunaRaca.innerText = raca
    divLinha.appendChild(divColunaRaca)

    //Div coluna para Ano
    const divColunaAno = document.createElement('td')
    divColunaAno.classList.add('colunaAno')
    divColunaAno.innerText = ano
    divLinha.appendChild(divColunaAno)

    //Div do botão Editar
    const divEditar = document.createElement('td')
    divEditar.classList.add('colunaEditar')
    const btEditar = document.createElement('button')
    btEditar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg>`
    divEditar.appendChild(btEditar)
    divLinha.appendChild(divEditar)

    //Botão Excluir
    const divExcluir = document.createElement('td')
    divExcluir.classList.add('colunaExcluir')
    const btExcluir = document.createElement('button')
    btExcluir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>`
    btExcluir.addEventListener('click', (e) =>{
        divLinha.remove()
    })
    divExcluir.appendChild(btExcluir)
    divLinha.appendChild(divExcluir)

    return divLinha                      
}