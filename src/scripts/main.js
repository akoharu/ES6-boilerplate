import { getNews } from './utils';
const newsEl = document.querySelector('.news');

function getNews$() {
    getNews().then(
        res => {
            const markup = res.articles.reduce((news$, news) => (news$ += `<p><h2>${news.title}</h2><br>${news.content}</p>`), '');
            newsEl.innerHTML = markup;    
        }
    ).catch( err => newsEl.innerHTML = err)
}

getNews$();