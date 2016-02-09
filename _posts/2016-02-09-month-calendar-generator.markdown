---
layout: post
title:  "Month Calendar Generator: three options to build a calendar sheet"
date:   2016-02-09 13:35:12 -0200
author: "mate paiva"
excerpt: "With Month Calendar Generator, we ask you a year and a month -- and we return to you the sheet of that period in 3 different ways: as an array of arrays (6 lines with 7 days in each), as an table with all the content and a bunch of classes set up, or as divs inside divs, instead of a table but with the same features (just for those who has problems with tables)."
---

<style>
.month-head{
background-color: black;
color: white;
}

#calendar{
padding-bottom: 10px;
}

.month{
margin: 0 auto;
}

.day {
width: 30px;
height: 30px;
display: inline-block;
margin: 5px;
text-align: center;
}

.last-month {
color: lightslategray;
}

.next-month {
color: darkseagreen;
}
</style>

<h5>I've built a calendar sheet for you. Thanks, you welcome.</h5>

<h3>Example:</h3>
The calendar sheet below was build automatically by Month Calendar Generator. Click on any day to get it "Date.parse" value inside an alert box.

  <div id="calendar"></div>

<div>
Try it yourself! Insert a date in format "YYYY, MM":
 <br>
 <br>
  <input type="text" id="date" placeholder="YYYY, MM">
  <button onclick="changeMonth(date.value)">Change month</button>
  <br><br>
</div>


<h3>Get Month Calendar Generator!</h3>
It's just 2k. [Download it now](https://raw.githubusercontent.com/matepaiva/month-calendar-generator/master/monthCalendarGen.min.js)!

