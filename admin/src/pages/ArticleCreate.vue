<template>
  <commonality>
    <div class="user-add-container">
      <a href="javascript:;" class="user-add-title" @click="backtrack">返回文章列表</a>
    </div>
    <div class="articleCreate-section">
      <div class="articleCreate-title-input">
        <p class="articleCreate-input-title">标题:</p>
        <a-input class="articleCreate-input-desc" placeholder="请输入标题" v-model="title"/>
      </div>
      <div class="articleCreate-class-input">
        <p class="articleCreate-input-title">分类:</p>
        <a-select class="articleEdit-input-desc" style="width: 120px" v-model="class_id">
          <a-select-option :value="item.id" v-for="item in classData" v-bind:key="item.id">{{item.title}}</a-select-option>
        </a-select>
      </div>
      <div class="articleCreate-content-input">
        <p class="articleCreate-input-title">内容:</p>
        <a-textarea style="resize:none; width: 600px; height: 300px;" class="articleCreate-input-desc" placeholder="请输入内容" v-model="content"/>
      </div>
      <div class="articleCreate-save">
        <a-button type="primary" @click="addArticle">保存</a-button>
      </div>
    </div>
  </commonality>
</template>

<script>
import commonality from '@/components/header_sidebar.vue';
import article from '@/models/article';
import Classify from '@/models/class';
export default {
  name: 'ArticleCreate',
  data(){
    return{
      classData:[],
      class_id:'',
      title:'',
      content:'',
    };
  },
  components: {
    commonality,
  },
  created:function(){
    Classify.get().then(res => {
      this.classData = res.data.data;
    });
  },
  methods: {
    backtrack:function(){
      this.$router.push({path: '/admin/aritcle'});
    },
    addArticle(){
    let class_id = this.class_id;
    let title = this.title;
    let content = this.content;
    if(!class_id || !title || !content){
      this.$message.info('请填写所有内容');
      return
    }
    let token = localStorage.getItem('token');
    article.post({
      title:title,
      class_id:class_id,
      content:content,
      token:token,
    }).then(res => {
      if(res.data.code == 200){
        this.$message.info('添加成功');
      }
      this.$router.push({path: '/admin/aritcle'})
    }).catch(err => {
      this.$message.info('添加失败');
    })
  },
  }
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
