import { md5 } from "./md5.js";
import { generatePassword } from "./password.js";
import { getRandom } from "./random.js";

const fldRandomEl = document.getElementById("fldRandom");
const btnUpdateRandom = document.getElementById("btnUpdateRandom");

const updateRandomNumber = () => {
  fldRandomEl.setAttribute("value", getRandom());
};
btnUpdateRandom.addEventListener("click", updateRandomNumber);
updateRandomNumber();

const fldMD5Value = document.getElementById("fldMD5Value");
const fldMD5Result = document.getElementById("fldMD5Result");
fldMD5Value.addEventListener("keyup", (e) => {
  fldMD5Result.setAttribute("value", md5(e.target.value));
});

const fldPasswordEl = document.getElementById("fldPassword");
const btnUpdatePassword = document.getElementById("btnUpdatePassword");

const updatePassword = () => {
  fldPasswordEl.setAttribute("value", generatePassword());
}
btnUpdatePassword.addEventListener("click", updatePassword);
updatePassword();
