// 在面向对象的语言中，术语 interface 经常被用来定义一个不包含数据合逻辑代码但是用来签名定义了行为的抽象类型


interface Husband {
    sex:string
    interest:string
    maiBaoBao?:Boolean
}
let myhusband:Husband = {
    sex:'男',
    interest:'看书、做家务',
    maiBaoBao:true
}
console.log(myhusband)

interface SearchMan{
    (source:string,subString:string):boolean
}
let mySearch:SearchMan
mySearch=function(source:string,subString:string):boolean{
    let flag=source.search(subString)
    return (flag != -1)
}
console.log(mySearch('搞、敷、帅、的','胖'))