javascript: (async function () {
  const htmlNode = document.querySelector("html").cloneNode(true);
  const tmp = document.createElement("div");
  tmp.appendChild(htmlNode);
  const documentString = `<!DOCTYPE html>${tmp.innerHTML}`;

  const response = await fetch(`http://localhost:3000/nu/#file`, {
    method: "POST",
    cache: "no-cache",
    mode: 'cors', 
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
      "User-Agent": navigator.userAgent
    },
    referrerPolicy: "no-referrer", 
    body: documentString,
  });
  const html = await response.text();
  
  const newWindow = window.open("about:blank", "width=200,height=200", "_blank");
  let updatedHTML = html.replace("style.css",'https://validator.w3.org/nu/style.css');
  updatedHTML = updatedHTML.replace(/\<form(.*)form\>/g, "");
  newWindow.document.write(updatedHTML);
})();
