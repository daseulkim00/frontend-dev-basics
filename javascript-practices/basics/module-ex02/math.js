// 나쁜방법  - 만들어놨는데 다시 만든다는것은 만들어놓은걸 안쓰겟다는 뜻임(export객체로 안쓰겟다는뜻)

module.exports = {
    PI: 3.14,
    max: function() {
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            max = e > max ? e : max;
        });

        return max
    },
    min: function() {
        var min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            min = e < min ? e : min;
        });

        return min
    }
}