
import mongoose from "mongoose";

//const { MongoClient, ServerApiVersion } = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(process.env.MONGO, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


const connect = async () => {
    try {
    // Connect the client to the server	(optional starting in v4.7)
    //await client.connect();
    // Send a ping to confirm a successful connection
    //await client.db("website").command({ ping: 1 });
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection failed!");
  }
    
}


export default connect;