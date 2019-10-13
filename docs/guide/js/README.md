---
sidebarDepth: 2
---

# NCUHOME JavaScript 代码风格指南

*编写易理解、易交接、高可维护的代码。* :rocket:

## [accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)

setter 必须有对应的 getter，getter 可以没有对应的 setter

```javascript
// bad
const foo = {
    set bar(value) {
        return 'bar ' + value;
    }
};

// good
const foo = {
    set bar(value) {
        this.barValue = 'bar ' + value;
    },
    get bar() {
        return this.barValue;
    }
};
const bar = {
    get foo() {
        return this.fooValue;
    }
};
```

## [array-callback-return](https://eslint.org/docs/rules/array-callback-return)

数组的方法除了 forEach 之外，回调函数必须有返回值

```javascript
// bad
const foo = [1, 2, 3].map((num) => {
    console.log(num * num);
});

// good
const foo = [1, 2, 3].map((num) => {
    return num * num;
});
```

## [complexity](https://eslint.org/docs/rules/complexity)

禁止函数的循环复杂度超过 20

```javascript
// bad
function foo() {
    if (i === 1) console.log(i);
    if (i === 2) console.log(i);
    if (i === 3) console.log(i);
    if (i === 4) console.log(i);
    if (i === 5) console.log(i);
    if (i === 6) console.log(i);
    if (i === 7) console.log(i);
    if (i === 8) console.log(i);
    if (i === 9) console.log(i);
    if (i === 10) console.log(i);
    if (i === 11) console.log(i);
    if (i === 12) console.log(i);
    if (i === 13) console.log(i);
    if (i === 14) console.log(i);
    if (i === 15) console.log(i);
    if (i === 16) console.log(i);
    if (i === 17) console.log(i);
    if (i === 18) console.log(i);
    if (i === 19) console.log(i);
    if (i === 20) console.log(i);
}

// good
function foo() {
    if (i === 1) console.log(i);
    if (i === 2) console.log(i);
    if (i === 3) console.log(i);
    if (i === 4) console.log(i);
    if (i === 5) console.log(i);
    if (i === 6) console.log(i);
    if (i === 7) console.log(i);
    if (i === 8) console.log(i);
    if (i === 9) console.log(i);
    if (i === 10) console.log(i);
    bar(i);
}
function bar(i) {
    if (i === 11) console.log(i);
    if (i === 12) console.log(i);
    if (i === 13) console.log(i);
    if (i === 14) console.log(i);
    if (i === 15) console.log(i);
    if (i === 16) console.log(i);
    if (i === 17) console.log(i);
    if (i === 18) console.log(i);
    if (i === 19) console.log(i);
    if (i === 20) console.log(i);
}
```

> https://en.wikipedia.org/wiki/Cyclomatic_complexity

## [constructor-super](https://eslint.org/docs/rules/constructor-super)

constructor 中必须有 super

```javascript
// bad
class Foo extends Bar {
    constructor() {}
}

// good
class Foo extends Bar {
    constructor() {
        super();
    }
}
```

## [eqeqeq](https://eslint.org/docs/rules/eqeqeq)

必须使用 === 或 !==，禁止使用 == 或 !=

```javascript
// bad
if (foo == 1) {
}
if (bar != null) {
}

// good
if (foo === 1) {
}
if (bar !== null) {
}
```

## [for-direction](https://eslint.org/docs/rules/for-direction)

禁止方向错误的 for 循环

```javascript
// bad
for (let i = 0; i &lt; 10; i--) {
    // do something
}

// good
for (let i = 0; i &lt; 10; i++) {
    // do something
}
```

## [func-name-matching](https://eslint.org/docs/rules/func-name-matching)

函数赋值给变量的时候，函数名必须与变量名一致

```javascript
// bad
const foo = function bar() {};

// good
const foo = function() {};
const bar = function bar() {};
```

## [getter-return](https://eslint.org/docs/rules/getter-return)

getter 必须有返回值，并且禁止返回空

