---
sidebarDepth: 2
---

# NCUHOME JavaScript 代码风格指南

*编写易理解、易交接、高可维护的代码。* :rocket:

## [accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)

`setter` **必须**有对应的 `getter`，`getter` 可以没有对应的 `setter`

```javascript {2}
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

数组的方法除了 `forEach` 之外，回调函数**必须**有返回值

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

**禁止**函数的循环复杂度超过 `20`

> Reference: https://en.wikipedia.org/wiki/Cyclomatic_complexity

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

## [constructor-super](https://eslint.org/docs/rules/constructor-super)

`constructor` 中**必须**有 `super`

```javascript {3}
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

**必须**使用 `===` 或 `!==`，**禁止**使用 `==` 或 `!=`

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

**禁止**方向错误的 `for` 循环

```javascript
// bad
for (let i = 0; i < 10; i--) {
    // do something
}

// good
for (let i = 0; i < 10; i++) {
    // do something
}
```

## [func-name-matching](https://eslint.org/docs/rules/func-name-matching)

函数赋值给变量的时候，函数名**必须**与变量名一致

```javascript {2}
// bad
const foo = function bar() {};

// good
const foo = function() {};
const bar = function bar() {};
```

## [getter-return](https://eslint.org/docs/rules/getter-return)

`getter` **必须**有返回值，并且**禁止**返回空

```javascript {9}
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

```javascript {2,3}
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

代码块嵌套的深度**禁止**超过 `5` 层

```javascript {7,8}
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

回调函数嵌套**禁止**超过 `3` 层，多了请用 `async` `await` 替代

```javascript {5}
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