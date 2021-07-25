var translateBtn = document.querySelector("#translate");
var input = document.querySelector("#input-text");
var outputDiv = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

translateBtn.addEventListener("click", clickEventFunction);

function clickEventFunction() {
  fetch(getTranslationURL(input.value))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    });
}
