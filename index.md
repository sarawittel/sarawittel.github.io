---
layout: default
title: Home
---

<section class="home">
  <h2>Last articles</h2>

  <ul class="list-group">
    {% for post in paginator.posts %}
      <li class="list-group-item">
        <a href="{{ post.url | relative_url }}" class="list-group-link">
          <span class="list-group-title">
            {{ post.title }}
          </span>
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
        <a
          class="pagination-link"
          href="{{ paginator.previous_page_path | relative_url }}"
        >
          ← Previous
        </a>
      {% else %}
        <span></span>
      {% endif %}

      <span class="pagination-info">
        Page {{ paginator.page }} of {{ paginator.total_pages }}
      </span>

      {% if paginator.next_page %}
        <a
          class="pagination-link"
          href="{{ paginator.next_page_path | relative_url }}"
        >
          Next →
        </a>
      {% else %}
        <span></span>
      {% endif %}
    </nav>
  {% endif %}
</section>