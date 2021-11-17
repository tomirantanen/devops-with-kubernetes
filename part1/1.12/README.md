# Exercise 1.12: Project v0.6

Since the project looks really boring at the moment let's add some outside resources.

A daily image where every day a new image is fetched on the first request.

Get an image from Lorem Picsum like `https://picsum.photos/1200` and display it in the project. Make sure to cache the image into a volume so we don't spam the API for new images every time we access the application or the container crashes.

## Solution

Build Docker image:

`docker build . -t tomirantanen/todo-app:1.12`

Push to registry:

`docker push tomirantanen/todo-app:1.12`

Create Kubernetes resources:

`kubectl apply -f manifests`

View app:

http://localhost:8081/index.html
