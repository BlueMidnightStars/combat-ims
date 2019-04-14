<template>
  <commonality>
    <div class="user-add-container">
      <a href="javascript:;" class="user-add-title">返回文章列表</a>
    </div>
    <div class="ArticleCreate-section">
      <div class="ArticleCreate-title-input">
        <p class="ArticleCreate-input-title">标题:</p>
        <a-input class="ArticleCreate-input-desc" placeholder="Basic usage"/>
      </div>
      <div class="ArticleCreate-class-input">
        <p class="ArticleCreate-input-title">分类:</p>
        <a-select class="ArticleCreate-input-desc" defaultValue="lucy" style="width: 120px" @change="handleChange">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
      </div>
      <div class="ArticleCreate-content-input">
        <p class="ArticleCreate-input-title">内容:</p>
        <a-textarea style="resize:none; width: 600px; height: 300px;" class="ArticleCreate-input-desc" placeholder="Basic usage" :rows="4" autosize="true"/>
      </div>
      <div class="ArticleCreate-save">
        <a-button type="primary">保存</a-button>
      </div>
    </div>
  </commonality>
</template>

<script>
import commonality from '@/commonality/header_sidebar';


export default {
  name: 'ArticleCreate',
  components: {
    commonality
  },
};
</script>
<style lang="less">
.ArticleCreate-section{
  padding-top: 10px;
  padding-left: 30px;
  text-align: left;
  .ArticleCreate-title-input{
    margin-bottom: 20px;
    .ArticleCreate-input-title{
      display: inline-block;
    }
    .ArticleCreate-input-desc{
      display: inline-block;
      width: 300px;
      margin-left: 10px;
    }
  }
  .ArticleCreate-class-input{
    margin-bottom: 20px;

    .ArticleCreate-input-title{
      display: inline-block;
      margin-right: 10px;
      .ArticleCreate-input-desc{
        display: inline-block;
        width: 300px;
        
      }
    }
  }
  .ArticleCreate-content-input{
    margin-bottom: 20px;
    width: 800px;
    .ArticleCreate-input-title{
      display: inline-block;
      margin-right: 10px;
      vertical-align: top;
      .ArticleCreate-input-desc{
        display: inline-block;
        max-width: 600px;
        height: 300px;
      }
    }
  }
  .ArticleCreate-save{
    display: block;
    margin:20px 40px;
  }
  
}
</style>
