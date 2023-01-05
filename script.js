let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
    // Random quote of the day generator
    const randomQuote = function () {
        document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();

    // Do all of your work inside the document.addEventListener  

    // Part 1
    let title = document.getElementById('main-title');
    title.innerHTML = "Hi, I'm DOM"

    // Part 2
    document.body.style.backgroundColor = "#C28DFF";

    // Part 3
    let favs = document.getElementById('favorite-things')
    favs.removeChild(favs.lastElementChild);


    // Part 4
    function changeFontSize() {
        let title = document.getElementsByClassName('special-title');
        for (let i = 0; i < title.length; i++) {
            let nuSize = title[i];
            nuSize.style.fontSize = "2rem";
        }
    }
    changeFontSize()

    //Part 5
    function deleteChi() {
        // let races = document.getElementById("past-races");
        //     for (let i = 0; i < races.length; i++) {
        //         let indexFour = races[3];
        //         races.removeChild(indexFour)
        //     }
        // }
        let races = document.querySelectorAll('#past-races li')
        races[3].remove();
    }
    deleteChi()

    // Part 6
    function nuRace() {
        let addRaces = document.querySelector('#past-races')
        let newItem = document.createElement('LI');

        newItem.textContent = "New York";
        addRaces.append(newItem);
        //console.log(addRaces)
    }
    nuRace()

    // Part 7
    let main = document.querySelector('.main');

    let newBlog = document.createElement('DIV');
    newBlog.classList.add('blog-post');
    newBlog.classList.add('purple');


    let newHeading = document.createElement('H2');
    newHeading.textContent = "Some New Heading";

    newHeading.append(newBlog);

    let newPara = document.createElement('P');
    newPara.textContent = "Some New Paragraph";

    newPara.append(newBlog);

    main.appendChild(newBlog)
    newBlog.appendChild(newHeading)
    newBlog.appendChild(newPara)

    // Part 8
    let quote = document.querySelector('#quote-title')
    quote.addEventListener('click', randomQuote)


    // Part 9
    let applyHandlers = document.querySelectorAll('.blog-post')
    applyHandlers.forEach((handlers) => {
        handlers.addEventListener('mouseout', (event) => {
            event.currentTarget.classList.toggle('purple');
        })
        handlers.addEventListener('mouseenter', (event) => {
            event.stopPropagation()
            event.currentTarget.classList.toggle('red');
        })
    })

});


// const applyHandlers = document.querySelectorAll('.blog-post');
// on line 113 listener event.stopPropagation()



// for (let i = 0; i < handlers.length; i++) {
//     handlers.addEventListener('mouseout', (event))
//     event.currentTarget.classList.toggle('purple')

//     handlers.addEventListener('mouseenter', (event))
//     event.currentTarget.classList.toggle('red')

// }


// Create custom Event Listener

// const myEventOne = new CustomEvent('myCustomEvent', {detail: {hello: 'World'}})
// handlers.addEventListener('myCustomEvent', e => {

// })
// handlers.dispatchEvent(myEventOne)

//currentTarget - refers to the element whose event listeners triggered the event
//target - returns the element that triggered the event