```javascript
// bad
const user = {
    get name() {
        // do something
    }
};
class User {
    get name() {
        return;
    }
}

// good
const user = {
    get name() {
        return 'Alex';
    }
};
class User {
    get name() {
        return this.name;
    }
}
```

## [guard-for-in](https://eslint.org/docs/rules/guard-for-in)

for in 内部必须有 hasOwnProperty

```javascript
// bad
for (key in foo) {
    doSomething(key);
}

// good
for (key in foo) {
    if (Object.prototype.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
}
```

## [max-depth](https://eslint.org/docs/rules/max-depth)

代码块嵌套的深度禁止超过 5 层

```javascript
// bad
function foo() {
    if (true) {
        if (true) {
            if (true) {
                if (true) {
                    if (true) {
                        if (true) {
                        }
                    }
                }
            }
        }
    }
}

// good
function foo() {
    if (true) {
        if (true) {
            if (true) {
                if (true) {
                    if (true) {
                    }
                }
            }
        }
    }
}
```

## [max-nested-callbacks](https://eslint.org/docs/rules/max-nested-callbacks)

回调函数嵌套禁止超过 3 层，多了请用 async await 替代

```javascript
// bad
foo(() => {
    bar(() => {
        baz(() => {
            qux(() => {});
        });
    });
});

// good
foo(async () => {
    await bar();
    await baz();
    await qux();
});
```

## [max-params](https://eslint.org/docs/rules/max-params)

函数的参数禁止超过 7 个

```javascript
// bad
function foo(a1, a2, a3, a4, a5, a6, a7, a8) {}

// good
function foo(a1, a2, a3, a4, a5, a6, a7) {}
function bar({ a1, a2, a3, a4, a5, a6, a7, a8 }) {}
```

## [new-cap](https://eslint.org/docs/rules/new-cap)

new 后面的类名必须首字母大写

```javascript
// bad
new foo();
new foo.bar();

// good
new Foo();
new foo.Bar();
Foo();
```

## [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)

禁止使用 Array 构造函数时传入的参数超过一个

```javascript
// bad
const foo = Array(0, 1, 2); // [0, 1, 2]
const bar = new Array(0, 1, 2); // [0, 1, 2]

// good
const foo = [0, 1, 2];
Array(3); // [empty × 3]
new Array(3); // [empty × 3]
Array(3).fill('foo'); // ["foo", "foo", "foo"]
new Array(3).fill('foo'); // ["foo", "foo", "foo"]
```

> 参数为一个时表示创建一个指定长度的数组，比较常用
参数为多个时表示创建一个指定内容的数组，此时可以用数组字面量实现，不必使用构造函数

## [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)

禁止将 async 函数做为 new Promise 的回调函数

```javascript
// bad
new Promise(async (resolve) => {
    setTimeout(resolve, 1000);
});

// good
new Promise((resolve) => {
    setTimeout(resolve, 1000);
});
```

> 出现这种情况时，一般不需要使用 new Promise 实现异步了

## [no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor)

禁止直接使用 Buffer

```javascript
// bad
new Buffer(5);
Buffer([1, 2, 3]);

// good
Buffer.alloc(5);
Buffer.from([1, 2, 3]);
```

> Buffer 构造函数是已废弃的语法

## [no-caller](https://eslint.org/docs/rules/no-caller)

禁止使用 caller 或 callee

```javascript
// bad
function foo(n) {
    if (n &lt;= 0) {
        return;
    }
    arguments.callee(n - 1);
}

// good
function foo(n) {
    if (n &lt;= 0) {
        return;
    }
    foo(n - 1);
}
```

> 它们是已废弃的语法

## [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)

switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块

```javascript
// bad
switch (foo) {
    case 1:
        const x = 1;
        break;
}

// good
switch (foo) {
    case 1: {
        const x = 1;
        break;
    }
}
```

## [no-class-assign](https://eslint.org/docs/rules/no-class-assign)

禁止对已定义的 class 重新赋值

```javascript
// bad
class Foo {}
Foo = {};

// good
class Foo {}
```

## [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)

禁止与负零进行比较

```javascript
// bad
if (foo === -0) {
}

// good
if (foo === 0) {
}
```

## [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)

禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了

