## javaScript

javaScript是一门脚本语言、轻量级编程语言、是可以插入HTML页面的编程代码、插入HTML后可以由浏览器执行。

在javaScript中一切皆为对象。

javaScript不能算是面向对象编程语言，严格的说，应该是基于对象的编程语言。



## javaScript特点↓↓↓↓↓↓↓↓↓↓↓↓

``` javascript
//直接写入HTML输入流
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落。</p>");
//对事件的反映
onclick="alert('欢迎!')"
//改变HTML内容
x=document.getElementById("demo")  //查找元素
x.innerHTML="Hello JavaScript";    //改变内容
//改变HTML图像
function changeImage(){
    var s = document.getElementById('myimage');
    s.src = s.src.match('bulboff')?"/images/pic_bulbon.gif":"/images/pic_bulboff.gif";
}
//改变HTML样式
x=document.getElementById("demo")  //找到元素 
x.style.color="#ff0000";           //改变样式
//验证输入
if isNaN(x) {
    alert("不是数字");
}
```

JavaScript 与 Java 是两种完全不同的语言，无论在概念上还是设计上。

Java（由 Sun 发明）是更复杂的编程语言。

ECMA-262 是 JavaScript 标准的官方名称。

JavaScript 由 Brendan Eich 发明。它于 1995 年出现在 Netscape 中（该浏览器已停止更新），并于 1997 年被 ECMA（一个标准协会）采纳。



## javaScript变量

变量是用于存储信息的"容器"。

一.变量类型：

入门：

数字、字符串

``` javascript
//该语言大小写敏感，对于字符串，单双引号均可
//var是关键字，创建变量就是申明变量
//一般在代码开始处，统一对需要的变量进行声明
var pi=3.14;
var person="John Doe";
var answer='Yes I am!';
var carname;  //carname的值是undefined
```

进阶：

**值类型(基本类型)**：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol

**引用数据类型**：对象(Object)、数组(Array)、函数(Function)

Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值

JavaScript 拥有动态类型，变量类型就是其保存的数据类型，同时，相同的变量可用作不同的类型

``` javascript
var answer="He is called 'Johnny'";  //单引号双引号均可
var x1=34.00;  //使用小数点来写
var y=123e5;  // 12300000
var x=true;  //布尔值
var cars=new Array();  //数组
cars[0]="Saab";
var cars=["Saab"];
var person={  //对象
firstname : "John",
};
var person;  //undefined
person=null;  //null
```

JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象

二.变量作用域：

三.变量类型测试：

JS中前面的对象不用写的两种情况：

1.Global对象（js内部对象）

```javascript
typeof();
parseInt();
parseFloat();
eval();
Number();
String();
Boolean();
```

2.window对象（浏览器提供对象）

```javascript
alert();
```

四.变量类型转换：

1.整型->字符串

```javascript
var num = 10;
var str = String(num);
```

2.字符串->整型

 ``` javascript
var str = '10px';
var num = parseInt(str);
 ```

3.所有类型->布尔类型（为假的情况）

1)字符串







## javaScript类：

JavaScript 是面向对象的语言，但 JavaScript 不使用类（在EC6中已经引入类，同时还引入了模块）。

在 JavaScript 中，不会创建类，也不会通过类来创建对象（就像在其他面向对象的语言中那样）。

JavaScript 基于 prototype，而不是基于类的。

## javaScript对象：

javaScript 对象是拥有属性和方法的数据。

在javaScript中一切（字符串、数值、数组、函数...）皆为对象。

javaScript可以自定义对象。

~~javaScript 对象是变量（键值对：键值对在 JavaScript 对象通常称为 **对象属性**。）的容器。~~

~~对象的方法定义了一个函数，并作为对象的属性存储。~~

所以：JavaScript 对象是属性和方法的容器（也可说是带有属性和方法的特殊数据类型）。

javaScript 提供多个内建对象，比如 String、Date、Array 等等。 

``` javascript
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
    //methodName : function() { code lines }
    this.changeName=changeName;
    function changeName(name)
    {
        this.lastname=name;
    }
};
//访问对象属性
person.lastName;
//访问对象的方法
//name = person.fullName();
//objectName.methodName();
person.changeName("Lucy");
```

对象键值对的写法类似于：

PHP 中的关联数组/Python 中的字典/C 语言中的哈希表/Java 中的哈希映射/Ruby 和 Perl 中的哈希表

``` javascript
//使用函数创建对象,这个函数就是一个对象构造器
function person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
}
//在JavaScript中，this通常指向的是我们正在执行的函数本身，或者是指向该函数所属的对象（运行时）
//一旦您有了对象构造器，就可以创建新的对象实例，就像这样：
var myFather=new person("John","Doe",50,"blue");
var myMother=new person("Sally","Rally",48,"green");
```

for...in循环

``` html
//JavaScript for...in 语句循环遍历对象的属性。
//for...in 循环中的代码块将针对每个属性执行一次。
<p id="demo"></p>
<script>
function myFunction(){
	var x;
	var txt="";
	var person={fname:"Bill",lname:"Gates",age:56}; 
	for (x in person){
		txt=txt + person[x];
	}
	document.getElementById("demo").innerHTML=txt;
}
</script>
```

## javaScript函数

函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。

``` html
<button onclick="myFunction('Harry Potter','Wizard')">点击这里</button>
<p id="demo"></p>
<script>
//全局变量
var a = "";    
function myFunction(name,job){
    //局部变量
    var str = "Welcome " + name + ", the " + job;
    alert(str);
    document.getElementById("demo").innerHTML= str;
    return;
}
//javaScript 变量的生命期从它们被声明的时间开始。
//局部变量会在函数运行以后被删除。
//全局变量会在页面关闭后被删除。
</script>
```

如果您把值赋给尚未声明的变量，该变量将被自动作为 window 的一个属性。

非严格模式下给未声明变量赋值创建的全局变量，是全局对象的可配置属性，可以删除。

``` javascript
var var1 = 1; // 不可配置全局属性
var2 = 2; // 没有使用 var 声明，可配置全局属性

console.log(this.var1); // 1
console.log(window.var1); // 1

delete var1; // false 无法删除
console.log(var1); //1

delete var2; 
console.log(delete var2); // true
console.log(var2); // 已经删除 报错变量未定义
```



## DOM



