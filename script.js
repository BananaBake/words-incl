const textE = document.getElementById('text');
const wordsE = document.getElementById('words');
const result = document.getElementById('result');
const includedE = document.getElementById('included');
const notIncludedE = document.getElementById('not-included');
const includedLabel = document.getElementById('included-label');
const notIncludedLabel = document.getElementById('not-included-label');
function check() {
  const text = textE.value;
  const words = wordsE.value.split(/\s+/);
  const included = [];
  const notIncluded = [];
  words.forEach(word => {
    if (!word) return;
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    if (text.match(regex)) {
      included.push(word);
    } else {
      notIncluded.push(word);
    }
  });
  includedLabel.textContent = `Included: (${included.length})`;
  notIncludedLabel.textContent = `Not included: (${notIncluded.length})`;
  includedE.innerHTML = "";
  notIncludedE.innerHTML = "";
  included.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    includedE.appendChild(li);
  });
  notIncluded.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    notIncludedE.appendChild(li);
  });
  result.style.display = 'block';
}