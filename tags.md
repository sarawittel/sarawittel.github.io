---
layout: default
title: Tags
permalink: /tags/
---

<section class="tags">
  <h2>Tags</h2>

  {% for tag in site.tags %}
    <h3 id="{{ tag[0] }}">{{ tag[0] }}</h3>

    <ul class="list-group">
      {% for post in tag[1] %}
        <li class="list-group-item">
          <a href="{{ post.url | relative_url }}" class="list-group-title">
            {{ post.title }}
          </a>
          <span class="list-group-meta">
            {{ post.date | date: "%B %d, %Y" }}
          </span>
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
</section>