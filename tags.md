---
layout: default
title: Tags
permalink: /tags/
---

<section class="tags">
  <h2>Tags</h2>

  <ul class="list-group">
    {% assign sorted_tags = site.tags | sort %}
    {% for tag in sorted_tags %}
      <li class="list-group-item">
        <a
          href="{{ '/tags/' | append: tag[0] | relative_url }}"
          class="list-group-title"
        >
          {{ tag[0] }}
        </a>

        <span class="list-group-meta">
          {{ tag[1].size }} posts
        </span>
      </li>
    {% endfor %}
  </ul>
</section>