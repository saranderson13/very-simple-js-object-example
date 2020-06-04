class Body {

    // You technically you can add the code to create your content directly into the constructor.
    // But for objects that need like more than one element, this gets messy.
    // See the header.js for an example of using a function to create your content.
    constructor(bodyText) {
        // Grab the main container
        const container = document.getElementById('app-container')

        // Create a container for the content
        const content = document.createElement('p')

        // Add styling or other attributes.
        content.className = 'bodyStyling'

        // Insert the text into the content container.
        content.innerText = bodyText

        // Append the content container to the main container.
        container.appendChild(content)
    }

}