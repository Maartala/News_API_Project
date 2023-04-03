const inputText = document.querySelector('form input[type="text"]');
const button = document.querySelector('form input[type="button"]');
const section = document.querySelector('section');
const language = document.getElementById('lang');

const search = () => {
    console.log(inputText.value);
    section.innerHTML = "";
    fetch (`https://newsapi.org/v2/everything?q=${inputText.value}&language=${language.value}&apiKey=d976e1e2d66f4a71996adfea9a48f1d4`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.articles.forEach((elt) => {
                // console.log(elt)
                // console.log(elt.title);
                // console.log(elt.description);
                // console.log(elt.urlToImage);
                section.innerHTML += `
            <div>
                <h2>${elt.title}</h2>
                <article id="imgArticle">
                    <img src="${elt.urlToImage}"></img>
                    <p>${elt.description}</p>
                </article>
                <a href="${elt.url}">zum Artikel</a>
            </div>
            `
            })
        });
}