```javascript
// bad
if (foo = 0) {
}

// good
if (foo === 0) {
}
if (bar === (foo = 0)) {
}
```

## [no-const-assign](https://eslint.org/docs/rules/no-const-assign)

禁止对使用 const 定义的常量重新赋值

```javascript
// bad
const foo = 1;
foo = 2;

// good
let foo = 1;
foo = 2;

for (const bar in [1, 2, 3]) {
    console.log(bar);
}
```

## [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)

禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式

```javascript
// bad
if (true) {
}
const foo = 0 ? 'bar' : 'baz';

// good
for (; true; ) {
    if (foo === 0) break;
}
while (true) {
    if (foo === 0) break;
}
```

## [no-debugger](https://eslint.org/docs/rules/no-debugger)

禁止使用 debugger

```javascript
// bad
if (foo) {
    debugger;
}

// good
if (foo) {
    // debugger;
}
```

## [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)

禁止重复定义类的成员

```javascript
// bad
class Foo {
    bar() {}
    bar() {}
}

// good
class Foo {
    bar() {}
    baz() {}
}
```

## [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)

禁止在对象字面量中出现重复的键名

```javascript
// bad
const foo = {
    bar: 1,
    bar: 2
};

// good
const foo = {
    bar: 1,
    baz: 2
};
```

## [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)

禁止在 switch 语句中出现重复测试表达式的 case

```javascript
// bad
switch (foo) {
    case 1:
        break;
    case 2:
        break;
    case 1:
        break;
}

// good
switch (foo) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
}
```

## [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)

禁止重复导入模块

```javascript
// bad
import { readFile } from 'fs';
import { writeFile } from 'fs';

// good
import { readFile, writeFile } from 'fs';
```

## [no-empty](https://eslint.org/docs/rules/no-empty)

禁止出现空代码块，允许 catch 为空代码块

```javascript
// bad
if (foo) {
}

// good
if (foo) {
    // do something
}
try {
    // do something
} catch (e) {}
```

## [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)

禁止在正则表达式中使用空的字符集 []

```javascript
// bad
const reg = /abc[]/;

// good
const reg = /abc[a-z]/;
```

## [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)

禁止解构赋值中出现空 {} 或 []

```javascript
// bad
const {} = foo;

// good
const { bar } = foo;
```

## [no-eq-null](https://eslint.org/docs/rules/no-eq-null)

禁止使用 foo == null，必须使用 foo === null

```javascript
// bad
if (foo == null) {
}

// good
if (foo === null) {
}
```

## [no-eval](https://eslint.org/docs/rules/no-eval)

禁止使用 eval

```javascript
// bad
eval('const foo = 0');

// good
const foo = 0;
```

## [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)

禁止将 catch 的第一个参数 error 重新赋值

```javascript
// bad
try {
} catch (e) {
    e = 10;
}

// good
try {
} catch (e) {
    console.error(e);
}
```

## [no-extend-native](https://eslint.org/docs/rules/no-extend-native)

禁止修改原生对象

```javascript
// bad
Array.prototype.flat = function() {
    // do something
};

[1, [2, 3]].flat();

// good
function flat(arr) {
    // do something
}

flat([1, [2, 3]]);
```

> 修改原生对象可能会与将来版本的 js 冲突

## [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)

禁止出现没必要的 bind

```javascript
// bad
(function() {
    foo();
}.bind(bar));

// good
(function() {
    this.foo();
}.bind(bar));
```

## [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)

禁止不必要的布尔类型转换

```javascript
// bad
if (!!foo) {
}
if (Boolean(foo)) {
}

// good
if (foo) {
}
if (!foo) {
}
```

## [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)

switch 的 case 内必须有 break, return 或 throw，空的 case 除外

```javascript
// bad
switch (foo) {
    case 1:
        doSomething();
    case 2:
        doSomethingElse();
}

// good
switch (foo) {
    case 1:
        doSomething();
        break;
    case 2:
        doSomethingElse();
}
switch (foo) {
    case 1:
    case 2:
        doSomething();
}
```

## [no-func-assign](https://eslint.org/docs/rules/no-func-assign)

