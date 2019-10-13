---
sidebarDepth: 2
---

# NCUHOME TypeScript 代码风格指南




## [@typescript-eslint/adjacent-overload-signatures](https://eslint.org/docs/rules/@typescript-eslint/adjacent-overload-signatures)

重载的函数必须写在一起

```javascript
// bad
<span class="token keyword">declare</span> <span class="token keyword">namespace</span> NSFoo1 <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">:</span> <span class="token builtin">string</span></span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">:</span> <span class="token builtin">number</span></span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <mark class="eslint-error" data-tip="All &apos;foo&apos; signatures should be adjacent.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/adjacent-overload-signatures)&lt;/span&gt;"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">sn<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span></span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></mark>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> TypeFoo1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <mark class="eslint-error" data-tip="All &apos;foo&apos; signatures should be adjacent.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/adjacent-overload-signatures)&lt;/span&gt;"><span class="token function">foo</span><span class="token punctuation">(</span>sn<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></mark>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">IFoo1</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <mark class="eslint-error" data-tip="All &apos;foo&apos; signatures should be adjacent.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/adjacent-overload-signatures)&lt;/span&gt;"><span class="token function">foo</span><span class="token punctuation">(</span>sn<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></mark>
<span class="token punctuation">}</span>

// good
<span class="token keyword">declare</span> <span class="token keyword">namespace</span> NSFoo1 <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">:</span> <span class="token builtin">string</span></span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">:</span> <span class="token builtin">number</span></span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <mark class="eslint-error" data-tip="All &apos;foo&apos; signatures should be adjacent.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/adjacent-overload-signatures)&lt;/span&gt;"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">sn<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span></span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></mark>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> TypeFoo1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <mark class="eslint-error" data-tip="All &apos;foo&apos; signatures should be adjacent.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/adjacent-overload-signatures)&lt;/span&gt;"><span class="token function">foo</span><span class="token punctuation">(</span>sn<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></mark>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">IFoo1</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <mark class="eslint-error" data-tip="All &apos;foo&apos; signatures should be adjacent.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/adjacent-overload-signatures)&lt;/span&gt;"><span class="token function">foo</span><span class="token punctuation">(</span>sn<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></mark>
<span class="token punctuation">}</span>
```

> 增加可读性

## [@typescript-eslint/class-name-casing](https://eslint.org/docs/rules/@typescript-eslint/class-name-casing)

类名与接口名必须为驼峰式

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name"><mark class="eslint-error" data-tip="Class &apos;Invalid_Class_Name&apos; must be PascalCased.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/class-name-casing)&lt;/span&gt;">Invalid_Class_Name</mark></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><mark class="eslint-error" data-tip="Interface &apos;invalidInterface&apos; must be PascalCased.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/class-name-casing)&lt;/span&gt;">invalidInterface</mark></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name"><mark class="eslint-error" data-tip="Class &apos;Invalid_Class_Name&apos; must be PascalCased.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/class-name-casing)&lt;/span&gt;">Invalid_Class_Name</mark></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><mark class="eslint-error" data-tip="Interface &apos;invalidInterface&apos; must be PascalCased.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/class-name-casing)&lt;/span&gt;">invalidInterface</mark></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
```

> 

## [@typescript-eslint/consistent-type-assertions](https://eslint.org/docs/rules/@typescript-eslint/consistent-type-assertions)

类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）

```javascript
// bad
<span class="token keyword">let</span> bar1<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> foo1 <span class="token operator">=</span> <mark class="eslint-error" data-tip="Use &apos;as string&apos; instead of &apos;&lt;string&gt;&apos;.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/consistent-type-assertions)&lt;/span&gt;"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span>bar1</mark><span class="token punctuation">;</span>

