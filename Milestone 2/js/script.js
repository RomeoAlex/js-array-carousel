// ______________________________MILESTONE 2
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// popolo il primo contenitore
const imgContainer = document.querySelector('.big-image');
     console.log(imgContainer);

for(let i = 0; i < items.length; i++){
    
    const thisPath = items[i];
    const thisTitle = title[i];
    const thisDescription = text[i];
    const boxImg = document.createElement('div');
    boxImg.classList.add('single-img');
    boxImg.innerHTML = `<img src="${items[i]}" alt="">` ;
    const boxText = document.createElement('div');
    boxText.classList.add('.single-title');
    const boxText1 = document.createElement('h2');
    boxText1.innerHTML = title[i] ;
    const boxText2 = document.createElement('p');
    boxText2.innerHTML = text[i] ;
    boxText.append(boxText1,boxText2);
    boxImg.appendChild(boxText);
    console.log(boxImg);
    imgContainer.append(boxImg);
}





// for( i = 1; i<= 100; i++){
//     myValue = i;
//     const NewBox = document.createElement('div');
//     NewBox.classList.add('single-img');
    
//     if () {   
//         NewBox.classList.remove('normal');
//         NewBox.classList.add('fizzbuzz');
//         textInside.innerHTML = 'fizzbuzz';
 
//     }else if( i % 5 === 0 ) {
//         NewBox.classList.remove('normal')
//         NewBox.classList.add('buzz');
//         textInside.innerHTML = 'buzz';
//     } else if( i % 3 === 0 ){
//         NewBox.classList.remove('normal');
//         NewBox.classList.add('fizz');
//         textInside.innerHTML = 'fizz';
//     }
//     flexContainer.append(NewBox);
// }

