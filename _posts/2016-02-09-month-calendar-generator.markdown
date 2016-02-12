---
layout: post
title:  "Month Calendar Generator: three options to build a calendar sheet"
date:   2016-02-09 13:35:12 -0200
author: "mate paiva"
image: calendar.png
excerpt: "It asks you a year and a month ─ and it returns the sheet of that period: or as an array of arrays, or as an table with all the content and a bunch of classes set up, or as divs inside divs."
---

<style>
.month{
margin: auto;
margin-bottom: 15px;
width: 100%;
max-width: 350px;
border-radius: 1px;
border-spacing: 0;
border: 1px solid rgba(0,0,0,0.1);
}

.busy-day:before{
content: "·";
font-size: 35px;
line-height: 5px;
font-weight: bold;
color: darkred;
}

#output {
margin: auto;
padding: 10px;
margin-bottom: 15px;
border: 1px solid grey;
color: red;
width: 100%;
max-width: 330px;
height:50px;
}

#output *{
margin: auto;
}

#year, #month {
width:45px;
}

.month-head {
width: 100%;
background-color: rgba(0,0,0,0.1);
}

.month-head * {
padding: 3px 0;
}
.month-body {
width: 100%;
}
.day {
width: 14.285%;
text-align: center;
padding: 7px 0;
}

.last-month{
color: lightgrey;

}
.next-month{
color: darkred;
}

.today{
font-weight: bold;
background-color: rgba(0,0,0,0.05);
color: black;
border-radius: 1px;
}

.active-day {
border: 1px solid red;
border-radius: 1px;
}

.button-before:before{
content: "«";
}
.button-next:before{
content: "»";
}
</style>

<h5>I built a calendar sheet for you. Thanks, you welcome.</h5>

<h3>Example:</h3>

{% highlight javascript %}
var calendar = document.getElementById("calendar");

var config = {
  months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  weekDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  sendDateTo: function(date){
    var output = document.getElementById("output");
    output.innerHTML = new Date(parseInt(date));
  },
  table: true,
  hasButtons: true,
  busyDaysEntry: [1455588000000, 1457060400000], 
};

monthCalendarGen().constructSheet(calendar, config);
{% endhighlight %}

The calendar sheet below was build automatically by Month Calendar Generator. 

**Click on any day** to get it date value inside the box below.

  <div id="calendar"></div>
  <div id="output"></div>

