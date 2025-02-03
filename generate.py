import json
import cgi
import cgitb
cgitb.enable()  # Enable error debugging

# Load the JSON file
with open("master.json", "r") as file:
    words_data = json.load(file)

# Get the word from the URL query
form = cgi.FieldStorage()
word = form.getvalue("word")

# Search for the word in word lists
word_details = None
for word_list in words_data.values():
    if word in word_list:
        word_details = word_list[word]
        break

# Print HTTP header
print("Content-type: text/html\n")

# If word is found, generate HTML
if word_details:
    print(f'''
    <!DOCTYPE html>
    <html>
    <head>
        <title>Goofy Ahhh Dictionary | {word}</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>DICTIONARY</h1>
        <h3><b><i>{word}</i></b> ({word_details["part_of_speech"]})</h3>
        <ol>
        <li>{word_details["definition"]}</li>
        <li>{word_details["used_in_sentence"]}</li>
        <li><img src="../Photos/{word}.png" height=100px></li></ol>
        <a href="index.html">Home</a>
    </body>
    </html>
    ''')
else:
    print("<h1>Word not found!</h1><a href='index.html'>Back</a>")
