export default function getClassification(imc) {
  let classificacao = '';
  if(imc <= 18.5) {
    classificacao = 'Magreza';
  }
  if(imc > 18.5 && imc < 24.9) {
    classificacao = 'Normal';
  }
  if(imc > 24.9 && imc < 29.9) {
    classificacao = 'Sobrepeso';
  }
  if(imc > 29.9 && imc < 39.9) {
    classificacao = 'Obesidade';
  }
  if(imc >= 40) {
    classificacao = 'Obesidade grave';
  }

  return classificacao;
}