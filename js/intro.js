// const text = `「人間の脳はわずか10パーセントしか使われていないと言われています。
// 残りの90パーセントにどんな能力が隠されているのか、私たちはまだ知りません。
// 人間には驚くべき可能性が秘められています。
// 今は不可能でも、明日、誰かに突然びっくりするような能力が生まれるかもしれません。
// それが人類の未来を切り開くことになるかもしれません。
// 不可能を可能にするスペックが、私たちの中に隠れています。
// すべての人間には無限の才能があるのです。」`;

// const target = document.getElementById("typing");

// const image = document.querySelector(".next-page")

// const link = document.querySelector(".next-link");

// let index = 0;

// function type() {
//     if (index < text.length) {
//         target.textContent += text[index];
//         index++;
//         setTimeout(type, 35); // 타이핑 속도 조절
//     } else {
//         image.style.opacity = "1";
//         image.style.pointerEvents = "auto";
//     }
// }

// type();



// 아래는 텍스트 타이핑이 끝나기 전에 텍스트가 전부 나오는 값


const text = `「人間の脳はわずか10パーセントしか使われていないと言われています。
残りの90パーセントにどんな能力が隠されているのか、私たちはまだ知りません。
人間には驚くべき可能性が秘められています。
今は不可能でも、明日、誰かに突然びっくりするような能力が生まれるかもしれません。
それが人類の未来を切り開くことになるかもしれません。
不可能を可能にするスペックが、私たちの中に隠れています。
すべての人間には無限の才能があるのです。」`;

const target = document.getElementById("typing");
const image = document.querySelector(".next-page");
const link = document.querySelector(".next-link");

let index = 0;
let typingFinished = false; // 타이핑 완료 여부
let typingTimer = null;      // 타이핑 setTimeout 저장

function showNext() {
    image.style.opacity = "1";
    image.style.pointerEvents = "auto";
    link.style.pointerEvents = "auto";
}

function type() {
    if (index < text.length) {
        target.textContent += text[index];
        index++;
        typingTimer = setTimeout(type, 35); // 타이핑 속도 조절
    } else {
        typingFinished = true;
        showNext();
    }
}

// 화면 클릭 시 남은 텍스트 바로 출력
document.body.addEventListener("click", () => {
    if (!typingFinished) {
        clearTimeout(typingTimer);  // 타이핑 멈춤
        target.textContent = text;  // 남은 텍스트 바로 출력
        typingFinished = true;
        showNext();
    }
});

type();
