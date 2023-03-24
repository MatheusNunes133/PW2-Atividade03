import { IFuncionario, IPessoas } from "./interfaces/interfaces";

let employee: IFuncionario = {
    code: 10,
    name: "John"
}

let pessoa1: IPessoas = {
    nome: "Maria",
    idade: 29,
    profissao: "Atriz"
}

let pessoa2: IPessoas = {
    nome: "Roberto",
    idade: 19,
    profissao: "Padeiro"
}

let pessoa3: IPessoas = {
    nome: "Laura",
    idade: 32,
    profissao: "Atriz"
}

let pessoa4: IPessoas = {
    nome: "Carlos",
    idade: 19,
    profissao: "Padeiro"
}

console.log(employee)
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)