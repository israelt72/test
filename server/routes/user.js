import { Router } from "express";

const router = Router();

const users = [
  { _id: 1, name: "Saar Twito", age: 26 },
  { _id: 2, name: "Moshe Ofnic", age: 100 },
];

router.get("/", (req, res) => {
  res.send(users);
});
export default router;