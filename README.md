### MessageBoard

#### Overview:

This is a web application that allows users to message others on the web application.

#### Design Choices:

The codebase splits the frontend and backend of the application into the 'client' and 'backend' directories respectively. 

##### Backend:

- The backend uses the Express.js framework to handle the backend.
- The backend utilizes the 'server.js' as the root to the backend server. This file has the capabilities to send requests to other routes. Here, a route is made to '/message'. Under this route, is the '/submit' route and '/viewMessages' route. The utilities of each route can be found in the 'routemessage.js' file. The '/submit' route handles new messages being sent and stores the messages in a list. The '/viewMessages' route sends the list of messages back to the frontend to be shown in the messageboard.

##### Frontend:

- The frontend uses the React.js technology along with Axios to send GET and POST requests.
- The front end is split into a 'Components' folder, a 'Stylesheets' folder and the main App.js file.
- The Component's folder contains three components 'Input.js', 'Chat.js' and 'Message.js'.
    - The Input component takes in the user's message and sends the message to the backend via a POST request. When the message is sent, the component also sends the timestamp with the message to the backend in the form of a list.
    - The Chat component takes a list of lists of messages and timestamps via a GET request and places the data into a constant that can be utilized by the frontend.
    - The Message component works in tandem with the Chat component to display each message with the timestamp and their individual message boxes.
- The Stylesheet's folder contains files that deal with the CSS of all of the frontend. 

#### Requirement fulfillments:

- Users can submit messages into the form and the message shows up on the board below.
- Messages show up from most recent to lest recent.
- Multiple users should be able to see the same board and view other's messages as all of the messages are stored in the backend using endpoints.

#### Technologies and Frameworks used:
- Node.js
- React.js
- Express.js
- Axios

#### How to use:

    Install:
        - "npm i --save express cors" in the backend directory
        - "npm install body-parser --save" in the backend directory
        - "npm i --save axios" in the client directory
        - Apologies if I missed anything. I'm not exactly sure what needs to be installed or not. Might have to install React.js too?

    Begin by running the backend by cd'ing into the "Backend" directory and entering 'node server.js' 
    
    Afterwards, open another terminal window and run the frontend first by cd'ing into the 'client' directory and then 'npm start'