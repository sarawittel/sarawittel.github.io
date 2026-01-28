---
layout: default
title: Home
---

<section class="home">
  <h2>Last articles</h2>

  {% capture articles %}
    {% for post in site.posts %}
      <a href="{{ post.url | relative_url }}" class="list-group-title">
        {{ post.title }}
      </a>
      <span class="list-group-meta">
        {{ post.date | date: "%B %d, %Y" }}
      </span>
    {% endfor %}
  {% endcapture %}

  {% include list-group.html items=articles %}
</section>