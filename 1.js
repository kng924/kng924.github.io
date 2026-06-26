const Point = document.getElementById('Point');
const Word = document.getElementById('Word');
const typing = document.getElementById('typing');

let p = 0;

const list = [
    "고양이",
    "강아지",
    "곰",
    "햄스터",
    "뱀",
    "고릴라",
    "여우",
    "코끼리",
    "티라노사우르스",
    "거북이",
    "브라키오사우르스",
    "퉁퉁퉁퉁퉁퉁퉁퉁퉁사후르",
    "스테고사우르스",
    "고라니",
    "돼지",
    "젖소",
    "사자",
    "호랑이",
    "파파고",
    "가오리",
    "오리",
    "해파리",
    "닭"
];






function showtext() {
    let randoms = Math.floor(Math.random() * list.length);

    Word.textContent = list[randoms]

    Point.textContent = `점수 : ${p}`
}

showtext();


document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {

        if (Word.textContent == typing.value) {

            p += 1
            typing.value = "";
            showtext()
        }

    }

    console.log(e.key)
})
