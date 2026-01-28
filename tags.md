---
layout: default
title: Tags
permalink: /tags/
---

<section class="tags">
  <h2>Tags</h2>

  {% for tag in site.tags %}
    <details class="tag-group">
      <summary>
        <span class="tag-name">{{ tag[0] }}</span>
        <span class="tag-count">{{ tag[1].size }}</span>
      </summary>

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
    </details>
  {% endfor %}
</section>