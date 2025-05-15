console.log('hello fart')

buttons = document.querySelectorAll('button');

// buttons.addEventListener('click', () => {
//     console.log('click')
// })

buttons.forEach((x) => {
    x.addEventListener('click', () => {
        console.log(x.id)
        if(x.id == 'browse-exercise'){
            window.location.href = `./${x.id}.html`
        }else if(x.id == 'home'){
            window.location.href = `./${x.id}.html`
        }else if(x.id == 'signin'){
            window.location.href = `pages/home.html`
        }
        
    })
})

document.getElementById('running').addEventListener('click', () => {
    document.getElementById('enter-workout').classList.toggle('active');
});

document.getElementById('exit').addEventListener('click', () => {
    document.getElementById('enter-workout').classList.toggle('active');
});

document.getElementById('unfav').addEventListener('click', () => {
    document.getElementById('unfav').classList.toggle('hide-star');
    document.getElementById('fav').classList.toggle('hide-star');
});

document.getElementById('fav').addEventListener('click', () => {
    document.getElementById('unfav').classList.toggle('hide-star');
    document.getElementById('fav').classList.toggle('hide-star');
});

document.getElementById('submit-log').addEventListener('click', (e) => {
    e.preventDefault()
    
    document.getElementById('enter-workout').classList.toggle('active');
    document.getElementById('logged-msg').classList.toggle('active');

    setTimeout(function() {
        document.getElementById('logged-msg').classList.toggle('active');
    }, 4000);
});