import axios from 'axios';

const newsApi = axios.create({
  baseURL: `https://niamh-news.herokuapp.com/api`,
});

export const getArticles = () => {
    return newsApi
    .get('/articles')
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

export const getArticlesByTopic = (slug) => {
    return newsApi.get(`/articles?topic=${slug}`)
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