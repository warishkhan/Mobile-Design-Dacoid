// Function to fetch and inject HTML content
const injectHTML = async (elementId, filePath) => {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${filePath}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(error.message);
    }
};

// Inject header and footer into respective elements
window.onload = () => {
    injectHTML('header-container', 'header.html');
};