const jwt = require("jsonwebtoken");

const verifyToken = (roles = []) => {
  return (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization; // Correct case handling

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
      console.log("Token", token);

      if (!token) {
        return res.status(401).json({ message: "Token is not provided." });
      }

      try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decode);
        req.user = decode; // Attach decoded token (user) to req object
        console.log("The Decoded User is:", req.user);

        // Check if user has one of the allowed roles
        if (roles.length > 0 && !roles.includes(req.user.role)) {
          return res.status(403).json({
            message: "You do not have permission to access this resource.",
          });
        }

        next(); // Proceed to the next middleware or route handler
      } catch (e) {
        console.log("Token is invalid:", e);
        return res.status(403).json({ message: "Invalid token." });
      }
    } else {
      return res.status(401).json({
        message: "Authorization header not found or improperly formatted.",
      });
    }
  };
};

module.exports = verifyToken;