禁止将一个函数声明重新赋值

```javascript
// bad
function foo() {}
foo = 1;

// good
let foo = function() {};
foo = 1;
```

## [no-global-assign](https://eslint.org/docs/rules/no-global-assign)

禁止对全局变量赋值

```javascript
// bad
Object = null;

// good
foo = null;
```

## [no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)

禁止使用 ~+ 等难以理解的类型转换，仅允许使用 !!

```javascript
// bad
const b = ~foo.indexOf('.');
const n = +foo;
const m = 1 * foo;
const s = '' + foo;
foo += '';

// good
const b = foo.indexOf('.') !== -1;
const n = Number(foo);
const m = Number(foo);
const s = String(foo);
foo = String(foo);

const c = !!foo;
```

## [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)

禁止在 setTimeout 或 setInterval 中传入字符串

```javascript
// bad
setTimeout('alert("Hello World");', 1000);

// good
setTimeout(() => {
    alert('Hello World');
}, 1000);
```

## [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)

禁止在 if 代码块内出现函数声明

```javascript
// bad
if (foo) {
    function bar() {}
}

// good
if (foo) {
    const bar = function() {};
}
```

## [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)

禁止在 RegExp 构造函数中出现非法的正则表达式

```javascript
// bad
const reg1 = new RegExp('[');
const reg2 = new RegExp('.', 'z');

// good
const reg1 = new RegExp('[a-z]');
const reg2 = new RegExp('.', 'g');
```

## [no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)

禁止在类之外的地方使用 this

```javascript
// bad
function foo() {
    this.a = 0;
}

// good
class Foo {
    constructor() {
        this.a = 0;
    }
}
```

> 只允许在 class 中使用 this

## [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)

禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中

```javascript
// bad
function foo()　{
}

// good
const foo = '　';
const bar = /　/;
const baz = `　`;
```

## [no-iterator](https://eslint.org/docs/rules/no-iterator)

禁止使用 __iterator__

```javascript
// bad
Foo.prototype.__iterator__ = function() {
    return new FooIterator(this);
};

// good
let foo = {};
foo[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...foo]);
// [1, 2, 3]
```

> __iterator__ 是一个已废弃的属性
使用 [Symbol.iterator] 替代它

## [no-labels](https://eslint.org/docs/rules/no-labels)

禁止使用 label

```javascript
// bad
loop:
    for (let i = 0; i &lt; 5; i++) {
        if (i === 1) {
            continue loop;
        }
        console.log(i);
    }
// 0 2 3 4

// good
for (let i = 0; i &lt; 5; i++) {
    if (i === 1) {
        continue;
    }
    console.log(i);
}
// 0 2 3 4
```

## [no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)

禁止使用没必要的 {} 作为代码块

```javascript
// bad
{
    foo();
}

// good
if (foo) {
    bar();
}
```

## [no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)

禁止正则表达式中使用肉眼无法区分的特殊字符

```javascript
// bad
/^[Á]$/u.test('Á'); // false

// good
/^[A]$/u.test('A'); // true
```

> 某些特殊字符很难看出差异，最好不要在正则中使用

## [no-multi-str](https://eslint.org/docs/rules/no-multi-str)

禁止使用 \ 来换行字符串

```javascript
// bad
const foo = 'Line 1\
Line 2';

// good
const foo = `Line 1
Line 2`;
```

## [no-new](https://eslint.org/docs/rules/no-new)

禁止直接 new 一个类而不赋值

```javascript
// bad
new Foo();

// good
const foo = new foo();
```

> new 应该作为创建一个类的实例的方法，所以不能不赋值

## [no-new-func](https://eslint.org/docs/rules/no-new-func)

禁止使用 new Function

```javascript
// bad
const foo = new Function('a', 'b', 'return a + b');

// good
const foo = function(a, b) {
    return a + b;
};
```

> 这和 eval 是等价的

## [no-new-object](https://eslint.org/docs/rules/no-new-object)

禁止直接 new Object

```javascript
// bad
const foo = new Object();

// good
const foo = {};
```

## [no-new-require](https://eslint.org/docs/rules/no-new-require)

