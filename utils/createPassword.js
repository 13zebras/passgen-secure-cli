import crypto from "crypto";

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "01234567890";
const symbols = "!@#$%^&*";

const createPassword = (passLength, noNumbers, hasSymbols) => {
  let characters = lower + upper;
  noNumbers ? "" : (characters += digits);
  hasSymbols ? (characters += symbols) : "";
  return generatePassword(passLength, characters);
};

const generatePassword = (passLength, characters) => {
  let password = "";
  const randomArr = [];
  const maxInt = characters.length;
  console.log("maxInt = ", maxInt);
  for (let i = 0; i < passLength; i++) {
    let random = crypto.randomInt(0, maxInt);
    randomArr.push(random);
    password += characters.charAt(random);
  }
  console.log(randomArr);
  return password;
};

export default createPassword;
