{% extends "index.tpl" %}
{% block center %}
<div class="aeticle-section">
    <div class="aeticle-title">
        <p class="title">
            {{data[0].title}}
        </p>
    </div>
    <div class="aeticle-content">
        <p class="content">
            {{data[0].content}}
        </p>
    </div>
</div>
{% endblock %}