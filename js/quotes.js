const quotes = [
    {
        quote: "인생은 가까이서 보면 비극이지만 멀리서 보면 안보일걸.",
        author: "명언인줄",
    },
    {
        quote: "은혜를 갚으려거든 돈으로 갚아라.",
        author: "명언인줄",
    },
    {
        quote: "잠을 자면 꿈을 꾸지만, 안자면 졸리다.",
        author: "명언인줄",
    },
    {
        quote: "힘들 땐 눈을 감고 어둠을 느껴라. 너의 미래다.",
        author: "명언인줄",
    },
    {
        quote: "속임수는 병법의 기본이다. 그러게 왜 속고 그러냐.",
        author: "명언인줄",
    },
    {
        quote: "나한테 화내기 전에 내가 얼마나 귀여운지 생각해라.",
        author: "명언인줄",
    },
    {
        quote: "오직 자신만을 등불로 삼으라. 니 알아서 하라고.",
        author: "명언인줄",
    },
    {
        quote: "어리석음에는 끝이 없다. 널 보니 알겠다.",
        author: "명언인줄",
    },
    {
        quote: "모든 논쟁 뒤에는 무지함이 있다. 너의.",
        author: "명언인줄",
    },
    {
        quote: "내일은 반드시 온다. 내일 월요일.",
        author: "명언인줄",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;