禁止直接 new require('foo')

```javascript
// bad
const foo = new require('foo');

// good
const Foo = require('foo');
const foo = new Foo();
```

## [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)

禁止使用 new 来生成 Symbol

```javascript
// bad
const foo = new Symbol('foo');

// good
const foo = Symbol('foo');
```

## [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)

禁止使用 new 来生成 String, Number 或 Boolean

```javascript
// bad
const s = new String('foo');
const n = new Number(1);
const b = new Boolean(true);

// good
const s = String(someValue);
const n = Number(someValue);
const b = Boolean(someValue);
```

## [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)

禁止将 Math, JSON 或 Reflect 直接作为函数调用

```javascript
// bad
const foo = Math();
const bar = JSON();
const baz = Reflect();

// good
const foo = Math.random();
const bar = JSON.parse('{}');
const baz = Reflect.get({ x: 1, y: 2 }, 'x');
```

## [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)

禁止对函数的参数重新赋值

```javascript
// bad
function foo(bar) {
    bar = bar || '';
}

// good
function foo(bar_) {
    bar = bar_ || '';
}
```

## [no-path-concat](https://eslint.org/docs/rules/no-path-concat)

禁止对 __dirname 或 __filename 使用字符串连接

```javascript
// bad
const foo = __dirname + '/foo.js';
const bar = __filename + '/bar.js';

// good
import path from 'path';

const foo = path.resolve(__dirname, 'foo.js');
const bar = path.join(__filename, 'bar.js');
```

> 不同平台下的路径符号不一致，建议使用 path 处理平台差异性

## [no-proto](https://eslint.org/docs/rules/no-proto)

禁止使用 __proto__

```javascript
// bad
const foo = bar.__proto__;
bar.__proto__ = baz;

// good
const foo = Object.getPrototypeOf(bar);
Object.setPrototypeOf(bar, baz);
```

> __proto__ 是已废弃的语法

## [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)

禁止在正则表达式中出现连续的空格

```javascript
// bad
const reg1 = /foo   bar/;
const reg2 = new RegExp('foo   bar');

// good
const reg1 = /foo {3}bar/;
const reg2 = new RegExp('foo {3}bar');
```

## [no-return-assign](https://eslint.org/docs/rules/no-return-assign)

禁止在 return 语句里赋值

```javascript
// bad
function foo() {
    return (bar = 1);
}

// good
function foo() {
    bar = 1;
    return bar;
}
```

## [no-return-await](https://eslint.org/docs/rules/no-return-await)

禁止在 return 语句里使用 await

```javascript
// bad
async function foo() {
    return await bar();
}

// good
async function foo() {
    const b = await bar();
    return b;
}
```

## [no-self-assign](https://eslint.org/docs/rules/no-self-assign)

禁止将自己赋值给自己

```javascript
// bad
foo = foo;

// good
foo = bar;
```

## [no-self-compare](https://eslint.org/docs/rules/no-self-compare)

禁止将自己与自己比较

```javascript
// bad
if (foo === foo) {
}
if (NaN === NaN) {
}

// good
if (foo === bar) {
}
if (isNaN(foo)) {
}
```

## [no-sequences](https://eslint.org/docs/rules/no-sequences)

禁止使用逗号操作符

```javascript
// bad
foo = doSomething(), 1;

// good
doSomething();
foo = 1;
```

## [no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)

禁止使用保留字作为变量名

```javascript
// bad
const undefined = 1;
function foo(NaN) {}
function Infinity() {}

// good
console.log(undefined);
console.log(NaN);
console.log(Infinity);
```

## [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)

禁止在数组中出现连续的逗号

```javascript
// bad
const foo = [1, 2, , 3];

// good
const foo = [1, 2, 3];
```

## [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)

禁止在普通字符串中出现模版字符串里的变量形式

```javascript
// bad
const foo = 'Hello ${bar}';

// good
const foo = 'Hello {bar}';
```

## [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)

禁止在 super 被调用之前使用 this 或 super

