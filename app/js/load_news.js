window.addEventListener('DOMContentLoaded', () => {
  fetch('../data/news_data.json')
  .then(res => res.json())
  .then(data => {
    const newsPartOne = document.querySelector('.news__part--one');
    const newsPartTwo = document.querySelector('.news__part--two');
    let contentOne = "";
    let contentTwo = "";

    for (let i = 0; i < data.length; i++) {
      let description2 = data[i].description2 ? `<p class="article__desc">${data[i].description2 ? data[i].description2 : ''}</p>` : '';
      let articleContent = `<article class="article">
      <h3 class="article__title">${data[i].title ? data[i].title : ''}</h3>
      <p class="article__date-desc">
        Data dodania: 
        <time class="article__datetime" datetime="${data[i].date ? data[i].date : ''}">${data[i].date ? data[i].date : ''}</time>
      </p>
      <figure class="article__figure">
        <img class="article__image" src=${data[i].image} alt="article image">
      </figure>
      <p class="article__desc">${data[i].description1 ? data[i].description1 : ''}</p>
      ${description2}
    </article>`;

      if (i >= 0 && i <3) {
        contentOne += articleContent;
      } else {
        contentTwo += articleContent;
      }
    }
    newsPartOne.innerHTML = contentOne;
    newsPartTwo.innerHTML = contentTwo;
  })
});