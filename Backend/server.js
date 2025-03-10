require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(cors({
    origin: ["http://deploy-mern-1whq.vercel.app"],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());

// ✅ Validate MongoDB URI
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
   

// ✅ MongoDB Connection with Error Handling

    

// ✅ Validate Twilio Credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

if (!accountSid || !authToken || !twilioNumber) {
    console.error("❌ Twilio credentials are missing! Check your .env file.");
    process.exit(1);
}

const client = new twilio(accountSid, authToken);

// ✅ Booking Schema & Model
const BookingSchema = new mongoose.Schema({
    name: String,
    phone: String,
    club: String,
    time: String,
    table: Number,
});

const Booking = mongoose.model("Booking", BookingSchema);

// ✅ Booking API Endpoint
app.post("/api/bookings", async (req, res) => {
    try {
        const { name, phone, club, time, table } = req.body;

        console.log("📩 Sending WhatsApp to:", phone);
        console.log("📋 Booking Details:", req.body);

        const message = await client.messages.create({
            from: "whatsapp:+14155238886",  // Twilio Sandbox Number
            to: `whatsapp:${phone}`,  // Send message to the provided phone number
            body: `📅 Booking Confirmed!\n\nDear ${name},\nYour reservation is confirmed at Amrithya Cafe for ${time} at Table ${table} in ${club}. Enjoy! 🍽️`,
        });

        console.log("✅ WhatsApp Message Sent:", message.sid);

        res.json({ message: "Booking Confirmed!", booking: req.body, twilioResponse: message.sid });
    } catch (error) {
        console.error("❌ Error sending WhatsApp message:", error);
        res.status(500).json({ error: "Failed to send WhatsApp confirmation.", details: error.message });
    }
});

// ✅ Server Listen
const PORT = 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

