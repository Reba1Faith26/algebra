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
        if(perfect_sqr.value == 0){
            answer.innerText = "answer = (" + x1 + "-" + negative_coefficient + ") + (" + x2 + "+" + positive_coefficient +")";
        }
        else{
            answer.innerText = "answer = (" + x1 + negative_coefficient + ") + (" + x2 + "+" + positive_coefficient +")";
        }
    }
}
calculation();