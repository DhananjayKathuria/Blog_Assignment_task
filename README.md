# Django Blog Application

This repository contains the code for my Assignment Task, which includes a Django backend (`blog_project`) and a React frontend (`frontend`).

## Project Structure

- `blog_project/`: Django backend
- `frontend/`: React frontend

## Installation

### Backend (Django)

1. Navigate to the `blog_project` directory.
2. Set up a virtual environment (recommended).
3. Install dependencies: `pip install djangorestframework`, `pip install djangorestframework-simplejwt`
4. Run migrations: `python manage.py makemigrations`, `python manage.py migrate`
5. Create Superuser
6. Start the Django development server: `python manage.py runserver`

### Frontend (React)

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the React development server: `npm start`

## Usage

- Use the Django backend API endpoints for CRUD operations on blog posts and comments.
- Interact with the React frontend to view and manage blog posts and comments.

### Authorisation

Authorisation and Authentication has been incorporated. To access any of the API endpoints, first a user token has to be generated. To generate a token:

- create a superuser
- go to URL "{{URL}}/api/login/"
- login using superuser credentials
- a token shall be generated in a format like this --> "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzODE1MjA2LCJpYXQiOjE3MjEyMjMyMDYsImp0aSI6IjgyZGNlZjlmMTE0MzRjNmRhNjM1M2NiN2M3YzE0OTRkIiwidXNlcl9pZCI6MX0.c5wrBpU0Y2clVLn20e6CD4npHzrKeDtmcY2Ny98YHOg"
- this token is required to access any of the endpoints
- Under Headers:
  key : "Authorisation"
  value : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzODE1MjA2LCJpYXQiOjE3MjEyMjMyMDYsImp0aSI6IjgyZGNlZjlmMTE0MzRjNmRhNjM1M2NiN2M3YzE0OTRkIiwidXNlcl9pZCI6MX0.c5wrBpU0Y2clVLn20e6CD4npHzrKeDtmcY2Ny98YHOg"

### API Endpoints

#### List all posts

- **URL**: `/api/posts/`
- **Method**: `GET`
- **Description**: Retrieve a list of all blog posts.
- **Example Response**:
  ```json
  [
    {
      "id": 1,
      "title": "the test title",
      "content": "the test content in this post, just to check the model is working or not. This post ends here and doesn't need to be longer than it already is. Bye Bye fellas!!!!!",
      "author": "dhananjay",
      "published_date": "2024-07-16T20:02:41.969903Z"
    },
    {
      "id": 2,
      "title": "yet another title",
      "content": "the test content of post with title \"yet another title\"",
      "author": "dhananjay",
      "published_date": "2024-07-17T09:10:44.601545Z"
    }
  ]
  ```

##### Retrieve a single post

- **URL**: `/api/posts/<id>/`
- **Method**: `GET`
- **Description**: Retrieve a single blog post with a specific id.
- **Example Response**:

```json
{
  "id": 1,
  "title": "the test title",
  "content": "the test content in this post, just to check the model is working or not. This post ends here and doesn't need to be longer than it already is. Bye Bye fellas!!!!!",
  "author": "dhananjay",
  "published_date": "2024-07-16T20:02:41.969903Z"
}
```

###### Create a new post

- **URL**: `/api/posts/`
- **Method**: `POST`
- **Description**: Create a new blog post.
- **Example Request**:
  {
  "title": "New Post",
  "content": "This is the content of the new post."
  }
- **Example Response**:

```json
{
  "id": 3,
  "title": "Post with title 3",
  "content": "the test content of post with title \"Post with title 3\"",
  "author": "dhananjay",
  "published_date": "2024-07-17T13:34:05.164375Z"
}
```

###### Update an existing post

- **URL**: `/api/posts/<id>`
- **Method**: `PUT`
- **Description**: Update details of an existing blog post by its ID.
- **Example Request**:
  {
  "title": "Updated Title",
  "content": "Updated content of post."
  }
- **Example Response**:

```json
{
  "id": 3,
  "title": "Updated Title",
  "content": "Updated Content",
  "author": "dhananjay",
  "published_date": "2024-07-17T13:34:05.164375Z"
}
```

###### Delete an existing post

- **URL**: `/api/posts/<id>`
- **Method**: `DELETE`
- **Description**: Delete blog post by its ID.

###### Create a comment for existing post

- **URL**: `/api/posts/<id>/comments/`
- **Method**: `POST`
- **Description**: add a comment to blog post by its ID.
- **Example Request**:
  {
  "text": "test comment"
  }
- **Example Response**:
  ```json
  {
    "id": 5,
    "author": "dhananjay",
    "text": "second comment for post 2",
    "created_date": "2024-07-17T13:51:43.395621Z",
    "post": 2
  }
  ```

###### Retrieve comments on a post

- **URL**: `/api/posts/<id>/comments/`
- **Method**: `GET`
- **Description**: retrieve a list of the comments on a blog post by its ID.
- **Example Response**:

```json
[
  {
    "id": 2,
    "author": "dhananjay",
    "text": "comment for post 2",
    "created_date": "2024-07-17T09:16:12.716934Z",
    "post": 2
  },
  {
    "id": 3,
    "author": "dhananjay",
    "text": "another comment for post 2",
    "created_date": "2024-07-17T09:16:55.335763Z",
    "post": 2
  },
  {
    "id": 4,
    "author": "dhananjay",
    "text": "second comment for post 2",
    "created_date": "2024-07-17T13:50:48.076376Z",
    "post": 2
  }
]
```
