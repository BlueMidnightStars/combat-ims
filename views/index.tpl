<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
    <meta charset='utf-8'>
    <title>极客学院文章列表</title>
</head>
<body>
    <div class="section">
        <div class="container">
            <div class="header">
                <div class="link-list">
                    <a href="/" class="link-item {{ "active" if classId == null else "" }}">全部</a>
                    {% for item in classList %}
                    <a href="/?classId={{item.id}}" class="link-item {{ "active" if classId == item.id else "" }}">{{ item.title }}</a>
                    {% endfor %}

                </div>
            </div>
            <div class="aritcle-section">
                <div class="aeitcle-container">
                    {% block center %}
                    
                    {% endblock %}
                </div>
            </div>
        </div>
    </div>

    
</body>
</html>