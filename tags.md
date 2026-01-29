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
              {{ post.title }}
            <span class="list-group-meta">
              {{ post.date | date: "%B %d, %Y" }}
            </span>
            </a>
          </li>
        {% endfor %}
      </ul>
    </details>
  {% endfor %}
</section>