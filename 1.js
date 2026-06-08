const urgency = document.getElementById('urgency');
const day = document.getElementById('day');
const type = document.getElementById('type');
const btn = document.getElementById('btn');
const adds = document.getElementById('adds');
const alldel = document.getElementById('alldel');

const arrary = []

function add() {
    const vday = day.value
    const vurgency = urgency.value
    const vtype = type.value

    //html 추가
    const tli = document.createElement('li');
    //내부 html 변경
    tli.innerHTML =
     `<p class="d">${vday}</p>
     <p class="u">${vurgency}</p>
     <p class="t">${vtype}</p>
     `
    
     arrary.push({
        vday:vday,
        vurgency:vurgency,
        vtype:vtype,
     })
     //삭제 버튼 추가
     const dlbtn = document.createElement('button');
     dlbtn.textContent = "삭제"
     tli.appendChild(dlbtn)

     //부분 삭제
    adds.appendChild(tli)

    dlbtn.addEventListener('click', ()=>{
        tli.remove()
    })

    console.log(arrary);
    
} 

//전제 삭제
alldel.addEventListener('click',()=>{
    adds.innerHTML = ""
    arrary = []
})


btn.addEventListener('click',add)