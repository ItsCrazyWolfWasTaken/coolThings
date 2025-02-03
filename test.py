#!/usr/bin/env python3

import cgi
import cgitb
cgitb.enable()  # Enable debugging for CGI scripts

print("Content-Type: text/html\n")  # Important: Always print this first!

# Get the URL parameter
form = cgi.FieldStorage()
word = form.getvalue("word")  # Extract 'word' from the URL

if word:
    print(f"<h1>You searched for: {word}</h1>")
else:
    print("<h1>No word provided!</h1>")