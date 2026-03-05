import jwt from "jsonwebtoken";

export default function (req, res, next) {
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ error: "Server configuration error: JWT_SECRET not set" });
  }

  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token" });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}
