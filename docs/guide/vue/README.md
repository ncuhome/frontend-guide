---
sidebarDepth: 2
---

# NCUHOME Vue 代码风格指南


## [vue/attributes-order](https://eslint.org/docs/rules/vue/attributes-order)

标签属性必须按规则排序

```javascript
// bad


// good
```

> 

## [vue/comment-directive](https://eslint.org/docs/rules/vue/comment-directive)

支持在模版中使用 eslint-disable-next-line 等注释

```javascript
// bad


// good
```

> 

## [vue/eqeqeq](https://eslint.org/docs/rules/vue/eqeqeq)

必须使用 === 或 !==，禁止使用 == 或 !=

```javascript
// bad
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:attr</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo <mark class="eslint-error" data-tip="Expected &apos;===&apos; and instead saw &apos;==&apos;.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(vue/eqeqeq)&lt;/span&gt;">=</mark>= 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

// good
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:attr</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo <mark class="eslint-error" data-tip="Expected &apos;===&apos; and instead saw &apos;==&apos;.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(vue/eqeqeq)&lt;/span&gt;">=</mark>= 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>```

> 

## [vue/jsx-uses-vars](https://eslint.org/docs/rules/vue/jsx-uses-vars)

已定义的 jsx element 必须使用

```javascript
// bad


// good
```

> 

## [vue/no-async-in-computed-properties](https://eslint.org/docs/rules/vue/no-async-in-computed-properties)

计算属性禁止包含异步方法

```javascript
// bad


// good
```

> 

## [vue/no-duplicate-attributes](https://eslint.org/docs/rules/vue/no-duplicate-attributes)

禁止出现重复的属性

```javascript
// bad


// good
```

> 

## [vue/no-parsing-error](https://eslint.org/docs/rules/vue/no-parsing-error)

禁止出现语法错误

```javascript
// bad
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ message. <mark class="eslint-error" data-tip="Parsing error: Unexpected end of expression.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(vue/no-parsing-error)&lt;/span&gt;">}</mark>}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

// good
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ message. <mark class="eslint-error" data-tip="Parsing error: Unexpected end of expression.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(vue/no-parsing-error)&lt;/span&gt;">}</mark>}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>```

> 

## [vue/no-reserved-keys](https://eslint.org/docs/rules/vue/no-reserved-keys)

禁止覆盖保留字

```javascript
// bad


// good
```

> 

## [vue/no-textarea-mustache](https://eslint.org/docs/rules/vue/no-textarea-mustache)

禁止在 <textarea> 中出现 {{message}}

```javascript
// bad


// good
```

> 

## [vue/no-unused-components](https://eslint.org/docs/rules/vue/no-unused-components)

禁止定义在 components 中的组件未使用

```javascript
// bad


// good
```

> 

## [vue/no-unused-vars](https://eslint.org/docs/rules/vue/no-unused-vars)

模版中已定义的变量必须使用

```javascript
// bad


// good
```

> 

## [vue/no-use-v-if-with-v-for](https://eslint.org/docs/rules/vue/no-use-v-if-with-v-for)

禁止在同一个元素上使用 v-if 和 v-for 指令

```javascript
// bad


// good
```

> 

## [vue/order-in-components](https://eslint.org/docs/rules/vue/order-in-components)

组件的属性必须为一定的顺序

```javascript
// bad


// good
```

> 

## [vue/require-component-is](https://eslint.org/docs/rules/vue/require-component-is)

<component> 必须有 v-bind:is

```javascript
// bad


// good
```

> 

## [vue/require-default-prop](https://eslint.org/docs/rules/vue/require-default-prop)

props 如果不是 required 的字段，必须有默认值

```javascript
// bad


// good
```

> 

## [vue/require-direct-export](https://eslint.org/docs/rules/vue/require-direct-export)

禁止手动 export default

```javascript
// bad


// good
```

> 

## [vue/require-prop-type-constructor](https://eslint.org/docs/rules/vue/require-prop-type-constructor)

props 的取值必须是构造函数

```javascript
// bad


// good
```

> 

## [vue/require-render-return](https://eslint.org/docs/rules/vue/require-render-return)

render 函数必须有返回值

```javascript
// bad


// good
```

> 

## [vue/require-v-for-key](https://eslint.org/docs/rules/vue/require-v-for-key)

v-for 指令的元素必须有 v-bind:key

