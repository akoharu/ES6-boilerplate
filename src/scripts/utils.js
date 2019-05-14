export const getNews = () => {
    let api = `https://newsapi.org/v2/everything?q='teknologi'&language=id&sortBy=publishedAt&apiKey=666b8a7c81104db8a63865be5edd9cac`;
    const body = fetch(api).then(res => res.json());
    return body;
};