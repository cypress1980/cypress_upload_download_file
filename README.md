**This repository consist the code for How to upload and download files in Cypress

Uploading files is typically done using a file input element on a web page, and the selected file is sent to the server as part of an HTTP request. In Cypress, you can automate file uploads by simulating user interaction with the file input element and attaching a file to it using the .attach() command.

Downloading files typically done by sending an HTTP request to the server and receiving a file as part of the response. In Cypress, you can automate file downloads by intercepting the HTTP response and saving the file to a specified location on the user's computer using the .writeFile() command.

*Cypress provides several ways to upload the file in Cypress

**Procedure 1:
First procedure is using Using selectFile() command

Here are the various Syntax for select the file 
.selectFile(file)
.selectFile(file, options) 
.selectFile([file1, file2, ...]) 
.selectFile([file1, file2, ...], options)


**Procedure 2

Another way to upload the file using the plugin **cypress-file-upload**. Cypress-file-upload is a third-party plugin for the Cypress testing framework that allows you to simulate file uploads in your Cypress tests.
