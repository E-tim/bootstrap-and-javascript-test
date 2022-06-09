

let button = document.getElementById('myBtn');

// onclick validation for button 

button.addEventListener('click', ()=> {
    let div = document.createElement('div');
    // div.setAttribute('class', 'myDiv');
    document.body.appendChild(div);

    div.innerHTML = 'It works';

    //  styling the div 
    div.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: blue;
        color: white;
        font-size: 20px;
        border-radius: 10px;
        padding: 10%;

    `
})




        