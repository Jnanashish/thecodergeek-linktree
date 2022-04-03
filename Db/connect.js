import mongoose from 'mongoose'

const connection = {}
console.log(process.env.MONGODB_URI);
async function connect(){
    if (connection.isConnected) {
        console.log("Connect to fdb");
        return;
    }

    const db  = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    connection.isConnected = db.connections[0].readyState
}

export default connect;