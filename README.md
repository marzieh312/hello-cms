# Hello CMS App
This project consists of two parts 
## bff
is responsible for providing the data for our ui. it will run a json-server which gets data from json-file. Our backend will connect to this server to ask for required information. 
## ui
is going to render the interface for the app, it will conect to our bff and get the required data from css to render the pages

# How to run the app
## backend
go to bff folder 
```
yarn install
yarn start
```

you can see available resources here 
  http://localhost:3000/homepage
  http://localhost:3000/faqs

check graphql interface here to test the queries
http://localhost:3600/graphql


## ui
in a different terminal shell, go to ui folder
```
yarn install
yarn start
```
now you should be able to find the app here:
http://localhost:3002/

## improvement
- unfortunately becuase of time limit, I didn't have this chance to add unit and integration tests
- this design is baased on the simplest design to meet the requirements in the challange