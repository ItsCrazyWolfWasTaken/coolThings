// Get the word from the URL
const urlParams = new URLSearchParams(window.location.search);
const word = urlParams.get("word");

if (word) {
    fetch("words.json")
        .then(response => response.json())
        .then(data => {
            if (data[word]) {
                document.getElementById("word").textContent = word;
                document.getElementById("pos").textContent = data[word].part_of_speech;
                document.getElementById("definition").textContent = data[word].definition;
                document.getElementById("sentence").textContent = data[word].used_in_sentence;
            } else {
                document.body.innerHTML = "<h1>Word not found!</h1><a href='index.html'>Back</a>";
            }
        })
        .catch(error => console.error("Error loading word details:", error));
} else {
    document.body.innerHTML = "<h1>No word selected!</h1><a href='index.html'>Back</a>";
}
