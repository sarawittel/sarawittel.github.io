---
layout: default
title: Home
---

<section>
  <h2>Latest</h2>

<ul class="list-group">
  {% for post in site.posts limit:10 %}
    <li class="list-group-item">
      <a href="{{ post.url | relative_url }}" class="list-group-link">
        <div class="list-group-row">
          <span class="post-icon" aria-hidden="true"></span>

          <div class="list-group-main">
        <div class="list-group-title">
          {{ post.title }}
        </div>
      </div>

      <div class="list-group-date">
        {{ post.date | date: "%b %d, %Y" }}
      </div>
    </div>
      </a>
    </li>
  {% endfor %}
</ul>
</section>