/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
let quotes = [
    {
        quote: "You want to know how I did it? This is how I did it, Anton: I never saved anything for the swim back.",
        source: "Vincent Freeman",
        citation: "Gattaca",
        year: "1997"
    },
    {
        quote: "Veni, vidi, vici",
        source: "Julius Caesar"
    },
    {
        quote: "My Mama Always Said Life Was Like A Box Of Chocolates. You Never Know What You're Gonna Get.",
        source: "Forrest Gump",
        citation: "Forrest Gump",
        year: "1994"
    },
    {
        quote: "Around here, however, we don’t look backwards for very long. We keep moving forward, opening up new doors and doing new things, because we’re curious… and curiosity keeps leading us down new paths.",
        source: "Walt Disney"
    },
    {
        quote: "Just Do It",
        source: "Nike"
    }
];
let currentNumber = -1;


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    // 1. Create a variable that generates a random number
    // between zero and the last index in the `quotes` array
    let randomNumber = currentNumber;
    do {
        randomNumber = Math.floor(Math.random() * quotes.length);
    } while (randomNumber == currentNumber);
    currentNumber = randomNumber;

    // 2. Use the random number variable and bracket notation
    // to grab a random object from the `quotes` array, and
    // store it in a variable
    let randomQuote = quotes[randomNumber];

    // 3. Return the variable storing the random quote object
    return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote() {
    // 1. Create a variable that calls the getRandomQuote()
    // function
    let randomQuote = getRandomQuote();

    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now
    let PtoHTML1 = `<p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}`;

    // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property
    // to the HTML string
    if (randomQuote.citation) {
        PtoHTML1 += `<span class="citation">${randomQuote.citation}</span>`;
    }

    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    //string
    if (randomQuote.year) {
        PtoHTML1 += `<span class="year">${randomQuote.citation}</span>`;
    }

    // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string
    PtoHTML1 += "</p>";

    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string
    document.getElementById('quote-box').innerHTML = PtoHTML1;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);
printQuote();