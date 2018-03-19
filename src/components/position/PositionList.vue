<template>
	<div class="box">
  <div class="box-header with-border">
    <h3 class="box-title">
      <a href="#/add"><button class='btn btn-primary'>添加 <span class="fa fa-plus"></span></button></a>
    </h3>
    <div class="box-tools">
      <div class="input-group input-group-sm" style="width: 150px;">
       <!--  <input type="text" name="table_search" id="search" class="form-control pull-right" placeholder="输入职位名称">

        <div class="input-group-btn">
          <button type="submit" id="searchSubmit" class="btn btn-default"><i class="fa fa-search"></i></button>
        </div> -->
      </div>
    </div>
  </div>
  <!-- /.box-header -->
  <div class="box-body">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th style="width: 10px">#</th>
          <th style="width: 100px">商品图片</th>
          <th style="width: 10%;">商品名称</th>
          <th style="width: 18%;">商品介绍</th>
          <th style="width: 5%;">价格</th>
          <th style="width: 8%;">评分</th>
          <th style="width: 8%;">距离</th>
          <th style="width: 10%;">送达时间</th>
          <th style="width: 10%;">创建时间</th>
          <th style="width: 180px">操作</th>
        </tr>
      </thead>
      <tbody v-if="data">
        <tr v-for='(v, i) in data'>
          <td>{{i+1}}.</td>
            <td><img :src="`http://10.9.163.51:3000/uploads/${v.itemPhoto}`" style="width: 50px; height: 50px;" alt=""></td>
            <td>{{v.itemName}}</td>
            <td>{{v.itemIntroduce}}</td>
            <td>{{v.itemPrice}}</td>
            <td>{{v.itemEvaluate}}</td>
            <td>{{v.itemDistance}}</td>
            <td>{{v.serviceTime}}</td>
            <td>{{v.createTime}}</td>
            <td>
              <a :href="`#/edit/${v._id}`"><button class="btn btn-info">编辑 <span class="fa fa-edit"></span></button></a>
              <button class="btn btn-danger" :id="v._id" @click="removeItem">删除 <span class="fa fa-remove"></span></button>
            </td>
          </tr>
          <tr v-if="data.length == 0"><td colspan="7">没有找到符合条件的文档。</td></tr>
      </tbody>
    </table>
  </div>
  <!-- /.box-body -->
  
  <pagination-component 
    :pageno="pageno" 
    :pagecount="pagecount" 
    :pagesize="pagesize">
  </pagination-component>
</div>
<!-- /.box -->

</template>

<script>
import axios from 'axios'
import PaginationComponent from '../layout/PaginationComponent'

export default {
  props: ['pageno'],
  data: () => {
    return {
      data: [],
      pagecount: 0,
      pagesize: 0
    }
  },
  beforeCreate() {
    this.$store.commit('setNav', {
      title: '商品管理',
      subtitle: '商品列表',
      navLevel1: '商品管理',
      navLevel2: '列表',
      url: '#/position/0'
    })
  },
  mounted(){
    this.renderPositionList()
  },
  components:{
    PaginationComponent
  },
  updated(){

  },
  methods: {
    renderPositionList() {
      let pageno = parseInt( this.pageno || 0 , 10)
      axios({
        url: '/api/items/list/' + pageno
      })
        .then((result) => {
          let data = result.data.data
          if (result.data.ret) {
            const {pagesize, total} = data
            const pagecount = Math.ceil( total / pagesize )
            if (pageno < pagecount && pageno >= 0) {

              this.data = data.result
              this.pagecount = pagecount
              this.pagesize = pagesize

              
            } else {
              this.$router.push('/position/' + ( pageno - 1 ))
            }
          }
      })
    },
    removeItem(event){
      // console.log(event.currentTarget.id)
      let dd = event.currentTarget.id
      return axios({
        url: `/api/items/remove/` + dd
      })
        .then((result) => {
          // location.reload()
          // if(result){
            console.log(result.data.data)
            this.renderPositionList()
          // }
        })
    }
  },
  watch: {
    'pageno' : function(){
      this.renderPositionList()
    }
  }
}
</script>
