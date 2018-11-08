/*
 * 设置一张卡片的事件监听器。 如果该卡片被点击：--OK
 *  - 显示卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）--OK
 *  - 将卡片添加到状态为 “open” 的 *数组* 中（将这个功能放在你从这个函数中调用的另一个函数中）--another method
 *  - 如果数组中已有另一张卡，请检查两张卡片是否匹配  --anaother method
 *    + 如果卡片匹配，将卡片锁定为 "open" 状态（将这个功能放在你从这个函数中调用的另一个函数中）--another method
 *    + 如果卡片不匹配，请将卡片从数组中移除并隐藏卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）--another method
 *    + 增加移动计数器并将其显示在页面上（将这个功能放在你从这个函数中调用的另一个函数中）--another mothod
 *    + 如果所有卡都匹配，则显示带有最终分数的消息（将这个功能放在你从这个函数中调用的另一个函数中）--another method
 */

 window.onload=function click_turn_over(){

    time_reset();

    time_start();

    shuffle_all();

    storage=window.localStorage;
    storage.setItem("countAll",0);
    storage.setItem("success_couple",0);
    storage.setItem("score_point",0);

    document.getElementById('moves_counts').innerHTML = storage.countAll;
    document.getElementById('score').innerHTML = storage.score_point;


    var clear_counts=document.getElementById("clear_counts");
    clear_counts.addEventListener('click', function() { 
        clear_count()
    }, false);

    var clear_button=document.getElementById("clear_button");
    clear_button.addEventListener('click', function() { 
        clear_count()
    }, false);
    
    var click_count = 0;

    let deck = document.getElementsByClassName('deck')[0];
    // 利用事件代理的方式为卡片添加 click 事件，这样可以避免为每一张卡片单独
    // 添加事件监听，看起来更简洁，效率也更高
    deck.addEventListener('click', function(evt){
        if(document.getElementById(evt.target.id).getAttribute("class") != 'card match'){
            // 避免点击的不是卡片元素
            if(evt.target.classList.contains('card')){
                click_counts();
                click_count = ++click_count;
                if(click_count == 2){
                // 通过 evt.target.id 获取卡片的 id 值
                showfront(storage.evt_target_id,evt.target.id,click_count);
                click_count = 0;
            }else{
                showfront(evt.target.id,"",click_count);
                storage.setItem("evt_target_id",evt.target.id);
                // aaa = evt.target.id;
            }
        }
    }
})    
}



function showfront(cards_id_1,cards_id_2,counts) {
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
    },700);
}
}



function compare(card_one,card_two) {
	var card_one_class=document.getElementById(card_one+"_content").getAttribute("class");
	var card_two_class=document.getElementById(card_two+"_content").getAttribute("class");
    if (card_one_class != card_two_class){
        document.getElementById(card_one).setAttribute("class","card");
        document.getElementById(card_two).setAttribute("class","card");
        storage.setItem('score_point',parseInt(storage.score_point) - 5);
        document.getElementById('score').innerHTML = storage.score_point;
    }else{
        document.getElementById(card_one).setAttribute("class","card open show");
        document.getElementById(card_two).setAttribute("class","card open show");
        storage.success_couple++;
        storage.setItem('score_point',parseInt(storage.score_point) + 10);
        document.getElementById('score').innerHTML = storage.score_point;
        if(storage.success_couple == 8) {
            if(storage.countAll <= 16 ){
                if(confirm("You have finished M-GAME! You score is " + storage.score_point + "(ScoreRank:3 Star)" + "You cost time:" + document.getElementById("time").innerText +"Do you wanna play again?")){ 
                    window.location.reload();
                }
            }else if(storage.countAll > 16 && storage.countAll <= 32) {
                if(confirm("You have finished M-GAME! You score is " + storage.score_point + "(ScoreRank:2 Stars)" + "You cost time:" + document.getElementById("time").innerText +"Do you wanna play again?")){ 
                    window.location.reload();
                }
            }else if(storage.countAll > 32 && storage.countAll <= 48) {
                if(confirm("You have finished M-GAME! You score is " + storage.score_point + "(ScoreRank:1 Stars)" + "You cost time:" + document.getElementById("time").innerText +"Do you wanna play again?")){ 
                    window.location.reload();
                }
            }else {
                if(confirm("You have finished M-GAME! You score is " + storage.score_point + "(ScoreRank:0 Stars)" + "You cost time:" + document.getElementById("time").innerText +"Do you wanna play again?")){ 
                    window.location.reload();
                }
            }
            time_stop();
        }        
    }
}

function click_counts() {
    storage=window.localStorage;
    storage.countAll++;
    document.getElementById('moves_counts').innerHTML = storage.countAll;
    if(parseInt(storage.countAll) == 16){
        var el = document.getElementById('stars_1');
        el.remove();
    }else if(parseInt(storage.countAll) == 32) {
        var el = document.getElementById('stars_2');
        el.remove();
    }else if(parseInt(storage.countAll) == 48) {
        document.getElementById('stars_3').setAttribute("class",'fa fa-star-o');
    }

}

function clear_count() {
    window.location.reload();
}

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


function shuffle_all() {

    shuffle(cards);

    // 事先把所有的卡片图标保存到数组里面
    let items = ["fa fa-diamond", "fa fa-diamond","fa fa-paper-plane-o", "fa fa-paper-plane-o","fa fa-anchor", 
    "fa fa-anchor","fa fa-bolt", "fa fa-bolt","fa fa-cube", "fa fa-cube","fa fa-bomb", "fa fa-bomb","fa fa-leaf",
     "fa fa-leaf","fa fa-bicycle", "fa fa-bicycle"];
    // 通过 forEach 来遍历数组
    items.forEach(function(item, index){
    document.getElementById(cards[index]+'_content').setAttribute("class",item);
})

}

var i1 = 0; //分钟第一位
var i2 = 0; //分钟第二位
var s1 = 0; //秒第一位
var s2 = 0; //秒第二位
var ms1 = 0; //百分秒第一位
var ms2 = 0; //百分秒第二位
var t;　　//计时函数保存
function time_start(){
    //document.getElementById("time_start").disabled = "true";  //开始后使开始按钮失效，防止多次点击计时加快的bug
    ms2++; //只需百分秒最后一位自加，前面依次进位
    if(ms2>9){
        ms2 = 0;
        ms1++;
    }
    if(ms1>9){
        ms1 = 0;
        s2++;
    }
    if(s2>9){
        s2 = 0;
        s1++;
    }
    if(s1>5){
        s1 = 0;
        i2++;
    }
    if(i2>9){
        i2 = 0;
        i1++;
    }
    if(i1>5){
        //超出秒表计数范围
        clearTimeout(t);
        return false;
    }
    document.getElementById("time").innerHTML = ""+i1+i2+":"+s1+s2+":"+ms1+ms2+"";
    document.getElementById("time").style.color = "black";
    t = setTimeout("time_start()",10);　　//百分秒百分之一秒执行一次
}

function time_stop(){
    clearTimeout(t);
    document.getElementById("time").style.color = "red";
    // document.getElementById("time_start").disabled = ""; //停止时恢复按钮功能
}

function time_reset(){
    clearTimeout(t);
    i1 = 0;
    i2 = 0;
    s1 = 0;
    s2 = 0;
    ms1 = 0;
    ms2 = 0;
    document.getElementById("time").innerHTML = ""+i1+i2+":"+s1+s2+":"+ms1+ms2+"";
    document.getElementById("time").style.color = "black";
    // document.getElementById("time_start").disabled = "";
}









