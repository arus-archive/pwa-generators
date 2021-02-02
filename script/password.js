export function generatePassword(
  length = 8,
  symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
) {
  let result = "";
  for (let i = 0, n = symbols.length; i < length; ++i) {
    result += symbols.charAt(Math.floor(Math.random() * n));
  }
  return result;
}