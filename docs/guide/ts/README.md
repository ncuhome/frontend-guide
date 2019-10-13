---
sidebarDepth: 2
---

# NCUHOME TypeScript 代码风格指南



## [@typescript-eslint/adjacent-overload-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md)

重载的函数必须写在一起

```javascript
// bad
declare namespace NSFoo1 {
    export function foo(s: string): void;
    export function foo(n: number): void;
    export function bar(): void;
    export function foo(sn: string | number): void;
}

type TypeFoo1 = {
    foo(s: string): void;
    foo(n: number): void;
    bar(): void;
    foo(sn: string | number): void;
};

interface IFoo1 {
    foo(s: string): void;
    foo(n: number): void;
    bar(): void;
    foo(sn: string | number): void;
}

// good
declare namespace NSFoo2 {
    export function foo(s: string): void;
    export function foo(n: number): void;
    export function foo(sn: string | number): void;
    export function bar(): void;
}

type TypeFoo2 = {
    foo(s: string): void;
    foo(n: number): void;
    foo(sn: string | number): void;
    bar(): void;
};

interface IFoo2 {
    foo(s: string): void;
    foo(n: number): void;
    foo(sn: string | number): void;
    bar(): void;
}
```

> 增加可读性

## [@typescript-eslint/class-name-casing](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-name-casing.md)

类名与接口名必须为驼峰式

```javascript
// bad
class Invalid_Class_Name {}

interface invalidInterface {}

// good
class ValidClassName {}

interface ValidInterface {}
```

## [@typescript-eslint/consistent-type-assertions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)

类型断言必须使用 as Type，禁止使用 &lt;Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）

```javascript
// bad
let bar1: string | number;
const foo1 = &lt;string>bar1;

const baz1 = {
    bar: 1
} as object;

// good
let bar2: string | number;
const foo2 = bar2 as string;

const baz2 = {
    bar: 1
} as any;
```

> &lt;Type> 容易被理解为 jsx

## [@typescript-eslint/consistent-type-definitions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md)

优先使用 interface 而不是 type

```javascript
// bad
type Foo1 = {
    foo: string;
};

// good
interface Foo2 {
    foo: string;
}
```

> interface 可以 implement, extend 和 merge

## [@typescript-eslint/explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)

必须设置类的成员的可访问性

```javascript
// bad
class Foo2 {
    static foo = 'foo';
    static getFoo() {
        return Foo2.foo;
    }
    constructor() {}
    bar = 'bar';
    getBar() {}
    get baz() {
        return 'baz';
    }
    set baz(value) {
        console.log(value);
    }
}

// good
class Foo2 {
    private static foo = 'foo';
    public static getFoo() {
        return Foo2.foo;
    }
    public constructor() {}
    protected bar = 'bar';
    public getBar() {}
    public get baz() {
        return 'baz';
    }
    public set baz(value) {
        console.log(value);
    }
}
```

> 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好

## [@typescript-eslint/member-ordering](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md)

指定类成员的排序规则

```javascript
// bad
class Foo1 {
    private getBar3() {
        return this.bar3;
    }
    protected getBar2() {}
    public getBar1() {}
    public constructor() {
        console.log(Foo1.getFoo3());
        console.log(this.getBar3());
    }
    private bar3 = 'bar3';
    protected bar2 = 'bar2';
    public bar1 = 'bar1';
    private static getFoo3() {
        return Foo1.foo3;
    }
    protected static getFoo2() {}
    public static getFoo1() {}
    private static foo3 = 'foo3';
    protected static foo2 = 'foo2';
    public static foo1 = 'foo1';
}

// good
class Foo2 {
    public static foo1 = 'foo1';
    protected static foo2 = 'foo2';
    private static foo3 = 'foo3';
    public static getFoo1() {}
    protected static getFoo2() {}
    private static getFoo3() {
        return Foo2.foo3;
    }
    public bar1 = 'bar1';
    protected bar2 = 'bar2';
    private bar3 = 'bar3';
    public constructor() {
        console.log(Foo2.getFoo3());
        console.log(this.getBar3());
    }
    public getBar1() {}
    protected getBar2() {}
    private getBar3() {
        return this.bar3;
    }
}
```
::: tip
优先级：
1. static > instance
2. field > constructor > method
3. public > protected > private
:::
## [@typescript-eslint/no-empty-interface](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md)

