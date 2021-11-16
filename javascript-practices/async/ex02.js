const ex02 = function(param){   
    return new Promise(function(resolve,reject){   // 리절브-성공, 리젝트-에러
    //
    // 비동기 코드
    // 파일 시스템 접근, 네트 워크 통신, SQL to DB, setTimeout
    //
    setTimeout(function(){
         if(param === 'param-data'){
             resolve('ok');  //  성공여부, 결과
          }else{
            reject(new Error('fail'));
            }
        }, 2000);
    });
}
 // ex03으로 export도 해야하고 밑에 실행도 시켜야하면 아래처럼 if문으로 변경

if(require.main == module){
// test01: success
ex02('param-data').then(function(res){
    console.log(res);
});

// test03: fail
ex02('param-data').catch(function(error){
    console.error(error);
});

// 일반적으로...
// ex02('')
//     .then(res => {

//     })
//     .catch(err => {

//     });
console.log('wait.......');
} else{
    module.exports = ex02;
}


