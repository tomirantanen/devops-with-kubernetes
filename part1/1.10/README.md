# Exercise 1.10: Even more services

Split the "Log output" application into two different containers within a single pod:

One generates a new timestamp every 5 seconds and saves it into a file.

The other reads that file and outputs it with a hash for the user to see.

Either application can generate the hash. The reader or the writer.

## Solution

### log-writer

Log writer generates new files in every 5 seconds.
Filename is the timestamp in UTC and file contents is the random hash.

Build Docker image:

```
cd log-writer
docker build . -t tomirantanen/log-writer:1.10
```

Push to registry:

`docker push tomirantanen/log-writer:1.10`

### log-reader

Log reader will return the latest timestamp and hash when /status endpoint is called.

Build Docker image:

```
cd log-reader
docker build . -t tomirantanen/log-reader:1.10
```

Push to registry:

`docker push tomirantanen/log-reader:1.10`

### Running the app

Create Kubernetes resources:

`kubectl apply -f manifests`

View latest timestamp and hash in:

http://localhost:8081/status
