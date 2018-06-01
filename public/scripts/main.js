var lettersandspace = /^[A-Za-z ]+$/;
var onlyletters = /^[a-zA-Z]+$/;
var lettersandumlauts = /^[A-Za-z ÄÖÜäöüß]+$/
$(document).foundation();

function startAuthorChecker() {
    setInterval(function () {
        if (lettersandspace.test(document.querySelector('#surname').value) && lettersandspace.test(document.querySelector('#name').value)) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
    }, 20)
}

function startCategoryChecker() {
    setInterval(function () {
        if (lettersandumlauts.test(document.querySelector('#catname').value) && onlyletters.test(document.querySelector('#caturl').value)) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
    }, 20)
}

function startPostChecker() {
    setInterval(function () {
        if (lettersandumlauts.test(document.querySelector('#title').value) && document.querySelector('#author').value !== "id" && document.querySelector('#category').value !== 'id' && document.querySelector('#content').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
    }, 20)
}
var form = document.querySelector('.form');
if (form != null) {
    if (form.getAttribute('id') == 'authorform') {
        startAuthorChecker();
    } else if (form.getAttribute('id') == 'categoryform') {
        startCategoryChecker();
    } else if (form.getAttribute('id') == 'postform') {
        startPostChecker();
    }
}