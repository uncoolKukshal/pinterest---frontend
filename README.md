# pinterest---frontend
Project Title: Dynamic Image Gallery with Filtering and Saving

Description:-
The project aims to create a dynamic image gallery similar to Pinterest, allowing users to browse through a collection of images fetched from a JSON file. The key features of the project include:

Dynamic Image Display:-
The project fetches image data from a JSON file using JavaScript's Fetch API.
Upon fetching, it dynamically populates the DOM with image elements, displaying them in a grid layout.

Filtering:-
Users can search for specific images by entering keywords into a search input field.
As the user types, the gallery dynamically filters and displays images matching the entered keywords, providing a responsive search experience.
Save Image Functionality:-
Each image displayed in the gallery has a "Save" button that appears on hover.
When users click the "Save" button, the corresponding image is added to their saved images collection.

Saved Images Display:-
Users can view their saved images by clicking on a heart or "Saved Images" icon.
Clicking the icon opens a separate section or modal that displays all the images the user has previously saved.
This section allows users to revisit their saved images at any time.

Technologies Used:-
HTML/CSS: For structuring the layout and styling the gallery.
JavaScript: For dynamic DOM manipulation, fetching data from the JSON file, filtering images, and handling user interactions.
JSON: To store image data in a structured format that can be easily fetched and parsed by JavaScript.
