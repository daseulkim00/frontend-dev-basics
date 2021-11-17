/**
 * 6. 구조분해
 */
//ex1 - basic
const user ={
        firstName: '둘',
        lastName: '리',
        email: 'aaa@naver.com'
};

// let firstName = user.firstName;
// let lastName = user.lastName;
// 이거 두줄이 밑에 한줄
({firstName,lastName} = user);

console.log(firstName,lastName);