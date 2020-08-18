function calculation(){
    var button = document.getElementById("answer_btn");
    button.onclick = function(){
        var answer = document.getElementById("answer");
        answer.style.fontWeight = "bolder";
        var term_x = document.getElementById("coefficient");
        var perfect_sqr = document.getElementById("perfect_square");
        var positive_coefficient = Math.sqrt(perfect_sqr.value);
        var negative_coefficient = Math.sqrt(perfect_sqr.value)*-1;
        var x1 = term_x.value.charAt(0);
        var x2 = term_x.value.charAt(0);
        if(perfect_sqr.value!=0){
            if(Number.isInteger(Math.sqrt(perfect_sqr.value))){
                answer.innerText = "answer = (" + x1 + "+" + positive_coefficient +") + (" + x2 + negative_coefficient + ")";
            }
            else{
                answer.innerText = "the number is not a perfect square ,a perfect square is a number that return an integer when inserted in a square root";
            }
        }
        else{
            answer.innerText = " the textbox after the negative sign is empty enter a perfect square value";
        }
    }
}

calculation();