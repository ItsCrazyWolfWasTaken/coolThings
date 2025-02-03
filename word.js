// Parse the URL to get the word
const params = new URLSearchParams(window.location.search);
const word = params.get("word");

fetch("words.json")
    .then(response => response.json())
    .then(data => {
        let wordData = null;

        // Search for the word in the JSON file
        for (const list in data) {
            if (data[list][word]) {
                wordData = data[list][word];
                break;
            }
        }

        if (wordData) {
            document.getElementById("word").textContent = word;
            document.getElementById("pos").textContent = data[word].part_of_speech;
            document.getElementById("definition").textContent = data[word].definition;
            document.getElementById("sentence").textContent = data[word].used_in_sentence;
        } else {
            document.body.innerHTML = "<h1>Word Not Found</h1><a href='index.html'>Back</a>";
        }
    })
    .catch(error => console.error("Error loading word data:", error));
