document.addEventListener("DOMContentLoaded", function (e) {
  const htmlNode = document.querySelector("html");
  const tmp = document.createElement("<div>");
  tmp.appendChild(htmlNode);
  const documentString = `<!doctype html>${tmp.innerHTML}`;
  console.log(documentString);

//   window.open("https://validator.w3.org/nu/#textarea");
//   const textArea = document.querySelector("textarea");
//   textArea.value = documentString;

//   const submitButton = document.querySelector("#submit");
//   submitButton.click();
});
