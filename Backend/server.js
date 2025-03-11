require("dotenv").config();
const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(cors({
    origin: ["https://flourishing-tarsier-87bdf4.netlify.app/", "http://localhost:5173"],
    methods: ["POST"],
    credentials: true
}));
app.use(express.json());

// ✅ Validate Twilio Credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

if (!accountSid || !authToken || !twilioNumber) {
    console.error("❌ Twilio credentials are missing! Check your .env file.");
    process.exit(1);
}

const client = new twilio(accountSid, authToken);

// ✅ Booking API Endpoint (No Database, Only WhatsApp)
app.post("http://localhost:5001/api/bookings", async (req, res) => {
    try {
        const { name, phone, club, time, table } = req.body;

        console.log("📩 Sending WhatsApp to:", phone);
        console.log("📋 Booking Details:", req.body);

        const message = await client.messages.create({
            from: "whatsapp:+14155238886",  // Twilio Sandbox Number
            to: `whatsapp:${phone}`,  
            body: `📅 Booking Confirmed!\n\nDear ${name},\nYour reservation is confirmed at Amrithya Cafe for ${time} at Table ${table} in ${club}. Enjoy! 🍽️`,
        });

        console.log("✅ WhatsApp Message Sent:", message.sid);
        res.json({ message: "Booking Confirmed!", twilioResponse: message.sid });
    } catch (error) {
        console.error("❌ Error sending WhatsApp message:", error);
        res.status(500).json({ error: "Failed to send WhatsApp confirmation.", details: error.message });
    }
});

// ✅ Server Listen
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
