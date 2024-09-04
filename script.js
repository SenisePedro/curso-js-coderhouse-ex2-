function simularEmprestimo(valorEmprestimo, numParcelas) {
    let valorParcela = valorEmprestimo / numParcelas;

    for (let i = 1; i <= numParcelas; i++) {
        console.log(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
    }
}

let valorEmprestimo = Number(prompt("Digite o valor do empréstimo:"));

let numParcelas = Number(prompt("Digite o número de parcelas:"));

simularEmprestimo(valorEmprestimo, numParcelas);