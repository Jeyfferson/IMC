const nome = document.getElementById('nome').value;
const peso = document.getElementById('peso').value;
const altura = document.getElementById('altura').value;
const resultado = document.getElementById('resultado');
const calcular = document.getElementById('calcular');

const imc = () => {

   const nome = document.getElementById('nome').value;
   const peso = document.getElementById('peso').value;
   const altura = document.getElementById('altura').value;
   const resultado = document.getElementById('resultado');

   if (nome !== '' && altura !== '' && peso !== '') {
      calculo();
      
   }else{
      resultado.textContent = `Por favor, preencha todos os campos.`
   }
}

function calculo () {
   const nome = document.getElementById('nome').value;
   const peso = document.getElementById('peso').value;
   const altura = document.getElementById('altura').value;
   const resultado = document.getElementById('resultado');
   
   let valorImc = (peso / (altura * altura)).toFixed(2);
   let classificacao = ''
   
   if(valorImc < 18.5) {
      classificacao = 'baixo do peso'
   }else if(valorImc <= 24.9) {
      classificacao = 'Peso normal'
   }else if(valorImc <= 29.9) {
      classificacao = 'Excesso de peso'
   }else if(valorImc <= 34.9) {
      classificacao = 'Obessidade Grau I'
   }else if(valorImc <= 39.9) {
      classificacao = 'Obessidade Grau II'
   }else if(valorImc > 40) {
      classificacao = 'Obessidade Grau III, CUIDADO!!!'
       }

   
   resultado.textContent = `Srº ${nome} seu IMC é ${valorImc} e está ${classificacao}.`
   
}



calcular.addEventListener('click', imc)

