<template>
  <commonality>
    <div class="user-add-container">
      <a href="javascript:;" class="user-add-title">返回文章列表</a>
    </div>
    <div class="articleEdit-section">
      <div class="articleEdit-title-input">
        <p class="articleEdit-input-title">标题:</p>
        <a-input class="articleEdit-input-desc" placeholder="Basic usage"/>
      </div>
      <div class="articleEdit-class-input">
        <p class="articleEdit-input-title">分类:</p>
        <a-select class="articleEdit-input-desc" defaultValue="lucy" style="width: 120px" @change="handleChange">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
      </div>
      <div class="articleEdit-content-input">
        <p class="articleEdit-input-title">内容:</p>
        <a-textarea style="resize:none; width: 600px; height: 300px;" class="articleEdit-input-desc" placeholder="Basic usage" :rows="4" autosize="true"/>
      </div>
      <div class="articleEdit-save">
        <a-button type="primary">编辑</a-button>
      </div>
    </div>
  </commonality>
</template>
<script>
import commonality from '@/commonality/header_sidebar.vue';
export default {
  name: 'ArticleEdit',
  components: {
    commonality,
  },
};
</script>
<style lang="less">
.articleEdit-section{
  padding-top: 10px;
  padding-left: 30px;
  text-align: left;
  .articleEdit-title-input{
    margin-bottom: 20px;
    .articleEdit-input-title{
      display: inline-block;
    }
    .articleEdit-input-desc{
      display: inline-block;
      width: 300px;
      margin-left: 10px;
    }
  }
  .articleEdit-class-input{
    margin-bottom: 20px;
    .articleEdit-input-title{
      display: inline-block;
      margin-right: 10px;
      .articleEdit-input-desc{
        display: inline-block;
        width: 300px;
      }
    }
  }
  .articleEdit-content-input{
    margin-bottom: 20px;
    width: 800px;
    .articleEdit-input-title{
      display: inline-block;
      margin-right: 10px;
      vertical-align: top;
      .articleEdit-input-desc{
        display: inline-block;
        max-width: 600px;
        height: 300px;
      }
    }
  }
  .articleEdit-save{
    display: block;
    margin:20px 40px;
  }
}

</style>