<span class="token keyword">const</span> baz1 <span class="token operator">=</span> <mark class="eslint-error" data-tip="Always prefer const x: T = { ... }.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/consistent-type-assertions)&lt;/span&gt;"><span class="token punctuation">{</span>
    bar<span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> object</mark><span class="token punctuation">;</span>

// good
<span class="token keyword">let</span> bar1<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> foo1 <span class="token operator">=</span> <mark class="eslint-error" data-tip="Use &apos;as string&apos; instead of &apos;&lt;string&gt;&apos;.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/consistent-type-assertions)&lt;/span&gt;"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span>bar1</mark><span class="token punctuation">;</span>

<span class="token keyword">const</span> baz1 <span class="token operator">=</span> <mark class="eslint-error" data-tip="Always prefer const x: T = { ... }.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/consistent-type-assertions)&lt;/span&gt;"><span class="token punctuation">{</span>
    bar<span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> object</mark><span class="token punctuation">;</span>
```

> <Type> 容易被理解为 jsx

## [@typescript-eslint/consistent-type-definitions](https://eslint.org/docs/rules/@typescript-eslint/consistent-type-definitions)

优先使用 interface 而不是 type

```javascript
// bad
<span class="token keyword">type</span> <mark class="eslint-error" data-tip="Use an `interface` instead of a `type`&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/consistent-type-definitions)&lt;/span&gt;">Foo1</mark> <span class="token operator">=</span> <span class="token punctuation">{</span>
    foo<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

// good
<span class="token keyword">type</span> <mark class="eslint-error" data-tip="Use an `interface` instead of a `type`&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/consistent-type-definitions)&lt;/span&gt;">Foo1</mark> <span class="token operator">=</span> <span class="token punctuation">{</span>
    foo<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
```

> interface 可以 implement, extend 和 merge

## [@typescript-eslint/explicit-member-accessibility](https://eslint.org/docs/rules/@typescript-eslint/explicit-member-accessibility)

必须设置类的成员的可访问性

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo2</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on class property foo.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;"><span class="token keyword">static</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on method definition getFoo.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;"><span class="token keyword">static</span> <span class="token function">getFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Foo2<span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on method definition constructor.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on class property bar.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;">bar <span class="token operator">=</span> <span class="token string">'bar'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on method definition getBar.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;"><span class="token function">getBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on get property accessor baz.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;"><span class="token keyword">get</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'baz'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on set property accessor baz.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;"><span class="token keyword">set</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
<span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo2</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on class property foo.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;"><span class="token keyword">static</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on method definition getFoo.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;"><span class="token keyword">static</span> <span class="token function">getFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Foo2<span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on method definition constructor.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on class property bar.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;">bar <span class="token operator">=</span> <span class="token string">'bar'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on method definition getBar.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;"><span class="token function">getBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on get property accessor baz.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;"><span class="token keyword">get</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'baz'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Missing accessibility modifier on set property accessor baz.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/explicit-member-accessibility)&lt;/span&gt;"><span class="token keyword">set</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
<span class="token punctuation">}</span>
```

> 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好

## [@typescript-eslint/member-ordering](https://eslint.org/docs/rules/@typescript-eslint/member-ordering)

指定类成员的排序规则

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token function">getBar3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bar3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <mark class="eslint-error" data-tip="Member getBar2 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">protected</span> <span class="token function">getBar2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Member getBar1 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">public</span> <span class="token function">getBar1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Member constructor should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">public</span> <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Foo1<span class="token punctuation">.</span><span class="token function">getFoo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getBar3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Member bar3 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">private</span> bar3 <span class="token operator">=</span> <span class="token string">'bar3'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Member bar2 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">protected</span> bar2 <span class="token operator">=</span> <span class="token string">'bar2'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Member bar1 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">public</span> bar1 <span class="token operator">=</span> <span class="token string">'bar1'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Member getFoo3 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token function">getFoo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Foo1<span class="token punctuation">.</span>foo3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Member getFoo2 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token function">getFoo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Member getFoo1 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getFoo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Member foo3 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">private</span> <span class="token keyword">static</span> foo3 <span class="token operator">=</span> <span class="token string">'foo3'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Member foo2 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">protected</span> <span class="token keyword">static</span> foo2 <span class="token operator">=</span> <span class="token string">'foo2'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Member foo1 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">public</span> <span class="token keyword">static</span> foo1 <span class="token operator">=</span> <span class="token string">'foo1'</span><span class="token punctuation">;</span></mark>
<span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token function">getBar3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bar3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <mark class="eslint-error" data-tip="Member getBar2 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">protected</span> <span class="token function">getBar2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Member getBar1 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">public</span> <span class="token function">getBar1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Member constructor should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">public</span> <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Foo1<span class="token punctuation">.</span><span class="token function">getFoo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getBar3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Member bar3 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">private</span> bar3 <span class="token operator">=</span> <span class="token string">'bar3'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Member bar2 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">protected</span> bar2 <span class="token operator">=</span> <span class="token string">'bar2'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Member bar1 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">public</span> bar1 <span class="token operator">=</span> <span class="token string">'bar1'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Member getFoo3 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token function">getFoo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Foo1<span class="token punctuation">.</span>foo3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Member getFoo2 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token function">getFoo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Member getFoo1 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getFoo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <mark class="eslint-error" data-tip="Member foo3 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">private</span> <span class="token keyword">static</span> foo3 <span class="token operator">=</span> <span class="token string">'foo3'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Member foo2 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">protected</span> <span class="token keyword">static</span> foo2 <span class="token operator">=</span> <span class="token string">'foo2'</span><span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="Member foo1 should be declared before all private instance method definitions.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/member-ordering)&lt;/span&gt;"><span class="token keyword">public</span> <span class="token keyword">static</span> foo1 <span class="token operator">=</span> <span class="token string">'foo1'</span><span class="token punctuation">;</span></mark>
<span class="token punctuation">}</span>
```

> 优先级：
1. static > instance
2. field > constructor > method
3. public > protected > private

## [@typescript-eslint/no-empty-interface](https://eslint.org/docs/rules/@typescript-eslint/no-empty-interface)

禁止定义空的接口

```javascript
// bad
<span class="token keyword">interface</span> <span class="token class-name"><mark class="eslint-error" data-tip="An empty interface is equivalent to `{}`.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-empty-interface)&lt;/span&gt;">Foo1</mark></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

// good
<span class="token keyword">interface</span> <span class="token class-name"><mark class="eslint-error" data-tip="An empty interface is equivalent to `{}`.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-empty-interface)&lt;/span&gt;">Foo1</mark></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
```

> 

## [@typescript-eslint/no-inferrable-types](https://eslint.org/docs/rules/@typescript-eslint/no-inferrable-types)

禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型

```javascript
// bad
<span class="token keyword">const</span> <mark class="eslint-error" data-tip="Type number trivially inferred from a number literal, remove type annotation.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-inferrable-types)&lt;/span&gt;">foo1<span class="token punctuation">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span></mark><span class="token punctuation">;</span>
<span class="token keyword">const</span> <mark class="eslint-error" data-tip="Type string trivially inferred from a string literal, remove type annotation.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-inferrable-types)&lt;/span&gt;">bar1<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">''</span></mark><span class="token punctuation">;</span>

// good
<span class="token keyword">const</span> <mark class="eslint-error" data-tip="Type number trivially inferred from a number literal, remove type annotation.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-inferrable-types)&lt;/span&gt;">foo1<span class="token punctuation">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span></mark><span class="token punctuation">;</span>
<span class="token keyword">const</span> <mark class="eslint-error" data-tip="Type string trivially inferred from a string literal, remove type annotation.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-inferrable-types)&lt;/span&gt;">bar1<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">''</span></mark><span class="token punctuation">;</span>
```

> 可以简化代码

## [@typescript-eslint/no-namespace](https://eslint.org/docs/rules/@typescript-eslint/no-namespace)

禁止使用 namespace 来定义命名空间

```javascript
// bad
<mark class="eslint-error" data-tip="ES2015 module syntax is preferred over custom TypeScript modules and namespaces.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-namespace)&lt;/span&gt;"><span class="token keyword">namespace</span> foo1 <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>

// good
<mark class="eslint-error" data-tip="ES2015 module syntax is preferred over custom TypeScript modules and namespaces.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-namespace)&lt;/span&gt;"><span class="token keyword">namespace</span> foo1 <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
```

> 使用 es6 引入模块，才是更标准的方式。
但是允许使用 declare namespace ... {} 来定义外部命名空间

## [@typescript-eslint/no-parameter-properties](https://eslint.org/docs/rules/@typescript-eslint/no-parameter-properties)

禁止给类的构造函数的参数添加修饰符

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token parameter"><mark class="eslint-error" data-tip="Property name cannot be declared in the constructor.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-parameter-properties)&lt;/span&gt;"><span class="token keyword">private</span> name<span class="token punctuation">:</span> <span class="token builtin">string</span></mark></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token parameter"><mark class="eslint-error" data-tip="Property name cannot be declared in the constructor.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-parameter-properties)&lt;/span&gt;"><span class="token keyword">private</span> name<span class="token punctuation">:</span> <span class="token builtin">string</span></mark></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
```

> 

## [@typescript-eslint/no-require-imports](https://eslint.org/docs/rules/@typescript-eslint/no-require-imports)

禁止使用 require

```javascript
// bad
<span class="token keyword">const</span> fs <span class="token operator">=</span> <mark class="eslint-error" data-tip="A `require()` style import is forbidden.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-require-imports)&lt;/span&gt;"><span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span></mark><span class="token punctuation">;</span>

// good
<span class="token keyword">const</span> fs <span class="token operator">=</span> <mark class="eslint-error" data-tip="A `require()` style import is forbidden.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-require-imports)&lt;/span&gt;"><span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span></mark><span class="token punctuation">;</span>
```

> 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入

## [@typescript-eslint/no-this-alias](https://eslint.org/docs/rules/@typescript-eslint/no-this-alias)

禁止将 this 赋值给其他变量，除非是解构赋值

```javascript
// bad
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <mark class="eslint-error" data-tip="Unexpected aliasing of &apos;this&apos; to local variable.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-this-alias)&lt;/span&gt;">self</mark> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        self<span class="token punctuation">.</span><span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

// good
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <mark class="eslint-error" data-tip="Unexpected aliasing of &apos;this&apos; to local variable.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-this-alias)&lt;/span&gt;">self</mark> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        self<span class="token punctuation">.</span><span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
```

> 

## [@typescript-eslint/no-useless-constructor](https://eslint.org/docs/rules/@typescript-eslint/no-useless-constructor)

禁止出现没必要的 constructor

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo1</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="Useless constructor.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-useless-constructor)&lt;/span&gt;"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar1</span> <span class="token keyword">extends</span> <span class="token class-name">Foo1</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="Useless constructor.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-useless-constructor)&lt;/span&gt;"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
<span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo1</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="Useless constructor.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-useless-constructor)&lt;/span&gt;"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar1</span> <span class="token keyword">extends</span> <span class="token class-name">Foo1</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="Useless constructor.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/no-useless-constructor)&lt;/span&gt;"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
<span class="token punctuation">}</span>
```

> 

## [@typescript-eslint/prefer-for-of](https://eslint.org/docs/rules/@typescript-eslint/prefer-for-of)

使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环

```javascript
// bad
<span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<mark class="eslint-error" data-tip="Expected a `for-of` loop instead of a `for` loop with this simple iteration&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/prefer-for-of)&lt;/span&gt;"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></mark>

// good
<span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<mark class="eslint-error" data-tip="Expected a `for-of` loop instead of a `for` loop with this simple iteration&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/prefer-for-of)&lt;/span&gt;"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></mark>
```

> for of 循环更加易读

## [@typescript-eslint/prefer-function-type](https://eslint.org/docs/rules/@typescript-eslint/prefer-function-type)

可以简写为函数类型的接口或字面类型的话，则必须简写

```javascript
// bad
<span class="token keyword">interface</span> <span class="token class-name">Foo1</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="Interface has only a call signature - use &apos;type Foo1 = () =&gt; string;&apos; instead.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/prefer-function-type)&lt;/span&gt;"><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></mark>
<span class="token punctuation">}</span>

