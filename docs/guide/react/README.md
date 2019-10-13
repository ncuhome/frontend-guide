---
sidebarDepth: 2
---

# NCUHOME React 代码风格指南



## [react/jsx-curly-brace-presence](https://eslint.org/docs/rules/react/jsx-curly-brace-presence)

禁止 jsx 中使用无用的引号

```javascript
// bad
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token attr-name">prop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><mark class="eslint-error" data-tip="Curly braces are unnecessary here.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-curly-brace-presence)&lt;/span&gt;"><span class="token punctuation">{</span><span class="token string">'foo'</span><span class="token punctuation">}</span></mark></span><span class="token punctuation">></span></span><mark class="eslint-error" data-tip="Curly braces are unnecessary here.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-curly-brace-presence)&lt;/span&gt;"><span class="token punctuation">{</span><span class="token string">'Hello World'</span><span class="token punctuation">}</span></mark><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">App</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>

// good
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token attr-name">prop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><mark class="eslint-error" data-tip="Curly braces are unnecessary here.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-curly-brace-presence)&lt;/span&gt;"><span class="token punctuation">{</span><span class="token string">'foo'</span><span class="token punctuation">}</span></mark></span><span class="token punctuation">></span></span><mark class="eslint-error" data-tip="Curly braces are unnecessary here.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-curly-brace-presence)&lt;/span&gt;"><span class="token punctuation">{</span><span class="token string">'Hello World'</span><span class="token punctuation">}</span></mark><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">App</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>```

> 

## [react/jsx-fragments](https://eslint.org/docs/rules/react/jsx-fragments)

必须使用 <></> 而不是 React.Fragment

```javascript
// bad
<mark class="eslint-error" data-tip="Prefer fragment shorthand over React.Fragment&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-fragments)&lt;/span&gt;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span></mark><span class="token punctuation">;</span>

// good
<mark class="eslint-error" data-tip="Prefer fragment shorthand over React.Fragment&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-fragments)&lt;/span&gt;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span></mark><span class="token punctuation">;</span>```

> <></> 不需要额外引入 Fragment 组件

## [react/jsx-key](https://eslint.org/docs/rules/react/jsx-key)

数组中的 jsx 必须有 key

```javascript
// bad
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <mark class="eslint-error" data-tip="Missing &quot;key&quot; prop for element in iterator&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-key)&lt;/span&gt;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></mark>
    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <mark class="eslint-error" data-tip="Missing &quot;key&quot; prop for element in iterator. Shorthand fragment syntax does support providing keys&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-key)&lt;/span&gt;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span></mark>
    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>

// good
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <mark class="eslint-error" data-tip="Missing &quot;key&quot; prop for element in iterator&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-key)&lt;/span&gt;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></mark>
    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <mark class="eslint-error" data-tip="Missing &quot;key&quot; prop for element in iterator. Shorthand fragment syntax does support providing keys&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-key)&lt;/span&gt;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span></mark>
    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>```

> 

## [react/jsx-no-comment-textnodes](https://eslint.org/docs/rules/react/jsx-no-comment-textnodes)

禁止在 jsx 中使用像注释的字符串

```javascript
// bad
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"><mark class="eslint-error" data-tip="Comments inside children section of tag should be placed inside braces&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-no-comment-textnodes)&lt;/span&gt;">// empty div</mark>&lt;/div>;
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"><mark class="eslint-error" data-tip="Comments inside children section of tag should be placed inside braces&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-no-comment-textnodes)&lt;/span&gt;">/* empty div */</mark></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">;
</span>

// good
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"><mark class="eslint-error" data-tip="Comments inside children section of tag should be placed inside braces&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-no-comment-textnodes)&lt;/span&gt;">// empty div</mark>&lt;/div>;
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"><mark class="eslint-error" data-tip="Comments inside children section of tag should be placed inside braces&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-no-comment-textnodes)&lt;/span&gt;">/* empty div */</mark></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">;
</span>```

> 

## [react/jsx-no-duplicate-props](https://eslint.org/docs/rules/react/jsx-no-duplicate-props)

禁止出现重复的 props

