const ex02 = require('./ex02')   // 문제 - 가져오면 ex02가 실행하는 함수라서  밑에 실행하는 코드까지 가져오게된다.(require하면 다 실행이 된다.) 이럴코드를 만들때는 ex2에서 if문 만들기

const ex03 = async function(param) {
    //에러 잡아주는거 적어줘야한다.
    try{
        const res = await ex02(param);
        console.log(res);
    } catch(err){
        console.error(err);
    }
}

ex03("param-data");
// 에러 ex03("param-error");

console.log('wait......');