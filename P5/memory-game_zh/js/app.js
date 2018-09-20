/*
 * 创建一个包含所有卡片的数组
 */
var cards = new Array();
cards[0] = "cards1_1";
cards[1] = "cards1_2";
cards[2] = "cards1_3";
cards[3] = "cards1_4";

cards[4] = "cards2_1";
cards[5] = "cards2_2";
cards[6] = "cards2_3";
cards[7] = "cards2_4";

cards[8] = "cards3_1";
cards[9] = "cards3_2";
cards[10] = "cards3_3";
cards[11] = "cards3_4";

cards[12] = "cards4_1";
cards[13] = "cards4_2";
cards[14] = "cards4_3";
cards[15] = "cards4_4";
/*
 * 显示页面上的卡片
 *   - 使用下面提供的 "shuffle" 方法对数组中的卡片进行洗牌
 *   - 循环遍历每张卡片，创建其 HTML
 *   - 将每张卡的 HTML 添加到页面
 */

// 洗牌函数来自于 http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * 设置一张卡片的事件监听器。 如果该卡片被点击：
 *  - 显示卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 将卡片添加到状态为 “open” 的 *数组* 中（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 如果数组中已有另一张卡，请检查两张卡片是否匹配
 *    + 如果卡片匹配，将卡片锁定为 "open" 状态（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果卡片不匹配，请将卡片从数组中移除并隐藏卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 增加移动计数器并将其显示在页面上（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果所有卡都匹配，则显示带有最终分数的消息（将这个功能放在你从这个函数中调用的另一个函数中）
 */

window.onload=function click_turn_over(){
                var click_count = 0;
                var cards1_1=document.getElementById("cards1_1");
                cards1_1.addEventListener('click', function() { 
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards1_1",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards1_1","",click_count);
                        aaa = "cards1_1";
                    }
                }, false);//给背面朝上的方块注册了onclick事件

                var cards1_2=document.getElementById("cards1_2");
                cards1_2.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards1_2",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards1_2","",click_count);
                        aaa = "cards1_2";
                    }
                }, false);//给背面朝上的方块注册了onclick事件

                var cards1_3=document.getElementById("cards1_3");
                cards1_3.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards1_3",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards1_3","",click_count);
                        aaa = "cards1_3";
                    }
                }, false);//给背面朝上的方块注册了onclick事件

                var cards1_4=document.getElementById("cards1_4");
                cards1_4.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards1_4",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards1_4","",click_count);
                        aaa = "cards1_4";
                    }
                }, false);//给背面朝上的方块注册了onclick事件

                var cards2_1=document.getElementById("cards2_1");
                cards2_1.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards2_1",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards2_1","",click_count);
                        aaa = "cards2_1";
                    }
                }, false);//给背面朝上的方块注册了onclick事件

                var cards2_2=document.getElementById("cards2_2");
                cards2_2.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards2_2",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards2_2","",click_count);
                        aaa = "cards2_2";
                    }
                }, false);//给背面朝上的方块注册了onclick事件

                var cards2_3=document.getElementById("cards2_3");
                cards2_3.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards2_3",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards2_3","",click_count);
                        aaa = "cards2_3";
                    }
                }, false);//给背面朝上的方块注册了onclick事件

                var cards2_4=document.getElementById("cards2_4");
                cards2_4.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards2_4",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards2_4","",click_count);
                        aaa = "cards2_4";
                    }
                }, false);//给背面朝上的方块注册了onclick事件
                
                var cards3_1=document.getElementById("cards3_1");
                cards3_1.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards3_1",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards3_1","",click_count);
                        aaa = "cards3_1";
                    }
                }, false);//给背面朝上的方块注册了onclick事件

                var cards3_2=document.getElementById("cards3_2");
                cards3_2.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards3_2",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards3_2","",click_count);
                        aaa = "cards3_2";
                    }
                }, false);//给背面朝上的方块注册了onclick事件

                var cards3_3=document.getElementById("cards3_3");
                cards3_3.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards3_3",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards3_3","",click_count);
                        aaa = "cards3_3";
                    }
                }, false);//给背面朝上的方块注册了onclick事件

                var cards3_4=document.getElementById("cards3_4");
                cards3_4.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards3_4",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards3_4","",click_count);
                        aaa = "cards3_4";
                    }
                }, false);//给背面朝上的方块注册了onclick事件

                var cards4_1=document.getElementById("cards4_1");
                cards4_1.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards4_1",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards4_1","",click_count);
                        aaa = "cards3_1";
                    }
                }, false);//给背面朝上的方块注册了onclick事件
                
                var cards4_2=document.getElementById("cards4_2");
                cards4_2.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards4_2",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards4_2","",click_count);
                        aaa = "cards4_2";
                    }
                }, false);//给背面朝上的方块注册了onclick事件
                var cards4_3=document.getElementById("cards4_3");
                cards4_3.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards4_3",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards4_3","",click_count);
                        aaa = "cards4_3";
                    }
                }, false);//给背面朝上的方块注册了onclick事件    

                var cards4_4=document.getElementById("cards4_4");
                cards4_4.addEventListener("click", function() {
                    click_count = ++click_count;
                    // alert(click_count) 
                    if(click_count == 2){
                        showfont(aaa,"cards4_4",click_count);
                        click_count = 0;
                    }else{
                        showfont("cards4_4","",click_count);
                        aaa = "cards4_4";
                    }
                }, false);//给背面朝上的方块注册了onclick事件

}
                


function showfont(cards_id_1,cards_id_2,counts) {
    // alert(counts);
	if(counts != 2){
		document.getElementById(cards_id_1).setAttribute("class","card match");
        var card_1 = cards_id_1 ;	
	}else {
        document.getElementById(cards_id_2).setAttribute("class","card match");
        var card_2 = cards_id_2 ; 
        var card_1 = cards_id_1 ; 
        setTimeout(function() {
            compare(card_1,card_2);    
        },1000);
	}
}
	
	

function compare(card_one,card_two){
	var card_one_class=document.getElementById(card_one+"_content").getAttribute("class");
	var card_two_class=document.getElementById(card_two+"_content").getAttribute("class");
	if (card_one_class != card_two_class){
		document.getElementById(card_one).setAttribute("class","card");
		document.getElementById(card_two).setAttribute("class","card");
	}else{
        document.getElementById(card_one).setAttribute("class","card open show");
        document.getElementById(card_two).setAttribute("class","card open show");
    }
    
}
