```javascript
// bad


// good
```

> 

## [vue/return-in-computed-property](https://eslint.org/docs/rules/vue/return-in-computed-property)

计算属性必须有返回值

```javascript
// bad


// good
```

> 

## [vue/this-in-template](https://eslint.org/docs/rules/vue/this-in-template)

禁止在模版中用 this

```javascript
// bad


// good
```

> 

## [vue/use-v-on-exact](https://eslint.org/docs/rules/vue/use-v-on-exact)

当一个节点上出现两个 v-on:click 时，其中一个必须为 exact

```javascript
// bad


// good
```

> 

## [vue/v-on-function-call](https://eslint.org/docs/rules/vue/v-on-function-call)

禁止在 v-on 的值中调用函数

```javascript
// bad


// good
```

> 

## [vue/valid-template-root](https://eslint.org/docs/rules/vue/valid-template-root)

template 的根节点必须合法

```javascript
// bad


// good
```

> 

## [vue/valid-v-bind](https://eslint.org/docs/rules/vue/valid-v-bind)

v-bind 指令必须合法

```javascript
// bad
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><mark class="eslint-error" data-tip="&apos;v-bind&apos; directives require an attribute value.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(vue/valid-v-bind)&lt;/span&gt;">v-bind</mark></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><mark class="eslint-error" data-tip="&apos;v-bind&apos; directives require an attribute value.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(vue/valid-v-bind)&lt;/span&gt;">:aaa</mark></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><mark class="eslint-error" data-tip="&apos;v-bind&apos; directives don&apos;t support the modifier &apos;bbb&apos;.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(vue/valid-v-bind)&lt;/span&gt;"><span class="token namespace">v-bind:</span>aaa.bbb</mark></span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

// good
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><mark class="eslint-error" data-tip="&apos;v-bind&apos; directives require an attribute value.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(vue/valid-v-bind)&lt;/span&gt;">v-bind</mark></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><mark class="eslint-error" data-tip="&apos;v-bind&apos; directives require an attribute value.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(vue/valid-v-bind)&lt;/span&gt;">:aaa</mark></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><mark class="eslint-error" data-tip="&apos;v-bind&apos; directives don&apos;t support the modifier &apos;bbb&apos;.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(vue/valid-v-bind)&lt;/span&gt;"><span class="token namespace">v-bind:</span>aaa.bbb</mark></span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>```

> 

## [vue/valid-v-cloak](https://eslint.org/docs/rules/vue/valid-v-cloak)

v-cloak 指令必须合法

```javascript
// bad


// good
```

> 

## [vue/valid-v-else](https://eslint.org/docs/rules/vue/valid-v-else)

v-else 指令必须合法

```javascript
// bad


// good
```

> 

## [vue/valid-v-else-if](https://eslint.org/docs/rules/vue/valid-v-else-if)

v-else-if 指令必须合法

```javascript
// bad


// good
```

> 

## [vue/valid-v-for](https://eslint.org/docs/rules/vue/valid-v-for)

v-for 指令必须合法

```javascript
// bad


// good
```

> 

## [vue/valid-v-html](https://eslint.org/docs/rules/vue/valid-v-html)

v-html 指令必须合法

```javascript
// bad


// good
```

> 

## [vue/valid-v-if](https://eslint.org/docs/rules/vue/valid-v-if)

v-if 指令必须合法

```javascript
// bad


// good
```

> 

## [vue/valid-v-model](https://eslint.org/docs/rules/vue/valid-v-model)

v-model 指令必须合法

```javascript
// bad


// good
```

> 

## [vue/valid-v-on](https://eslint.org/docs/rules/vue/valid-v-on)

v-on 指令必须合法

```javascript
// bad


// good
```

> 

## [vue/valid-v-once](https://eslint.org/docs/rules/vue/valid-v-once)

v-once 指令必须合法

```javascript
// bad


// good
```

> 

## [vue/valid-v-pre](https://eslint.org/docs/rules/vue/valid-v-pre)

v-pre 指令必须合法

```javascript
// bad


// good
```

> 

## [vue/valid-v-show](https://eslint.org/docs/rules/vue/valid-v-show)

v-show 指令必须合法

```javascript
// bad


// good
```

> 

## [vue/valid-v-text](https://eslint.org/docs/rules/vue/valid-v-text)

v-text 指令必须合法

```javascript
// bad


// good
```

> 