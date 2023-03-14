db = db.getSiblingDB('admin');
// move to the admin db - always created in Mongo
db.auth("admindev", "b4ck3ndd3v");
// log as root admin if you decided to authenticate in your docker-compose file...
db = db.getSiblingDB('microservice_backend_prod');
// create and move to your new database
db.createUser({
'user': "admindev",
'pwd': "b4ck3ndd3v",
'roles': [
    { role: "readWrite", db: "microservice_backend_prod" }
  ]
});
// user created
db.createCollection('users');
// add new collection