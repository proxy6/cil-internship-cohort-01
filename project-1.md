# Describe any layered process you are familiar with similar to the OSI model 
Model-View-Controller (usually known as MVC) is a software design pattern commonly used for developing user interfaces that divide the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user. As the name implies,  it has three major parts:
- Model: The Model encloses the application related data.
- View: The View element is used for presenting the data of the model to the user.
- Controller: The Controller is in between the model and the view element. It listens to all the incident and actions triggered in the view and performs an appropriate response back to the events.

![MVC Model](https://www.w3schools.in/wp-content/uploads/2019/03/MVC-Architecture.png?ezimgfmt=rs:511x294/rscb6/ng:webp/ngcb6)

 The diagram above shows the flow of data in an MVC model.
 
 The traditional software design pattern works in an "Input - Process - Output" pattern whereas MVC works as "View-Controller-Model" approach.
 - The View deals with the view or frontend of the application. 
 - The controller handles all the requests done on the view and gives a response back to the View.
 - The Model works together with the database to fetch data required by the Controller.

 