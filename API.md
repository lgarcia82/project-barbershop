# Project Barbershop
## :page_facing_up: REST API DOCUMENTATION

This API is a JSON based RESTful API. The HTTP methods used are `GET`, `POST`, `PUT`, and `DELETE` for identifying the action to be performed. These actions and their appropriate methods are specified in this documentation.

The API may be tested using any simple HTTP client or framework, such as Postman.

All responses are returned in a JSON format using an enveloping technique in **data** object wrapper

*single object response*
```json
{
  "data": {
    {
      "key": ""
    }
  }
}
```
*multiple object response*
```json
{
  "data": [
    {
      "key": ""
    }
  ]
}
```

### HTTP Response Status Codes
The api in this application will utilize response status codes from the following categories respectively 
| Status Code | Description |
| :--- | :--- |
| `200-299` | Successful Responses  |
| `400-499` | Client Errors |
| `500-599` | Server Errors |


## :diamond_shape_with_a_dot_inside: ENDPOINT DEFINTIONS

### GET requests/responses
Client Request URL
```http
GET /webception/v1/barbers
```

Server Success-Response Body 

`HTTP 200 OK`
```json
{
    "data": [
        {
            "id": 1,
            "name": "Some Name",
            "working": true,
            "image": "Some URL"
        },
        {
            "id": 2,
            "name": "Another Name",
            "working": false,
            "image": "Some URL"
        },
    ]
}
```

Client Request URL
```http
GET /webception/v1/barbers/{id#}
```

Server Success-Response Body 

`HTTP 200 OK`
```json
{
  "data": {
    {
      "id": {id#},
      "name": "Some Name",
      "image": "Some URL",
      "port_images": [
        {
          "profile_image": "Some URL"
        },
        {
          "profile_image": "Some URL"
        }
      ],
      "schedule": [
        {
          "day1_start": 700
          "day1_end": 1600 
        },
        {
          "day2_start": 700
          "day2_end": 1630 
        }
      ]
    }
  }
}
```