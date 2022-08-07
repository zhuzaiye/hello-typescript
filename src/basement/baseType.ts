// TypeScript数据类型 
// 通过类型注解实现类型约束

// 原始数据类型
// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol
let boolVal: boolean = true;
// Type 'Boolean' is not assignable to type 'boolean'. 
// 通过构造函数Boolean()创造的对象不是boolean值，二者不能等价
// let boolObject: boolean = new Boolean(1);
let boolObject: Boolean = new Boolean(1);
// 直接调用Boolean构造函数可以创建boolean值
let boolVal1: boolean = Boolean();
// 数值 包括进制类型和NaN, INF
let numberVal: number = 10;
let numberHexVal: number = 0xf00d;
let numberNaNVal: number = NaN;
let numberInfVal: number = Infinity;
// 字符串
let stringVal: string = "TypeScript";
// 字符串模板
let stringTpl: string = `Hello ${stringVal}`;

// undefined null
// undefined和null是所有类型的子集，可以赋值给所有类型
// 只能赋值其他值，只能是其本身
let un: undefined = undefined;
let nu: null = null;

// void 操作符
// 无任何返回即为空
function retVoid(): void {
    alert("this is ts void type");
}

// 数组
let array: number[] = [1,2,3];
// array.push("3"); // Argument of type 'string' is not assignable to parameter of type 'number'
// 用过接口Array可构建混合类型的数组
let array2: Array<number|string> = [1, "2", 3];
// array.push(false); // Argument of type 'boolean' is not assignable to parameter of type 'number'

// 元组
// let tuple: [number, string] = ["1", 2];  // 顺序不能错且数量与类型一致
let tuple: [number, string] = [1, ""];  
tuple.push("2");
tuple.push(2);
tuple.pop();
console.log(tuple);
// 元组的长度是与类型定义序列是一致的，能添加不能越界访问
// tuple[2];  // Tuple type '[number, string]' of length '2' has no element at index '2'

// 函数
let add = (x: number, y: number): number => x + y;
// 声明函数类型的输入和输出
let calcFunc: (x: number, y:number) => number;
// 创建函数的类型的执行方式
calcFunc = (a, b) => a + b;

// 对象
// let obj: Object = {x: 1, y:2};
// obj.x = 3;  // Property 'x' does not exist on type 'Object'
let obj: {x: number, y:number} = {x: 1, y:2};
obj.x = 3;
// obj.y = "2";  // Property 'x' does not exist on type 'Object'

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1===s2);

// any 对js的兼容
let x;  // 不指定就默认为any 可以被复制给任何类型

// never 永无返回值的类型
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}