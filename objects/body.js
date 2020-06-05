class Body {

    // You technically you can add the code to create and insert your content directly into the constructor.
    // But this is bad. It is now inflexible, not scaleable, and not even remotely abstracted.
    // You cannot create this object without inserting it directly into a specific container, which may or may not exist.
    // The only thing you could customize is the text going inside the 'p'.
    // Basically - never do it this way. It defeats the purpose of having an object.
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