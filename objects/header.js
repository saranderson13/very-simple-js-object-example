class Header {

    // It is best to have a separate function to create your content.
    // In the constructor all we want to do make the provided argument a property of the header object.
    // See body.js for an example of directly inserting your content into the container from the constructor. (which is bad)
    constructor(headerText) {
        this.content = headerText
    }
    

    
    insertHeader() {
        // Grab your main container from the dom.
        // This is a div defined in your index.html.
        const container = document.getElementById("app-container")

        // Create a container for your content.
        const content = document.createElement('h2')

        // Apply any class or id or other attributes that you want.
        content.className = "headerStyling"

        // Insert your text or other arguments into your content container.
        content.innerText = this.content

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

    // Best option!
    // Create a method that returns a node that you want to insert somewhere.
    // You can then insert this node anywhere!
    // There is no pre-determined container, you do not need to pass in an argument, it is clean and multi-functional.
    // If you wanted to use a method like this to create a basic header, you could then
    // create other methods to 'decorate' or alter your basic header for specific situations.
    createHeaderNode() {
        // Create a container for your content.
        const headerNode = document.createElement('h2')

        // Apply any class or id or other attributes that you want.
        headerNode.className = "headerStyling"

        // Insert your text or other arguments into your content container.
        headerNode.innerText = this.content

        return headerNode
    }

}