```javascript
// bad
class Foo extends Bar {
    constructor() {
        this.foo = 1;
        super();
    }
}

// good
class Foo extends Bar {
    constructor() {
        super();
        this.foo = 1;
    }
}
```

## [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)

禁止 throw 字面量，必须 throw 一个 Error 对象

```javascript
// bad
throw 'foo';
throw 1;

// good
throw new Error('foo');
```

## [no-undef](https://eslint.org/docs/rules/no-undef)

禁止使用未定义的变量

```javascript
// bad
foo(bar);

// good
function foo() {}
const bar = 1;
foo(bar);

if (typeof baz === 'number') {
}
```

## [no-undef-init](https://eslint.org/docs/rules/no-undef-init)

禁止将 undefined 赋值给变量

```javascript
// bad
let foo = undefined;

// good
let foo;
```

## [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)

循环内必须对循环条件中的变量有修改

```javascript
// bad
let foo = 10;
while (foo) {
    console.log(foo);
}

// good
let foo = 10;
while (foo) {
    console.log(foo);
    foo--;
}
```

## [no-unreachable](https://eslint.org/docs/rules/no-unreachable)

禁止在 return, throw, break 或 continue 之后还有代码

```javascript
// bad
function foo() {
    return;
    const bar = 1;
}

// good
function foo() {
    return;
    // const bar = 1;
}
```

## [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)

禁止在 finally 中出现 return, throw, break 或 continue

```javascript
// bad
function foo() {
    try {
        return 1;
    } finally {
        // finally 会在 try 之前执行，故会 return 2
        return 2;
    }
}

// good
function foo() {
    try {
        return 1;
    } finally {
        console.log(2);
    }
}
```

> finally 中的语句会在 try 之前执行

## [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)

禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号

```javascript
// bad
if (!key in object) {
}
if (!obj instanceof SomeClass) {
}

// good
if (!(key in object)) {
}
if (!(obj instanceof SomeClass)) {
}
```

## [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)

禁止无用的表达式

```javascript
// bad
1;
foo;
('foo');
foo &amp;&amp; bar;
foo || bar;
foo ? bar : baz;
`bar`;

// good
'use strict';
foo &amp;&amp; bar();
foo || bar();
foo ? bar() : baz();
foo`bar`;
```

## [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)

已定义的变量必须使用

```javascript
// bad
let foo = 1;
foo = 2;

function bar(baz) {}

const { baz, ...rest } = data;

// good
let foo = 1;
console.log(foo);

function bar(baz) {}
bar();

const { baz, ...rest } = data;
console.log(baz, rest);

try {
} catch (e) {}
```

## [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)

变量必须先定义后使用

```javascript
// bad
console.log(foo);
const foo = 1;

new Baz();
class Baz {}

// good
(() => {
    console.log(foo);
})();
const foo = 1;
console.log(foo);

bar();
function bar() {}

(() => {
    new Baz();
})();
class Baz {}
new Baz();
```

## [no-useless-call](https://eslint.org/docs/rules/no-useless-call)

禁止出现没必要的 call 或 apply

```javascript
// bad
foo.call(null, 1, 2, 3); // foo(1, 2, 3)
foo.apply(null, [1, 2, 3]); // foo(1, 2, 3)

foo.bar.call(foo, 1, 2, 3); // foo.bar(1, 2, 3);
foo.bar.apply(foo, [1, 2, 3]); // foo.bar(1, 2, 3);

// good
foo.call(bar, 1, 2, 3);
foo.apply(bar, [1, 2, 3]);

foo.bar.call(baz, 1, 2, 3);
foo.bar.apply(baz, [1, 2, 3]);
```

## [no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)

禁止在 catch 中仅仅只是把错误 throw 出去

```javascript
// bad
try {
    doSomethingThatMightThrow();
} catch (e) {
    throw e;
}

// good
doSomethingThatMightThrow();

try {
    doSomethingThatMightThrow();
} catch (e) {
    doSomethingBeforeRethrow();
    throw e;
}
```

> 这样的 catch 是没有意义的，等价于直接执行 try 里的代码

## [no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)

禁止出现没必要的计算键名

