import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authHeader = req.headers['authorization']
  if (!authHeader) {
    return res.status(403).json({ msg: "Missing auth header" });
  }
  try {
    const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);

    if (decoded && decoded.id) {
      req.userId = decoded.id;
      next();
    }
    else {
      return res.status(200).json({ msg: "Incorrect token" });
    }
  }
  catch (error) {
    res.status(401).json({ msg: "Invalid token", status: false })
  }
}
export default auth;