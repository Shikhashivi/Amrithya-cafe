require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(express.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

if (!accountSid || !authToken || !twilioNumber) {
    console.error("Twilio credentials are missing! Check your .env file.");
    process.exit(1);
}

const client = new twilio(accountSid, authToken);

mongoose.connect("mongodb://127.0.0.1:27017/bookings");

const BookingSchema = new mongoose.Schema({
    name: String,
    phone: String,
    club: String,
    time: String,
    table: Number,
});

const Booking = mongoose.model("Booking", BookingSchema);

app.post("/api/bookings", async (req, res) => {
    try {
        const { name, phone, club, time, table } = req.body;

        console.log("Sending WhatsApp to:", phone);
        console.log("Booking Details:", req.body);

        const message = await client.messages.create({
            from: "whatsapp:+14155238886",  // Twilio Sandbox Number
            to: "whatsapp:+917983574074",  // Your WhatsApp Number
            body: `📅 Booking Confirmed!\n\nDear ${req.body.name},\nYour reservation is confirmed to Amrithya Cafe for ${req.body.time} at Table ${req.body.table} in ${req.body.club}. Enjoy! Meet Us Soon🍽️`,
        });

        console.log("WhatsApp Message Sent:", message.sid);

        res.json({ message: "Booking Confirmed!", booking: req.body, twilioResponse: message.sid });
    } catch (error) {
        console.error("Error sending WhatsApp message:", error);
        res.status(500).json({ error: "Failed to send WhatsApp confirmation.", details: error.message });
    }
});


app.listen(5000, () => console.log("🚀 Server running on port 5000"));