禁止定义空的接口

```javascript
// bad
interface Foo1 {}

// good
interface Foo2 {
    foo: string;
}
```

## [@typescript-eslint/no-inferrable-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md)

禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型

```javascript
// bad
const foo1: number = 1;
const bar1: string = '';

// good
const foo2 = 1;
const bar2 = '';
```

> 可以简化代码

## [@typescript-eslint/no-namespace](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md)

禁止使用 namespace 来定义命名空间

```javascript
// bad
namespace foo1 {}

// good
declare namespace foo1 {}
```

> 使用 es6 引入模块，才是更标准的方式。
但是允许使用 declare namespace ... {} 来定义外部命名空间

## [@typescript-eslint/no-parameter-properties](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md)

禁止给类的构造函数的参数添加修饰符

```javascript
// bad
class Foo1 {
    constructor(private name: string) {}
}

// good
class Foo2 {
    constructor(name: string) {}
}
```

## [@typescript-eslint/no-require-imports](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md)

禁止使用 require

```javascript
// bad
const fs = require('fs');

// good
import * as fs from 'fs';
```

> 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入

## [@typescript-eslint/no-this-alias](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md)

禁止将 this 赋值给其他变量，除非是解构赋值

```javascript
// bad
function foo() {
    const self = this;
    setTimeout(function() {
        self.doWork();
    });
}

// good
function foo() {
    const { bar } = this;
    setTimeout(() => {
        this.doWork();
    });
}
```

## [@typescript-eslint/no-useless-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md)

禁止出现没必要的 constructor

```javascript
// bad
class Foo1 {
    constructor() {}
}

class Bar1 extends Foo1 {
    constructor() {
        super();
    }
}

// good
class Foo2 {
    constructor() {
        this.doSomething();
    }
    doSomething() {}
}

class Bar2 extends Foo1 {
    constructor() {
        super();
        this.doSomething();
    }
    doSomething() {}
}
```

## [@typescript-eslint/prefer-for-of](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md)

使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环

```javascript
// bad
const arr1 = [1, 2, 3];

for (let i = 0; i &lt; arr1.length; i++) {
    console.log(arr1[i]);
}

// good
const arr2 = [1, 2, 3];

for (const x of arr2) {
    console.log(x);
}

for (let i = 0; i &lt; arr2.length; i++) {
    // i is used to write to arr, so for-of could not be used.
    arr2[i] = 0;
}

for (let i = 0; i &lt; arr2.length; i++) {
    // i is used independent of arr, so for-of could not be used.
    console.log(i, arr2[i]);
}
```

> for of 循环更加易读

## [@typescript-eslint/prefer-function-type](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md)

可以简写为函数类型的接口或字面类型的话，则必须简写

```javascript
// bad
interface Foo1 {
    (): string;
}

// good
type Foo2 = () => string;
```

## [@typescript-eslint/prefer-namespace-keyword](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md)

禁止使用 module 来定义命名空间

```javascript
// bad
module Foo1 {}

// good
namespace Foo2 {}
```

> module 已成为 js 的关键字

## [@typescript-eslint/triple-slash-reference](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md)

禁止使用三斜杠导入文件

```javascript
// bad
/// &lt;reference path="./Animal">

// good
import Animal from './Animal';
```

> 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的

## [@typescript-eslint/typedef](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md)

interface 和 type 定义时必须声明成员的类型

```javascript
// bad
type Foo1 = {
    bar;
    baz;
};

// good
type Foo2 = {
    bar: boolean;
    baz: string;
};
```

## [@typescript-eslint/unified-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md)

函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明

```javascript
// bad
function foo1(x: number): void;
function foo1(x: string): void;
function foo1(x: any): any {
    return x;
}

// good
function foo2(x: number | string): void;
function foo2(x: any): any {
    return x;
}
```