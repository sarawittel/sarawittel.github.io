---
layout: page
title: Tags
permalink: /tags/
---

{% assign sorted_tags = site.tags | sort %}

{% for tag in sorted_tags %}
### {{ tag[0] }} ({{ tag[1].size }})

<ul class="post-list">
  {% for post in tag[1] %}
    <li>
      <span class="post-meta">
        {{ post.date | date: "%B %d, %Y" }}
      </span>

      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title }}
        </a>
      </h3>
    </li>
  {% endfor %}
</ul>
{% endfor %}