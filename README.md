# Connect Messaging App
For the Connect Chat App, it is a real time chatting app that allows user to communicate with each other similar to a Facebook Messenger. Users can create an account and sign up and chat with friend or family.

**Link to project:** https://connectchat.netlify.app/
![image](https://user-images.githubusercontent.com/99767112/193182976-3ebff60c-c965-451a-b39f-c050538af517.png)

## How It's Made:

**Tech used:** React, Sass, Firebase

In the start of the screen, the user is prompted a login screen. The user could login or register depending if the user has an existing account. The account information is logged to firebase under authentication while image storage is being held under firebase storage. Once the user account is created, the user is redirected to the chat panel where the user can add other users of the chat app. Each user is given a unique id. In order to establish chats between two users, the user id is combined. Depending on the order of the id, it determines who is the sender and who is the reciever.
## Lessons Learned:

In the creation of this app, I have never used firebase and Sass before. Through this project I realized the power of firebase since Authetication and storage was handle all through firebase. In addition, Sass made styling easier since it was easier to manage and maintain code due to the code being cleaner