```javascript
// bad
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span> <mark class="eslint-error" data-tip="No duplicate props allowed&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-no-duplicate-props)&lt;/span&gt;"><span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bar<span class="token punctuation">"</span></span></mark> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

// good
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span> <mark class="eslint-error" data-tip="No duplicate props allowed&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-no-duplicate-props)&lt;/span&gt;"><span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bar<span class="token punctuation">"</span></span></mark> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>```

> 

## [react/jsx-no-undef](https://eslint.org/docs/rules/react/jsx-no-undef)

禁止使用未定义的组件

```javascript
// bad
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name"><mark class="eslint-error" data-tip="&apos;Foo&apos; is not defined.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-no-undef)&lt;/span&gt;">Foo</mark></span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

// good
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name"><mark class="eslint-error" data-tip="&apos;Foo&apos; is not defined.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-no-undef)&lt;/span&gt;">Foo</mark></span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>```

> 

## [react/jsx-pascal-case](https://eslint.org/docs/rules/react/jsx-pascal-case)

禁止使用 pascal 格式的组件

```javascript
// bad
<span class="token tag"><mark class="eslint-error" data-tip="Imported JSX component FOO must be in PascalCase&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-pascal-case)&lt;/span&gt;"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FOO</span></span> <span class="token punctuation">/></span></mark></span><span class="token punctuation">;</span>
<span class="token tag"><mark class="eslint-error" data-tip="Imported JSX component FOO_BAR must be in PascalCase&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-pascal-case)&lt;/span&gt;"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FOO_BAR</span></span> <span class="token punctuation">/></span></mark></span><span class="token punctuation">;</span>

// good
<span class="token tag"><mark class="eslint-error" data-tip="Imported JSX component FOO must be in PascalCase&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-pascal-case)&lt;/span&gt;"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FOO</span></span> <span class="token punctuation">/></span></mark></span><span class="token punctuation">;</span>
<span class="token tag"><mark class="eslint-error" data-tip="Imported JSX component FOO_BAR must be in PascalCase&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/jsx-pascal-case)&lt;/span&gt;"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FOO_BAR</span></span> <span class="token punctuation">/></span></mark></span><span class="token punctuation">;</span>```

> 

## [react/jsx-uses-react](https://eslint.org/docs/rules/react/jsx-uses-react)

修复 React 被误报为未使用的变量的问题（仅在开启 no-unused-vars 时有效）

```javascript
// bad
<span class="token comment">/* eslint no-unused-vars: "error", react/jsx-uses-react: "off" */</span>
<span class="token keyword">import</span> <mark class="eslint-error" data-tip="&apos;React&apos; is defined but never used.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(no-unused-vars)&lt;/span&gt;">React</mark> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

// good
<span class="token comment">/* eslint no-unused-vars: "error", react/jsx-uses-react: "off" */</span>
<span class="token keyword">import</span> <mark class="eslint-error" data-tip="&apos;React&apos; is defined but never used.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(no-unused-vars)&lt;/span&gt;">React</mark> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>```

> 

## [react/jsx-uses-vars](https://eslint.org/docs/rules/react/jsx-uses-vars)

已定义的组件必须使用

```javascript
// bad
<span class="token comment">/* eslint no-unused-vars: "error" */</span>
<span class="token keyword">import</span> <mark class="eslint-error" data-tip="&apos;Foo&apos; is defined but never used.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(no-unused-vars)&lt;/span&gt;">Foo</mark> <span class="token keyword">from</span> <span class="token string">'./Foo'</span><span class="token punctuation">;</span>

// good
<span class="token comment">/* eslint no-unused-vars: "error" */</span>
<span class="token keyword">import</span> <mark class="eslint-error" data-tip="&apos;Foo&apos; is defined but never used.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(no-unused-vars)&lt;/span&gt;">Foo</mark> <span class="token keyword">from</span> <span class="token string">'./Foo'</span><span class="token punctuation">;</span>```

> 

## [react/no-children-prop](https://eslint.org/docs/rules/react/no-children-prop)

禁止将 children 作为一个 prop

