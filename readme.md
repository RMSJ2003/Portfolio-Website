How to Run:
1. Open VS Code and its terminal (bash).
2. cd over to the root folder of this project.
3. node index.js

Resources:

Here's how offsetTop works:
    - It measures the distance between the top border of the current element and the top border of its offset parent element.
    - If there is no offset parent, offsetTop measures the distance relative to the top of the document.
    - It provides a way to determine an element's position within its containing element or within the entire document.


offsetHeight is a property of the HTMLElement interface in JavaScript. It returns the height of an element, including vertical padding, border, and scrollbar, if present, but not the margin.

scrollTop: 
    - This variable represents the number of pixels that the document is currently scrolled vertically from the top. We use document.documentElement.scrollTop to get this value. If document.documentElement.scrollTop is not available (for compatibility reasons), we fallback to document.body.scrollTop.
scrollHeight: 
    -This variable represents the total height of the entire document, including content that is not visible due to scrolling. We use document.documentElement.scrollHeight to get this value. If document.documentElement.scrollHeight is not available, we fallback to document.body.scrollHeight.
clientHeight:
    - This variable represents the height of the viewport (the visible portion of the document in the browser window). We use document.documentElement.clientHeight to get this value. If document.documentElement.clientHeight is not available, we fallback to document.body.clientHeight.

https://www.w3schools.com/howto/howto_js_slideshow.asp

Install EJS-linter

The difference between mouseenter and mouseover is that mouseenter is only triggered when the mouse enters the element itself, while mouseover is triggered when the mouse enters any child elements as well.