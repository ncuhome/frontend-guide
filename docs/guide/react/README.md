---
sidebarDepth: 2
---

# NCUHOME React 代码风格指南


## [react/jsx-curly-brace-presence](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md)

禁止 jsx 中使用无用的引号

```javascript
// bad
<App prop={'foo'}>{'Hello World'}</App>;

// good
<App prop="foo">Hello World</App>;
```

## [react/jsx-fragments](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md)

必须使用 &lt;>&lt;/> 而不是 React.Fragment

```javascript
// bad
<React.Fragment></React.Fragment>;

// good
<></>;

<div>
    {[1, 2, 3].map((value) => (
        <React.Fragment key={value}>{value}</React.Fragment>
    ))}
</div>;
```

> <></> 不需要额外引入 Fragment 组件

## [react/jsx-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)

数组中的 jsx 必须有 key

```javascript
// bad
<ul>
    {[1, 2, 3].map((value) => (
        <li>{value}</li>
    ))}
</ul>;
<div>
    {[1, 2, 3].map((value) => (
        <>{value}</>
    ))}
</div>;

// good
<ul>
    {[1, 2, 3].map((value) => (
        <li key={value}>{value}</li>
    ))}
</ul>;
<div>
    {[1, 2, 3].map((value) => (
        <React.Fragment key={value}>{value}</React.Fragment>
    ))}
</div>;
```

## [react/jsx-no-comment-textnodes](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md)

禁止在 jsx 中使用像注释的字符串

```javascript
// bad
<div>// empty div</div>;
<div>/* empty div */</div>;


// good
<div>{/* empty div */}</div>;
<div /* empty div */ />;
```

## [react/jsx-no-duplicate-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md)

禁止出现重复的 props

```javascript
// bad
<Foo name="foo" name="bar" />;

// good
<Foo name="foo" />;
```

## [react/jsx-no-undef](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)

禁止使用未定义的组件

```javascript
// bad
<Foo />;

// good
import Foo from './Foo';
<Foo />;
```

## [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

禁止使用 pascal 格式的组件

```javascript
// bad
<FOO />;
<FOO_BAR />;

// good
<Foo />;
<FooBar />;
```

## [react/jsx-uses-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md)

修复 React 被误报为未使用的变量的问题（仅在开启 no-unused-vars 时有效）

```javascript
// bad
/* eslint no-unused-vars: "error", react/jsx-uses-react: "off" */
import React from 'react';

<div />;

// good
/* eslint no-unused-vars: "error" */
import React from 'react';

<div />;
```

## [react/jsx-uses-vars](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md)

已定义的组件必须使用

```javascript
// bad
/* eslint no-unused-vars: "error" */
import Foo from './Foo';

// good
/* eslint no-unused-vars: "error" */
import Foo from './Foo';

<Foo />;
```

## [react/no-children-prop](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md)

禁止将 children 作为一个 prop

```javascript
// bad
<div children="Hello World" />;
<Foo children={<Bar />} />;

// good
<div>Hello World</div>;
<Foo>
    <Bar />
</Foo>;
```

## [react/no-danger-with-children](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md)

禁止在使用了 dangerouslySetInnerHTML 的组件内添加 children

```javascript
// bad
<div dangerouslySetInnerHTML={{ __html: 'Foo' }}>Hello World</div>;

// good
<div dangerouslySetInnerHTML={{ __html: 'Foo' }} />;
<div>Hello World</div>;
```

## [react/no-deprecated](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md)

禁止使用已废弃的 api

```javascript
// bad
React.render(<Foo />, app);

class Foo extends React.Component {
    componentWillMount() {}
    componentWillReceiveProps() {}
    componentWillUpdate() {}
}

// good
ReactDOM.render(<Foo />, app);

class Foo extends React.Component {}
```

## [react/no-did-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)

禁止在 componentDidUpdate 里使用 setState

```javascript
// bad
class Foo extends React.Component {
    componentDidUpdate() {
        this.setState();
    }
}

// good
class Foo extends React.Component {
    componentDidUpdate() {}
}
```

## [react/no-direct-mutation-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md)

禁止直接修改 this.state

```javascript
// bad
class Foo extends React.Component {
    componentDidMount() {
        this.state.name = 'foo';
    }
}

// good
class Foo extends React.Component {
    constructor() {
        this.state = {
            name: 'foo'
        };
    }
}
```

## [react/no-find-dom-node](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md)

禁止使用 findDOMNode

```javascript
// bad
class Foo extends React.Component {
    componentDidMount() {
        const root = findDOMNode(this);
    }
    render() {
        return <div />;
    }
}

// good
class Foo extends React.Component {
    constructor() {
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }
}
```

