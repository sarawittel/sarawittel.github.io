---
layout: default
title: Home
---

<section class="home">
  <h2>Last articles</h2>

  {% assign items = site.posts | map: "url" %}
  {% assign list_items = "" | split: "" %}

  {% for post in site.posts %}
    {% assign list_items = list_items | push: 
      {
        "title": post.title,
        "url": post.url,
        "meta": post.date | date: "%B %d, %Y"
      }
    %}
  {% endfor %}

  {% include list-group.html items=list_items %}
</section>