<h3>Get Month Calendar Generator!</h3>
[Download it now](https://raw.githubusercontent.com/matepaiva/month-calendar-generator/master/monthCalendarGen.min.js)! Or fork the [GitHub repo](https://github.com/matepaiva/month-calendar-generator/).

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

You must pass the date as two arguments, first being year (YYYY) and second being month (MM). Remember: in JavaScript, month starts at 0 and ends at 11.

If you pass no argument to monthCalendarGen() or a wrong argument (like a string), it will assume date is New Date() -- which means, now. You will get the sheet of the current month.

{% highlight javascript %}
var December2016 = monthCalendarGen(2016, 11).run();
var currentMonth = monthCalendarGen().run();
var alsoCurrentMonth = monthCalendarGen("ablablidubla").run();
{% endhighlight %}

But if you want to build a calendar, we can handle this. You will see now.

<h3>Build the calendar for me, please.</h3>

Oh, it's a pleasure. With table or divs, sir?

Let's start with divs.

All you have to do is passing the Year-month arguments to the generator and one argument to the constructor: where it's going to build it.

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

monthCalendarGen(2016, 1).constructSheet(calendar);
{% endhighlight %}

...will become this:

{% highlight html %}
<body>
  <div id="calendar">
    <div class="month">
      <div class="month-head">
        <div class="month-head-line">
          <div class="button-before">«</div>
          <div class="year-title">2016</div>
          <div class="month-title">Fevereiro</div>
          <div class="button-next">»</div>
        </div>
        <div class="weekdays">
          <div class="weekday">Dom</div>
          <div class="weekday">Seg</div>
          <div class="weekday">Ter</div>
          <div class="weekday">Qua</div>
          <div class="weekday">Qui</div>
          <div class="weekday">Sex</div>
          <div class="weekday">Sab</div>
        </div>
      </div>
      <div class="month-body">
        <div class="week">
          <div class="last-month day" data-date="1454205600000">31</div>
          <div class="day" data-date="1454292000000">1</div>
          <div class="day" data-date="1454378400000">2</div>
          <div class="day" data-date="1454464800000">3</div>
          <div class="day" data-date="1454551200000">4</div>
          <div class="day" data-date="1454637600000">5</div>
          <div class="day" data-date="1454724000000">6</div>
        </div>
        <div class="week">
          <div class="day" data-date="1454810400000">7</div>
          <div class="day" data-date="1454896800000">8</div>
          <div class="day" data-date="1454983200000">9</div>
          <div class="today day" data-date="1455069600000">10</div>
          <div class="day" data-date="1455156000000">11</div>
          <div class="day" data-date="1455242400000">12</div>
          <div class="day" data-date="1455328800000">13</div>
        </div>
        <div class="week">
          <div class="day" data-date="1455415200000">14</div>
          <div class="day" data-date="1455501600000">15</div>
          <div class="day" data-date="1455588000000">16</div>
          <div class="day" data-date="1455674400000">17</div>
          <div class="day" data-date="1455760800000">18</div>
          <div class="day" data-date="1455847200000">19</div>
          <div class="day" data-date="1455933600000">20</div>
        </div>
        <div class="week">
          <div class="day busy-day" data-date="1456023600000">21</div>
          <div class="day" data-date="1456110000000">22</div>
          <div class="day" data-date="1456196400000">23</div>
          <div class="day" data-date="1456282800000">24</div>
          <div class="day" data-date="1456369200000">25</div>
          <div class="day" data-date="1456455600000">26</div>
          <div class="day" data-date="1456542000000">27</div>
        </div>
        <div class="week">
          <div class="day" data-date="1456628400000">28</div>
          <div class="day" data-date="1456714800000">29</div>
          <div class="next-month day" data-date="1456801200000">1</div>
          <div class="next-month day" data-date="1456887600000">2</div>
          <div class="next-month day" data-date="1456974000000">3</div>
          <div class="next-month day" data-date="1457060400000">4</div>
          <div class="next-month day" data-date="1457146800000">5</div>
        </div>
        <div class="week">
          <div class="next-month day" data-date="1457233200000">6</div>
          <div class="next-month day" data-date="1457319600000">7</div>
          <div class="next-month day" data-date="1457406000000">8</div>
          <div class="next-month day" data-date="1457492400000">9</div>
          <div class="next-month day" data-date="1457578800000">10</div>
          <div class="next-month day" data-date="1457665200000">11</div>
          <div class="next-month day" data-date="1457751600000">12</div>
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

monthCalendarGen(2016, 01).constructSheet(calendar, {table:true});
{% endhighlight %}

And then, when you reload your html, it will be like this:

{% highlight html %}
<body>
  <div id="calendar">
    <table class="month">
      <thead class="month-head">
        <tr class="month-head-line">
         <th class="button-before" colspan="1">«</th>
         <th class="year-title" colspan="2">2016</th>
         <th colspan="3" class="month-title">Fevereiro</th><th class="button-next" colspan="1">»</th>
        </tr>
        <tr class="weekdays">
          <th class="weekday">Dom</th>
          <th class="weekday">Seg</th>
          <th class="weekday">Ter</th>
          <th class="weekday">Qua</th>
          <th class="weekday">Qui</th>
          <th class="weekday">Sex</th>
          <th class="weekday">Sab</th>
        </tr>
      </thead>
      <tbody class="month-body">
        <tr class="week">
          <td class="last-month day" data-date="1454205600000">31</td>
          <td class="day" data-date="1454292000000">1</td>
          <td class="day" data-date="1454378400000">2</td>
          <td class="day" data-date="1454464800000">3</td>
          <td class="day" data-date="1454551200000">4</td>
          <td class="day" data-date="1454637600000">5</td>
          <td class="day" data-date="1454724000000">6</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1454810400000">7</td>
          <td class="day" data-date="1454896800000">8</td>
          <td class="day" data-date="1454983200000">9</td>
          <td class="today day" data-date="1455069600000">10</td>
          <td class="day" data-date="1455156000000">11</td>
          <td class="day" data-date="1455242400000">12</td>
          <td class="day" data-date="1455328800000">13</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1455415200000">14</td>
          <td class="day" data-date="1455501600000">15</td>
          <td class="day" data-date="1455588000000">16</td>
          <td class="day" data-date="1455674400000">17</td>
          <td class="day" data-date="1455760800000">18</td>
          <td class="day" data-date="1455847200000">19</td>
          <td class="day" data-date="1455933600000">20</td>
        </tr>
        <tr class="week">
          <td class="day busy-day" data-date="1456023600000">21</td>
          <td class="day" data-date="1456110000000">22</td>
          <td class="day" data-date="1456196400000">23</td>
          <td class="day" data-date="1456282800000">24</td>
          <td class="day" data-date="1456369200000">25</td>
          <td class="day" data-date="1456455600000">26</td>
          <td class="day" data-date="1456542000000">27</td>
        </tr>
        <tr class="week">
          <td class="day" data-date="1456628400000">28</td>
          <td class="day" data-date="1456714800000">29</td>
          <td class="next-month day" data-date="1456801200000">1</td>
          <td class="next-month day" data-date="1456887600000">2</td>
          <td class="next-month day" data-date="1456974000000">3</td>
          <td class="next-month day" data-date="1457060400000">4</td>
          <td class="next-month day" data-date="1457146800000">5</td>
        </tr>
        <tr class="week">
          <td class="next-month day active-day" data-date="1457233200000">6</td>
          <td class="next-month day" data-date="1457319600000">7</td>
          <td class="next-month day" data-date="1457406000000">8</td>
          <td class="next-month day" data-date="1457492400000">9</td>
          <td class="next-month day" data-date="1457578800000">10</td>
          <td class="next-month day" data-date="1457665200000">11</td>
          <td class="next-month day" data-date="1457751600000">12</td>
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
There are some values you can set in your config object:

{% highlight javascript %}
var config = {
  // Default is english, but you can set manually for any name you want for the months.
  months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  

  // Default is english, but you can set manually for any name you want for the days of the week.
  week: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],

  // Below is what is going to happen when you click on a calendar day. It's a way to connect the calendar with outside code. That's the reason for data-date (now you know). If not set, nothing will happen on click.
  
  sendDateTo: function(date){
    console.log(date); //example
  }, 
  
  table: true, // default is false.
  
  //default is false. Generate button functionality to go to the next month (or before) and classes, where you can put a content or icons with pseudoelements.
  hasButtons: true, 
  
  //Arrays of days with tasks. Can be an array OR a function that returns an array. We will call your function with 2 arguments: firstCalendarDay and lastCalendarDay.
  busyDaysEntry: [1455588000000, 1457060400000], 
};
{% endhighlight %}

