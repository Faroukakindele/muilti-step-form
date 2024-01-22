export function testEmail(value) {
  // Define the regular expression pattern for basic email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Use the pattern to test the email string
  const isValid = emailPattern.test(value);

  // Return true if the email is valid, otherwise false
  return isValid;
}
export function hasAlphabet(inputString) {
  if (!inputString.length) return true;
  // Define the regular expression pattern for checking the presence of alphabets
  const alphabetPattern = /[a-zA-Z]/;

  // Use the pattern to test the input string
  const hasAlphabet = alphabetPattern.test(inputString);

  // Return true if at least one alphabet character is present, otherwise false
  return hasAlphabet;
}
export function checkName(input) {
  if (input.includes(" ")) return true;
  return false;
}
export const numReducer = (arr) => arr.reduce((acc, cur) => (acc += cur), 0);
