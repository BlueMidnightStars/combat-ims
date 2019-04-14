<template>
<div id="components-layout-demo-basic">
  <a-layout>
    <a-layout-sider>
        <div class="header_sidebar-logo">
            <img class="header_sidebar-logo-image" src="@/image/logo.png">
            <p class="header_sidebar-logo-title">信息管理</p>
        </div>
        <div >
            <a-menu
            style="text-align: left;"
            :defaultSelectedKeys="['']"
            :defaultOpenKeys="['sub1']"
            mode="inline"
            theme="light"
            :inlineCollapsed="false"
            >
            <a-menu-item key="1">
              <router-link to="/admin/user">
                <a-icon type="pie-chart" />
                <span>用户管理</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/admin/classify">
                <a-icon type="desktop" />
                <span>分类管理</span>
              </router-link>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="mail" /><span>文章管理</span></span>
                <a-menu-item key="5"><router-link to="/admin/aritcle">文章列表</router-link></a-menu-item>
                <a-menu-item key="6"><router-link to="/admin/article_create">新建文章</router-link></a-menu-item>
            </a-sub-menu>
            </a-menu>
        </div>
  </a-layout-sider>
      <a-layout>
        <a-layout-header style="text-align: right;"><a-button>退出系统</a-button></a-layout-header>
        <a-layout-content id="cite-container"><slot></slot></a-layout-content>
        <a-layout-footer>午夜出品</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'header_sidebar',
  components: {
  },
  data() {
    return {
      defaultSelectedKeys: [],
    };
  },
};
</script>
<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #fff;
  color: #333;
  border:1px solid #f4f4f4;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #fff;
  color: #333;
  border:1px solid #f4f4f4;
}
#components-layout-demo-basic .ant-layout-content {
  display: block;
  background: #fff;
  color: #333;
  min-height: 120px;
  border:1px solid #f4f4f4;
  overflow-y:auto;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
.header_sidebar-logo{
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 0;
    height: 61px;
    box-sizing: border-box;
    border: 1px solid #f4f4f4;
}
.header_sidebar-logo-image{
    display: inline-block;
    width: 80px;
    height: 39px;
}
.header_sidebar-logo-title{
    display: inline-block;
    font-size: 16px;
    color: #333;
    line-height: 20px;
    margin: 0;
    font-weight: 500;
}
</style>
