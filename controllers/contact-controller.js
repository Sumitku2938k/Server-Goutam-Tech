const Contact = require('../models/contact-model');

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ message: "Contact form submitted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Failed to submit contact form", error: error.message });
    }
};

module.exports = contactForm;