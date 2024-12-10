const text = document.getElementById("text");

// Function to wrap each character in a span
function wrapTextInSpans(textElement) {
    textElement.innerHTML = textElement.textContent.replace(/\S/g, "<span>$&</span>");
}

wrapTextInSpans(text);

// Event delegation to handle mouseover and mouseout events for the spans
function handleMouseOver(event) {
    if (event.target.tagName.toLowerCase() === 'span') {
        event.target.classList.add('active');
    }
}

text.addEventListener('mouseover', handleMouseOver);
text.addEventListener('mouseout', (event) => {
    if (event.target.tagName.toLowerCase() === 'span') {
        event.target.classList.remove('active');
    }
});
