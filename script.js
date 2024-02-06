const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");

//--------------Arrow function ----------------
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.id ==='red') {
            body.style.backgroundColor = 'red';
        }
        if(e.target.id ==='green') {
            body.style.backgroundColor = 'green';
        }
        if(e.target.id ==='blue') {
            body.style.backgroundColor = 'blue';
        }
        if(e.target.id ==='violet') {
            body.style.backgroundColor = 'violet';
        }
        if(e.target.id ==='skyblue') {
            body.style.backgroundColor = 'skyblue';
        }
        if(e.target.id ==='yellow') {
            body.style.backgroundColor = 'yellow';
        }
    })
});


//Another way to do this 

 /***********-----CallBack Function -----------**************
  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        if(e.target.id ==='red') {
            body.style.backgroundColor = 'red';
        }
        if(e.target.id ==='green') {
            body.style.backgroundColor = 'green';
        }
        if(e.target.id ==='blue') {
            body.style.backgroundColor = 'blue';
        }
        if(e.target.id ==='violet') {
            body.style.backgroundColor = 'violet';
        }
        if(e.target.id ==='skyblue') {
            body.style.backgroundColor = 'skyblue';
        }
        if(e.target.id ==='yellow') {
            body.style.backgroundColor = 'yellow';
        }
    })
});
*****************----------------******************/


