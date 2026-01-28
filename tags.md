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
        <span>{{ tag_name }}</span>
        <span class="tag-count">{{ posts | size }}</span>
      </summary>

      <ul class="list-group">
        {% for post in posts %}
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