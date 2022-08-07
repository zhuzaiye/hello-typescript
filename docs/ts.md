# typescript

> Typed JavaScript at Any Scale.

## javascript

1. 解释性语言，类型不到运行不知其是什么，无约束
2. 类型存在隐式转化, 难以控制
3. 基于原型上属性或者方法都可以在运行时改变
4. 函数, 变量无界限，随意赋值和转化

总之：都是`太灵活`的错

`typescript`静态类型。

- 每个类型都存在具体类型，编译阶段就能发现类型错误
- 兼容`javascript`的弱类型特征

## 数据类型

- 原始数据类型

1. 布尔值

```typescript
// 定义布尔值类型
let isDone: boolean = false;
// 使用构造函数Boolean创建布尔对象
let createBoolean: boolean = new Boolean(1);
```

2. 数值

```typescript
// number可以指定多种进制类型数值定义
let dec: number = 10;
```

3. 字符串

```typescript
// stringdinginess字符串类型
let myName: string = 'Tom';
let myAge: number = 25;

// ${expr} 用来在模板字符串中嵌入表达式， `用于包裹模板
let sentence: string = `Hello, my name is ${myName}.
                        I'll be ${myAge + 1} years old next month.`;
```

4. 空值

```typescript
// 用于无返回值的函数定义
function funcVoid(): void {
    alert('My name is Tom');
}
// 只能将它赋值为 undefined 和 null（只在 --strictNullChecks 未指定时）
let unusable: void = undefined;

// null和undefined
let u: undefined = undefined;
let n: null = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
let num: number = undefined;
```

5. any

```typescript
// 任何数值类型
let anyVal: any = "any";
anyVal = 10;
// 任意值的属性和方法
// 未声明类型的变量
let something;
something = 'any';
```

6. 类型推论

```typescript
// 定义赋初值，按照初值推论变量类型
let val = "heloo";
// 定义未赋值，类型为any，按照any进行赋值
```

7. 联合类型

```typescript
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// 不确定将访问类型的共有属性
function getString(something: string | number): string {
    return something.toString();
}
```

8. 对象类型接口

```typescript
interface Person {
    readonly id: number;  // 只读属性 必须在初始化姐姐实例进行赋值
    name: string;         // 确定属性 实例化必须有
    age?: number;         // 可选属性 实例化可有可无
    [propName: string]: any;  // 任意属性 上述属性必须是任意属性的子集
}
```

9. 数组类型

```typescript
// 类型[]
let array: number[] = [1, 1, 2, 3, 5];
// 泛型数组
let array: Array<number> = [1, 1, 2, 3, 5];
// any[]
let array: any[] = [1, "1", {a:"b"}]
```

10. 函数类型

```typescript
// 函数定义
function sum(x: number, y: number): number {
    return x + y;
}
// 函数表达式
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
// 可选参数 可选参数和python一样放在不可选后面
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
// 默认参数
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
```