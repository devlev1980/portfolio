let themDots = document.querySelectorAll('.theme-dot');
let theme = localStorage.getItem('theme');

if(theme === null){
    setTheme('light')
}else{
    setTheme(theme)
}
themDots.forEach((dot)=>{
    dot.addEventListener('click',(event)=>{
        let mode = event.target.dataset.mode
        console.log('option clicked',mode);
        setTheme(mode);
    })
})

function setTheme(mode) {
    if(mode === 'light'){
        document.querySelector('#theme-style').setAttribute('href','default.css')
    }
    if(mode === 'blue'){

        document.querySelector('#theme-style').setAttribute('href','blue.css')
    }
    if(mode === 'green'){
        document.querySelector('#theme-style').setAttribute('href','green.css')
    }
    if(mode === 'purple'){
        document.querySelector('#theme-style').setAttribute('href','purple.css')
    }
    localStorage.setItem('theme',mode);
}

