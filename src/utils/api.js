import axios from 'axios';

const newsApi = axios.create({
  baseURL: `https://niamh-news.herokuapp.com/api`,
});

export const getArticles = (params) => {
    return newsApi
    .get('/articles', {params})
    .then((res) => {
        return res.data;
    });
}

export const getTopics = () => {
    return newsApi.get('/topics')
    .then((res) => {
        return res.data
    })
}

export const getSingleArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
    .then((res) => {
        return res.data
    })
}

export const updateVote = (article_id) => {
    return newsApi.patch(`/articles/${article_id}`, {inc_votes: 1})
}

export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data
    })
}

export const addComment = (newComment, article_id) => {
    return newsApi.post(`/articles/${article_id}/comments`, newComment)
    .then((res) => {
        return res.data
    })
}

export const getUsers = () => {
    return newsApi.get(`/users`)
    .then((res) => {
        return res.data
    })
}

export const deleteComment = (comment_id) => {
    return newsApi.delete(`/comments/${comment_id}`)
    .then((res) => {
        return res.data
    })
}