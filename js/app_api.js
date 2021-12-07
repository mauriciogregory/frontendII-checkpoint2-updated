// fech do dados da API
const dados = fetch(`https://jsonplaceholder.typicode.com/todos/`)
    .then(function (response) {
        return response.json();
    })
    .then((respostaArray) => {
        respostaArray.forEach(elemento => {
            // cria os elementos da página html
            var li = document.createElement('li');
            var pId = document.createElement('p');
            var pTitulo = document.createElement('p');
            var pCompleted = document.createElement('p');
            var ul = document.querySelector('.lista-card');

            pId.innerHTML = elemento.id;
            pTitulo.innerHTML = elemento.title;
            pCompleted.innerHTML = elemento.completed;

            var com = pCompleted.textContent;

            li.appendChild(pId);
            if (com === 'true') {
                console.log(com);
                pTitulo.classList.add('card-done');
                li.appendChild(pTitulo);
            } else {
                li.appendChild(pTitulo);
            }
            li.classList.add('card');

            ul.appendChild(li)
        });
    })
    .catch(function (error) {
        console.log(error);
    });