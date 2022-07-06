//1. 랜덤번호 지정
//2. 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//3. 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//4. 랜덤번호가 < 유저번호 Down!!!
//5. 랜덤번호가 > 유저번호 Up!!!
//6. rest버튼을 누르면 게임이 리셋된다
//7. 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측불가, 버튼이 disable)
//8. 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
//9. 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다


let computerNum = 0
let chances = 5
let gameOver = false


let playButton = document.getElementById("play_button");    // document : 웹페이지 자체
let userInput = document.getElementById("user_input");
let resultArea = document.getElementById("result_area");
let chanceArea = document.getElementById("chance_area");
let resetButton = document.getElementById("reset_button");

let history=[]



playButton.addEventListener("click",play);     // 두번째 인자에 어떤 함수를 넣을것인지 정한다. // 함수도 매개변수로 넘길 수 있다. // 함수뒤에 ()는 넣지 않는다.
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){   // 원래 있던 값을 없애준다.
    userInput.value="";
});




function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;      // Math.random() - 랜덤한 숫자를 뽑을 수 있게 도와주는 함수 ( 0~1 사이의 숫자를 pick해준다 )
    console.log("정답",computerNum);
}


function play(){
   let userValue = userInput.value

   if(userValue < 1 || userValue > 100){
    resultArea.textContent = "1과 100 사이의 숫자를 입력해주세요"
    return;
   }

   if(history.includes(userValue)){
       resultArea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해주세요"
       return;
   }

   chances --;
   chanceArea.textContent= `남은기회: ${chances}번`
//    console.log("찬스",chances)


   if(userValue < computerNum){
       resultArea.textContent = "Up!!"
    //    console.log("Up!!")
   }else if(userValue > computerNum){
    resultArea.textContent = "Down!!"
    //    console.log("Down!!")
   }else{
    resultArea.textContent = "정답입니다!"
    gameOver = true;
    //    console.log("정답입니다!")
   }
   
   history.push(userValue)
   console.log(history)

   if(chances < 1){
    gameOver=true;
   }

   if(gameOver == true){
       playButton.disabled = true;  //플레이버튼 비활성화
   }

   
}


function reset(){
    playButton.disabled = false;
    userInput.value = ""
    history=[];
    chances = 5;
    chanceArea.innerHTML = `남은찬스${chances}`
    pickRandomNum()
    
}



pickRandomNum();  // <- 함수를 만든후 결과 값은 따로 불러와야한다.




let i = 1
let j = 1

// let leftArea = document.getElementById("left_area");


    for(i=1; i<10; i++){
        
        document.write("<div id='left_area'>");
        document.write("<h3>"+i+"단</h3>");
        // leftArea.append("<h3>"+i+"단</h3>");
        // console.log(i)   


        for(j=1; j<10; j++){

        document.write(i+ "X" +j+ "=" +i*j+" <br><br>");
        // leftArea.append(`${i}X${j}=${i*j}`);
        // leftArea.append("<br><br>");
        // leftArea.textContent=`${i}X${j}=${i*j}`;
        // console.log(i*j)     

    }
    
        document.write("</div>");
}