```javascript
// bad
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <mark class="eslint-error" data-tip="Do not pass children as props. Instead, nest children between the opening and closing tags.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-children-prop)&lt;/span&gt;"><span class="token attr-name">children</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello World<span class="token punctuation">"</span></span></mark> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span> <mark class="eslint-error" data-tip="Do not pass children as props. Instead, nest children between the opening and closing tags.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-children-prop)&lt;/span&gt;"><span class="token attr-name">children</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Bar</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span></mark> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

// good
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <mark class="eslint-error" data-tip="Do not pass children as props. Instead, nest children between the opening and closing tags.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-children-prop)&lt;/span&gt;"><span class="token attr-name">children</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello World<span class="token punctuation">"</span></span></mark> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span> <mark class="eslint-error" data-tip="Do not pass children as props. Instead, nest children between the opening and closing tags.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-children-prop)&lt;/span&gt;"><span class="token attr-name">children</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Bar</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span></mark> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>```

> 

## [react/no-danger-with-children](https://eslint.org/docs/rules/react/no-danger-with-children)

禁止在使用了 dangerouslySetInnerHTML 的组件内添加 children

```javascript
// bad
<mark class="eslint-error" data-tip="Only set one of `children` or `props.dangerouslySetInnerHTML`&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-danger-with-children)&lt;/span&gt;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> <span class="token string">'Foo'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Hello World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></mark><span class="token punctuation">;</span>

// good
<mark class="eslint-error" data-tip="Only set one of `children` or `props.dangerouslySetInnerHTML`&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-danger-with-children)&lt;/span&gt;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> <span class="token string">'Foo'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Hello World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></mark><span class="token punctuation">;</span>```

> 

## [react/no-deprecated](https://eslint.org/docs/rules/react/no-deprecated)

禁止使用已废弃的 api

```javascript
// bad
<mark class="eslint-error" data-tip="React.render is deprecated since React 0.14.0, use ReactDOM.render instead&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-deprecated)&lt;/span&gt;">React<span class="token punctuation">.</span><span class="token function">render</span></mark><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> app<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function"><mark class="eslint-error" data-tip="componentWillMount is deprecated since React 16.999.0, use UNSAFE_componentWillMount instead, see https://reactjs.org/docs/react-component.html#unsafe_componentwillmount. Use https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles to automatically update your components.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-deprecated)&lt;/span&gt;">componentWillMount</mark></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function"><mark class="eslint-error" data-tip="componentWillReceiveProps is deprecated since React 16.999.0, use UNSAFE_componentWillReceiveProps instead, see https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops. Use https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles to automatically update your components.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-deprecated)&lt;/span&gt;">componentWillReceiveProps</mark></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function"><mark class="eslint-error" data-tip="componentWillUpdate is deprecated since React 16.999.0, use UNSAFE_componentWillUpdate instead, see https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate. Use https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles to automatically update your components.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-deprecated)&lt;/span&gt;">componentWillUpdate</mark></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

// good
<mark class="eslint-error" data-tip="React.render is deprecated since React 0.14.0, use ReactDOM.render instead&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-deprecated)&lt;/span&gt;">React<span class="token punctuation">.</span><span class="token function">render</span></mark><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> app<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function"><mark class="eslint-error" data-tip="componentWillMount is deprecated since React 16.999.0, use UNSAFE_componentWillMount instead, see https://reactjs.org/docs/react-component.html#unsafe_componentwillmount. Use https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles to automatically update your components.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-deprecated)&lt;/span&gt;">componentWillMount</mark></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function"><mark class="eslint-error" data-tip="componentWillReceiveProps is deprecated since React 16.999.0, use UNSAFE_componentWillReceiveProps instead, see https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops. Use https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles to automatically update your components.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-deprecated)&lt;/span&gt;">componentWillReceiveProps</mark></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function"><mark class="eslint-error" data-tip="componentWillUpdate is deprecated since React 16.999.0, use UNSAFE_componentWillUpdate instead, see https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate. Use https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles to automatically update your components.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-deprecated)&lt;/span&gt;">componentWillUpdate</mark></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>```

> 

## [react/no-did-update-set-state](https://eslint.org/docs/rules/react/no-did-update-set-state)

