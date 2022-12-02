const form = document.querySelector('form'),
      title = document.querySelector('.title'),
      article = document.querySelector('.article');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (title.value && article.value) {
        dealRender();
    }
});

function dealRender () {
    const element = document.createElement('div'),
          parent = document.querySelector('.work-space');
          
    element.classList.add('deal');
    element.innerHTML = `
        <label>
            <input type="checkbox">
        </label>
        <h1>${title.value}</h1>
        <p>${article.value}</p>
    `;

    parent.append(element);
}