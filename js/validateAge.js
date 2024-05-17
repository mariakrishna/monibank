export default function isAnAdult(field) {
  const birthDay = new Date(field.value);
  if (!validateAge(birthDay)) {
    const errorMessage = 'Você deve ser maior que 18 anos para se cadastrar.';
    field.setCustomValidity(errorMessage);
    console.log(errorMessage);
  } else {
    field.setCustomValidity('');
    console.log('O usuário é maior de idade');
  }
}

function validateAge(data) {
  const nowadays = new Date();
  const isAdult = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

  return nowadays >= isAdult
}