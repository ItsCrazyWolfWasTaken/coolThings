function fetchDictionary() {
    fetch('master.json')
        .then(response => response.json())
        .then(dictionary => generateDropdowns(dictionary))
        .catch(error => console.error('Error loading dictionary:', error));
}

function generateDropdowns(dictionary) {
    const container = document.getElementById("dictionary");
    container.innerHTML = "";
    
    // biome-ignore lint/complexity/noForEach: <explanation>
        Object.keys(dictionary).forEach(listName => {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        summary.textContent = listName.replace('_', ' ').toUpperCase();
        details.appendChild(summary);

        const ul = document.createElement("ul");
        
        // biome-ignore lint/complexity/noForEach: <explanation>
                Object.keys(dictionary[listName]).forEach(word => {
            const li = document.createElement("li");
            li.innerHTML = `<b>${word}</b> (${dictionary[listName][word].part_of_speech}): ${dictionary[listName][word].definition}<br><i>${dictionary[listName][word].used_in_sentence}</i>`;
            ul.appendChild(li);
        });

        details.appendChild(ul);
        container.appendChild(details);
    });
}

document.addEventListener("DOMContentLoaded", fetchDictionary);
function loadStylesheet() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "styles.css";
    document.head.appendChild(link);
}

function generateDictionary() {
    const container = document.getElementById("dictionary");
    
    // biome-ignore lint/complexity/noForEach: <explanation>
        dictionary.forEach(entry => {
        const entryHtml = `
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
