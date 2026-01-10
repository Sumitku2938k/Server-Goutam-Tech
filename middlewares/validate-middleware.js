// await schema.parseAsync(req.body)  is the line where you use Zod to validate the request 
// body data against the defined schema. -> check karega ki User ne jo data fill kiya hai 
// aur jo hamne schema define kiya hai wo same hai ki nahi 

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body); //make sure karega ki jo user ne jo data fill kiya hai wo hamre define schema se match ho raha hai ya nahi.
        req.body = parseBody;
        next();
    } catch (err) {
        // Support multiple validator error shapes (Zod, Joi, others)
        let message = "Fill the input properly";
        let extraDetails = 'Invalid request data'; // 1. Default message set kiya agar kuch na mile
        if (err && Array.isArray(err.errors) && err.errors.length) { 
            extraDetails = err.errors[0].message; // 2. Zod ke errors array se message nikala
        } else if (err && Array.isArray(err.issues) && err.issues.length) {
            extraDetails = err.issues[0].message; // 3. Zod issues se message nikala
        } else if (err && Array.isArray(err.details) && err.details.length) {
            extraDetails = err.details[0].message; // 4. Joi/Other libraries ke details se message nikala
        } else if (err && err.message) {            
            extraDetails = err.message; // 5. Kuch nahi toh simple error string le li
        }

        const status = 422;

        const error = {
            status,
            message,
            extraDetails,
        };
        console.log("Validation Error:", error);
        //res.status(400).json({ msg: message });
        next(error);
    }
};

module.exports = validate;