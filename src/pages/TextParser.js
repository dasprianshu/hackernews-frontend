
function parseText(htmlString) {
    // Create a new DOMParser
    const parser = new DOMParser();
  
    // Parse the HTML string and create a DOM document
    const doc = parser.parseFromString(htmlString, 'text/html');
  
    // Return the body of the DOM document, which contains the HTML elements
    return doc.body;
} 

export default parseText;

