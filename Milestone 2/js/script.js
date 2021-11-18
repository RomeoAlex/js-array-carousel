
______________________________MILESTONE 2
const flexContainer = document.querySelector('big-image');
// 9 - creo il ciclo for per creare 100 box con i vari IF per creare box differenti

for( i = 1; i<= 100; i++){
    myValue = i;
    const NewBox = document.createElement('div');
    NewBox.classList.add('single-img');
    
    if () {   
        NewBox.classList.remove('normal');
        NewBox.classList.add('fizzbuzz');
        textInside.innerHTML = 'fizzbuzz';
 
    }else if( i % 5 === 0 ) {
        NewBox.classList.remove('normal')
        NewBox.classList.add('buzz');
        textInside.innerHTML = 'buzz';
    } else if( i % 3 === 0 ){
        NewBox.classList.remove('normal');
        NewBox.classList.add('fizz');
        textInside.innerHTML = 'fizz';
    }
    
    
    flexContainer.append(NewBox);
}

