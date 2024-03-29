class Task {
    constructor (title, article) {
        this.title = title;
        this.article = article;
    }

    render () {
        const element = document.createElement('div'),
              parent = document.querySelector('.work-space');
          
        element.classList.add('task');

        element.innerHTML = `
            <label>
                <input type="checkbox" class="checkbox" onchange="done()">
            </label>
            <h1 class="task-title">${title.value}</h1>
            <p class="task-article">${article.value}</p>
            <div class="bin">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 268.476 268.476" style="enable-background:new 0 0 268.476 268.476;" xml:space="preserve">
                    <path d="M63.119,250.254c0,0,3.999,18.222,24.583,18.222h93.072
                    c20.583,0,24.582-18.222,24.582-18.222l18.374-178.66H44.746L63.119,250.254z M170.035,98.442c0-4.943,4.006-8.949,8.949-8.949
                    c4.943,0,8.95,4.006,8.95,8.949l-8.95,134.238c0,4.943-4.007,8.949-8.949,8.949c-4.942,0-8.949-4.007-8.949-8.949L170.035,98.442z
                    M125.289,98.442c0-4.943,4.007-8.949,8.949-8.949c4.943,0,8.949,4.006,8.949,8.949v134.238c0,4.943-4.006,8.949-8.949,8.949
                    c-4.943,0-8.949-4.007-8.949-8.949V98.442z M89.492,89.492c4.943,0,8.949,4.006,8.949,8.949l8.95,134.238
                    c0,4.943-4.007,8.949-8.95,8.949c-4.942,0-8.949-4.007-8.949-8.949L80.543,98.442C80.543,93.499,84.55,89.492,89.492,89.492z
                    M218.36,35.811h-39.376V17.899C178.984,4.322,174.593,0,161.086,0L107.39,0C95.001,0,89.492,6.001,89.492,17.899v17.913H50.116
                    c-7.914,0-14.319,6.007-14.319,13.43c0,7.424,6.405,13.431,14.319,13.431H218.36c7.914,0,14.319-6.007,14.319-13.431
                    C232.679,41.819,226.274,35.811,218.36,35.811z M161.086,35.811h-53.695l0.001-17.913h53.695V35.811z"/>
                </svg>
            </div>
        `;

        parent.append(element);
    }
}

const form = document.querySelector('form'),
      title = document.querySelector('.title'),
      article = document.querySelector('.article');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (title.value && article.value) {
        new Task (title.value, article.value).render();  
    }

    form.reset();
});

const workSpace = document.querySelector('.work-space');

workSpace.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target && target.classList.contains('bin')) {
        target.parentElement.remove();
    }
});

function done () {
    const checkboxes = document.querySelectorAll('.checkbox'),
          taskTitles = document.querySelectorAll('.task-title'),
          taskArticles = document.querySelectorAll('.task-article');

    checkboxes.forEach((i, item) => {
        if (i.checked) {
            taskTitles[item].style.textDecoration = 'line-through solid grey';
            taskArticles[item].style.textDecoration = 'line-through solid grey';
            taskTitles[item].style.color = 'grey';
            taskArticles[item].style.color = 'grey';
        } else {
            taskTitles[item].style.textDecoration = 'none';
            taskArticles[item].style.textDecoration = 'none';
            taskTitles[item].style.color = '#000';
            taskArticles[item].style.color = '#000';
        }
    });
}