import { db } from "../main.js"

export const create = (parentId, posterId, content) => {
    return db("comment").insert({
        parentId: parentId,
        posterId: posterId,
        content: content
    })
}

export const readAll = parentId => {
    return db("comment").select("*").where({ parentId: parentId })
}

export const read = id => {
    return db("comment").select("*").where({ id: id })
}

export const del = id => {
    return db("comment").where({ id: id }).del()
}

export const updateContent = (id, content) => {
    return db("comment").where({ id: id }).update({ content: content })
}

export const updateRemove = (id, removeStatus, reason, removerId) => {
    return db("comment")
        .where({ id: id })
        .update({
            removed: removeStatus,
            removalReason: reason,
            removedById: removerId,
        })
}
