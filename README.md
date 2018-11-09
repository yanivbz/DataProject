# Data Update Project
The project is a form for client personal details update. 
You can enter first name, last name, gender and upload personal image.
The file will be uploaded to the server, and the client data will be updated on the DB.

## Project Technologies
* Frontend - AngularJS with MVC architecture, including Less for CSS Design.
* Backend - NodeJS.
* Database - Microsoft SQL Server.

## Project Structure
FrondEnd:
The files of the project are on the APP folder. 
in the app folder inside, you can find the mvc structure folders.
* controllers folder - the controllers of the page view
* services folder - the http post services for the apis.

Backend:
The files are on the Server folder.
* Connection folder - the database connection settings.
* Controller folder - the apis code.
* uploads folder - including the files you upload to the server
* app.js - the NodeJS server configuration

Database:

inside the DB folder, there is a backup file of the DB. 
The DB includes:
* Store procedure - UpdatePersonalDetials - for send data from the server.
* tbl_users - the table for updating the data.

## Getting Started
To start the project you may need to upload the frontend files to the IIS.
for the server code, you need start the server with the app.js file (node app.js).


