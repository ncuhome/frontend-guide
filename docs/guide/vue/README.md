---
sidebarDepth: 2
---

# NCUHOME Vue 代码风格指南


## [vue/attributes-order](https://eslint.org/docs/rules/vue/attributes-order)

标签属性必须按规则排序

```vue
// bad


// good

```

## [vue/comment-directive](https://eslint.org/docs/rules/vue/comment-directive)

支持在模版中使用 eslint-disable-next-line 等注释

```vue
// bad


// good

```

## [vue/eqeqeq](https://eslint.org/docs/rules/vue/eqeqeq)

必须使用 === 或 !==，禁止使用 == 或 !=

```vue
// bad
<template>
    <div :attr="foo == 1" />
</template>

// good
<template>
    <div :attr="foo === 1" />
</template>
```

## [vue/jsx-uses-vars](https://eslint.org/docs/rules/vue/jsx-uses-vars)

已定义的 jsx element 必须使用

```vue
// bad


// good

```

## [vue/no-async-in-computed-properties](https://eslint.org/docs/rules/vue/no-async-in-computed-properties)

计算属性禁止包含异步方法

```vue
// bad


// good

```

## [vue/no-duplicate-attributes](https://eslint.org/docs/rules/vue/no-duplicate-attributes)

禁止出现重复的属性

```vue
// bad


// good

```

## [vue/no-parsing-error](https://eslint.org/docs/rules/vue/no-parsing-error)

禁止出现语法错误

```vue
// bad
<template>
    <div>{{ message. }}</div>
</template>

// good
<template>
    <div>{{ message }}</div>
</template>
```

## [vue/no-reserved-keys](https://eslint.org/docs/rules/vue/no-reserved-keys)

禁止覆盖保留字

```vue
// bad


// good

```

## [vue/no-textarea-mustache](https://eslint.org/docs/rules/vue/no-textarea-mustache)

禁止在 &lt;textarea> 中出现 Mustache 语法

```vue
// bad


// good

```

## [vue/no-unused-components](https://eslint.org/docs/rules/vue/no-unused-components)

禁止定义在 components 中的组件未使用

```vue
// bad


// good

```

## [vue/no-unused-vars](https://eslint.org/docs/rules/vue/no-unused-vars)

模版中已定义的变量必须使用

```vue
// bad


// good

```

## [vue/no-use-v-if-with-v-for](https://eslint.org/docs/rules/vue/no-use-v-if-with-v-for)

禁止在同一个元素上使用 v-if 和 v-for 指令

```vue
// bad


// good

```

## [vue/order-in-components](https://eslint.org/docs/rules/vue/order-in-components)

组件的属性必须为一定的顺序

```vue
// bad


// good

```

## [vue/require-component-is](https://eslint.org/docs/rules/vue/require-component-is)

&lt;component> 必须有 v-bind:is

```vue
// bad


// good

```

## [vue/require-default-prop](https://eslint.org/docs/rules/vue/require-default-prop)

props 如果不是 required 的字段，必须有默认值

```vue
// bad


// good

```

## [vue/require-direct-export](https://eslint.org/docs/rules/vue/require-direct-export)

禁止手动 export default

```vue
// bad


// good

```

## [vue/require-prop-type-constructor](https://eslint.org/docs/rules/vue/require-prop-type-constructor)

props 的取值必须是构造函数

```vue
// bad


// good

```

## [vue/require-render-return](https://eslint.org/docs/rules/vue/require-render-return)

render 函数必须有返回值

```vue
// bad


// good

```

## [vue/require-v-for-key](https://eslint.org/docs/rules/vue/require-v-for-key)

v-for 指令的元素必须有 v-bind:key

```vue
// bad


// good

```

## [vue/return-in-computed-property](https://eslint.org/docs/rules/vue/return-in-computed-property)

计算属性必须有返回值

```vue
// bad


// good

```

## [vue/this-in-template](https://eslint.org/docs/rules/vue/this-in-template)

禁止在模版中用 this

```vue
// bad


// good

```

## [vue/use-v-on-exact](https://eslint.org/docs/rules/vue/use-v-on-exact)

当一个节点上出现两个 v-on:click 时，其中一个必须为 exact

```vue
// bad


// good

```

## [vue/v-on-function-call](https://eslint.org/docs/rules/vue/v-on-function-call)

禁止在 v-on 的值中调用函数

```vue
// bad


// good

```

## [vue/valid-template-root](https://eslint.org/docs/rules/vue/valid-template-root)

template 的根节点必须合法

```vue
// bad


// good

```

## [vue/valid-v-bind](https://eslint.org/docs/rules/vue/valid-v-bind)

v-bind 指令必须合法

```vue
// bad
<template>
    <div>
        <div v-bind></div>
        <div :aaa></div>
        <div v-bind:aaa.bbb="foo"></div>
    </div>
</template>

// good
<template>
    <div>
        <div v-bind="foo"></div>
        <div v-bind:aaa="foo"></div>
        <div :aaa="foo"></div>
        <div :aaa.prop="foo"></div>
    </div>
</template>
```

## [vue/valid-v-cloak](https://eslint.org/docs/rules/vue/valid-v-cloak)

v-cloak 指令必须合法

```vue
// bad


// good

```

## [vue/valid-v-else](https://eslint.org/docs/rules/vue/valid-v-else)

v-else 指令必须合法

```vue
// bad


// good

```

## [vue/valid-v-else-if](https://eslint.org/docs/rules/vue/valid-v-else-if)

v-else-if 指令必须合法

```vue
// bad


// good

```

## [vue/valid-v-for](https://eslint.org/docs/rules/vue/valid-v-for)

v-for 指令必须合法

```vue
// bad


// good

```

## [vue/valid-v-html](https://eslint.org/docs/rules/vue/valid-v-html)

v-html 指令必须合法

```vue
// bad


// good

```

## [vue/valid-v-if](https://eslint.org/docs/rules/vue/valid-v-if)

v-if 指令必须合法

```vue
// bad


// good

```

## [vue/valid-v-model](https://eslint.org/docs/rules/vue/valid-v-model)

v-model 指令必须合法

```vue
// bad


// good

```

## [vue/valid-v-on](https://eslint.org/docs/rules/vue/valid-v-on)

v-on 指令必须合法

```vue
// bad


// good

```

## [vue/valid-v-once](https://eslint.org/docs/rules/vue/valid-v-once)

v-once 指令必须合法

```vue
// bad


// good

```

## [vue/valid-v-pre](https://eslint.org/docs/rules/vue/valid-v-pre)

v-pre 指令必须合法

```vue
// bad


// good

```

## [vue/valid-v-show](https://eslint.org/docs/rules/vue/valid-v-show)

v-show 指令必须合法

```vue
// bad


// good

```

## [vue/valid-v-text](https://eslint.org/docs/rules/vue/valid-v-text)

v-text 指令必须合法

```vue
// bad


// good

```