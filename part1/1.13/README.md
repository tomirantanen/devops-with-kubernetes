# Exercise 1.13: Project v0.7

For the project we'll need to do some coding to start seeing results in the next part.

  1. Add an input field. The input should not take todos that are over 140 characters long.

  2. Add a send button. It does not have to send the todo yet.

  3. Add a list for the existing todos with some hardcoded todos.


## Solution

Build frontend:

```
rm -rf static
cd frontend
npm install
npm run build
cd ..
cp -r ./frontend/build/ ./static
```

Build Docker image:

`docker build . -t tomirantanen/todo-app:1.13`

Push to registry:

`docker push tomirantanen/todo-app:1.13`

Create Kubernetes resources:

`kubectl apply -f manifests`

View app:

http://localhost:8081/index.html
