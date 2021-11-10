# Exercise 1.05: Project v0.3

Have the project respond something to a GET request sent to the project. A simple html page is good or you can deploy something more complex like a single-page-application.

Use `kubectl port-forward` to confirm that the project is accessible and works in the cluster by using a browser to access the project.

## Solution

Build Docker image:

`docker build . -t tomirantanen/todo-app:1.05`

Push to registry:

`docker push tomirantanen/todo-app:1.05`

Create Kubernetes deployment:

`kubectl apply -f manifests/deployment.yaml`

Open port:

`kubectl port-forward todo-app-7544db5b59-r2wzj 3003:3000`

Open page in the browser:

http://localhost:3003/index.html
