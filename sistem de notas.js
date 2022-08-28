//Sistema de notas

const nota = prompt ("Informe a nota");
if (nota1 < 40)

alert(`Sua nota1 foi ${nota1}, você foi reprovado!`);

const nota1 = arredondar(nota);
        if (nota >= 0 && nota <= 100){


function arredondar(nota){
    let notaArredondada;
    for (let i = 0; i < 2; i++)
    
    nota++;
        if (nota % 5 == 0){
    notaArredondada = nota;
    return notaArredondada;
    }else{
        notaArredondada = nota;
        return notaArredondada -1;
    }
    
}
    }else{
        alert("Nota inválida!");
    }