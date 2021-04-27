const input = document.querySelector(".content__seeker-space");
const btn = document.querySelector(".content__seeker-button");


btn.addEventListener('click', function() {
    let word = input.value;
    let counter = word.length-1;
    let wordReverse = "";
    for(i=0; i<=word.length-1; i++) {
        wordReverse = wordReverse + word[counter];
        counter--;
    }
    alert(wordReverse)
})


