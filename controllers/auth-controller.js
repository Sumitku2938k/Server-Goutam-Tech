const home = async (req, res) => {
    try {
        res.send('Hello, World!');
    }catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body);
        res.json({message: req.body});
    }catch (error) {
        res.status(400).json({msg: "Page Not Found"});
    }
}

module.exports = { home, register};