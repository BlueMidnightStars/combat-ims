
<template>
  <commonality>
    <div class="user-add-container">
      <a href="javascript:;" class="user-add-title" @click="add">新建文章</a>
    </div>
    <a-table :columns="columns" :dataSource="aritcleData" bordered style="width:'100%'">
      <template v-for="key in ['id','user_id','class','title']" slot-scope="text">
        <div :key="key">
          <template>{{text}}</template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class='editable-row-operations'>
          <span>
            <a @click="() => compile(record.id)">编辑</a>|
            <a @click="() => deleteArticle(record.id)">删除</a>
          </span>
        </div>
      </template>
    </a-table>
  </commonality>
</template>
<script>
import commonality from '@/commonality/header_sidebar.vue';
import article from '@/models/article';
import Classify from '@/models/class';

const columns = [{
  title: 'id',
  dataIndex: 'id',
  width: '10%',
  padding:'0',
  scopedSlots: { customRender: 'id' },
}, {
  title: '用户id',
  dataIndex: 'user_id',
  width: '15%',
  scopedSlots: { customRender: 'user_id' },
},{
  title: '分类名称',
  dataIndex: 'class',
  width: '15%',
  scopedSlots: { customRender: 'class' },
},{
  title: '标题',
  dataIndex: 'title',
  width: '15%',
  scopedSlots: { customRender: 'title' },
},{
  title: '操作',
  dataIndex: 'operation',
  scopedSlots: { customRender: 'operation' },
}];
export default {
  name: 'Aritcle',
  components: {
    commonality,
  },
  data() {
    return {
      columns,
      toekn:'',
      aritcleData:[],
      classData:[],
    }
  },
  created:function(){
    Classify.get().then(res => {
      let list = res.data.data;
      this.classData = list;
    }).then(() => {
      let classData = this.classData;
      article.get().then(res => {
        let list = res.data.data;
        list.forEach((item,index) => {
          item.key = index;
          classData.forEach(data => {
            if(item.class_id == data.id){
              item.class = data.title;
            }
            if(item.class == null){
              item.class = '无';
            }
          })
        })
        this.aritcleData = list;
      });
    })
    this.token = localStorage.getItem('token');
  },
  methods: {
    add(){
      this.$router.push({path: '/admin/article_create'});
    },
    compile(id){
      this.$router.push({path: '/admin/article_edit/' + id});
    },
    deleteArticle(id){
      article.delete(id).then(res => {
        if(res.data.code == 200){
          this.$message.info('删除成功');
          Classify.get().then(res => {
            let list = res.data.data;
            this.classData = list;
          }).then(() => {
            let classData = this.classData;
            article.get().then(res => {
              let list = res.data.data;
              list.forEach((item,index) => {
                item.key = index;
                classData.forEach(data => {
                  if (item.class_id == data.id) {
                    item.class = data.title;
                  }
                  if (item.class == null) {
                    item.class = '无';
                  }
                });
              });
              this.aritcleData = list;
            });
          });
        }
      }).catch((err) => {
        this.$message.info('删除失败');
      });
    },
  },
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