禁止在 componentDidUpdate 里使用 setState

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <mark class="eslint-error" data-tip="Do not use setState in componentDidUpdate&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-did-update-set-state)&lt;/span&gt;"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span></mark><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <mark class="eslint-error" data-tip="Do not use setState in componentDidUpdate&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-did-update-set-state)&lt;/span&gt;"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span></mark><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>```

> 

## [react/no-direct-mutation-state](https://eslint.org/docs/rules/react/no-direct-mutation-state)

禁止直接修改 this.state

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <mark class="eslint-error" data-tip="Do not mutate state directly. Use setState().&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-direct-mutation-state)&lt;/span&gt;"><span class="token keyword">this</span><span class="token punctuation">.</span>state</mark><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'foo'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <mark class="eslint-error" data-tip="Do not mutate state directly. Use setState().&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-direct-mutation-state)&lt;/span&gt;"><span class="token keyword">this</span><span class="token punctuation">.</span>state</mark><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'foo'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>```

> 

## [react/no-find-dom-node](https://eslint.org/docs/rules/react/no-find-dom-node)

禁止使用 findDOMNode

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function"><mark class="eslint-error" data-tip="Do not use findDOMNode&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-find-dom-node)&lt;/span&gt;">findDOMNode</mark></span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function"><mark class="eslint-error" data-tip="Do not use findDOMNode&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-find-dom-node)&lt;/span&gt;">findDOMNode</mark></span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>```

> 

## [react/no-is-mounted](https://eslint.org/docs/rules/react/no-is-mounted)

禁止使用 isMounted

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><mark class="eslint-error" data-tip="Do not use isMounted&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-is-mounted)&lt;/span&gt;"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isMounted</span></mark><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><mark class="eslint-error" data-tip="Do not use isMounted&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-is-mounted)&lt;/span&gt;"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isMounted</span></mark><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>```

> 它是已废弃的语法

## [react/no-redundant-should-component-update](https://eslint.org/docs/rules/react/no-redundant-should-component-update)

禁止在 React.PureComponent 中使用 shouldComponentUpdate

```javascript
// bad
<mark class="eslint-error" data-tip="Foo does not need shouldComponentUpdate when extending React.PureComponent.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-redundant-should-component-update)&lt;/span&gt;"><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span></mark>

// good
<mark class="eslint-error" data-tip="Foo does not need shouldComponentUpdate when extending React.PureComponent.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-redundant-should-component-update)&lt;/span&gt;"><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span></mark>```

> 

## [react/no-render-return-value](https://eslint.org/docs/rules/react/no-render-return-value)

禁止使用 ReactDOM.render 的返回值

```javascript
// bad
<span class="token keyword">const</span> app <span class="token operator">=</span> <mark class="eslint-error" data-tip="Do not depend on the return value from ReactDOM.render&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-render-return-value)&lt;/span&gt;">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span></mark><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

// good
<span class="token keyword">const</span> app <span class="token operator">=</span> <mark class="eslint-error" data-tip="Do not depend on the return value from ReactDOM.render&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-render-return-value)&lt;/span&gt;">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span></mark><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>```

> 

## [react/no-string-refs](https://eslint.org/docs/rules/react/no-string-refs)

禁止使用字符串 ref

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <mark class="eslint-error" data-tip="Using string literals in ref attributes is deprecated.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-string-refs)&lt;/span&gt;"><span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span></mark> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <mark class="eslint-error" data-tip="Using string literals in ref attributes is deprecated.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-string-refs)&lt;/span&gt;"><span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span></mark> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>```

> 

## [react/no-this-in-sfc](https://eslint.org/docs/rules/react/no-this-in-sfc)

禁止在函数组件中使用 this

```javascript
// bad
<span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><mark class="eslint-error" data-tip="Stateless functional components should not use this&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-this-in-sfc)&lt;/span&gt;"><span class="token keyword">this</span><span class="token punctuation">.</span>props</mark><span class="token punctuation">.</span>foo<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

// good
<span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><mark class="eslint-error" data-tip="Stateless functional components should not use this&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-this-in-sfc)&lt;/span&gt;"><span class="token keyword">this</span><span class="token punctuation">.</span>props</mark><span class="token punctuation">.</span>foo<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>```

> 

## [react/no-typos](https://eslint.org/docs/rules/react/no-typos)

禁止组件的属性或生命周期大小写错误

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> defaultprops <span class="token operator">=</span> <mark class="eslint-error" data-tip="Typo in static class property declaration&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-typos)&lt;/span&gt;"><span class="token punctuation">{</span><span class="token punctuation">}</span></mark><span class="token punctuation">;</span>
    <mark class="eslint-error" data-tip="Typo in component lifecycle method declaration&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-typos)&lt;/span&gt;"><span class="token function">componentdidupdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
<span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> defaultprops <span class="token operator">=</span> <mark class="eslint-error" data-tip="Typo in static class property declaration&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-typos)&lt;/span&gt;"><span class="token punctuation">{</span><span class="token punctuation">}</span></mark><span class="token punctuation">;</span>
    <mark class="eslint-error" data-tip="Typo in component lifecycle method declaration&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-typos)&lt;/span&gt;"><span class="token function">componentdidupdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
<span class="token punctuation">}</span>```