<h3>The CSS stuff</h3>
As you could see, there are some built-in classes inside the Month Calendar Generator. They are:

{% highlight css %}
  .month
    .month-head
      .month-head-line
        .button-before
        .year-title
        .month-title
        .button-next
      .weekdays
        .weekday
    .month-body
      .week
        .day
        .last-month
        .next-month
        .today
        .active-day
        .busy-day
{% endhighlight %}

<h3>And that's it!</h3>
Feel free to contribute with the code and fork the repository. And [here you have the link to download the minified version](https://raw.githubusercontent.com/matepaiva/month-calendar-generator/master/monthCalendarGen.min.js) of **Month Calendar Generator**.



<script>
var monthCalendarGen=function(e,t){var d,a=/^-?[0-9]{1,2}$/,n=/^-?[0-9]{4}$/;d=void 0!==e&&void 0!==t&&n.test(e)&&a.test(t)?new Date(e,t):new Date;var r=new Date,s=new Date(r.getFullYear(),r.getMonth(),r.getDate()),l=d.getMonth(),o=d.getFullYear(),i=new Date(d.getFullYear(),d.getMonth(),1),c=new Date(d.getFullYear(),d.getMonth()+1,0),u=new Date(d.getFullYear(),d.getMonth(),1-i.getDay()),h=new Date(d.getFullYear(),d.getMonth()+1,13-c.getDay()),v=function(){for(var e=[],t=6,a=0;t>a;a++){for(var n=[],d=new Date(u.getFullYear(),u.getMonth(),u.getDate()+7*a),r=0;7>r;r++){var s=new Date(d.getFullYear(),d.getMonth(),d.getDate()+r);n.push(s)}e.push(n)}return e},m=function(e,t){t(e)},p=function(e,t){void 0===t&&(t={});var r,a={months:t.months||["January","February","March","April","May","June","July","August","September","October","November","December"],weekDays:t.weekDays||["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],sendDateTo:t.sendDateTo,table:t.table||!1,hasButtons:t.hasButtons||!1,busyDaysEntry:t.busyDaysEntry||[]},n=function(a){e.innerHTML="",monthCalendarGen(o,l+a).constructSheet(e,t)};r="function"==typeof a.busyDaysEntry?a.busyDaysEntry(u,h):a.busyDaysEntry;var i=v(d),c=document.createElement(a.table?"table":"div");c.classList.add("month");var p=document.createElement(a.table?"thead":"div");p.classList.add("month-head");var y=document.createElement(a.table?"tbody":"div");y.classList.add("month-body");var f=document.createElement(a.table?"tr":"div");f.classList.add("month-head-line"),p.appendChild(f);var D=document.createElement(a.table?"th":"div");D.classList.add("button-before"),D.colSpan="1",a.hasButtons&&(D.onclick=function(){n(-1)});var b=document.createElement(a.table?"th":"div");b.classList.add("year-title"),b.colSpan="2";var g=document.createTextNode(o);b.appendChild(g);var C=document.createElement(a.table?"th":"div");C.colSpan="3",C.classList.add("month-title");var L=document.createTextNode(a.months[l]);C.appendChild(L);var w=document.createElement(a.table?"th":"div");w.classList.add("button-next"),w.colSpan="1",a.hasButtons&&(w.onclick=function(){n(1)}),f.appendChild(D),f.appendChild(b),f.appendChild(C),f.appendChild(w);var E=document.createElement(a.table?"tr":"div");E.classList.add("weekdays"),p.appendChild(E);for(var M=0;M<a.weekDays.length;M++){var T=document.createElement(a.table?"th":"div");T.classList.add("weekday");var k=document.createTextNode(a.weekDays[M]);T.appendChild(k),E.appendChild(T)}c.appendChild(p),c.appendChild(y),e.appendChild(c);for(var F=0;F<i.length;F++){f=document.createElement(a.table?"tr":"div"),f.classList.add("week");for(var S=0;S<i[F].length;S++){var Y=document.createElement(a.table?"td":"div");i[F][S].getMonth()<l?Y.classList.add("last-month"):i[F][S].getMonth()>l?Y.classList.add("next-month"):Date.parse(i[F][S])==Date.parse(s)&&Y.classList.add("today"),Y.classList.add("day");var x=document.createTextNode(i[F][S].getDate());Y.dataset.date=Date.parse(i[F][S]),-1!=r.indexOf(parseInt(Y.dataset.date))&&Y.classList.add("busy-day"),a.sendDateTo&&(Y.onclick=function(){for(var e=document.getElementsByClassName("active-day"),t=0;t<e.length;t++)e[t].classList.remove("active-day");this.classList.add("active-day"),m(this.dataset.date,a.sendDateTo)}),Y.appendChild(x),f.appendChild(Y)}y.appendChild(f)}};return{month:l,year:o,today:s,now:r,firstMonthDay:i,lastMonthDay:c,firstCalendarDay:u,lastCalendarDay:h,run:function(){return v()},constructSheet:function(e,t){p(e,t)}}};

var calendar = document.getElementById("calendar");
var year = document.getElementById("year");
var month = document.getElementById("month");

var config = {
  months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  weekDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  sendDateTo: function(date){
    var output = document.getElementById("output");
    output.innerHTML = new Date(parseInt(date));
  },
  table: true,
  hasButtons: true,
  busyDaysEntry: [1455588000000, 1457060400000], //days which I hava tasks to do.
};

monthCalendarGen().constructSheet(calendar, config);

function changeMonth(year, month){
  calendar.innerHTML = "";
  monthCalendarGen(year, month).constructSheet(calendar, config);
}

</script>
