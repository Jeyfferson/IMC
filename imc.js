



const calcular = document.getElementById('calcular');

function imc(){
   const peso = document.getElementById('peso').value;
   const altura = document.getElementById('altura').value;
   const nome = document.getElementById('nome').value;   
   const resultado = document.getElementById('resultado');

   if(nome !== '' && altura !== '' && peso !== ''){

      const valorImc = (peso / (altura * altura)).toFixed(2);

      let classificacao = '';

      if(valorImc < 18.5){
         classificacao = 'Abaixo do peso';
      }else if(valorImc <= 24.9){
         classificacao = 'com Peso normal';
      }else if(valorImc <= 29.9){
         classificacao = 'com Excesso de peso';
      }else if(valorImc <= 34.9){
         classificacao = 'com Obessidade Grau I';
      }else if(valorImc <= 39.9){
         classificacao = 'com Obessidade Grau II';
      }else{
         classificacao = 'com Obessidade Grau III';
      }
      resultado.textContent = `${nome} seu imc é ${valorImc} e está ${classificacao}.`
/*
      if(valorImc < 18.50){
         resultado.textContent = `Seu imc é ${valorImc} e está Abaixo do peso normal.`;
      }else if(valorImc <= 24.90){
         resultado.textContent = `Seu imc é ${valorImc} e está com Peso normal.`;
      }else if(valorImc <= 29.90){
         resultado.textContent = `Seu imc é ${valorImc} e está Excesso peso.`;
      }else if(valorImc <= 34.90){
         resultado.textContent = `Seu imc é ${valorImc} e está Obessidade Classe I.`;
      }else if(valorImc <= 39.90){
         resultado.textContent = `Seu imc é ${valorImc} e está Obessidade Classe II.`;
      }else{
         resultado.textContent = `Seu imc é ${valorImc} e está Obessidade Classe III.`;
      }
*/
      

   }else{
      resultado.textContent = 'Preencha todos os campos.' //Usar conteudo dentro da div
   }
}

calcular.addEventListener('click', imc);