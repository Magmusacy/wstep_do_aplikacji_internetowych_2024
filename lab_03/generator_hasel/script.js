const passwordForm = document.querySelector("#generator form");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*";

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const minLength = Number(formData.get("min-length"));
  const maxLength = Number(formData.get("max-length"));
  const containsNumbers = formData.has("numbers");
  const containsSpecialCharacters = formData.has("special-characters");
  if (
    minLength > maxLength ||
    (minLength === 0 && maxLength === 0) ||
    minLength <= 0 ||
    maxLength <= 0
  ) {
    alert("Wybrano niepoprawne wartości długosci hasła");
    return;
  }

  let characters = lowercase + uppercase;
  characters += containsNumbers ? numbers : "";
  characters += containsSpecialCharacters ? specialCharacters : "";

  let password = "";
  for (
    let i = 0;
    i < Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
    i++
  ) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  alert(password);
});
