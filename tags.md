---
layout: default
title: Tags
permalink: /tags/
---

<section class="tags">
  <h2>Tags</h2>

  {% assign sorted_tags = site.tags | sort %}
  {% assign list_items = "" | split: "" %}

  {% for tag in sorted_tags %}
    {% assign list_items = list_items | push:
      {
        "title": tag[0],
        "url": "/tags/" | append: tag[0],
        "meta": tag[1].size | append: " posts"
      }
    %}
  {% endfor %}

  {% include list-group.html items=list_items %}
</section>