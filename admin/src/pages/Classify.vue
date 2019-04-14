<template>
  <commonality>
    <div class="user-add-container">
      <a-button type="primary" @click="showModal">
        添加分类
      </a-button>
      <a-modal
        v-model="visible"
        title="添加分类"
        onOk="handleOk"
      >
        <template slot="footer">
          <a-button key="back" @click="handleCancel">Return</a-button>
          <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
            Submit
          </a-button>
        </template>
        <div class="user-add-input-name">
          <p class="user-add-input-name-title">分类：</p>
          <a-input placeholder="请输入分类名称"/>
        </div>
      </a-modal>
    </div>
    <a-table :columns="columns" :dataSource="data" bordered style="width:'100%'">
      <template v-for="col in ['id', 'phone', 'code']" :slot="col" slot-scope="text, record, index">
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0;"
            :value="text"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>{{text}}</template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record, index">
        <div class='editable-row-operations'>
          <span v-if="record.editable">
            <a @click="() => save(record.key)">Save</a>
            <a-popconfirm title='Sure to cancel?' @confirm="() => cancel(record.key)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="() => edit(record.key)">Edit</a>
          </span>
        </div>
      </template>
    </a-table>
  </commonality>
</template>

<script>
import commonality from '@/commonality/header_sidebar';
const columns = [{
  title: 'id',
  dataIndex: 'id',
  width: '25%',
  padding:'0',
  scopedSlots: { customRender: 'id' },
}, {
  title: 'phone',
  dataIndex: 'phone',
  width: '15%',
  scopedSlots: { customRender: 'phone' },
}, {
  title: 'code',
  dataIndex: 'code',
  width: '40%',
  scopedSlots: { customRender: 'code' },
}, {
  title: 'operation',
  dataIndex: 'operation',
  scopedSlots: { customRender: 'operation' },
}]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    id: `Edrward ${i}`,
    phone: 32,
    code: `London Park no. ${i}`,
  })
}

export default {
  name: 'Classify',
  components: {
    commonality
  },
  data () {
    this.cacheData = data.map(item => ({ ...item }))
    return {
      data,
      columns,
      loading: false,
      visible: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel(e) {
      this.visible = false;
    },
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    edit (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    save (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        delete target.editable
        this.data = newData
        this.cacheData = newData.map(item => ({ ...item }))
      }
    },
    cancel (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
        delete target.editable
        this.data = newData
      }
    },
  }
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}

</style>