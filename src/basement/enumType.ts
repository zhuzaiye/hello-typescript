// 枚举类型
// 常量的集合
// 类似golang const()的定义
// 值不可修改

// 数字枚举 0 1 2 3
enum typeNum {
    Reporter,
    Developer,
    Maintainer = 5,
    Owner,
    Guest
}

console.log(typeNum.Reporter);

// 字符串枚举
enum Message {
    Success = "Exec Success",
    Fail = "Exac Fialed"
}

// 异构枚举 不需要这样过度划分


