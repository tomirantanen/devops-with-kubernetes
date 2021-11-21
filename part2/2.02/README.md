# Exercise 2.02: Project v1.0

Create a new container for the backend of the todo application.

You can use graphql or other solutions if you want.

Use ingress routing to enable access to the backend.

Create a POST /todos endpoint and a GET /todos endpoint in the new service where we can post a new todo and get all of the todos. You can also move the image logic to the new service if it requires backend logic.

The todos can be saved into memory, we'll add database later.

Frontend already has an input field. Connect it into our backend so that inputting data and pressing send will add a new todo into the list.

## Solution

### todo-frontend

```
cd todo-frontend
docker build . -t tomirantanen/todo-frontend:2.02
docker push tomirantanen/todo-frontend:2.02
```

### todo-api

```
cd todo-api
docker build . -t tomirantanen/todo-api:2.02
docker push tomirantanen/todo-api:2.02
```

Create Kubernetes resources:

`kubectl apply -f manifests`

View app:

http://localhost:8081/
