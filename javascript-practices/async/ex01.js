const ex01 = function(param, callback){    // 비동기함수앞에꼭 파라미터/url등을 달아줘야한다 그다음에 콜백
    //
    // 비동기 코드
    // 파일 시스템 접근, 네트 워크 통신, SQL to DB, setTimeout
    //
    setTimeout(function(){
        if(param === 'param-data'){
            callback(null,'ok');   //  성공여부, 결과
        }else{
            callback(new Error('fail'),null);
        }
    },2000);
}
              

//test01 : success              // 에러, 받는거            
ex01('param-data',function(error,res){   // 성공하는 비동기 함수   파람데이터넣어주고, 결과
    if(error){
        console.error(error);
    }else{
        console.log(res);
    }
});

////test02 : fail 
ex01('param-error',function(error,res){   
    if(error){
        console.error(error);
    }else{
        console.log(res);
    }
});


console.log("wait.......");
