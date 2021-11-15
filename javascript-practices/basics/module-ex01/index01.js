// 분리되어 있지 않은 app   그래서 좀 이상하게 뜰건데 밑에 분리해준다.
var App = function(){
    var app = {};
    app.textContent = "helloWorld"

    return app;
}

console.log(App());