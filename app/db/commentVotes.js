import { db } from "../main.js"

export const create = (userId, commentId, value) => {
    return db("commentVote").insert({
        userId: userId,
        commentId: commentId,
        value: value,
    })
}

export const read = (userId, commentId) => {
    return db("commentVote").select("*").where({ userId: userId, commentId: commentId }).first()
}

export const del = (id) => {
    return db("commentVote").where({ id: id }).del()
}
