const dictionary = [
    
];

function generateDictionary() {
    let container = document.getElementById("dictionary");
    
    dictionary.forEach(entry => {
        let entryHtml = `
            <h3><b><i>${entry.word}</i></b> (${entry.partOfSpeech})</h3>
            <ol>
                ${entry.definitions.map(def => `<li>${def}</li>`).join('')}
                <li><img src="${entry.file}" height="100px"></li>
            </ol>
        `;
        container.innerHTML += entryHtml;
    });
}

document.addEventListener("DOMContentLoaded", generateDictionary);
