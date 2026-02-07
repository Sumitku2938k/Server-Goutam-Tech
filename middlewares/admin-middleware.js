const adminMiddleware = (req, res, next) => {
    try {
        console.log("Admin middleware executed, user data from auth middleware : ", req.user);
        
        const adminStatus = req.user.isAdmin; // Get admin status from user data attached by auth middleware
        if(!adminStatus){
            return res.status(403).json({message: "Forbidden, admin access required"});
        }

        next(); // Proceed to the next middleware or route handler if user is admin
    } catch (error) {
        next(error);
    }
};

module.exports = adminMiddleware;