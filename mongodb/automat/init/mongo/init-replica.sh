#!/bin/bash

echo ====================================================
echo ============= Initializing Replica Set =============
echo ====================================================

# Loop until MongoDB is ready to accept connections
until mongosh --host mongo-primary:27017 --eval 'quit(0)' &>/dev/null; do
    echo "Waiting for mongod to start..."
    sleep 5
done

echo "MongoDB started. Initiating Replica Set..."

# Use environment variables for username and password
MONGO_USER=${MONGO_INITDB_ROOT_USERNAME}
MONGO_PASS=${MONGO_INITDB_ROOT_PASSWORD}

# Connect to the MongoDB service and initiate the replica set
mongosh --host mongo-primary:27017 -u "$MONGO_USER" -p "$MONGO_PASS" --authenticationDatabase admin <<EOF
rs.initiate({"_id" : "replica-set","members" : [{"_id" : 0,"host" : "mongo-primary:27017"},{"_id" : 1,"host" : "mongo-worker-1:27017"},{"_id" : 2,"host" : "mongo-worker-2:27017"},{"_id" : 3,"host" : "mongo-worker-3:27017"}]});
EOF

echo ====================================================
echo ============= Replica Set initialized ==============
echo ====================================================