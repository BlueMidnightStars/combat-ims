<template>
  <commonality>
    <div class="user-add-container">
      <a href="javascript:;" class="user-add-title">返回文章列表</a>
    </div>
    <div class="articleCreate-section">
      <div class="articleCreate-title-input">
        <p class="articleCreate-input-title">标题:</p>
        <a-input class="articleCreate-input-desc" placeholder="Basic usage"/>
      </div>
      <div class="articleCreate-class-input">
        <p class="articleCreate-input-title">分类:</p>
        <a-select class="articleCreate-input-desc" defaultValue="lucy" style="width: 120px" @change="handleChange">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
      </div>
      <div class="articleCreate-content-input">
        <p class="articleCreate-input-title">内容:</p>
        <a-textarea style="resize:none; width: 600px; height: 300px;" class="articleCreate-input-desc" placeholder="Basic usage" :rows="4" autosize="true"/>
      </div>
      <div class="articleCreate-save">
        <a-button type="primary">保存</a-button>
      </div>
    </div>
  </commonality>
</template>

<script>
import commonality from '@/commonality/header_sidebar.vue';
export default {
  name: 'ArticleCreate',
  components: {
    commonality,
  },
};
</script>
<style lang="less">
.articleCreate-section{
  padding-top: 10px;
  padding-left: 30px;
  text-align: left;
  .articleCreate-title-input{
    margin-bottom: 20px;
    .articleCreate-input-title{
      display: inline-block;
    }
    .articleCreate-input-desc{
      display: inline-block;
      width: 300px;
      margin-left: 10px;
    }
  }
  .articleCreate-class-input{
    margin-bottom: 20px;
    .articleCreate-input-title{
      display: inline-block;
      margin-right: 10px;
      .articleCreate-input-desc{
        display: inline-block;
        width: 300px;
      }
    }
  }
  .articleCreate-content-input{
    margin-bottom: 20px;
    width: 800px;
    .articleCreate-input-title{
      display: inline-block;
      margin-right: 10px;
      vertical-align: top;
      .articleCreate-input-desc{
        display: inline-block;
        max-width: 600px;
        height: 300px;
      }
    }
  }
  .articleCreate-save{
    display: block;
    margin:20px 40px;
  }
}
</style>
