---
layout: default
title: Home
---

<section class="home">
  <h2>Last articles</h2>

  <ul class="list-group">
    {% for post in site.posts %}
      <li class="list-group-item">
        <a href="{{ post.url | relative_url }}" class="list-group-link">
          {{ post.title }}
        <span class="list-group-meta">
          {{ post.date | date: "%B %d, %Y" }}
        </span>
        </a>
      </li>
    {% endfor %}
  </ul>
</section>