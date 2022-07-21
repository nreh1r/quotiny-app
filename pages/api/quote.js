import { MongoClient } from "mongodb"

async function handler(req, res) {
    if (req.method === "POST") {
        const newQuote = { ...req.body }

        if (
            !newQuote.email ||
            !newQuote.email.includes("@") ||
            !newQuote.name ||
            !newQuote.name.trim() === ""
        ) {
            res.status(422).json({ messgae: "Invalid input." })
            return
        }

        // Store Quote Info In Database

        let client
        const connectionString =
            "mongodb+srv://andre:andre5@cluster0.gymffbc.mongodb.net/quotes?retryWrites=true&w=majority"
        try {
            client = await MongoClient.connect(connectionString)
        } catch (error) {
            res.status(500).json({ message: "Could not connect to database" })
            return
        }

        const db = client.db()
        try {
            const result = await db.collection("quotes").insertOne(newQuote)
        } catch (error) {
            res.status(500).json({ message: "Storing quote failed" })
            return
        }

        client.close()
        res.status(201).json({
            message: "Successfully stored quote!",
            newQuote,
        })
    }
}

export default handler
