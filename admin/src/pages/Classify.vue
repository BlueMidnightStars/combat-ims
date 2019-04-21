<template>
  <commonality>
    <div class="user-add-container">
      <p class="class-notice" style="coloe:red;">最多添加五个分类</p>
      <a-button type="primary" @click="showModal(1)">
        添加用户
      </a-button>
      <a-modal
        v-model="visible"
        :title="theme"
        onOk="handleOk">
        <template slot="footer">
          <a-button key="back" @click="handleCancel">取消</a-button>
          <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
            保存
          </a-button>
        </template>
        <div class="user-add-input-name">
          <p class="user-add-input-name-title">分类：</p>
          <a-input v-model="title" placeholder="请输入分类名称"/>
        </div>
      </a-modal>
    </div>
    <a-table :columns="columns" :dataSource="classData" bordered style="width:'100%'">
      <template v-for="key in ['id', 'title']" slot-scope="text">
        <div :key="key">
          <template>{{text}}</template>
        </div>
      </template>
      <template slot="operation" slot-scope="text,record">
        <div class='editable-row-operations'>
          <span>
            <a @click="() => showModal(2,record.id,record.title)">编辑</a>|
            <a @click="() => deleteClass(record.id)">删除</a>
          </span>
        </div>
      </template>
    </a-table>
  </commonality>
</template>
<script>
import commonality from '@/components/header_sidebar.vue';
import Classify from '@/models/class';
const columns = [{
  title: 'id',
  dataIndex: 'id',
  width: '25%',
  scopedSlots: { customRender: 'id' },
}, {
  title: 'title',
  dataIndex: 'title',
  width: '15%',
  scopedSlots: { customRender: 'title' },
}, {
  title: 'operation',
  dataIndex: 'operation',
  scopedSlots: { customRender: 'operation' },
}];

export default {
  name: 'Classify',
  components: {
    commonality,
  },
  data() {
    return {
      classData:[],
      columns,
      loading: false,
      visible: false,
      title:"",
      id:"",
      theme:'',
    }
  },
  created:function(){
    Classify.get().then(res => {
      let list = res.data.data;
      list.forEach((item,index) => {
        item.key = index
      })
      this.classData = list;
    })
  },
  methods: {
    showModal(shu,id,title) {
      this.shu = shu;
      if(shu == 1){
        this.theme = '添加分类';
        this.title = '';
        this.id = '';
      }else if(shu == 2){
        this.theme = '编辑分类';
        this.title = title;
        this.id = id;
      };
      this.visible = true;
    },
    handleOk() {
      let shu = this.shu;
      let id = this.id;
      let title = this.title;
      if(shu == 1){
        Classify.post({title:title}).then(res =>{
          if(res.data.code == 200){
            this.$message.info('添加成功');
          }else{
            this.$message.info('添加失败');
          }
        }).catch( err =>{
            this.$message.info('添加失败');
        })
      }else if(shu == 2){
        Classify.put(id,{title:title}).then(res =>{
          if(res.data.code == 200){
            this.$message.info('编辑成功');
          }
        }).catch( err =>{
            this.$message.info('编辑失败');
        })
      }
      Classify.get().then(res => {
        let list = res.data.data;
        list.forEach((item,index) => {
          item.key = index
        })
        this.classData = list;
      })
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 500);
    },
    handleCancel() {
      this.visible = false;
    },

    deleteClass(id){
      Classify.delete(id).then(res =>{
        if(res.data.code == 200){
          this.$message.info('删除成功');
        }
      }).catch( err =>{
          this.$message.info('删除失败');
      })
      Classify.get().then(res => {
        let list = res.data.data;
        list.forEach((item,index) => {
          item.key = index
        })
        this.classData = list;
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
