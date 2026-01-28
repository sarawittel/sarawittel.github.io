---
layout: default
title: Blog
---

### Últimos artículos

{% for post in site.posts %}
- **[{{ post.title }}]({{ site.baseurl }}{{ post.url }})**  
  <small>{{ post.date | date: "%d %B %Y" }}</small>
{% endfor %}