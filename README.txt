Maimbo Sianyaka - ICT251 Personal Portfolio 
A responsive, interactive personal portfolio built with plain HTML5, CSS and JavaScript. Enhanced from Activity 2 and deployed as a static site on Render via GitHub.
Live site: <add your https://….onrender.com URL here>
JavaScript features (js/script.js)
1.	Contact form validation + local preview (compulsory) - rejects empty or whitespace-only names/messages and invalid email addresses, shows clear error messages next to each field, and displays a local preview summary without reloading. event.preventDefault() keeps everything in the browser; the preview states that data was validated, not delivered.
2.	Gallery viewer - Previous / Next buttons cycle through the three photos and update the caption and counter; wraps correctly at the first and last photo.
3.	Project filter & search - category buttons (All / HTML / CSS / JavaScript) plus a text search, a Reset button, and a helpful message when nothing matches.
4.	Theme switch - toggles between readable light and dark appearances.
How to test
•	Open index.html with VS Code Live Server and check the browser Console for errors.
•	Form: submit with empty fields, spaces only, and a bad email - each should show an error; a valid entry should show the green preview box.
•	Gallery: click Next past the last photo and Previous past the first photo.
•	Filters: click each category, type a word that matches nothing, then press Reset.
•	Theme: click the dark/light button and check text stays readable in both modes.
•	Resize to about 375 px wide: no sideways scrolling, buttons remain usable.
Project structure
index.html
css/styles.css
js/script.js
images/   (three photos)
videos/   (video and audio files)
Sources
•	MDN Web Docs - Learn Web Development (https://developer.mozilla.org/en-US/docs/Learn_web_development)
•	Mulungushi University ICT251 course material (Activity 2 and 3 briefs)
