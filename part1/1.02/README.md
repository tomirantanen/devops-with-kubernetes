# Exercise 1.02: Project v0.1

**Project can be done with any language and framework you want**

The project will be a simple todo application with the familiar features of create, read, update, and delete (CRUD). We'll develop it during all parts of this course. Check the title of the exercise if you are unsure if it is building the project.

Todo is a text like "I need to clean the house" that can be in state of not-done or done.

Dashed lines separate major differences across the course. Some exercises are not included in the picture. The connections between most pods are not included as well. You're free to do them however you want.

Keep this in mind if you want to avoid doing more work than necessary.

Let's get started!

Create a web server that outputs "Server started in port NNNN" when it's started and deploy it into your Kubernetes cluster. You won't have access to the port yet but that'll come soon.

## Solution

Build Docker image:

`docker build . -t tomirantanen/todo-app:1.02`

Push to registry:

`docker push tomirantanen/todo-app:1.02`

Create Kubernetes deployment:

```
> kubectl create deployment todo-app --image=tomirantanen/todo-app:1.02
deployment.apps/todo-app created

> kubectl get pods
NAME                        READY   STATUS              RESTARTS   AGE
todo-app-68ffbb786b-rb9dw   0/1     ContainerCreating   0          9s

> kubectl logs -f todo-app-68ffbb786b-rb9dw

> todo-app@0.0.1 start:prod
> node dist/main

[Nest] 18  - 11/04/2021, 10:44:28 AM     LOG [NestFactory] Starting Nest application...
[Nest] 18  - 11/04/2021, 10:44:28 AM     LOG [InstanceLoader] AppModule dependencies initialized +148ms
[Nest] 18  - 11/04/2021, 10:44:28 AM     LOG [RoutesResolver] AppController {/}: +36ms
[Nest] 18  - 11/04/2021, 10:44:28 AM     LOG [RouterExplorer] Mapped {/, GET} route +104ms
[Nest] 18  - 11/04/2021, 10:44:28 AM     LOG [NestApplication] Nest application successfully started +10ms
[Nest] 18  - 11/04/2021, 10:44:28 AM     LOG Server started in port 3000
```
