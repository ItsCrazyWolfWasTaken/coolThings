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
            document.getElementById("pos").textContent = wordData.part_of_speech;
            document.getElementById("definition").textContent = wordData.definition;
            document.getElementById("sentence").textContent = wordData.used_in_sentence;
        } else {
            document.body.innerHTML = "<h1>Word Not Found</h1><a href='index.html'>Back</a>";
        }
    })
    .catch(error => console.error("Error loading word data:", error));
