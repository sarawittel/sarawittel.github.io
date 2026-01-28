---
layout: page
title: Tags
permalink: /tags/
---

{% for tag in site.tags %}
### {{ tag[0] }}

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