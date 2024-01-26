# Node.js Application with MongoDB

## Follow the steps below to run the Node.js application with MongoDB and test its features.

### Step 1: Clone the Repository
git clone https://github.com/vivekadapa/ChainTech_Assignment.git
### Step 2 Install Dependencies
##### Run the following commands
cd server,
npm install
### Step 3 Configure Database Connection
Check the database url based on the what you are using mongo atlas[cloud] or compass[local] in the db folder connect.js file.
### Step 4 Run the Application
npm start (or) node app.js to run the application 
### Step 5 Test the API
Use Postman or any other api flatform to send requests and test the api.


## Testing each feature

###### GET request to /viewtasks to view all the requests
###### POST request to /addtask with title,description,completeBy as body of the request and completeBy should be of the form "YYYY-MM-DD"
######Body:
######Sample=>{
  "title": "Task Title",
  "description": "Task Description",
  "completeBy": "YYYY-MM-DD"
}
###### PATCH request to /markcomplete with query id where id is the id of the document of the particular task so request to /markcomplete?id=
###### PATCH request to /edittask with id,title,description,completeBy as body of the request to edit the task
######Body:
######Sample=>{
  "id": "task_id",
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "completeBy": "YYYY-MM-DD"
}
###### DELETE request to /deletetask with query id request to /deletetask?id=


