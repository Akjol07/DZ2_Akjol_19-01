document.querySelector("#generate").addEventListener("click", () => {
    generate();
});
document.querySelector("#back").addEventListener("click", () => {
    generate("back");
});
document.querySelector("#next").addEventListener("click", () => {
    generate("next");
});

let index = -1;

generate = (arg = "generate") => {
    let quotes ={
        "- Akjol-1":
            '"... Если ты чувствуешь, что это твоё, никого не слушай и рискуй…"',
        "- Akjol-2":
            '"... Чем умнее человек, тем легче он признает себя дураком."',
        "- Akjol-3":
            '"... кто много страдал, тот много познал…"',
        "- Akjol-4":
            '"... Сегодня ты пишешь код, завтра код делает тебе деньги…"',
        "- Akjol-5":
            '"... Если твой код работает, значит всё не так уж плохо на сегодняшний день…"',
        "- Akjol-6":
            '"... Чтобы достичь успеха, перестаньте гнаться за деньгами, гонитесь за мечтой…"',
        "- Akjol-7":
            '"... Если ты что-то хочешь и будешь стараться, значит это будет…"',
        "- Akjol-8":
            '"... Чтобы дойти до цели, нужно просто идти…"',
        "- Akjol-9":
            '"... Учитесь на своих ошибках, признайте их и двигайтесь дальше"',
        "-  Akjol-10":
            '"... Тренируйся с теми, кто сильнее. Не сдавайся там, где сдаются другие. И победишь там, где победить нельзя"',
        "-  Akjol-11":
            '"... Если вы играете в эту игру жизни, вам нужно ценить каждый момент. Многие люди не ценят момент, пока он не пройден"',
        "-  Akjol-12":
            '"... Я никогда не был хорош ни в чем, кроме способности учиться"',
        "-  AKJOL-13":
            '"... Мечтай и реализуй, не сомневайся, страх это нормально - главное его перебороть и показать упорство, железная воля - гарантия успеза!"',
    };

    let authors = Object.keys(quotes);

    if (arg === "back") {
        if (index >= 1) {
            index --;
        } else {
            index = authors.length - 1;
        }
    } else if (arg === "next") {
        if (index < authors.length - 1) {
            index ++;
        } else {
            index = 0;
        }
    } else if (arg === "generate"){
        index = Math.floor(Math.random() * authors.length);
    }

    let author = authors[index];

    let quote = quotes[author];

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
};
