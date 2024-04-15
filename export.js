function copy(text, element) {
  const txt = document.createElement('textarea');
  txt.value = text;
  document.body.appendChild(txt);
  txt.select();
  txt.style.opacity = 0;
  document.execCommand('copy');
  document.body.removeChild(txt);
  element.innerHTML = `
  <img src="copy.svg">
  Copied!
  `;
  setTimeout(function() {
    element.innerHTML = `
    <img src="copy.svg">
    Copy
  `;
  }, 1000);
}

function download(text, filename, element) {
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  element.innerHTML = `
  <img src="download.svg">
  Downloaded!
  `;
  setTimeout(function() {
    element.innerHTML = `
    <img src="download.svg">
    Download
  `;
  }, 1000);
}