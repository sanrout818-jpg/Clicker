const body = document.querySelector('body');
body.addEventListener('click' , (e)=>{
    console.log(e.clientx , e.clientY);


    const circleElement = document.createElement('div');
    circleElement.classList.add('circle') ;
    circleElement.textContent = "Holi" 

    const color = ['red','blue','orange','green','pink','purple'];
    circleElement.style.backgroundColor = color[Math.floor(Math.random()*6)];

    circleElement.style.top = `${e.clientY}px`;
    circleElement.style.left = `${e.clientX}px`;

    body.append(circleElement);6 
})

