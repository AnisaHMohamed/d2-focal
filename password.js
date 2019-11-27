
const obfuscatePassword = (entry) => {
  let password = "";
  for (let index = 0; index < entry.length; index++) {
    const letter = entry[index];
    if (letter === 'a') {
      password = password + "4";
    } else if (letter === 'e') {
      password = password + "3";
    } else if (letter === 'o') {
      password = password + "0";
    } else if (letter === "l") {
      password = password + "1";
    } else {
      password = password + letter;
    }
  }
  return password;
};
console.log(obfuscatePassword("audaciously"));