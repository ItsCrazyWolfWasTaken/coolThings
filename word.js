const params = new URLSearchParams(window.location.search);
const word = params.get("word");

fetch("master.json")
    .then(response => response.json())
    .then(data => {
        let wordData = null;
        let pos = null;
        let def = null;
        let sentence = null;

        for (const list in data) {
            if (data[list][word]) {
                wordData = data[list][word];
                pos = data[list][word].part_of_speech;
                def = data[list][word].definition;
                sentence = data[list][word].used_in_sentence;
                break;
            }
        }

        if (typeof wordData !== "undefined") {
            console.log(word)
            document.getElementById("word").textContent = word;
            document.getElementById("pos").textContent = `(${pos})`;
            document.getElementById("definition").textContent = `${def}`;
            document.getElementById("sentence").textContent = `${sentence}`;

            // Dynamically set image
            let img = document.getElementById("wordImage");
            img.src = `Photos/${word}.png`; // Assumes images are named exactly like words
            img.style.display = "block"; // Show image if found
        } else{
            document.body.innerHTML = "<h1>Word not found!</h1><a href='index.html'>Back</a>";
        }
    })
    // .catch(error => console.error("Error loading word:", error));
