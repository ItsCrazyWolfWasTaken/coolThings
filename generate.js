function fetchDictionary() {
    fetch('master.json')
        .then(response => response.json())
        .then(dictionary => generateDropdowns(dictionary))
        .catch(error => console.error('Error loading dictionary:', error));
}

function generateDropdowns(dictionary) {
    let container = document.getElementById("dictionary");
    container.innerHTML = "";
    
    Object.keys(dictionary).forEach(listName => {
        let details = document.createElement("details");
        let summary = document.createElement("summary");
        summary.textContent = listName.replace('_', ' ').toUpperCase();
        details.appendChild(summary);

        let ul = document.createElement("ul");
        
        Object.keys(dictionary[listName]).forEach(word => {
            let li = document.createElement("li");
            li.innerHTML = `<b>${word}</b> (${dictionary[listName][word].part_of_speech}): ${dictionary[listName][word].definition}<br><i>${dictionary[listName][word].used_in_sentence}</i>`;
            ul.appendChild(li);
        });

        details.appendChild(ul);
        container.appendChild(details);
    });
}

document.addEventListener("DOMContentLoaded", fetchDictionary);
function loadStylesheet() {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "styles.css";
    document.head.appendChild(link);
}

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

document.addEventListener("DOMContentLoaded", () => {
    loadStylesheet();
    generateDictionary();
});
