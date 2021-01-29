function addString(strA) {
  var addStr = "Hello " + strA;
  return addStr;
}

// var alertString;
// alertString = addString("webcamp");

// alert(alertString);

// var promptStr = prompt("好きな文字を入力")
// alert(promptStr)

var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください");
// alert("あなたの選んだ手は" + user_hand + "です");

function getJShand(){
  var js_hand_num = Math.floor(Math.random() * 3);

  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 0){
    js_hand = "チョキ";
  } else {
    js_hand = "パー";
  }
  return js_hand;
}

function winlose(user, js){
  if(js == "グー"){
    if(user == "グー"){
      winlose = "あいこ";
    } else if(user == "チョキ") {
      winlose = "負け";
    } else {
      winlose = "勝ち";
    }
  }
  if(js == "チョキ"){
    if(user == "グー"){
      winlose = "勝ち";
    } else if(user == "チョキ") {
      winlose = "あいこ";
    } else {
      winlose = "負け";
    }
  }
  if(js == "パー"){
    if(user == "グー"){
      winlose = "負け";
    } else if(user == "チョキ") {
      winlose = "勝ち";
    } else {
      winlose = "あいこ";
    }
  }

  return winlose;
}


var js_hand = getJShand();
var judge = winlose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
