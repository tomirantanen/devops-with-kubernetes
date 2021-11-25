# Exercise 2.09: Daily todos

Create a CronJob that generates a new todo every day to remind you to do 'Read < URL >'.

Where < URL > is a wikipedia article that was decided by the job randomly. It does not have to be a hyperlink, the user can copy paste the url from the todo.

https://en.wikipedia.org/wiki/Special:Random responds with a redirect to a random wikipedia page so you can ask it to provide a random article for you to read. TIP: Check location header

## Solution

Use same namespace, configmaps and secrets as in previous exercises.

Build and push cron-job image:

```
cd cron-job
docker build . -t tomirantanen/cron-job:2.09
docker push tomirantanen/cron-job:2.09

```

Create Kubernetes resources:

`kubectl apply -f manifests`

View todo app:

http://localhost:8081/

New Wikipedia url is added to database every minute.
