const params = new URLSearchParams(window.location.search);
const word = params.get("word");
console.log(word)

fetch("master.json")
    .then(response => response.json())
    .then(data => {
        let pos = null;
        let def = null;
        let sentence = null;
        console.log(data.word["part_of_speech"]);
        console.log(data.word["definition"]);
        console.log(data.word["used_in_sentence"]);

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