> 

## [react/no-unescaped-entities](https://eslint.org/docs/rules/react/no-unescaped-entities)

禁止在组件的内部存在未转义的 >, ", ' 或 }

```javascript
// bad
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span><span class="token punctuation">></span></span><span class="token plain-text">Hel<mark class="eslint-error" data-tip="`&gt;` can be escaped with `&amp;gt;`.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-unescaped-entities)&lt;/span&gt;">></mark>lo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Foo</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>

// good
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span><span class="token punctuation">></span></span><span class="token plain-text">Hel<mark class="eslint-error" data-tip="`&gt;` can be escaped with `&amp;gt;`.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-unescaped-entities)&lt;/span&gt;">></mark>lo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Foo</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>```

> 

## [react/no-unknown-property](https://eslint.org/docs/rules/react/no-unknown-property)

禁止出现 HTML 中的属性，如 class

```javascript
// bad
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <mark class="eslint-error" data-tip="Unknown property &apos;class&apos; found, use &apos;className&apos; instead&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-unknown-property)&lt;/span&gt;"><span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span></mark> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

// good
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <mark class="eslint-error" data-tip="Unknown property &apos;class&apos; found, use &apos;className&apos; instead&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-unknown-property)&lt;/span&gt;"><span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span></mark> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>```

> 

## [react/no-unsafe](https://eslint.org/docs/rules/react/no-unsafe)

禁止使用不安全的生命周期方法 componentWillMount, componentWillReceiveProps, componentWillUpdate

```javascript
// bad
<mark class="eslint-error" data-tip="componentWillMount is unsafe for use in async rendering. Update the component to use componentDidMount instead. See https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-unsafe)&lt;/span&gt;"><mark class="eslint-error" data-tip="UNSAFE_componentWillMount is unsafe for use in async rendering. Update the component to use componentDidMount instead. See https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-unsafe)&lt;/span&gt;"><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">UNSAFE_componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span></mark></mark>

// good
<mark class="eslint-error" data-tip="componentWillMount is unsafe for use in async rendering. Update the component to use componentDidMount instead. See https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-unsafe)&lt;/span&gt;"><mark class="eslint-error" data-tip="UNSAFE_componentWillMount is unsafe for use in async rendering. Update the component to use componentDidMount instead. See https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/no-unsafe)&lt;/span&gt;"><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">UNSAFE_componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span></mark></mark>```

> 

## [react/prefer-es6-class](https://eslint.org/docs/rules/react/prefer-es6-class)

必须使用 Class 的形式创建组件

```javascript
// bad
<span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token function">createReactClass</span><span class="token punctuation">(</span><mark class="eslint-error" data-tip="Component should use es6 class instead of createClass&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/prefer-es6-class)&lt;/span&gt;"><span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></mark><span class="token punctuation">)</span><span class="token punctuation">;</span>

// good
<span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token function">createReactClass</span><span class="token punctuation">(</span><mark class="eslint-error" data-tip="Component should use es6 class instead of createClass&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/prefer-es6-class)&lt;/span&gt;"><span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></mark><span class="token punctuation">)</span><span class="token punctuation">;</span>```

> 

## [react/require-render-return](https://eslint.org/docs/rules/react/require-render-return)

render 方法中必须有返回值

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="Your render method should have return statement&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/require-render-return)&lt;/span&gt;"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
<span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="Your render method should have return statement&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/require-render-return)&lt;/span&gt;"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
<span class="token punctuation">}</span>```

> 

## [react/self-closing-comp](https://eslint.org/docs/rules/react/self-closing-comp)

组件内没有 children 时，必须使用自闭和写法

```javascript
// bad
<span class="token tag"><mark class="eslint-error" data-tip="Empty components are self-closing&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/self-closing-comp)&lt;/span&gt;"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span><span class="token punctuation">></span></mark></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Foo</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token tag"><mark class="eslint-error" data-tip="Empty components are self-closing&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/self-closing-comp)&lt;/span&gt;"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></mark></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>

