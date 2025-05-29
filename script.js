function generatePassword() {
  const length = parseInt(document.getElementById('length').value);
  const useUppercase = document.getElementById('uppercase').checked;
  const useLowercase = document.getElementById('lowercase').checked;
  const useNumbers = document.getElementById('numbers').checked;
  const useSymbols = document.getElementById('symbols').checked;

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  let charSet = '';
  if (useUppercase) charSet += uppercaseChars;
  if (useLowercase) charSet += lowercaseChars;
  if (useNumbers) charSet += numberChars;
  if (useSymbols) charSet += symbolChars;

  const output = document.getElementById('passwordOutput');

  if (charSet === '') {
    output.textContent = 'Please select at least one character type.';
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  output.textContent = password;
}