## [react/no-is-mounted](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

禁止使用 isMounted

```javascript
// bad
class Foo extends React.Component {
    updateName() {
        if (this.isMounted()) {
            this.setState({});
        }
    }
}

// good
class Foo extends React.Component {
    updateName() {
        if (this._isMounted) {
            this.setState({});
        }
    }
}
```

> 它是已废弃的语法

## [react/no-redundant-should-component-update](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md)

禁止在 React.PureComponent 中使用 shouldComponentUpdate

```javascript
// bad
class Foo extends React.PureComponent {
    shouldComponentUpdate() {}
}

// good
class Foo extends React.Component {
    shouldComponentUpdate() {}
}
```

## [react/no-render-return-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md)

禁止使用 ReactDOM.render 的返回值

```javascript
// bad
const app = ReactDOM.render(<App />, document.getElementById('app'));

// good
ReactDOM.render(<App />, document.getElementById('app'));
```

## [react/no-string-refs](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

禁止使用字符串 ref

```javascript
// bad
class Foo {
    componentDidMount() {
        console.log(this.refs.foo);
    }
    render() {
        return <div ref="foo" />;
    }
}

// good
import { useRef, useEffect } from 'react';

function Foo() {
    const foo = useRef(null);
    useEffect(() => {
        console.log(foo);
    });
    return <div ref={foo} />;
}
```

## [react/no-this-in-sfc](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md)

禁止在函数组件中使用 this

```javascript
// bad
function Foo() {
    return <div>{this.props.foo}</div>;
}

// good
function Foo(props) {
    return <div>{props.foo}</div>;
}
```

## [react/no-typos](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md)

禁止组件的属性或生命周期大小写错误

```javascript
// bad
class Foo extends React.Component {
    static defaultprops = {};
    componentdidupdate() {}
}

// good
class Foo extends React.Component {
    static defaultProps = {};
    componentDidUpdate() {}
}
```

## [react/no-unescaped-entities](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)

禁止在组件的内部存在未转义的 >, ", ' 或 }

```javascript
// bad
<Foo>Hel>lo</Foo>;

// good
<Foo>Hel&amp;gt;lo</Foo>;
```

## [react/no-unknown-property](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)

禁止出现 HTML 中的属性，如 class

```javascript
// bad
<div class="foo" />;

// good
<div className="foo" />;
```

## [react/no-unsafe](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md)

禁止使用不安全的生命周期方法 componentWillMount, componentWillReceiveProps, componentWillUpdate

```javascript
// bad
class Foo extends React.Component {
    componentWillMount() {}
    UNSAFE_componentWillMount() {}
}

// good
class Foo extends React.Component {}
```

## [react/prefer-es6-class](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)

必须使用 Class 的形式创建组件

```javascript
// bad
const Foo = createReactClass({
    render() {
        return <div />;
    }
});

// good
class Foo extends React.Component {
    render() {
        return <div />;
    }
}
```

## [react/require-render-return](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

render 方法中必须有返回值

```javascript
// bad
class Foo extends React.Component {
    render() {
        <div />;
    }
}

// good
class Foo extends React.Component {
    render() {
        return <div />;
    }
}
```

## [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

组件内没有 children 时，必须使用自闭和写法

```javascript
// bad
<Foo></Foo>;
<div></div>;

// good
<Foo>Not empty</Foo>;
<div>Not empty</div>;
<Bar />;
<div />;
```

## [react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

组件内方法必须按照一定规则排序

```javascript
// bad
class Foo extends React.Component {
    render() {
        return <div />;
    }
    componentWillUnmount() {}
    componentDidMount() {}
    constructor() {}
    static defaultProps = {};
}

// good
class Foo extends React.Component {
    static defaultProps = {};
    constructor() {}
    componentDidMount() {}
    componentWillUnmount() {}
    render() {
        return <div />;
    }
}
```

## [react/static-property-placement](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md)

类的静态属性必须使用 static 关键字定义

```javascript
// bad
class Foo extends React.Component {}
Foo.defaultProps = {};

// good
class Foo extends React.Component {
    static defaultProps = {};
}
```

## [react/style-prop-object](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md)

style 属性的取值必须是 object

```javascript
// bad
<div style="color: 'red'" />;

// good
<div style={{ color: 'red' }} />;
```

## [react/void-dom-elements-no-children](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md)

img, br 标签中禁止有 children

```javascript
// bad
<img>foo</img>;
<br>bar</br>;

// good
<img />;
<br />;
<div>foo</div>;
```