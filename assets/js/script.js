// 履歴
const history = new Array();

const generateMatchingString = (prefix, bit) => {
  const characters =
    "abcdedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let matchingString = `${prefix || ""}`;

  for (let i = 0; i < parseInt(bit); i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    matchingString += characters[randomIndex];
  }

  const isExist = history.includes(matchingString);

  if (isExist) {
    return generateMatchingString(prefix, bit);
  }

  history.push(matchingString);
  console.log(history);
  return matchingString;
};

const regResult = document.getElementById("regResult");
const btnGenerate = document.getElementById("btnGenerate");
const btnClip = document.getElementById("btnClip");

btnGenerate.addEventListener("click", () => {
  const prefix = document.getElementById("prefix").value;
  const numBit = document.getElementById("bit").value;
  regResult.innerText = generateMatchingString(prefix, numBit);
});

btnClip.addEventListener("click", () => {
  navigator.clipboard.writeText(regResult.innerText);
  alert("Copied to clipboard!");
});

// 除外する
const btnAddExclusion = document.getElementById("btnAddExclusion");
btnAddExclusion.addEventListener("click", () => {
  const exclusions = (document.getElementById("exclusion").value).split(",");
  history.push(...exclusions);
  console.log(history);
})