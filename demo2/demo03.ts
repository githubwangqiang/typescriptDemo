// function search(age:number):string{
//     return '找到了' + age +'岁小姐姐'
// }

// var age:number = 18
// var result:string = search(age)
// console.log(result)

function search(...xuqiu:string[]):string{
    let yy:string = '找到了'
    for (let i =0; i<xuqiu.length; i++) {
        yy=yy+xuqiu[i]
        if(i<xuqiu.length){
            yy=yy+'、'
        }
    }

    return yy+ '的小姐姐'
}

var result:string = search('22岁', '大长腿','瓜子脸','水蛇腰')
console.log(result)