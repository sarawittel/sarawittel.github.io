---
layout: default
title: Home
---

<section>
  <h2>Latest</h2>

<ul class="list-group">
  {% for post in site.posts limit:10 %}
    <li class="list-group-item">
      <a href="{{ post.url | relative_url }}" class="list-group-link">
        <div class="list-group-title">
          {{ post.title }}
        </div>

        <div class="list-group-meta">
          {{ post.date | date: "%B %d, %Y" }}
        </div>
      </a>
      {% if post.discussion_number %}

  <div class="post-stats"
       data-number="{{ post.discussion_number }}">
    <span class="comment-count">–</span> comments
    ·
    <span class="reaction-count">–</span> reactions
  </div>
{% endif %}
    </li>

{% endfor %}

</ul>
</section>
