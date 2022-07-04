function Persona(nome, cognome, dataNscita){
    this.nome=nome
    this.cognome=cognome
    this.dataNscita= dataNscita
    this.getName = function(){
        return `${this.nome} ${this.cognome}`
    }
    this.getEta = function(){
        return `${this.dataNscita}`
    }
}
var table = document.querySelector('table')
var listaUtenti = [];
let i = 0

document.addEventListener("submit", function(event){
    event.preventDefault()
    let nome = document.getElementById('nome').value
    let cognome = document.getElementById('cognome').value
    let data = new Date(document.getElementById('data').value)
    let dataOggi = new Date();
    let eta = dataOggi.getTime() - data.getTime()
    eta = Math.floor(eta / (1000*60*60*24*365.25)) 
    listaUtenti.push(new Persona(nome, cognome, eta))
    console.log(listaUtenti[i]);
    console.log(listaUtenti[i].nome);
    

    var nuovaRiga = document.createElement("tr");
    var nuovaCella = document.createElement("td");
    var nuovaCellaEta = document.createElement("td");
    var contenutoCella = document.createTextNode(listaUtenti[i].getName());
    var contenutoCellaEta = document.createTextNode(listaUtenti[i].getEta());
    nuovaCella.append(contenutoCella);
    nuovaCellaEta.append(contenutoCellaEta);
    nuovaRiga.append(nuovaCella, nuovaCellaEta);
    table.appendChild(nuovaRiga);

    i++;
})

