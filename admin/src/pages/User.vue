<template>
  <commonality>
    <div class="user-add-container">
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
          <p class="user-add-input-name-title">姓名：</p>
          <a-input v-model="name" placeholder="请输入姓名"/>
        </div>
        <div class="user-add-input-phone">
          <p class="user-add-input-phone-title">手机号码：</p>
          <a-input v-model="phone" placeholder="请输入手机号码"/>
        </div>
        <div class="user-add-input-code">
          <p class="user-add-input-code-title">密码：</p>
          <a-input v-model="password" placeholder="请输入密码"/>
        </div>
      </a-modal>
    </div>
    <a-table :columns="columns" :dataSource="userData" bordered style="width:'100%'">
      <template v-for="key in ['name', 'phone', 'password']" slot-scope="text">
        <div :key="key">
          <template>{{text}}</template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class='editable-row-operations'>
          <span>
            <a @click="() => showModal(2,record.id,record.name,record.phone,record.password)">编辑</a>|
            <a @click="() => deleteUser(record.id)">删除</a>
          </span>
        </div>
      </template>
    </a-table>
  </commonality>
</template>
<script>
import commonality from '@/commonality/header_sidebar.vue';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  width: '25%',
  padding: '0',
  scopedSlots: { customRender: 'name' },
}, {
  title: '手机号码',
  dataIndex: 'phone',
  width: '15%',
  scopedSlots: { customRender: 'phone' },
}, {
  title: '密码',
  dataIndex: 'password',
  width: '40%',
  scopedSlots: { customRender: 'password' },
}, {
  title: '编辑',
  dataIndex: 'operation',
  scopedSlots: { customRender: 'operation' },
}];

import user from '@/models/user';
export default {
  name: 'User',
  components: {
    commonality,
  },
  data() {
    return {
      columns,
      loading: false,
      visible: false,
      userData:[],
      shu:'',
      theme:'',
      name:'',
      phone:'',
      password:'',
      id:'',
    };
  },
  created:function(){
    user.get().then(res =>{
      let list = res.data.data;
      list.forEach((item, index) => {
        item.key = index
      })
      this.userData = list;
    }).catch(eer => {
    })
  },
  methods: {
    showModal(shu,id,name,phone,password) {
      if(shu == 1){
        this.shu = 1;
        this.theme = '添加用户';
        this.name = '';
        this.phone = '';
        this.password = '';
      }else if(shu == 2){
        this.shu = 2;
        this.theme = '编辑用户';
        this.name = name;
        this.phone = phone;
        this.password = password;
        this.id = id;
      }
      this.visible = true;
    },
    handleOk() {
      let name = this.name;
      let phone = this.phone;
      let password = this.password;
      let id = this.id;
      if(this.shu == 1){
        user.post({name:name,phone:phone,password:password}).then(res => {
          if(res.data.code == 200){
          this.$message.info('添加成功');
          }
        }).catch( err => {
          this.$message.info('添加失败');

        })
      }else if (this.shu == 2){
        user.put(id,{name:name,phone:phone,password:password}).then(res => {
          if(res.data.code == 200){
            this.$message.info('编辑成功');
          }
        }).catch( err => {
            this.$message.info('编辑失败');

        })
      }
      user.get().then(res =>{
        let list = res.data.data;
        list.forEach((item, index) => {
          item.key = index
        })
        this.userData = list;
      })
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 500);
    },
    handleCancel() {
      this.visible = false;
      this.shu = '';
      this.theme = '';
      this.name = '';
      this.phone = '';
      this.password = '';
    },
    deleteUser(id){
      user.delete(id).then(res => {
        if(res.data.code == 200){
          this.$message.info('删除成功');
        }
      }).catch( err => {
          this.$message.info('删除失败');
      })
      user.get().then(res =>{
        let list = res.data.data;
        list.forEach((item, index) => {
          item.key = index
        })
        this.userData = list;
      })
    },
  },
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
