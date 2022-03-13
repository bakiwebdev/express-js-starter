import express from "express";
import user from "../controller/user.js";

const route = express.Router(); // create express router

route.get("/", user);


// implement your routes here

// route.get("/:id", user);
// route.post("/", user);
// route.put("/:id", user);
// route.delete("/:id", user);

export default route;
