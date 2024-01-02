const alunos = ['João', 'Vitor', 'Mariana']

// Acessar todo o array
console.log(alunos);

// Acessar o array em uma posição específica
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

// Adicionando info no final do array
alunos.push('Jamison');
console.log(alunos[3]);

// Adicionando info em uma posição específica no array
alunos[4] = 'Tiana';
console.log(alunos);

// Podemos ter mais de um tipo dentro do array
alunos.push(10);
console.log(alunos);

// Excluindo o último elemento de um array
const teste = ['1', '2', '3'];
console.log(teste);

console.log(teste.pop());

console.log(teste);

// Excluindo o primeiro elemento de um array
teste.shift();
console.log(teste);

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

// Ver o tamanho da lista
console.log(notas.length);

