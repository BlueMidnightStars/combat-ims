<template>
  <commonality>
    <div class="user-add-container">
      <a href="javascript:;" class="user-add-title">返回文章列表</a>
    </div>
    <div class="ArticleEdit-section">
      <div class="ArticleEdit-title-input">
        <p class="ArticleEdit-input-title">标题:</p>
        <a-input class="ArticleEdit-input-desc" placeholder="Basic usage"/>
      </div>
      <div class="ArticleEdit-class-input">
        <p class="ArticleEdit-input-title">分类:</p>
        <a-select class="ArticleEdit-input-desc" defaultValue="lucy" style="width: 120px" @change="handleChange">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
      </div>
      <div class="ArticleEdit-content-input">
        <p class="ArticleEdit-input-title">内容:</p>
        <a-textarea style="resize:none; width: 600px; height: 300px;" class="ArticleEdit-input-desc" placeholder="Basic usage" :rows="4" autosize="true"/>
      </div>
      <div class="ArticleEdit-save">
        <a-button type="primary">编辑</a-button>
      </div>
    </div>
  </commonality>
</template>

<script>
import commonality from '@/commonality/header_sidebar';


export default {
  name: 'ArticleEdit',
  components: {
    commonality
  },
};
</script>
<style lang="less">
.ArticleEdit-section{
  padding-top: 10px;
  padding-left: 30px;
  text-align: left;
  .ArticleEdit-title-input{
    margin-bottom: 20px;
    .ArticleEdit-input-title{
      display: inline-block;
    }
    .ArticleEdit-input-desc{
      display: inline-block;
      width: 300px;
      margin-left: 10px;
    }
  }
  .ArticleEdit-class-input{
    margin-bottom: 20px;

    .ArticleEdit-input-title{
      display: inline-block;
      margin-right: 10px;
      .ArticleEdit-input-desc{
        display: inline-block;
        width: 300px;
        
      }
    }
  }
  .ArticleEdit-content-input{
    margin-bottom: 20px;
    width: 800px;
    .ArticleEdit-input-title{
      display: inline-block;
      margin-right: 10px;
      vertical-align: top;
      .ArticleEdit-input-desc{
        display: inline-block;
        max-width: 600px;
        height: 300px;
      }
    }
  }
  .ArticleEdit-save{
    display: block;
    margin:20px 40px;
  }
  
}
</style>