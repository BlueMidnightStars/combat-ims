<template>
  <commonality>
    <div class="user-add-container">
      <a href="javascript:;" class="user-add-title" @click='backtrack'>返回文章列表</a>
    </div>
    <div class="articleEdit-section">
      <div class="articleEdit-title-input">
        <p class="articleEdit-input-title">标题:</p>
        <a-input class="articleEdit-input-desc" v-model="title" placeholder="请输入标题"/>
      </div>
      <div class="articleEdit-class-input">
        <p class="articleEdit-input-title">分类:</p>
        <a-select class="articleEdit-input-desc" style="width: 120px" v-model="class_id">
          <a-select-option :value="item.id" v-for="item in classData" v-bind:key="item.id">{{item.title}}</a-select-option>
        </a-select>
      </div>
      <div class="articleEdit-content-input">
        <p class="articleEdit-input-title">内容:</p>
        <a-textarea style="resize:none; width: 600px; height: 300px;" class="articleEdit-input-desc" placeholder="请输入内容" v-model="content"/>
      </div>
      <div class="articleEdit-save">
        <a-button type="primary" @click='saveArticle'>编辑</a-button>
      </div>
    </div>
  </commonality>
</template>
<script>
import commonality from '@/commonality/header_sidebar.vue';
import article from '@/models/article';
import Classify from '@/models/class';
export default {
  name: 'ArticleEdit',
  data(){
    return{
      classData:[],
      articleData:[],
      class_id: null,
      title:'',
      content:'',
    }
  },
  components: {
    commonality,
  },
  created:function(){
    let id = this.$route.params.id;
    Classify.get().then(res => {
      this.classData = res.data.data;
    })
    article.getId(id).then(res => {
      this.articleData = res.data.data;
      this.class_id = res.data.data[0].class_id;
      this.title = res.data.data[0].title;
      this.content = res.data.data[0].content;
    })
  },
  methods: {
    backtrack:function(){
      this.$router.push({path: '/admin/aritcle'})
    },
    saveArticle(){
      let id = this.$route.params.id;
      let title = this.title;
      let class_id = this.class_id;
      let content = this.content;
      article.put(id,{
        class_id:class_id,
        title:title,
        content:content,
      }).then(res => {
        if(res.data.code == 200){
            this.$message.info('编辑成功');
          }
        this.$router.push({path: '/admin/aritcle'})
      }).catch(err => {
        this.$message.info('编辑失败');
      })
    }
  }
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