// good
<span class="token tag"><mark class="eslint-error" data-tip="Empty components are self-closing&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/self-closing-comp)&lt;/span&gt;"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span><span class="token punctuation">></span></mark></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Foo</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token tag"><mark class="eslint-error" data-tip="Empty components are self-closing&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/self-closing-comp)&lt;/span&gt;"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></mark></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>```

> 

## [react/sort-comp](https://eslint.org/docs/rules/react/sort-comp)

组件内方法必须按照一定规则排序

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="render should be placed after componentWillUnmount&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/sort-comp)&lt;/span&gt;"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
    <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <mark class="eslint-error" data-tip="constructor should be placed after defaultProps&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/sort-comp)&lt;/span&gt;"><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <mark class="eslint-error" data-tip="render should be placed after componentWillUnmount&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/sort-comp)&lt;/span&gt;"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span></mark>
    <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <mark class="eslint-error" data-tip="constructor should be placed after defaultProps&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/sort-comp)&lt;/span&gt;"><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></mark>
    <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>```

> 

## [react/static-property-placement](https://eslint.org/docs/rules/react/static-property-placement)

类的静态属性必须使用 static 关键字定义

```javascript
// bad
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<mark class="eslint-error" data-tip="&apos;defaultProps&apos; should be declared as a static class property.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/static-property-placement)&lt;/span&gt;">Foo<span class="token punctuation">.</span>defaultProps</mark> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

// good
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<mark class="eslint-error" data-tip="&apos;defaultProps&apos; should be declared as a static class property.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/static-property-placement)&lt;/span&gt;">Foo<span class="token punctuation">.</span>defaultProps</mark> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>```

> 

## [react/style-prop-object](https://eslint.org/docs/rules/react/style-prop-object)

style 属性的取值必须是 object

```javascript
// bad
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> </span><mark class="eslint-error" data-tip="Style prop value must be an object&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/style-prop-object)&lt;/span&gt;"><span class="token attr-name"><span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">color</span><span class="token punctuation">:</span> <span class="token string">'red'</span></span><span class="token punctuation">"</span></mark></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

// good
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> </span><mark class="eslint-error" data-tip="Style prop value must be an object&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/style-prop-object)&lt;/span&gt;"><span class="token attr-name"><span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">color</span><span class="token punctuation">:</span> <span class="token string">'red'</span></span><span class="token punctuation">"</span></mark></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>```

> 

## [react/void-dom-elements-no-children](https://eslint.org/docs/rules/react/void-dom-elements-no-children)

img, br 标签中禁止有 children

```javascript
// bad
<mark class="eslint-error" data-tip="Void DOM element &lt;img /&gt; cannot receive children.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/void-dom-elements-no-children)&lt;/span&gt;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span><span class="token punctuation">></span></span><span class="token plain-text">foo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>img</span><span class="token punctuation">></span></span></mark><span class="token punctuation">;</span>
<mark class="eslint-error" data-tip="Void DOM element &lt;br /&gt; cannot receive children.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/void-dom-elements-no-children)&lt;/span&gt;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span><span class="token plain-text">bar</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>br</span><span class="token punctuation">></span></span></mark><span class="token punctuation">;</span>

// good
<mark class="eslint-error" data-tip="Void DOM element &lt;img /&gt; cannot receive children.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/void-dom-elements-no-children)&lt;/span&gt;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span><span class="token punctuation">></span></span><span class="token plain-text">foo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>img</span><span class="token punctuation">></span></span></mark><span class="token punctuation">;</span>
<mark class="eslint-error" data-tip="Void DOM element &lt;br /&gt; cannot receive children.&lt;br/&gt;&lt;span class=&apos;eslint-error-rule-id&apos;&gt;eslint(react/void-dom-elements-no-children)&lt;/span&gt;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span><span class="token plain-text">bar</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>br</span><span class="token punctuation">></span></span></mark><span class="token punctuation">;</span>```

> 