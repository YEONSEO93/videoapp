import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/videoapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to Db");
const handleError = (error) => console.log("DB Error", error);
db.on("error", handleError);
db.once("open", handleOpen);


// show dbs
// use videoapp
// show collections
// db.users.find()
// db.users.remove({})
