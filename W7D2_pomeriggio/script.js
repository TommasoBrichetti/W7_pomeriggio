// class Person{
//     constructor (nome, eta){
//         this.nome = nome;
//         this.eta = eta;
//     }
//     compareAge(p){
//         if (this.eta > p.eta ){
//             console.log(`${this.nome} è più vecchio di ${p.nome}`);
//         }
//         else if(this.eta < p.eta ){
//             console.log(`${this.nome} è più giovane di ${p.nome}`);
//         }
//         else {
//             console.log(`${this.nome} e ${p.nome} hanno la stessa eta`);
//         }

//     }
// }

// let persona1 = new Person("mario",22);
// let persona2 = new Person("giovanni",44);

// persona1.compareAge(persona2);


// ----------------------------------------------------------

class Pagination {
    constructor(item = [], pageSize = 2) {
        this.item = item;
        this.pageSize = pageSize;

        this.item.forEach((element)=> {
            var nuovaRiga = document.createElement("tr");
            var nuovaCella = document.createElement("td");
            nuovaCella.innerHTML = element.nome + " " +element.cognome + " " + element.età;
            nuovaRiga.append(nuovaCella)
            table.appendChild(nuovaRiga);
        })

        this.getVisible() //! problema da risolvere
       
    }

    static i = 0;
    static j = 1;

    next() {
        Pagination.i = Pagination.i + this.pageSize;
        Pagination.j = Pagination.j + this.pageSize;
        this.getVisible()
    }
    prev() {
        if (Pagination.i > 0) {
            Pagination.i = Pagination.i - this.pageSize;
            Pagination.j = Pagination.j - this.pageSize;
            this.getVisible();
        } else { alert("sei già in prima pagina")};
    }
    first() {
        Pagination.i = 0;
        Pagination.j = 1;
        this.getVisible()
    }
    last() {
        Pagination.j = this.item.length;
        Pagination.i = Pagination.j-1;
        this.getVisible()
    }

    getVisible() {

        const list = document.querySelectorAll('tr');

        list.forEach((item) => item.classList.remove('active'))
        this.item[Pagination.i].classList.add('active') //!
        this.item[Pagination.j].classList.add('active') //!

    }
}

var table = document.querySelector('table')
let users = [
    { nome: "A", cognome: "1", età: 20 }, 
    { nome: "B", cognome: "2", età: 20 }, 
    { nome: "C", cognome: "3", età: 20 }, 
    { nome: "D", cognome: "4", età: 20 }, 
    { nome: "E", cognome: "5", età: 20 }, 
    { nome: "F", cognome: "6", età: 20 },
    { nome: "G", cognome: "7", età: 20 },
    { nome: "H", cognome: "8", età: 20 },
    { nome: "I", cognome: "9", età: 20 },
    { nome: "L", cognome: "10", età: 20 }
]

let p = new Pagination(users, 2);


document.getElementById('bottoneNext').addEventListener('click', p.next());
document.getElementById('bottonePrecedente').addEventListener('click', p.prev());
document.getElementById('bottoneInizio').addEventListener('click', p.first());
document.getElementById('bottoneUltima').addEventListener('click', p.last());

