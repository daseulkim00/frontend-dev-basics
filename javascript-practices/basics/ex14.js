/*
URL 다루기

*/

var url1 = "http://www.mysite.com/user?name=enffl&no=10";

// 1. escape: URL 전부 ENCODING(X) deprecated
var url2 = escape(url1);
console.log(url2);

// 2. encodingURI : parameter만 encoding(o)
var url3 = encodeURI(url1);
console.log(url3);

// 3. encodeURIComponent: 값만 엔코딩 해야하는 경우
 var url4 = encodeURIComponent(url1);
 console.log(url4);

 // 만들어야 할 URL
 // http://mysite.com/user>no=10&name=둘리$email=kick@gamil.com

 var toQueryString = function(o){ 
    var qs = []; 
    for(prop in o){
        qs.push(prop +"="+ encodeURIComponent(o[prop]));
    }
    return qs.join("&");
    // console.log(qs);
 }

 var url = "http://mysite.com/user";
 var params = {
     name: '둘리',
     no : 10,
     email: 'kick@gamil.com'

 }
var url5 = url + "?" + toQueryString(params);
console.log(url5);


// yoyoyoyoyo uhahahahh kimdaseul~~~~~~~~~~~~~~~~~~
// kimdaseul en baboya~~~~~~~~~~~~~`
// uhahahahahah 123123
/*
 $.ajax({
     url: url,
     type: 'post',
     dataType:'application/json' , //내가 받을때
     data: toQueryString(params)

 })
*/




