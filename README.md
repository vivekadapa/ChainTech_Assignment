##Nodejs application with mongoDb as database

Follow the steps to run the application 

Step 1 
Clone this repository into your local environment.
Step 2 
Run the following commands 
cd server
npm install
Step 3
Check the database url based on the what you are using mongo atlas[cloud] or compass[local] in the db folder connect.js file.
Step 4
npm start to run the application
Step 5 
Use Postman or any other api flatform to send requests and test the api.


Testing each feature

GET request to /viewtasks to view all the requests
POST request to /addtask with title,description,completeBy as body of the request and completeBy should be of the form "YYYY-MM-DD"
PATCH request to /markcomplete with query id where id is the id of the document of the particular task so request to /markcomplete?id=
PATCH request to /edittask with id,title,description,completeBy as body of the request to edit the task
DELETE request to /deletetask with query id request to /deletetask?id=


