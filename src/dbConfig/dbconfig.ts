import mongoose from "mongoose"


export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log("monogDB Connected")
        })
        connection.on('error', (err) => {
            console.log("Mongo after connection error: ", err)
            process.exit()
        })
    } catch (error) {
        console.log("db connection error", error)
    }
}