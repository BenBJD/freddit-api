import { db } from "../main.js"

export const create = (userId, postId, value) => {
    return db("postVote").insert({
        userId: userId,
        postId: postId,
        value: value,
    })
}

export const read = (userId, postId) => {
    return db("postVote").select("*").where({ userId: userId, postId: postId }).first()
}

export const del = (id) => {
    return db("postVote").where({ id: id }).del()
}
