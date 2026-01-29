---
layout: default
title: Tags
permalink: /tags/
---

<section class="tags">
  <h2>Tags</h2>

  {% assign sorted_tags = site.tags | sort %}

  {% for tag in sorted_tags %}
    {% assign tag_name = tag[0] %}
    {% assign posts = tag[1] %}

    <details class="tag-group">
  <summary>
  <span class="tag-label">
    <span class="tag-title">{{ tag[0] }}</span>
    <span class="tag-count">{{ tag[1].size }}</span>
  </span>
</summary>

      <ul class="list-group">
        {% for post in posts %}
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
    </details>
  {% endfor %}
</section>