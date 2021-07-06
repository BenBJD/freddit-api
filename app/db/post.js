import { db } from "../main.js"
import { DateTime } from "luxon"

export const create = (subfredditId, posterId, content, title, linkPost) => {
    return db("post").insert({
        subfredditId: subfredditId,
        posterId: posterId,
        content: content,
        title: title,
        linkPost: linkPost,
    })
}

export const readSingle = (id) => {
    return db("post").select("*").where({ id: id }).first()
}

export const readUserPosts = (id, timeRange) => {
    let day = 0
    let week = 0
    let month = 0
    switch (timeRange) {
        case "day":
            day = 1
            break
        case "week":
            week = 1
            break
        case "month":
            month = 1
            break
        case "alltime":
            month = 1200
            break
        case "default":
            break
    }
    return db("post")
        .select("*")
        .where({ userId: id })
        .andWhere(
            "creationTime",
            ">=",
            DateTime.now()
                .minus({ days: day, weeks: week, months: month })
                .startOf()
                .toSQL()
        )
}

export const readSubfredditPosts = (timeRange, subfreddits) => {
    let day = 0
    let week = 0
    let month = 0
    switch (timeRange) {
        case "day":
            day = 1
            break
        case "week":
            week = 1
            break
        case "month":
            month = 1
            break
        case "alltime":
            month = 1200
            break
        case "default":
            break
    }
    return db("post")
        .select("*")
        .whereIn("subfredditId", subfreddits)
        .andWhere(
            "creationTime",
            ">=",
            DateTime.now()
                .minus({ days: day, weeks: week, months: month })
                .startOf()
                .toSQL()
        )
}

export const readAllPosts = timeRange => {
    let day = 0
    let week = 0
    let month = 0
    switch (timeRange) {
        case "day":
            day = 1
            break
        case "week":
            week = 1
            break
        case "month":
            month = 1
            break
        case "alltime":
            month = 1200
            break
        case "default":
            break
    }
    return db("post")
        .select("*")
        .where(
            "creationTime",
            ">=",
            DateTime.now()
                .minus({ days: day, weeks: week, months: month })
                .startOf()
                .toSQL()
        )
}

export const del = (id) => {
    return db("post").where({ id: id }).del()
}

export const updateContent = (id, content) => {
    return db("post").where({ id: id }).update({ content: content })
}

export const updateTitle = (id, title) => {
    return db("post").where({ id: id }).update({ title: title })
}

export const updateRemove = (id, removeStatus, reason, removerId) => {
    return db("post")
        .where({ id: id })
        .update({
            removed: removeStatus,
            removalReason: reason,
            removedById: removerId,
        })
}
