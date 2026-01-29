---
layout: default
title: Home
---

<section>
  <h2>Latest</h2>

  <ul class="list-group">
    {% for post in site.posts limit:10 %}
      <li class="list-group-item">
        <a href="{{ post.url | relative_url }}">
          {{ post.title }}
        </a>
      </li>
    {% endfor %}
  </ul>
</section>