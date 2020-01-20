// Funções de Validação
export const required = value => {
  if (!value || value.trim() === '') {
    return 'Campo Obrigatório';
  }
  return undefined;
};

export const minLength = value => {
  if (value) {
    if (value.length < 4) {
      return 'Mínimo 4 caracteres!';
    }
    if (value.length > 80) {
      return 'Nome muito grande!'
    }
    return undefined;
  }
  ;
}

export const cnpjValidate = value => {
  if (!value) {
    return undefined
  }
  const cnpj = value.replace(/[^\d]+/g, '');
  if (cnpj.length != 14)
    return 'Quantidade de dígitos inválida';

  if (cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999") return 'CNPJ inválido'

  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0)) return 'CPNJ inválido';
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
    return 'CNPJ inválido';

  return undefined;
};

export const phoneValidate = value => {
  if (value) {
    const phone = value;
    if (!phone.match(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/)) {
      return 'Telefone Inválido'
    } else {
      return undefined;
    }
  }
};

export const passValidate = value => {
  if (value.length < 8) {
    return 'Mínimo 8 caracteres!';
  }
  if (value.length > 14) {
    return 'Senha muito grande!'
  }
  return undefined;
};

export const cepValidate = value => {
  if (value) {
    if (!value.match(/^\d{5}-\d{3}$/)) {
      return 'CEP inválido';
    } else {
      return undefined;
    }
  }
};

export const emailValidate = value => {
  if (value) {
    const email = value;
    email.toLowerCase();
    if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return 'Email inválido!'
    } else {
      return undefined;
    }
  }
};

export const cpfValidate = value => {
  if (value) {
    let Soma;
    let Resto;
    Soma = 0;
    const strCPF = value;
    if (strCPF == "00000000000") return 'CPF Inválido';
    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;

    if (Resto != parseInt(strCPF.substring(9, 10))) return 'CPF Inválido';

    Soma = 0;

    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;

    if (Resto != parseInt(strCPF.substring(10, 11))) return 'CPF Inválido';
    return undefined;
  }
  ;
}
