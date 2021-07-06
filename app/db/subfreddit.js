import { db } from "../main.js"

export const create = (name, accentColour, owner) => {
    return db("subfreddit").insert({
        name: name,
        accentColour: accentColour,
        owner: owner
    })
}

export const read = id => {
    return db("subfreddit").select("*").where({ id: id }).first()
}

export const del = (id) => {
    return db("subfreddit").where({ id: id }).del()
}

export const updateDescription = (id, description) => {
    return db("subfreddit").where({ id: id }).update({ description: description })
}

export const updateName = (id, name) => {
    return db("subfreddit").where({ id: id }).update({ name: name })
}

export const updateOwner = (id, ownerId) => {
    return db("subfreddit").where({ id: id }).update({ owner: ownerId })
}
