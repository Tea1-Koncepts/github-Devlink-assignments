console.log("Fxn that Generate random passwords");
function generateRandomPassword(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = " ";
  for (let b = 0; b < length; b++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}
const passwordLength = 12;
const newPassword = generateRandomPassword(passwordLength);
console.log("Random Password generated successfully:", newPassword);
