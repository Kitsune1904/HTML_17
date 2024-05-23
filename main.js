const fillAndAddParagraph = (type, name, text, element = "p", que = 0) => {
  const para = document.createElement(element);
  const inner = document.createTextNode(text);
  para.appendChild(inner);
  let node;
  if (type === "id") {
    node = document.getElementById(name);
    node.appendChild(para);
  } else if (type === "class") {
    node = document.getElementsByClassName(name);
    node[que].appendChild(para);
  }
};

for (let i = 10; i <= 20; i++) {
    let text = `${i},`;
    i === 20 ? text = `${i}.` : text
  fillAndAddParagraph("id", "row", text);
}

for (let i = 10; i <= 20; i++) {
  fillAndAddParagraph("id", "square", `${i ** 2}`);
}

for (let i = 1; i <= 10; i++) {
  fillAndAddParagraph("id", "tablePart", `${i * 7}`);
}

let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
fillAndAddParagraph("id", "allSum", sum);

let multi = 15;
for (let i = 15; i <= 35; i++) {
  multi *= i;
}
fillAndAddParagraph("id", "multiply", `${BigInt(multi)}`);

let midSum = 0;
for (let i = 1; i <= 500; i++) {
  midSum += i;
}
fillAndAddParagraph("id", "midle", `${midSum / 500}`);

let sumEven = 0;
for (let i = 30; i <= 80; i++) {
  i % 2 == 0 ? (sumEven += i) : (sumEven += 0);
}
fillAndAddParagraph("id", "evenSum", `${sumEven}`);

for (let i = 100; i <= 200; i++) {
  i % 3 == 0 ? fillAndAddParagraph("id", "divisible", ` ${i}`) : 0;
}

const btn = document.getElementById("spec");
btn.addEventListener("click", () => {
  const divisor = prompt("Оберіть натуральне число", "500");
  for (let i = 1; i <= divisor; i++) {
    divisor % i == 0 ? fillAndAddParagraph("id", "divOfNum", ` ${i}`) : 0;
  }
  let divisorSum = 0;
  for (let i = 2; i <= divisor; i++) {
    if ((divisor % i == 0) & (i % 2 == 0)) {
      divisorSum += i;
      fillAndAddParagraph("id", "evenDiv", ` ${i}`);
    }
  }
  fillAndAddParagraph("id", "divEvenSum", ` ${divisorSum}`);
});

for (let col = 1; col <= 10; col++) {
  for (let row = 1; row <= 10; row++) {
    fillAndAddParagraph(
      "class",
      "block",
      ` ${col} * ${row} = ${col * row}`,
      "p",
      col - 1
    );
  }
}

for (let i = 20; i <= 30; i += 0.5) {
  fillAndAddParagraph("id", "step", ` ${i}`);
}

for (let i = 10; i <= 100; i += 10) {
  fillAndAddParagraph("id", "usd", ` ${i} долларів - це ${i * 27} гривень`);
}

const chooseNum = document.getElementById("chooseNum");
chooseNum.addEventListener("click", () => {
  const num = prompt("Оберіть ціле число", "200");
  for (let i = 1; i <= 100; i++) {
    i ** 2 < num
      ? fillAndAddParagraph(
          "id",
          "squareNotMore",
          `квадрат ${i} не перевищує числа ${num}`
        )
      : 0;
  }
});

const checkNum = document.getElementById("checkNum");
checkNum.addEventListener("click", () => {
  const num = prompt("Оберіть число для пеервірки", "5");
  let isSimple = true;
  let text;
    if(num<=1){
        isSimple = false;
    }

    for(let i=2; i*i<=num; i++){
        if(num%i===0){
            isSimple = false;
            break;
        }
    }

    isSimple ? text = `Число ${num} просте` : text = `Число ${num} НЕ просте`

    fillAndAddParagraph("id", "simple", `${text}`);
});

const check = document.getElementById("check");
check.addEventListener("click", () => {
    const num = +prompt("Оберіть число для пеервірки", "9");
    let text = `Неможливо одержати число ${num} шляхом зведення числа 3 у деякий ступінь`;
    for(let i = 1; i <= num; i++) {
        3**i === num ? text = `Можна одержати число ${num} шляхом зведення числа 3 у  ступінь ${i}` : 0
    }
    fillAndAddParagraph("id", "takeBySquare", `${text}`);
})
