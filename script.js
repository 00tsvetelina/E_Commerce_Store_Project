const wrapper = document.querySelector('.sliderWrapper');
const products = [
    {
        id: 1,
        title: 'Air Force',
        price: 119,
        colors: [
            {
                code: 'black',
                img: './Images/air.png'
            },
            {
                code: 'darkblue',
                img: './Images/air2.png'
            }
        ]
    },
    {
        id: 2,
        title: 'Air Jordan',
        price: 149,
        colors: [
            {
                code: 'lightgray',
                img: './Images/jordan.png'
            },
            {
                code: 'green',
                img: './Images/jordan2.png'
            }
        ]
    },
    {
        id: 3,
        title: 'Blazer',
        price: 119,
        colors: [
            {
                code: 'lightgray',
                img: './Images/blazer.png'
            },
            {
                code: 'green',
                img: './Images/blazer2.png'
            }
        ]
    },
    {
        id: 4,
        title: 'Crater',
        price: 109,
        colors: [
            {
                code: 'black',
                img: './Images/crater.png'
            },
            {
                code: 'lightgray',
                img: './Images/crater2.png'
            }
        ]
    },
    {
        id: 5,
        title: 'Hippie',
        price: 99,
        colors: [
            {
                code: 'gray',
                img: './Images/hippie.png'
            },
            {
                code: 'black',
                img: './Images/hippie2.png'
            }
        ]
    }
];

let chosenProduct = products[0];
const currProductImg = document.querySelector('.productImg');
const currProductTitle = document.querySelector('.productTitle');
const currProductPrice = document.querySelector('.productPrice');
const currProductColor = document.querySelectorAll('.color');
const currProductSize = document.querySelectorAll('.size');

const menuItems = document.querySelectorAll('.menuItem');
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        //change curr slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        
        // change chosen product
        chosenProduct = products[index];

        //change texts of curr products
        currProductTitle.textContent = chosenProduct.title;
        currProductPrice.textContent = "$" + chosenProduct.price;

        currProductImg.src = chosenProduct.colors[0].img;

        // assign new colors
        currProductColor.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code
        })

    });
});

currProductColor.forEach((color, index) => {
    color.addEventListener('click', () => {
        currProductImg.src = chosenProduct.colors[index].img;
    })
})

currProductSize.forEach((size)=> {
    size.addEventListener('click', () => {
        currProductSize.forEach((size) => {
            size.style.backgroundColor = 'white';
            size.style.color = 'black'
        })
        size.style.backgroundColor = 'black';
        size.style.color = 'white'
    })
})

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const closeButton = document.querySelector('.close');

productButton.addEventListener('click', () => {
    payment.style.display = 'flex';
})

closeButton.addEventListener('click', () => {
    payment.style.display = 'none';
})