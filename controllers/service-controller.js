const Service = require('../models/service-model');

// Controller to get all services data
const Services = async (req, res) => {
    try {
        const response = await Service.find({});
        // Check if any services were found
        if (!response) {
            console.log("No services found");
            return res.status(404).json({message: "No services found"});
        }
        res.status(200).json({msg: response});
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log(`error: ${error.message}`);
    }
};

module.exports = Services;