```javascript
// bad
const foo = {
    ['1']: 1,
    ['bar']: 'bar'
};

// good
const foo = {
    1: 1,
    bar: 'bar'
};
```

## [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)

禁止出现没必要的字符串连接

```javascript
// bad
const foo = 'f' + 'oo';
const bar = `b` + `ar`;

// good
const foo = 'fo';
const bar = 1 + `ar`;
```

## [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)

禁止出现没必要的 constructor

```javascript
// bad
class Foo {
    constructor() {}
}
class Bar extends Foo {
    constructor(...args) {
        super(...args);
    }
}

// good
class Foo {
    constructor() {
        doSomething();
    }
}
class Bar extends Foo {
    constructor(...args) {
        super(...args);
        doSomething();
    }
}
```

## [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)

禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar;

```javascript
// bad
import { foo as foo } from 'foo';
const bar = 1;
export { bar as bar };
let { baz: baz } = foo;

// good
import { foo } from 'foo';
const bar = 1;
export { bar };
let { baz } = foo;
```

## [no-var](https://eslint.org/docs/rules/no-var)

禁止使用 var

```javascript
// bad
var foo = 1;

// good
let foo = 1;
const bar = 2;
```

## [no-void](https://eslint.org/docs/rules/no-void)

禁止使用 void

```javascript
// bad
function foo() {
    return void 0;
}

// good
function foo() {
    return;
}
```

## [one-var](https://eslint.org/docs/rules/one-var)

禁止变量申明时用逗号一次申明多个

```javascript
// bad
let foo, bar;
const baz = 1,
    qux = 2;

// good
let foo;
let bar;
const baz = 1;
const qux = 2;
```

## [prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread)

必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量

```javascript
// bad
const foo = Object.assign({}, bar);

// good
const foo = { ...bar };

// 第一个参数为变量时允许使用 Object.assign
Object.assign(foo, baz);
```

## [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)

Promise 的 reject 中必须传入 Error 对象，而不是字面量

```javascript
// bad
Promise.reject('foo');

new Promise((resolve, reject) => {
    reject();
});

new Promise((resolve, reject) => {
    reject('foo');
});

// good
Promise.reject(new Error('foo'));

new Promise((resolve, reject) => {
    reject(new Error('foo'));
});
```

## [radix](https://eslint.org/docs/rules/radix)

parseInt 必须传入第二个参数

```javascript
// bad
const foo = parseInt('071'); // 57

// good
const foo = parseInt('071', 10); // 71
```

## [require-yield](https://eslint.org/docs/rules/require-yield)

generator 函数内必须有 yield

```javascript
// bad
function* foo() {
    return 1;
}

// good
function* foo() {
    yield 1;
    return 2;
}
```

## [spaced-comment](https://eslint.org/docs/rules/spaced-comment)

注释的斜线或 * 后必须有空格

```javascript
// bad
//foo
/*bar */
/**baz */

// good
// foo
/* bar */
/** baz */
```

## [strict](https://eslint.org/docs/rules/strict)

禁止使用 'strict';

```javascript
// bad
'use strict';
function foo() {
    'use strict';
}

// good
function foo() {}
```

## [symbol-description](https://eslint.org/docs/rules/symbol-description)

创建 Symbol 时必须传入参数

```javascript
// bad
const foo = Symbol();

// good
const foo = Symbol('foo');
```

## [use-isnan](https://eslint.org/docs/rules/use-isnan)

必须使用 isNaN(foo) 而不是 foo === NaN

```javascript
// bad
if (foo === NaN) {
}

// good
if (isNaN(foo)) {
}
```

## [valid-typeof](https://eslint.org/docs/rules/valid-typeof)

typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'

```javascript
// bad
if (typeof foo === 'numbe') {
}

// good
if (typeof foo === 'number') {
}
```

## [yoda](https://eslint.org/docs/rules/yoda)

必须使用 if (foo === 5) 而不是 if (5 === foo)

```javascript
// bad
if (1 === foo) {
}

// good
if (foo === 1) {
}
if (1 &lt; foo) {
}
if (1 &lt; foo &amp;&amp; foo &lt; 10) {
}
```