const copyText = () => {
  let input   = document.getElementById("input");

  input.value.length < 8
  ? addAnimation('notCoped')
  : !/[a-z]/.test(input.value)
    ? addAnimation('notCoped')
    : !/[A-Z]/.test(input.value)
      ? addAnimation('notCoped')
      : !/[0-9]/.test(input.value)
        ? addAnimation('notCoped')
        : !/[@$!%*?&]/.test(input.value)
          ? addAnimation('notCoped')
          : input.value.includes(' ')
            ? addAnimation('notCoped')
            :(navigator.clipboard.writeText(input.value), addAnimation('wasCoped'));
}

const addAnimation = (x) => {
  let button = document.getElementById('copy');
  button.classList.add(`${x}`);
    
  setTimeout(() => {
    button.classList.remove(`${x}`);
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const lengthReq = document.getElementById('length');
  const numberReq = document.getElementById('number');
  const uppercaseReq = document.getElementById('uppercase');
  const lowercaseReq = document.getElementById('lowercase');
  const symbolReq = document.getElementById('symbol');

  const validatePassword = () => {
      const password = input.value;
      const requirements = [
          { regex: /.{8,}/, element: lengthReq},
          { regex: /\d/,element: numberReq},
          { regex: /[A-Z]/,element: uppercaseReq},
          { regex: /[a-z]/,element: lowercaseReq},
          { regex: /[@$!%*?&]/,element: symbolReq}
      ];

      requirements.forEach(requirement => {

      requirement.regex.test(password)
      ? (requirement.element.classList.add('valid'), requirement.element.classList.remove('notValid'))
      : password == ""
        ? (requirement.element.classList.remove('valid'), requirement.element.classList.remove('notValid'))
        : (requirement.element.classList.add('notValid'), requirement.element.classList.remove('valid'))
      });
  };

  input.addEventListener('input', validatePassword);
});