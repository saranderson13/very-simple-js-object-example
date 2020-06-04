document.addEventListener('DOMContentLoaded', () => {

    const headerText = "This is a header."
    const bodyText = "This is the body."

    // Create your header object.
    const header = new Header(headerText);

    // Use that object's function to insert it into the page.
    // This function is hardcoded to insert the node into the 'app-container' div. 
    // Meaning it is less flexible because it can never be inserted into any other container,
    // so if that container didn't exist you'd be screwed.
    // This is less flexible, less abstracted, and less scaleable.
    header.insertHeader()   

    // In this example, inserting the content into the page is hardcoded into the constructor.
    // This is even less flexible/abstracted/scaleable than having something like an #insertHeader function.
    // You could never even create a body without inserting it into that hardcoded container. Bad.
    new Body(bodyText); 


    // The most abstracted way is to just have your #createHeader, or #createBody function
    // return the node that you want to insert into the container.
    // This means *here* is where you find the container and append the node to it.
    // (note that we are still using the header object created above, so that would still need to happen first.)
    const container = document.getElementById("app-container");
    container.appendChild(header.createHeaderNode())

})