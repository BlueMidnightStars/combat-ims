{% extends "index.tpl" %}
{% block center %}
<div class="article-list">
    {% for item in data %}
        <a class="article-list-item" href="article/{{item.id}}">
            <span>{{loop.index}}</span>
            <div class="article-list-item-title">
                标题: {{item.title}}
            </div>
            <div class="article-list-item-time">
                时间: {{item.created_time_display}}
            </div>
        </a>
    {% else %}
        <div>暂无内容</div>
    {% endfor %}
    
</div>
{% if number >= 0 %}
<div class="pagination-link-list">
{% for i in range(0, number) -%}
    <a class="pagination-link-item" href="?arrange={{i}}&classId={{classId}}">
        {{i + 1}}
    </a>
{%- endfor %}
</div>
{% endif %}
{% endblock %}