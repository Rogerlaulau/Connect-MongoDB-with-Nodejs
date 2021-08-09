# How to Connect MongoDB with Node.js Using Mongoose

Mongoose Document: https://mongoosejs.com/docs/guide.html

* A web service with CRUD Restful APIs is demonstrated to show the interaction with MongoDB
    - get
    - post
    - patch
    - delete

* Add Basic Auth with express-basic-auth https://www.npmjs.com/package/express-basic-auth

* Either running MongoDB locally or in cloud
---

## run MongoDB locally

1. **Start Install and Run MongoDB with Homebrew**

https://treehouse.github.io/installation-guides/mac/mongo-mac.html

> In my case (MacOS):
>
> $ brew update
> $ brew install mongodb/brew/mongodb-community@4.4
> set mongodb-community@4.4 to the PATH / environment path:
> $ echo 'export PATH="/usr/local/opt/mongodb-community@4.4/bin:$PATH"' >> /Users/rogerlau/.bash_profile
> start the service:
> $ brew services start mongodb/brew/mongodb-community@4.4


2. **Start the service**
> $ node server.js


---
## run Cloud using MongoDB Atlas
Free cloud service: https://account.mongodb.com/account/login?signedOut=true
configure the database username and password in the config file .env
> $ node server.js


---

## Remark
Reading the .env File
https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786





