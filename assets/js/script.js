const generateMatchingString = (prefix, bit, ) => {
  const characters = "0123456789"
  let matchingString = `${prefix || ""}`;

  for (let i = 0; i < parseInt(bit); i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    matchingString += characters[randomIndex];
  }

  return matchingString;
};

const regResult = document.getElementById("regResult");
const btnGenerate = document.getElementById("btnGenerate");
const btnClip = document.getElementById("btnClip");

btnGenerate.addEventListener("click", () => {
  const prefix = document.getElementById("prefix").value;
  const numBit = document.getElementById("bit").value;
  regResult.innerText = generateMatchingString(prefix, numBit);
})

btnClip.addEventListener("click", () => {
  navigator.clipboard.writeText(regResult.innerText);
  alert("Copied to clipboard!");
});
