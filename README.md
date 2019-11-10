# Bookmark app

Bookmark app uses the GITHUB API for searching the repositories and bookmaring them. The app doesn't have DB, it stores the bookmarks into the text file on server.

## Installation
app requires [Node.js](https://nodejs.org/) v8+ to run.

### client:

Install the dependencies and devDependencies and start the server.

```sh
$ cd client
$ npm install
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### server:

The repositories are fetched from the GIHUB API according to user input. The bookmarks are saved into the file `server/db/data.txt` 

Install the dependencies and devDependencies and start the server.

```sh
$ cd server
$ npm install
$ npm start
```

#### API call

| API | URL |
| ------ | ------ |
| Search repositories | /repositories/:repo |
| Bookmark repository | /repositories/bookmark/:id/save |
| Fetch Bookmarks | /repositories/bookmark/all |
| Remove Bookmark | /repositories/bookmark/:id/remove |