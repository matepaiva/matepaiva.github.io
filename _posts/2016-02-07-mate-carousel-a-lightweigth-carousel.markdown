---
layout: post
title:  "mateCarousel: a lightweigth javascript carousel"
date:   2016-02-07 12:12:12 -0200
author: "mate paiva"
excerpt: "mateCarousel is a lightweight carousel with a simple API. It transform class element into slides and give you the control of it, using a config object and some API commands to use on the go. With this carousel, you can set autoplay, configure buttons, bullet-menu to chose between slides and a lot more. The way this API was developed let you chose from using the built-in solutions or handle the situations by yourself."
---

<style>
#container {
width: 100%;
height: 300px;
position: relative;
overflow: hidden;
margin: auto;
margin-bottom: 20px;
}

.inner {
width: 100%;
height: 100%;
position: absolute;
left: 0;
top: 0;
transform: translateX(0%);
transition: transform 300ms ease;
}
.red{
background-color: red;
}
.black{
background-color: black;
}

.yellow{
background-color: yellow;
}
.blue{
background-color: blue;
}

#menuContainer {
position: absolute;
color: white;
bottom: 0;
z-index: 10;
margin:0;
padding: 0;
left: 50%;
transform: translateX(-50%);
}
.dot{
display: inline-block;
text-align: center;
padding-right: 10px;
font-size: 35px;
}
.dot:hover{
cursor: pointer;
}
.active{
font-weight: bold;
color: lightgreen;
}

#buttonBefore, #buttonAfter{
position: absolute;
color: white;
top: 50%;
transform: translateY(-50%);
z-index: 10;
background: transparent;
border: 0;
font-size: 35px;
}
#buttonBefore {left: 5px;}
#buttonAfter {right: 5px;}
#buttonBefore:hover, #buttonAfter:hover{
color: lightgreen;
}
.buttons-wrapper{
margin: 12px;
margin-top: -12px;
}
.buttons-wrapper *{
font-size: 0.8em;
margin: auto;
text-align: center;
padding: 2px;
margin: 5px auto;
background-color: white;
border: 1px solid orangered;
border-radius: 1px;
color: grey;
}

</style>

<h5>We handle the ugly part and let the beauty for you!</h5>

<h3>Example:</h3>

{% highlight html %}
<div id="container">
  <div class="inner red"></div>
  <div class="inner black"></div>
  <div class="inner yellow"></div>
  <div class="inner blue"></div>
</div>

<script src="mateCarousel.js"></script>
<script src="index.js"></script>
{% endhighlight %}

{% highlight javascript %}
var config = {
  autoplay: true,
  autoplaySpeed: 3500, //3,5 seconds
  buttonAfterId: "buttonAfter",
  buttonBeforeId: "buttonBefore",
  bulletMenuClass: "dot"
};

var carousel = mateCarousel ("inner", config);
{% endhighlight %}

<div id="container">
    <div class="inner red"></div>
    <div class="inner black"></div>
    <div class="inner yellow"></div>
    <div class="inner blue"></div>
</div>

Click the buttons below to see some features of our API in action:
<div class="buttons-wrapper">
    <button onclick="carousel.removeMenu()">carousel.removeMenu()</button>
    <button onclick="carousel.lateCreateMenu('dot','menuContainer')">carousel.lateCreateMenu("dot","menuContainer")</button>
    <button onclick="carousel.pause()">carousel.pause()</button>
    <button onclick="carousel.play(1000)">carousel.play(1000)</button>
</div>

