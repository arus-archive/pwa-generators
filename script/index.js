import { md5 } from "./md5.js";
import { generatePassword } from "./password.js";
import { getRandom } from "./random.js";
import { getSHA } from "./sha.js";

const fldRandomEl = document.getElementById("fldRandom");
const btnUpdateRandom = document.getElementById("btnUpdateRandom");
const updateRandomNumber = () => {
  fldRandomEl.setAttribute("value", getRandom());
};
btnUpdateRandom.addEventListener("click", updateRandomNumber);
updateRandomNumber();

const fldPasswordEl = document.getElementById("fldPassword");
const btnUpdatePassword = document.getElementById("btnUpdatePassword");
const updatePassword = () => {
  fldPasswordEl.setAttribute("value", generatePassword());
};
btnUpdatePassword.addEventListener("click", updatePassword);
updatePassword();

const fldMD5Value = document.getElementById("fldMD5Value");
const fldMD5Result = document.getElementById("fldMD5Result");
fldMD5Value.addEventListener("keyup", (e) => {
  fldMD5Result.setAttribute("value", md5(e.target.value));
});

const fldSHA1Value = document.getElementById("fldSHA1Value");
const fldSHA1Result = document.getElementById("fldSHA1Result");
fldSHA1Value.addEventListener("keyup", async (e) => {
  fldSHA1Result.setAttribute("value", await getSHA(e.target.value, "SHA-1"));
});

const fldSHA256Value = document.getElementById("fldSHA256Value");
const fldSHA256Result = document.getElementById("fldSHA256Result");
fldSHA256Value.addEventListener("keyup", async (e) => {
  fldSHA256Result.setAttribute(
    "value",
    await getSHA(e.target.value, "SHA-256")
  );
});

const fldSHA384Value = document.getElementById("fldSHA384Value");
const fldSHA384Result = document.getElementById("fldSHA384Result");
fldSHA384Value.addEventListener("keyup", async (e) => {
  fldSHA384Result.setAttribute(
    "value",
    await getSHA(e.target.value, "SHA-384")
  );
});

const fldSHA512Value = document.getElementById("fldSHA512Value");
const fldSHA512Result = document.getElementById("fldSHA512Result");
fldSHA512Value.addEventListener("keyup", async (e) => {
  fldSHA512Result.setAttribute(
    "value",
    await getSHA(e.target.value, "SHA-512")
  );
});
