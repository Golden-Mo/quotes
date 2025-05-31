
var quotes =[
    {q:"“Be yourself; everyone else is already taken.",author:"--Oscar Wilde"},
    {q:"““I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",author:"--Marilyn Monroe"},
    {q:"“So many books, so little time.”",author:"--Frank Zappa"},
    {q:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",author:"--Albert Einstein"},
    {q:"“A room without books is like a body without a soul.”",author:"--Marcus Tullius Cicero"},
    {q:"“You only live once, but if you do it right, once is enough.”",author:"--Mae West"},
    {q:"“In three words I can sum up everything I've learned about life: it goes on.”",author:"--Robert Frost"},
    {q:"“If you tell the truth, you don't have to remember anything.”",author:"--Mark Twain"},
    {q:"“To live is the rarest thing in the world. Most people exist, that is all.”",author:"--Oscar Wilde"},
    {q:"“A friend is someone who knows all about you and still loves you.”",author:"--Elbert Hubbard"},
]

function generatequote(){
    var random =  Math.floor(Math.random() * 10)
       document.getElementById("quote").innerHTML= quotes[random].q
    document.getElementById("author").innerHTML= quotes[random].author
   
}