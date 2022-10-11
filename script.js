'use strict';

const container = document.querySelector('.container');
const quotesEl = document.querySelector('.quotes-space');
const quotesName = document.querySelector('.name-space');
const NewQuotes = document.querySelector('#new-Quote');

// console.log(container, NewQuotes, quotesName, quotesEl,)

const quote = [
    {
        quotes: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        name: '"Nelson Mandela"',
    },
    {
        quotes: 'The way to get started is to quit talking and begin doing.',
        name: '"Walt Disney"',
    },
    {
        quotes: ' Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
        name: '"Steve Jobs"',
    },
    {
        quotes: ' If life were predictable it would cease to be life, and be without flavor.',
        name: '"Eleanor Roosevelt"',
    },
    {
        quotes: ' If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.',
        name: '"Oprah Winfrey"',
    },
    {
        quotes: ' If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
        name: '"James Cameron"',
    },
    {
        quotes: ' Life is what happens when you\'re busy making other plans.',
        name: '"John Lennon"',
    }
];


NewQuotes.addEventListener('click', ()=>{
    NewQuotes.textContent = 'New Quotes'
    let random = Math.floor(Math.random() * quote.length) + 1;
    quotesEl.textContent = quote[random].quotes
    quotesName.textContent = quote[random].name
})
