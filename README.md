# Distributed Systems Lab
CRUD todo application with express and MySQL

## Setup
Clone the repository and use the following docker command to run the Backend together with MySQL database:
`docker-compose up -d`

## Endpoint definitions

```
GET     /todos/         // returns list of todos
GET     /todos/:id      // returns todo if exists
POST    /todos/         // created new todo
DELETE  /todos/:id      // deletes todo if exists
PUT     /todos/         // updates all properties of todo
```

## Unified API response
To simplify the integration of the REST API for the frontend, the REST API uses unified responses. The response consists of a JSON object, which looks like this:

```JSON
{
    "success": true|false,
    "result": []|null,
    "errors": [],
    "message": []
}
```

## API documentation
### GET /todos/
```JSON
Description:            Returns a list of todos in key property
```
```JSON
Body of Request:        -
```

```JSON
HTTP Codes of Response: [200]
Body of Response: 
{
    "success": true,
    "result": [
        {
            "id": 2,
            "todo": "Clean Car",
            "priority": 7
        },
        {
            "id": 3,
            "todo": "Pay Bills",
            "priority": -50
        }
    ],
    "errors": [],
    "message": []
}
```

### POST /todos/
```JSON
Description:            Creates new todo
```
```JSON
Body of Request:
{
    "todo": "Get drunk",
    "priority": 9
}
```

```JSON
HTTP Codes of Response: [200]
Body of Response: 
{
    "success": true,
    "result": null,
    "errors": [],
    "message": [
        "todo.createdSuccessfully"
    ]
}
```

### GET /todos/:id
```JSON
Description:            Returns single todo for a given id
```
```JSON
Body of Request:        -
```

```JSON
HTTP Codes of Response: [200]
Body of Response: 
{
    "success": true,
    "result": {
        "id": 2,
        "todo": "Clean Car",
        "priority": 7
    },
    "errors": [],
    "message": []
}
```

```JSON
HTTP Codes of Response: [404]
Body of Response: 
{
    "success": false,
    "result": null,
    "messages": [],
    "errors": [
        {
            "code": 5002,
            "message": "todo.doesNotExist"
        }
    ]
}
```

### DELETE /todos/:id
```JSON
Description:            Deletes single todo
```
```JSON
Body of Request:        -
```

```JSON
HTTP Codes of Response: [200]
Body of Response: 
{
    "success": true,
    "result": null,
    "errors": [],
    "message": [
        "todo.deletedSuccessfully"
    ]
}
```

```JSON
HTTP Codes of Response: [404]
Body of Response: 
{
    "success": false,
    "result": null,
    "messages": [],
    "errors": [
        {
            "code": 5002,
            "message": "todo.doesNotExist"
        }
    ]
}
```

### PUT /todos/
```JSON
Description:            Updates full todo. id in body is required
```
```JSON
Body of Request:        
{
    "id": 3,
    "todo": "play basketball",
    "priority": 1
}
```

```JSON
HTTP Codes of Response: [200]
Body of Response: 
{
    "success": true,
    "result": null,
    "errors": [],
    "message": [
        "todo.updatedSuccessfully"
    ]
}
```

```JSON
HTTP Codes of Response: [404]
Body of Response: 
{
    "success": false,
    "result": null,
    "messages": [],
    "errors": [
        {
            "code": 5002,
            "message": "todo.doesNotExist"
        }
    ]
}
```


