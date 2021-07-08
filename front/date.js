var select = document.getElementById('ano')
const data = new Date()

for(let i=0; i<=30; i++){
    var anos = data.getFullYear()-i
    console.log(anos)
    option = new Option(anos, anos)
    select.add(option)
}