// good
<span class="token keyword">interface</span> <span class="token class-name">Foo1</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="Interface has only a call signature - use &apos;type Foo1 = () =&gt; string;&apos; instead.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/prefer-function-type)&lt;/span&gt;"><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></mark>
<span class="token punctuation">}</span>
```

> 

## [@typescript-eslint/prefer-namespace-keyword](https://eslint.org/docs/rules/@typescript-eslint/prefer-namespace-keyword)

禁止使用 module 来定义命名空间

```javascript
// bad
<mark class="eslint-error" data-tip="Use &apos;namespace&apos; instead of &apos;module&apos; to declare custom TypeScript modules.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/prefer-namespace-keyword)&lt;/span&gt;"><span class="token keyword">module</span> Foo1 <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>

// good
<mark class="eslint-error" data-tip="Use &apos;namespace&apos; instead of &apos;module&apos; to declare custom TypeScript modules.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/prefer-namespace-keyword)&lt;/span&gt;"><span class="token keyword">module</span> Foo1 <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
```

> module 已成为 js 的关键字

## [@typescript-eslint/triple-slash-reference](https://eslint.org/docs/rules/@typescript-eslint/triple-slash-reference)

禁止使用三斜杠导入文件

```javascript
// bad
<span class="token comment"><mark class="eslint-error" data-tip="Do not use a triple slash reference for ./Animal, use `import` style instead.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/triple-slash-reference)&lt;/span&gt;">/// &lt;reference path="./Animal"></mark></span>

