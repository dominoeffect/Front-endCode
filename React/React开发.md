## React开发

### 一.介绍

### 二.React基础

#### 1.为何要学习React？认识React的强大之处

函数组合

``` javascript
function getProfileLink (username) {
  return 'https://github.com/' + username
}
function getProfilePic (username) {
  return 'https://github.com/' + username + '.png?size=200'
}
function getProfileData (username) {
  return {
    pic: getProfilePic(username),
    link: getProfileLink(username)
  }
}
```

<font color = 'gree'>React组件</font>

``` javascript
<Page />
<Article />
<Sidebar />
    
<Page>
  <Article />
  <Sidebar />
</Page>
```

命令式代码

``` javascript
const people = ['Amanda', 'Geoff', 'Michael', 'Richard', 'Ryan', 'Tyler']
const excitedPeople = []

for (let i = 0; i < people.length; i++) {
  excitedPeople[i] = people[i] + '!'
}
```

<font color = 'gree'>声明式代码</font>

``` javascript
const people = ['Amanda', 'Geoff', 'Michael', 'Richard', 'Ryan', 'Tyler']
const excitedPeople = people.map(name => name + '!')

const names = ['Michael', 'Ryan', 'Tyler'];
const shortNames = names.filter( name => name.length < 5 );
```

<font color = 'gree'>单向数据流</font>

[Angular](https://angular.io/) 和 [Ember](https://emberjs.com/) 等前端框架使用双向数据绑定。在双向数据绑定中，数据在整个应用中保持同步，无论是在何处更新的。如果模型更改了数据，数据会在视图中更新。如果用户在视图中更改了数据，数据会在模型中更新。双向数据绑定听起来非常强大，但是会让应用很难判断数据实际上是否更新了，以及是在何处更新的。

在 React 中，数据仅朝一个方向流动，即从父组件流向子组件。如果数据在兄弟子组件之间共享，那么数据应该存储在父组件中，并同时传递给需要数据的两个子组件。

<font color = 'gree'>React就是JavaScript</font>

React 的优势之一是你要用到的很多功能都使用的是普通的 JavaScript。在过去几年内，函数式编程对 JavaScript 生态系统和社区产生了很大的影响。函数式编程是 JavaScript 中一个高级课题，涉及的内容用数百本书才能讲完。它太复杂了，以至于无法专研函数式编程的优势（我们还是要讲解 React 内容吧？）。React 基于的是大量的函数式编程的技巧…你将在这门课程中学习这些技巧。

<font color = 'gree'>两个核心方法</font>

请务必熟练使用 `.map()`  `.filter()` 这两个方法，请花些时间练习使用它们。不妨查看你的一些现有代码并尝试将你的 `for` 循环转换为 `.map()` 调用，或者看看是否能够使用 `.filter()` 删除任何 `if`语句。

#### 2.使用React渲染UI

<font color = 'gree'>学习React的第一个方法</font>

``` javascri
React.createElement( /* type */, /* props */, /* content */ );  
```

我们详细分析每一项参数可以为：

- `type` – 字符串或 React 组件

  可以是任何现有 HTML 元素字符串（例如 `‘p’`、`‘span’` 或 `‘header’`），或者你可以传递 React _组件_（稍后我们将使用 JSX 创建组件）。

- `props` – 为 `null` 或一个对象

  这是 HTML 属性的对象以及关于该元素的自定义数据。

- `content` – `null`、字符串、React 元素或 React 组件

  你在此处传递的任何内容都将为所渲染元素的内容。包括纯文本、JavaScript 代码、其他 React 元素等。

``` javascript
import React from 'react'
import ReactDOM from 'react-dom'

const element = React.creatElement('div', null, 'hello')

ReactDOM.render(
	element,
    document.getElementById('root')
)
```

<font color = 'gree'>JSX</font>

``` javascript
const greeting = (
  <div className='greeting'>
    <h2>Hello world!</h2>
  </div>
);

const greeting = React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement(
    'h2',
    {},
    'hellow'
  )
);
```

<font color = 'gree'>组件</font>

到目前为止，我们已经看到 `.createElement()` 和 JSX 可以帮助我们生成一些 HTML。但是，通常我们将使用 React 的主要功能之一来构建 UI：组件。组件是指可以*重复利用*的代码段，最终负责返回要渲染到网页上的 HTML。很多时候，你将看到用 JSX 编写的 React 组件。

因为 React 的侧重点是简化应用的 UI 构建过程，因此在任何 React 组件类中，只有一个方法是必须的：`render()`。

``` javascript
import React from 'react'
//我们可以通过如下方式定义ContactList组件
//换句话说，我们定义了一个其实是 JavaScript 类并且继承自 React.Component的组件
class ContactList extends React.Component {
// ...
}

// 还有另外一种方式
import React, { Component } from 'react';
class ContactList extends Component {
// ...
}
```

最后，记住 React 仅关心应用的 View 层级。这是用户能看见和互动的层级。因此，我们可以使用 `.createElement()` 向文档中渲染 HTML。但是更多时候，你将使用语法扩展来描述 UI 的外观应该如何。这种语法扩展称之为 JSX，看起来和编写在 JavaScript 文件中的普通 HTML 很像。JSX 编译为调用 React 的 `.createElement()` 方法，并输出要在浏览器中渲染的 HTML。

在构建 React 应用时一个便利的思维方式是[React理念](https://facebook.github.io/react/docs/thinking-in-react.html)|([翻译链接](https://doc.react-china.org/docs/thinking-in-react.html))。组件代表的是 React 的模块性和可重复利用性。可以将组件类看做生成组件实例的工厂。这些组件类应该遵守[单一功能原则](https://zh.wikipedia.org/wiki/%E5%8D%95%E4%B8%80%E5%8A%9F%E8%83%BD%E5%8E%9F%E5%88%99)，只做一件事。如果管理太多不同的任务，建议将组件拆分为更小的子组件。

<font color = 'gree'>搭建React框架</font>

``` shell
npm install -g create-react-app
```

Facebook 的 `create-react-app` 是一个可以帮助构建 React 应用的命令行工具。借助该工具，就无需配置 Webpack 等模块打包工具，或者 Babel 等转译器。它们使用 `create-react-app` 进行预配置（并且隐藏起来），使你能够立即构建应用！

<font color = 'gree'>优先使用组合而不是继承</font>

你可能听过“优先使用组合而不是继承”这一说法。我认为对于现今的编程语言，这种规则很难理解。很多最流行的编程语言经常使用继承，并出现在热门的 UI 框架中，例如 Android 和 iOS SDK。

相反，React 使用组合来构建用户界面。没错，我们会扩展 React.Component，但是不会扩展超过一次。我们使用嵌套和 props 以不同的方式组合元素，而不是扩展基本组件来添加更多 UI 或行为。你最终希望你的 UI 组件是独立、聚焦和*可重复利用的*。

因此，如果你始终没有明白“优先使用组合而不是继承”的含义，那么强烈建议你学习使用 React！