<h3>Get mateCarousel.min.js!</h3>
The minified version weighs just 2.4Kb! [Download mateCarousel from it's repository on GitHub](http://github.com/matepaiva/mateCarousel).

<h3>Introduction</h3>
**mateCarousel** is a lightweight carousel with a simple API. It transform class element into slides and give you the control of it, using a config object and some API commands to use on the go.

With this carousel, you can set autoplay, configure buttons, bullet-menu to chose between slides and a lot more. The way this API was developed let you chose from using the built-in solutions or handle the situations by yourself.

Oh! There is no default theme, which means the CSS part is up to you. And that's a good thing!

<h3>How does it work?</h3>
**mateCarousel** iterates over elements of a DOM class. Once you call the library passing the class as an argument, we organize your carousel and leave it ready to shine! To make it, we use the translateX property. First element will have its value as 0%, second one as 100%, third one as 200% and so on.

For example, this code:
{% highlight html %}
<div>
    <div class="inner red"></div>
    <div class="inner black"></div>
    <div class="inner yellow"></div>
    <div class="inner blue"></div>
</div>
{% endhighlight %}

When you pass "inner" as an argument to mateCarousel...
{% highlight javascript %}
var config = {
    autoplay: true,
    autoplaySpeed: 3500,
};

var carousel = mateCarousel ('inner');
{% endhighlight %}
... it will become that:

{% highlight html %}
<div>
    <div class="inner red" style="transform: translateX(0%);"></div>
    <div class="inner black" style="transform: translateX(100%);"></div>
    <div class="inner yellow" style="transform: translateX(200%);"></div>
    <div class="inner blue" style="transform: translateX(300%);"></div>
</div>
{% endhighlight %}

<h3>The config object</h3>
The second argument you can pass (but don't feel obligated) is a config object. Some values are required to enable functionality, such as bullet-menu and after&before buttons:

{% highlight javascript %}
var config = {
    bulletContainerId:   ,// default is "menuContainer".
    bulletMenuClass:     ,// must have to enable bullet-menu.
    bulletContent:       ,// default is "•".
    autoplay:            ,// default is false.
    autoplaySpeed:       ,// must have if autoplay is true.
    buttonBeforeContent: ,// default is "←".
    buttonAfterContent:  ,// default is "→".
    buttonBeforeId:      ,// must have to enable buttons;
    buttonAfterId:       ,// must have to enable buttons;
    initialPosition:     ,// default is 0.
};
{% endhighlight %}

<h3>Attention please! CSS must have:</h3>
- The container block must have set overflow as "hidden" to achieve the carousel effect. And also, I advice you to set position to relative of fixed, but it depends on each case.
- The class used to expose the elements to the Carousel must have position absolute, left: 0, top: 0, and should be nice to add some transition effect, such as "transform 300ms ease".
- At this moment, that class must as well have width and height set to 100%. I am working on it, so we could show more than one element per view, each time. Contributions are welcome.
- when working with the bullet-menu, it's wise to set the display as "inline".
- don't forget to work with the "active" menu to get beautiful results on the bullets. It was set to highlight the active bullet.

That was the CSS I used to make the example in this page:
{% highlight css %}
#container {
    width: 400px;
    height: 400px;
    position: relative;
    overflow: hidden;
    margin: auto;
    margin-bottom: 20px;
}

.inner {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(0%);
    transition: transform 300ms ease;
}

.red{
    background-color: red;
}

.black{
    background-color: black;
}

.yellow{
    background-color: yellow;
}

.blue{
    background-color: blue;
}

#menuContainer {
    position: absolute;
    color: white;
    bottom: 0;
    z-index: 10;
    margin:0;
    padding: 0;
    left: 50%;
    transform: translateX(-50%);
}

.dot{
    display: inline-block;
    text-align: center;
    padding-right: 10px;
    font-size: 35px;
}

.dot:hover{
    cursor: pointer;
}

.active{
    font-weight: bold;
    color: lightgreen;
}

#buttonBefore, #buttonAfter{
    position: absolute;
    color: white;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: transparent;
    border: 0;
    font-size: 35px;
}

#buttonBefore { left: 5px;  }

#buttonAfter  { right: 5px; }

#buttonBefore:hover, #buttonAfter:hover{ 
    color: lightgreen; 
}
{% endhighlight %}


<h3>Ok. Now, how can I use the API?</h3>
Supposing that you captured a class elements which are inside the same container, now you start playing with your JavaScript:

{% highlight javascript %}
var carousel = mateCarousel('myClass'); // This will put your divs up and running. 
{% endhighlight %}

But this way, it will have no buttons and no autoplay, and that's no good. So, here you have some ways. First, is setting your carousel before running it, which I recommend.

{% highlight javascript %}
var obj={
    autoplay: true,
    autoplaySpeed: 3000 // 3 seconds
};

var carousel = mateCarousel('myClass', obj); // This will make it autoplay.
{% endhighlight %}

or

{% highlight javascript %}
var obj={
    bulletMenuClass: "dot",
    buttonBeforeId: "after-button",
    buttonAfterId:  "before-button"
};

var carousel = mateCarousel('myClass', obj); // This will give you bullets to access each index AND the after and before button.
{% endhighlight %}

