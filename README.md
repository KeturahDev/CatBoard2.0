# _CatBaord2.0_

#### _An API that allows you to create, read, update, and delete cat object from a catboard database, 04/03/2020_

#### By _**Patrick Delaney, Jeremy Kale Padot, Rachel Schieferstein, Keturah Howard**_

## Description

_You have the ability to edit, create, observe, and delete objects in the database through this API._

### Component Diagram

![Screen Shot 2020-05-12 at 10 44 05 AM](https://user-images.githubusercontent.com/32975967/81727316-9d3a9700-943d-11ea-8fce-e8643b575d20.png)


### user stories:

* As a user, I want to be able to GET all boards.
* As a user, I want to be able to GET all posts related to boards.
* As a user, I want to be able to POST boards.
* As a user, I want to be able to POST posts to boards.
* As a user, I want to be able to POST comments to posts.
* As a user, I want to be able to PUT/Update specific boards.
* As a user, I want to be able to PUT/Update specific posts.
* As a user, I want to be able to DELETE specific boards.
* As a user, I want to be able to DELETE specific posts.


### API Endpoints

BOARDS
```
GET /api/boards
POST /api/boards
GET /api/boards/{boardId}
PUT /api/boards/{boardId}
DELETE /api/boards/{boardId}
```

POSTS
```
GET /api/boards/{boardId}/Posts
POST /api/boards/{boardId}/Posts
GET /api​/boards​/{boardId}​/Posts​/{id}
PUT /api​/boards​/{boardId}​/Posts​/{id}
DELETE /api/boards/{boardId}/Posts/{id}
PATCH /api​/boards​/{boardId}​/Posts​/{id}​/upvote
PATCH /api/boards/{boardId}/Posts/{id}/downvote
```

COMMENTS (*- Interface: work in progress -*)
```
GET /api/boards/{boardId}/posts/{postId}/Comments
POST /api/boards/{boardId}/posts/{postId}/Comments
GET /api/boards/{boardId}/posts/{postId}/Comments/{id}
PUT /api/boards/{boardId}/posts/{postId}/Comments/{id}
DELETE /api/boards/{boardId}/posts/{postId}/Comments/{id}
```


## Getting Started

Download the .zip file and extract all files into directory of your choice OR clone the repository to a directory. Open project directory in preferred text editor.

### Prerequisites

1. [.NET Framework](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.106-macos-x64-installer) 
2. Text Editor (Visual Studio Code)

## Specs

* Behavior: User is able to view objects within the database.
  * Input: "API call to view object(s) within the database."
  * Output: *Requested object(s) are returned to the user from the databse*

* Behavior: An object will be added to a databse through the API.
	* Input: "Create a cat object."
	* Output: *Object is stored in the database for future reference.*

* Behavior: An object will be deleted from the database using the API.
  * Input: "Delete an cat object."
  * Output: *Object is removed from the database through the API.*

* Behavior: User is able to edit objects within the database.
  * Input: "API put request is made to the API containing a body of the edited object"
  * Output: *Object with that id is updated to match the user's put request.*

## Setup/Installation Requirements

* _1. CLone the repository containing the API._
  * _Open your command terminal, navigate to the desktop directory and enter the following command: `> git clone `_.
* _2. After cloning the repository, navigate to the project directory of the repository._
  * `> cd cat-board-2.0`
  * `> cd cat-board-2.0`
* _3. Once you're inside the project directory, migrate the data to form a database in MySQL._
  <!-- * `> dotnet ef migrations add Initial` -->
  * `> dotnet ef database update`
  * _You now have the database neccessary to use the API!_
* _Now feel free to C.R.U.D. away using Postman, or by building an interface._

## Known Bugs

_No known bugs at this time._


## Support and contact details

_If you have any questions, suggestions, comments, or concerns, feel free to contact us through github._

## Technologies Used

* _C#_
* _.NETcore scaffolding_
* _json_
* _MVC_
* _Postman_
* _API versioning_
* _SwaggerEditer_
* _VScode_
* _MySQL_
* _MySQL Workbench_
* _React_
* _Node.js_


### License

*Licensed under the open source MIT license*


squad cred
mr.computer 💻
Co-authored-by: jeremy kale padot <jeremy@padot.us>
Co-authored-by: Patrick Delaney <prestwick97@gmail.com>
Co-authored-by: Rachel Schieferstein <violenza@gmail.com>