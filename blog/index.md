---
layout: default
title: Blog
---

<section class="home">
  <h2>Last articles</h2>

  <ul class="list-group">
    {% for post in paginator.posts %}
      <li class="list-group-item">
        <a href="{{ post.url | relative_url }}" class="list-group-link">
          <span class="list-group-title">{{ post.title }}</span>
          <span class="list-group-meta">
            {{ post.date | date: "%B %d, %Y" }}
          </span>
        </a>
      </li>
    {% endfor %}
  </ul>

  {% if paginator.total_pages > 1 %}
    <nav class="pagination">
      {% if paginator.previous_page %}
        <a href="{{ paginator.previous_page_path | relative_url }}">← Newer</a>
      {% endif %}

      {% if paginator.next_page %}
        <a href="{{ paginator.next_page_path | relative_url }}">Older →</a>
      {% endif %}
    </nav>
  {% endif %}
</section>