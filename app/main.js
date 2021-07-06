import knex from "knex";
import express from "express"
import { configuration } from "../knex-config.js"
import { add } from "./db/user.js";

export const db = knex(configuration)

export const app = express()

app.get("/", (req, res) => {
    res.send(add("", "", ""))
})
