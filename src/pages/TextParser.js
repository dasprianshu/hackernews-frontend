
function parseText(htmlText) {    // The provided HTML text
    // Parse the HTML text
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(htmlText, 'text/html');
    
    // Extract the text content
    const textContent = parsedDocument.body.textContent;
    
    // Decode HTML entities
    // const decodedText = new DOMParser().parseFromString(textContent, 'text/html').body.textContent;

    return textContent;
} 

export default parseText;

