import { MongoClient } from "mongodb"

async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email } = req.body

        if (!email || !email.includes("@") || !name || !name.trim() === "") {
            res.status(422).json({ messgae: "Invalid input." })
            return
        }

        // Store Contact Info In Database
        const newContact = {
            name,
            email,
        }

        let client
        const connectionString =
            "mongodb+srv://andre:andre5@cluster0.gymffbc.mongodb.net/contacts?retryWrites=true&w=majority"
        try {
            client = await MongoClient.connect(connectionString)
        } catch (error) {
            res.status(500).json({ message: "Could not connect to database" })
            return
        }

        const db = client.db()
        try {
            const result = await db.collection("contacts").insertOne(newContact)
        } catch (error) {
            res.status(500).json({ message: "Storing contact failed" })
            return
        }

        client.close()
        res.status(201).json({
            message: "Successfully stored contact!",
            newContact,
        })
    }
}

export default handler
