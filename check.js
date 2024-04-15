function check() {
    const text = textE.value;
    const words = wordsE.value.split(/\s+/);
    const included = [];
    const notIncluded = [];
    duplicates = [];
    words.forEach(word => {
        if (!word) return;
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        if (included.some(w => regex.test(w)) ||
            notIncluded.some(w => regex.test(w))) {
            duplicates.push(word);
            return;
        }
        if (text.match(regex)) {
            included.push(word);
        } else {
            notIncluded.push(word);
        }
    });
    duplicates = [...new Set(duplicates)];
    itc = included.join('\n');
    nitc = notIncluded.join('\n');
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
    result.style.display = 'table';
}
