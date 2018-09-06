// enum REN{ nan, nv, yao }
// console.log(REN.yao)
var REN;
(function (REN) {
    REN["nan"] = "\u7537";
    REN["nv"] = "\u5973";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));
console.log(REN.yao);
