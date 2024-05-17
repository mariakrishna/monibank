export default function isItACpf(field) {
  const cpf = field.value.replace(/\.|-/g,"");
  if(validateRepetedNumbers(cpf) || validateFirstDigit(cpf) || validateSecondDigit(cpf)) {
    field.setCustomValidity('Esse CPF não é válido.')
  }
}

function validateRepetedNumbers(cpf) {
  const repetedNumbers = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999'
  ]
  return repetedNumbers.includes(cpf)
}

function validateFirstDigit(cpf) {
  let soma = 0;
  let multiplicador = 10;

  for(let tamanho = 0; tamanho < 9; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10 ) % 11;

  if(soma == 10 || soma == 11) {
    soma = 0;
  }

  return soma != cpf[9]
}

function validateSecondDigit(cpf) {
  let soma = 0;
  let multiplicador = 11;

  for(let tamanho = 0; tamanho < 10; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10 ) % 11;

  if(soma == 10 || soma == 11) {
    soma = 0;
  }

  return soma != cpf[10]
}