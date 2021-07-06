import { db } from "../main.js"
import { hashSync } from "bcrypt"

export const create = (username, password, email) => {
    return db("user").insert({
        username: username,
        password: hashSync(password, 4),
        email: email,
    })
}

export const readPassword = (email) => {
    return db("user").select("password").where({ email: email }).first()
}

export const read = (id) => {
    return db("user")
        .select("id", "username", "creationDate", "points", "email", "status")
        .where({ id: id })
}

export const del = (id) => {
    return db("user").where({ id: id }).del()
}

export const updateUsername = (id, value) => {
    return db("user").where({ id: id }).update({ username: value })
}

export const updateEmail = (id, value) => {
    return db("user").where({ id: id }).update({ email: value })
}

export const updatePassword = (id, value) => {
    return db("user")
        .where({ id: id })
        .update({ password: hashSync(value) })
}
