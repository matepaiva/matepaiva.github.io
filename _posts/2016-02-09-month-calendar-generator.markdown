---
layout: post
title:  "Month Calendar Generator: three options to build a calendar sheet"
date:   2016-02-09 13:35:12 -0200
author: "mate paiva"
image: calendar.png
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

{% highlight javascript %}
var calendar = document.getElementById("calendar");

var config = {
  months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  sendDateTo: function(date){
    alert(date);
  }, 
    table: true
};

monthCalendarGen().constructSheet(calendar, config);
{% endhighlight %}

The calendar sheet below was build automatically by Month Calendar Generator. Click on any day to get it "Date.parse" value inside an alert box.

  <div id="calendar"></div>

<div>
Try it yourself! Insert a date in format "YYYY" and "MM":
 <br>
 <br>
  <input type="year" id="year" placeholder="YYYY">
  <input type="year" id="month" placeholder="MM">
  
  <button onclick="changeMonth(year.value, month.value)">Change month</button>
  <br><br>
</div>


<h3>Get Month Calendar Generator!</h3>
It's just 2k. [Download it now](https://raw.githubusercontent.com/matepaiva/month-calendar-generator/master/monthCalendarGen.min.js)! Or fork the [GitHub repo](https://github.com/matepaiva/month-calendar-generator/).

<h3>Introduction</h3>

With Month Calendar Generator, we ask you the "year-month" arguments -- and we return to you the sheet of that period in 3 different ways: 
- as an array of arrays (6 lines with 7 days in each),
- as an table with all the content and a bunch of classes set up,
- or as divs inside divs, instead of a table but with the same features (just for those who has a problem with tables).

<h3>Ok, I want just the array of arrays.</h3>

This is a good option when you want to do something else with the data.

{% highlight javascript %}
var weeksNow = monthCalendarGen().run(); // returns an array of the current month divided by 6 lines (array), which one containing another array with 7 days.
{% endhighlight %}

![monthCalendar Example Console](https://raw.githubusercontent.com/matepaiva/month-calendar-generator/master/example.png)

You must pass the date as two arguments, first being year(YYYY) and second being month (MM). Remember: in JavaScript, month starts at 0 and ends at 11.

If you pass no argument to monthCalendarGen() or a wrong argument (like a string), it will assume date is New Date() -- which means, now. You will get the sheet of the current month.

{% highlight javascript %}
var December2016 = monthCalendarGen(2016, 11).run();
var currentMonth = monthCalendarGen().run();
var alsoCurrentmonth = monthCalendarGen("ablablidubla").run();
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

monthCalendarGen(2016, 2).constructSheet(calendar);
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

monthCalendarGen(2016, 02).constructSheet(calendar, {table:true});
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
var monthCalendarGen=function(e,t){var d,a=/^[0-9]{1,2}$/,n=/^[0-9]{4}$/;d=void 0!==e&&void 0!==t&&n.test(e)&&a.test(t)?new Date(e,t):new Date;var r=d.getMonth(),l=d.getFullYear(),o=new Date(d.getFullYear(),d.getMonth(),1),s=new Date(d.getFullYear(),d.getMonth()+1,0),i=new Date(d.getFullYear(),d.getMonth(),1-o.getDay()),h=new Date(d.getFullYear(),d.getMonth()+1,13-s.getDay()),c=function(){for(var e=[],t=6,a=0;t>a;a++){for(var n=[],d=new Date(i.getFullYear(),i.getMonth(),i.getDate()+7*a),r=0;7>r;r++){var l=new Date(d.getFullYear(),d.getMonth(),d.getDate()+r);n.push(l)}e.push(n)}return e},u=function(e,t){t(e)},v=function(e,t){void 0===t&&(t={});var a={months:t.months||["January","February","March","April","May","June","July","August","September","October","November","December"],sendDateTo:t.sendDateTo,table:t.table||!1},n=c(d),o=document.createElement(a.table?"table":"div");o.classList.add("month");var s=document.createElement(a.table?"thead":"div");s.classList.add("month-head");var i=document.createElement(a.table?"tbody":"div");if(i.classList.add("month-body"),a.table){var h=document.createElement(a.table?"tr":"div");h.classList.add("month-head-line"),s.appendChild(h)}var v=document.createElement(a.table?"th":"div");v.classList.add("month-title"),a.table&&(v.colSpan="7");var m=document.createTextNode(l+" "+a.months[r]);v.appendChild(m),a.table?h.appendChild(v):s.appendChild(v),o.appendChild(s),o.appendChild(i),e.appendChild(o);for(var f=0;f<n.length;f++){h=document.createElement(a.table?"tr":"div"),h.classList.add("week");for(var p=0;p<n[f].length;p++){var g=document.createElement(a.table?"td":"div");n[f][p].getMonth()<r?g.classList.add("last-month"):n[f][p].getMonth()>r&&g.classList.add("next-month"),g.classList.add("day");var D=document.createTextNode(n[f][p].getDate());g.dataset.date=Date.parse(n[f][p]),a.sendDateTo&&(g.onclick=function(){u(this.dataset.date,a.sendDateTo)}),g.appendChild(D),h.appendChild(g)}i.appendChild(h)}};return{month:r,firstMonthDay:o,lastMonthDay:s,firstCalendarDay:i,lastCalendarDay:h,run:function(){return c()},constructSheet:function(e,t){v(e,t)}}};


var calendar = document.getElementById("calendar");
var year = document.getElementById("year");
var month = document.getElementById("month");

var config = {
  months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  sendDateTo: function(date){
    alert(date);
  }, 
  table: true
};

monthCalendarGen().constructSheet(calendar, config);

function changeMonth(year, month){
  calendar.innerHTML = "";
  monthCalendarGen(year, month).constructSheet(calendar, config);
}

</script>
