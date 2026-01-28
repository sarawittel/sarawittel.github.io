---
layout: default
title: Home
---

<section class="home">
  <h2>Last articles</h2>

  <ul class="list-group">
    {% for post in site.posts %}
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
</section>