Or fork the [GitHub repo](http://matepaiva.github.io/projetos/month-calendar-generator/).

<h3>Introduction</h3>

With Month Calendar Generator, we ask you a "year-month" argument -- and we return to you the sheet of that period in 3 different ways: 
- as an array of arrays (6 lines with 7 days in each),
- as an table with all the content and a bunch of classes set up,
- or as divs inside divs, instead of a table but with the same features (just for those who has a problem with tables).

<h3>Ok, I want just the array of arrays.</h3>

This is a good option when you want to do something else with the data.

{% highlight javascript %}
var weeksNow = monthCalendarGen().run(); // returns an array of the current month divided by 6 lines (array), which one containing another array with 7 days.
{% endhighlight %}

![monthCalendar Example Console](https://raw.githubusercontent.com/matepaiva/month-calendar-generator/master/example.png)

Pay attention: if you pass no argument to monthCalendarGen(), it will consider you are talking about the current momment. And, when passing the date, you can make the most of the JavaScript ways to create dates:

{% highlight javascript %}
var December2016 = monthCalendarGen("2016, 12").run();  // same as...
December2016 = monthCalendarGen("2016, dec").run(); // same as...
December2016 = monthCalendarGen(1481335200000).run(); // same as...
December2016 = monthCalendarGen("Fri Dec 02 2016 00:00:00 GMT-0200 (BRST)").run(); // same as... You got it.
{% endhighlight %}

But if you want to build a calendar, we can handle this. You will see now.

<h3>Build the calendar for me, please.</h3>

Oh, it's a pleasure. With table or divs, sir?

Let's start with divs.

All you have to do is passing the Year-month argument to the generator and one argument to the constructor: where it's going to build it.

This...

{% highlight html %}
<body>
<div id="calendar"></div>

<script src="monthCalendarGen.js"></script>
<script src="index.js"></script>
</body>
{% endhighlight %}

...with this...

{% highlight javascript %}
var calendar = document.getElementById("calendar"); //the outer element.

monthCalendarGen("2016, mar").constructSheet(calendar);
{% endhighlight %}

...will become this:

{% highlight html %}
<body>
  <div id="calendar">
    <div class="month">
      <div class="month-head">
        <div class="month-title">2016 March</div>
      </div>
      <div class="month-body">
        <div class="week">
          <div class="last-month day" data-date="1456628400000">28</div>
          <div class="last-month day" data-date="1456714800000">29</div>
          <div class="day" data-date="1456801200000">1</div>
          <div class="day" data-date="1456887600000">2</div>
          <div class="day" data-date="1456974000000">3</div>
          <div class="day" data-date="1457060400000">4</div>
          <div class="day" data-date="1457146800000">5</div>
        </div>
        <div class="week">
          <div class="day" data-date="1457233200000">6</div>
          <div class="day" data-date="1457319600000">7</div>
          <div class="day" data-date="1457406000000">8</div>
          <div class="day" data-date="1457492400000">9</div>
          <div class="day" data-date="1457578800000">10</div>
          <div class="day" data-date="1457665200000">11</div>
          <div class="day" data-date="1457751600000">12</div>
        </div>
        <div class="week">
          <div class="day" data-date="1457838000000">13</div>
          <div class="day" data-date="1457924400000">14</div>
          <div class="day" data-date="1458010800000">15</div>
          <div class="day" data-date="1458097200000">16</div>
          <div class="day" data-date="1458183600000">17</div>
          <div class="day" data-date="1458270000000">18</div>
          <div class="day" data-date="1458356400000">19</div>
        </div>
        <div class="week">
          <div class="day" data-date="1458442800000">20</div>
          <div class="day" data-date="1458529200000">21</div>
          <div class="day" data-date="1458615600000">22</div>
          <div class="day" data-date="1458702000000">23</div>
          <div class="day" data-date="1458788400000">24</div>
          <div class="day" data-date="1458874800000">25</div>
          <div class="day" data-date="1458961200000">26</div>
        </div>
        <div class="week">
          <div class="day" data-date="1459047600000">27</div>
          <div class="day" data-date="1459134000000">28</div>
          <div class="day" data-date="1459220400000">29</div>
          <div class="day" data-date="1459306800000">30</div>
          <div class="day" data-date="1459393200000">31</div>
          <div class="next-month day" data-date="1459479600000">1</div>
          <div class="next-month day" data-date="1459566000000">2</div>
        </div>
        <div class="week">
          <div class="next-month day" data-date="1459652400000">3</div>
          <div class="next-month day" data-date="1459738800000">4</div>
          <div class="next-month day" data-date="1459825200000">5</div>
          <div class="next-month day" data-date="1459911600000">6</div>
          <div class="next-month day" data-date="1459998000000">7</div>
          <div class="next-month day" data-date="1460084400000">8</div>
          <div class="next-month day" data-date="1460170800000">9</div>
        </div>
      </div>
    </div>
  </div>

  <script src="monthCalendarGen.js"></script>
  <script src="index.js"></script>
</body>
{% endhighlight %}

Isn't it beautiful? ♥

If you want it to display as table, you just have to pass an extra argument into an config object:

{% highlight javascript %}
var calendar = document.getElementById("calendar"); //the outer element.

monthCalendarGen("2016, mar").constructSheet(calendar, {table:true});
{% endhighlight %}

And then, when you reload your html, it will be like this:

{% highlight html %}
<body>
  <div id="calendar">
    <table class="month">
      <thead class="month-head">
        <tr class="month-head-line">
          <th class="month-title" colspan="7">2016 March</th>
        </tr>
      </thead>
      <tbody class="month-body">
        <tr class="week">
          <td class="last-month day" data-date="1456628400000">28</td>
          <td class="last-month day" data-date="1456714800000">29</td>
          <td class="day" data-date="1456801200000">1</td>
          <td class="day" data-date="1456887600000">2</td>
          <td class="day" data-date="1456974000000">3</td>
          <td class="day" data-date="1457060400000">4</td>
          <td class="day" data-date="1457146800000">5</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1457233200000">6</td>
          <td class="day" data-date="1457319600000">7</td>
          <td class="day" data-date="1457406000000">8</td>
          <td class="day" data-date="1457492400000">9</td>
          <td class="day" data-date="1457578800000">10</td>
          <td class="day" data-date="1457665200000">11</td>
          <td class="day" data-date="1457751600000">12</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1457838000000">13</td>
          <td class="day" data-date="1457924400000">14</td>
          <td class="day" data-date="1458010800000">15</td>
          <td class="day" data-date="1458097200000">16</td>
          <td class="day" data-date="1458183600000">17</td>
          <td class="day" data-date="1458270000000">18</td>
          <td class="day" data-date="1458356400000">19</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1458442800000">20</td>
          <td class="day" data-date="1458529200000">21</td>
          <td class="day" data-date="1458615600000">22</td>
          <td class="day" data-date="1458702000000">23</td>
          <td class="day" data-date="1458788400000">24</td>
          <td class="day" data-date="1458874800000">25</td>
          <td class="day" data-date="1458961200000">26</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1459047600000">27</td>
          <td class="day" data-date="1459134000000">28</td>
          <td class="day" data-date="1459220400000">29</td>
          <td class="day" data-date="1459306800000">30</td>
          <td class="day" data-date="1459393200000">31</td>
          <td class="next-month day" data-date="1459479600000">1</td>
          <td class="next-month day" data-date="1459566000000">2</td>
        </tr>
        <tr class="week">
          <td class="next-month day" data-date="1459652400000">3</td>
          <td class="next-month day" data-date="1459738800000">4</td>
          <td class="next-month day" data-date="1459825200000">5</td>
          <td class="next-month day" data-date="1459911600000">6</td>
          <td class="next-month day" data-date="1459998000000">7</td>
          <td class="next-month day" data-date="1460084400000">8</td>
          <td class="next-month day" data-date="1460170800000">9</td>
        </tr>
      </tbody>
    </table>
  </div>

  <script src="monthCalendarGen.js"></script>
  <script src="index.js"></script>
</body>
{% endhighlight %}

That's it. Now the details:

<h3>The config object</h3>
Untill now, there are 3 values you can set in your config object:

{% highlight javascript %}
var config = {
  // Default is english, but you can set manually for any name you want for the months.
  months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],

  // Below is what is going to happen when you click on a calendar day. It's a way to connect the calendar with outside code. That's the reason for data-date (now you know). If not set, nothing will happen on click.
  sendDateTo: function(date){
    console.log(date); //example
  }, 
  table: true // default is false.
};
{% endhighlight %}

<h3>The CSS stuff</h3>
As you could see, there are some built-in classes inside the Month Calendar Generator. They are:

{% highlight css %}
  .month
    .month-head
      .month-head-line
        .month-title
    .month-body
      .week
        .day
        .last-month
        .next-month
{% endhighlight %}

<h3>And that's it!</h3>
Feel free to contribute with the code and fork the repository. And [here you have the link to download the minified version](https://raw.githubusercontent.com/matepaiva/month-calendar-generator/master/monthCalendarGen.min.js) of **Month Calendar Generator**.



<script>
var monthCalendarGen=function(e){var t;t=void 0===e||""===e?new Date:new Date(e);var a=t.getMonth(),n=t.getFullYear(),d=new Date(t.getFullYear(),t.getMonth(),1),r=new Date(t.getFullYear(),t.getMonth()+1,0),l=new Date(t.getFullYear(),t.getMonth(),1-d.getDay()),o=new Date(t.getFullYear(),t.getMonth()+1,13-r.getDay()),s=function(){for(var e=[],t=6,a=0;t>a;a++){for(var n=[],d=new Date(l.getFullYear(),l.getMonth(),l.getDate()+7*a),r=0;7>r;r++){var o=new Date(d.getFullYear(),d.getMonth(),d.getDate()+r);n.push(o)}e.push(n)}return e},i=function(e,t){t(e)},h=function(t,d){void 0===d&&(d={});var r={months:d.months||["January","February","March","April","May","June","July","August","September","October","November","December"],sendDateTo:d.sendDateTo,table:d.table||!1},l=s(e),o=document.createElement(r.table?"table":"div");o.classList.add("month");var h=document.createElement(r.table?"thead":"div");h.classList.add("month-head");var c=document.createElement(r.table?"tbody":"div");if(c.classList.add("month-body"),r.table){var u=document.createElement(r.table?"tr":"div");u.classList.add("month-head-line"),h.appendChild(u)}var v=document.createElement(r.table?"th":"div");v.classList.add("month-title"),r.table&&(v.colSpan="7");var m=document.createTextNode(n+" "+r.months[a]);v.appendChild(m),r.table?u.appendChild(v):h.appendChild(v),o.appendChild(h),o.appendChild(c),t.appendChild(o);for(var p=0;p<l.length;p++){u=document.createElement(r.table?"tr":"div"),u.classList.add("week");for(var f=0;f<l[p].length;f++){var g=document.createElement(r.table?"td":"div");l[p][f].getMonth()<a?g.classList.add("last-month"):l[p][f].getMonth()>a&&g.classList.add("next-month"),g.classList.add("day");var D=document.createTextNode(l[p][f].getDate());g.dataset.date=Date.parse(l[p][f]),r.sendDateTo&&(g.onclick=function(){i(this.dataset.date,r.sendDateTo)}),g.appendChild(D),u.appendChild(g)}c.appendChild(u)}};return{month:a,firstMonthDay:d,lastMonthDay:r,firstCalendarDay:l,lastCalendarDay:o,run:function(){return s()},constructSheet:function(e,t){h(e,t)}}};

var calendar = document.getElementById("calendar");
var date = document.getElementById("date");
var config = {
  months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  sendDateTo: function(date){
    alert(date);
  }, 
  table: true
};

monthCalendarGen().constructSheet(calendar, config);

function changeMonth(dat){
  calendar.innerHTML = "";
  monthCalendarGen(dat).constructSheet(calendar, config);
}

date.addEventListener( "keydown", function( e ) {
  var keyCode = e.keyCode || e.which;
    if ( keyCode === 13 ) {
      changeMonth(date.value)
    }
}, false);


</script>