But what if you want to set up it on the go? There are a bunch of options:

{% highlight javascript %}
var carousel = mateCarousel('myClass');

//now, let's create a bullet-menu:
carousel.lateCreateMenu("dot","dot-container"); //"dot" is class of children, "dot-container" is the parent Id.

//now, let's remove the bullet-menu:
carousel.removeMenu();

//now, let's start the autoplay:
carousel.play(3000);

//now, let's pause it.
carousel.pause();
{% endhighlight %}

And there are more things in the API that you can use to implement your features:

- **carousel.goToPosition(n)**: go to the desired index. Be careful, do not use a number bigger than your class length.
- **carousel.next()** and **carousel.before()**: go to the next slide. Useful to build your own buttons.
- **carousel.getIndex()**: returns the current index displayed. You can do useful stuff with this output.
- **carousel.config()**: returns the current config object. Set things on the go.

<h3>Again: get mateCarousel.min.js!</h3>
It's just **2.4Kb** and saves a lot of time. [Download mateCarousel from it's repository on GitHub](http://github.com/matepaiva/mateCarousel).



<script>
    var mateCarousel=function(t,e){void 0===e&&(e={});var l,u,n={bulletContainerId:e.bulletContainerId||"menuContainer",bulletMenuClass:e.bulletMenuClass,bulletContent:e.bulletContent||"•",autoplay:e.autoplay||!1,autoplaySpeed:e.autoplaySpeed,buttonBeforeContent:e.buttonBeforeContent||"←",buttonAfterContent:e.buttonAfterContent||"→",buttonBeforeId:e.buttonBeforeId,buttonAfterId:e.buttonAfterId,initialPosition:e.initialPosition||0},o=document.getElementsByClassName(n.bulletMenuClass),a=document.getElementsByClassName(t),r=function(t,e,n,o){var l=document.createTextNode(t),r=document.createElement("button");r.appendChild(l),r.setAttribute("id",n),r.onclick=function(){c(u-1)};var i=document.createTextNode(e),d=document.createElement("button");d.appendChild(i),d.setAttribute("id",o),d.onclick=function(){c(u+1)},a[0].parentNode.appendChild(r),a[0].parentNode.appendChild(d)},i=function(){for(var t=0;t<o.length;t++)t===u?o[t].classList.add("active"):o[t].classList.remove("active")},d=function(){if(document.getElementById(n.bulletContainerId)){var t=document.getElementById(n.bulletContainerId);a[0].parentNode.removeChild(t)}var e=document.createElement("ul");e.setAttribute("id",n.bulletContainerId),a[0].parentNode.appendChild(e);for(var o=0;o<a.length;o++){var l=document.createElement("li"),u=document.createTextNode(n.bulletContent||"");l.appendChild(u),l.classList.add(n.bulletMenuClass),l.dataset.index=o,l.onclick=function(){c(parseInt(this.dataset.index))},e.appendChild(l)}},c=function(t){t==a.length?t=0:-1==t&&(t=a.length-1);for(var e=0;e<a.length;e++)a[e].style.transform="translateX("+100*(e-t)+"%)","translateX(0%)"==a[e].style.transform&&(u=e);u=t,i()},f=function(t){l=setInterval(function(){c(u+1)},t)},s=function(){var t=document.getElementById(n.bulletContainerId);a[0].parentNode.removeChild(t)},C=function(t,e,o){n.bulletContainerId=e||"menuContainer",n.bulletMenuClass=t,n.bulletContent=o||"•",d()};return n.bulletMenuClass&&d(),c(n.initialPosition),n.autoplay&&f(n.autoplaySpeed),n.buttonBeforeId&&n.buttonAfterId&&r(n.buttonBeforeContent,n.buttonAfterContent,n.buttonBeforeId,n.buttonAfterId),{goToPosition:function(t){c(t)},next:function(){c(u+1)},before:function(){c(u-1)},play:function(t){f(t)},pause:function(){clearInterval(l)},getIndex:function(){return u},config:function(){return n},removeMenu:function(){s()},lateCreateMenu:function(t,e,n){C(t,e,n)}}};

    var config = {
        autoplay: true,
        autoplaySpeed: 3500,
        buttonAfterId: "buttonAfter",
        buttonBeforeId: "buttonBefore",
        bulletMenuClass: "dot"
    };

    var carousel = mateCarousel ("inner", config);
</script>
