document.addEventListener('DOMContentLoaded', () => {

    // Grab the container. This will be needed for the later examples.
    const container = document.getElementById("app-container");

    // You can put your argument into a variable. But this is not required.
    const headerText = "First Example Header"
    const bodyText = "This is the body."


// -- -- -- DEMONSTRATING A FUNCTION THAT INSERTS THE HEADER INTO A HARDCODED CONTAINER.
// -- -- -- MAYBE OKAY IN SOME SCENARIOS.

    // Create your header object.
    const header = new Header(headerText);

    // Use that object's function to insert it into the page.
    // This function is hardcoded to insert the node into the 'app-container' div. 
    // Meaning it is less flexible because it can never be inserted into any other container,
    // If that container didn't exist you'd be screwed.
    // This is less flexible, less abstracted, and less scaleable.
    header.insertHeader()   


// -- -- -- DEMONSTRATING AN OBJECT THAT IS CREATED AND INSERTED UPON CREATION. 
// -- -- -- BAD. NOT SUGGESTED.

    // In this example, inserting the content into the page is hardcoded into the constructor.
    // This is even less flexible/abstracted/scaleable than having something like an #insertHeader function.
    // You could never even create a body without inserting it into that hardcoded container. Bad.
    new Body(bodyText); 


// -- -- -- DEMONSTRATING THE BEST WAY TO INSERT A NODE CREATED BY AN OBJECT INTO A CONTAINER.
// -- -- -- BEST WAY.

    // The most abstracted way is to just have your #createHeader, or #createBody function
    // return the node that you want to insert into the container.
    // This means *here* is where you append the node to the container.
    const betterHeader = new Header("This is a better way to insert a header.")
    container.appendChild(betterHeader.createHeaderNode())


// -- -- -- DEMONSTRATING A DECORATED HEADER.
// -- -- -- JUST FOR FUN.

    // Here is an example of our decorated header, created using a function that elaborates on
    // the header created by our basic #createHeaderNode function.
    const decoratedHeader = new Header("This header is decorated!")
    container.appendChild(decoratedHeader.decoratedHeader())

})