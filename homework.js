//코드스피츠 3기 함수편의 2회차 과제를 제출합니다.

//다음의 코드는 구구단을 출력한다.
//이를 만족하는 제네레이터를 작성하시오.

const generator = function*(i, j){
 for(var num1 = 1; num1 <= i; num1++){
   for (var num2 = 1; num2 <= j; num2++){
  		yield [num1, num2, num1 * num2];
    }
  }
}

for(const [i, j, k] of generator(9,9)){
	console.log(`${i} x ${j} = ${k}`);
}d

//1 x 1 = 1
//1 x 2 = 2
//...
//9 x 8 = 72
//9 x 9 = 81
