---
layout: default
title: Projetos
---
<p class="site-slogan">matepaiva// {{ page.title }}</p>

{% for post in site.posts %}
<article class="post-wrap" itemscope itemtype="http://schema.org/BlogPosting">
  <header class="section-head post-head">
    {% if post.date %}
    <time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished" class="post-meta post-date icon-calendar">
      {{ post.date | date: "%b %-d, %Y" }}
    </time>
    {% endif %}
    {% if post.author %}
      <span itemprop="author" itemscope itemtype="http://schema.org/Person" class="post-meta post-author icon-user">
          <span itemprop="name">{{ post.author }}</span>
      </span>
    {% endif %}
    {% for category in post.categories %}
      <a href="{{ category }}"><div class="post-meta post-category icon-category"> {{ category }}</div></a>
    {% endfor %}
  </header>

  <div class="item-title post-title"> <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></div>

  <div class="item-body pure-g">
    <div class="item-img pure-u-1 pure-u-md-1-2">
      {% assign images = post.content | split:"<img " %}
      {% for image in images %}
        {% if image contains 'src=' %}
          {% assign imageMarkup = image | split:">" | first %}
          <img {{ imageMarkup }}>
          {% break %}
        {% endif %}
      {% endfor %}
    </div>
    <div class="pure-u-1 pure-u-md-1-2">
      <div class="l-box">
        <div class="pure-g">
          <div class="item-description pure-u-1">
          {{ post.excerpt }}
          <a href="{{ post.url | prepend: site.baseurl }}" class="item-read-more">LEIA MAIS</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
{% endfor %}