// good
<span class="token comment"><mark class="eslint-error" data-tip="Do not use a triple slash reference for ./Animal, use `import` style instead.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/triple-slash-reference)&lt;/span&gt;">/// &lt;reference path="./Animal"></mark></span>
```

> 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的

## [@typescript-eslint/typedef](https://eslint.org/docs/rules/@typescript-eslint/typedef)

interface 和 type 定义时必须声明成员的类型

```javascript
// bad
<span class="token keyword">type</span> Foo1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="expected bar to have a type annotation&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/typedef)&lt;/span&gt;">bar<span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="expected baz to have a type annotation&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/typedef)&lt;/span&gt;">baz<span class="token punctuation">;</span></mark>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

// good
<span class="token keyword">type</span> Foo1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="expected bar to have a type annotation&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/typedef)&lt;/span&gt;">bar<span class="token punctuation">;</span></mark>
    <mark class="eslint-error" data-tip="expected baz to have a type annotation&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/typedef)&lt;/span&gt;">baz<span class="token punctuation">;</span></mark>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
```

> 

## [@typescript-eslint/unified-signatures](https://eslint.org/docs/rules/@typescript-eslint/unified-signatures)

函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明

```javascript
// bad
<span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">:</span> <span class="token builtin">number</span></span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token parameter"><mark class="eslint-error" data-tip="These overloads can be combined into one signature taking `number | string`.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/unified-signatures)&lt;/span&gt;">x<span class="token punctuation">:</span> <span class="token builtin">string</span></mark></span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">:</span> <span class="token builtin">any</span></span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

// good
<span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">:</span> <span class="token builtin">number</span></span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token parameter"><mark class="eslint-error" data-tip="These overloads can be combined into one signature taking `number | string`.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(@typescript-eslint/unified-signatures)&lt;/span&gt;">x<span class="token punctuation">:</span> <span class="token builtin">string</span></mark></span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">:</span> <span class="token builtin">any</span></span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
```

> 