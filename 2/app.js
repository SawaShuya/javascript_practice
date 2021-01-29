var hello = "hello World";

var int1 = 1;
var intw = -10;
var float1 = 3.14;
var str1 = "sawashuya"


var orange = 160;
var apple = 150;

if(orange < apple){
  alert("オレンジのほうが安い");
} else if(orange == apple){
  alert("同じ値段");
} else{
  alert("リンゴのほうが安い");
}


var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert("2をかけ続けて" + max + "を超えるのに必要だった回数は" + count + "回です")


var i;
var num = 0;
for(i = 1; i < 11; i++){
  num = num + 1;
}

alert('1から10まで足し算した結果は' + num + 'です');