class Header {

    // It is best to have a separate function to create your content.
    // See body.js for an example of directly inserting your content into the constructor.
    constructor(headerText) {
        this.createHeader(headerText)
    }
    

    
    createHeader(text) {
        // Grab your main container from the dom.
        // This is a div defined in your index.html.
        const container = document.getElementById("app-container")

        // Create a container for your content.
        const content = document.createElement('div')

        // Apply any class or id or other attributes that you want.
        content.className = "headerStyling"

        // Insert your text or other arguments into your content container.
        content.innerText = text

        // Append your content container to the main container.
        container.appendChild(content)





        // // You can also 'cheat', and just put your entire html as a string.
        // // This is considered bad practice, but would look something like this:
        // // As you can see it renders the same thing.

        // // (I'm only creating a container here to illustrate that you can stick a div into a container with .innerHTML)
        // // (I would do this just straight into the main container if I didn't want to also show how to do it properly)
        // const badContainer = document.createElement('div')

        // // Insert your html as a string into your div
        // badContainer.innerHTML = `<div class='headerStyling'>${text}</div>`

        // // Append the content div to the main container.
        // container.appendChild(badContainer)
    }

}