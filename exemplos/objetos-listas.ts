import { StringMappingType } from "typescript";

const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
} 

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
} 

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoaDeFutebol,
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 23,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programacao']
}

const Monica: Estudante = {
    nome: 'Monica',
    idade: 23,
    materias: ['Matemática discreta', 'programacao']
}

function listar(lista : string[]) {
    for(const item of lista) {
        console.log('- ', item);
    }
}

listar(Monica.materias);

