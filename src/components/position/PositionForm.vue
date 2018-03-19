<template lang="html">
	<!-- Horizontal Form -->
<div class="box box-info">
  <div class="box-header with-border">
    <h3 class="box-title">编辑商品信息</h3>
  </div>
  <!-- /.box-header -->
  <!-- form start -->
  <form class="form-horizontal" method="post" id="Form" enctype="multipart/form-data">
    <div class="box-body">
      <div class="form-group">
        <label for="itemName" class="col-sm-1 control-label">商品名称</label>

        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="itemName" id="itemName" name="itemName" placeholder="请输入商品名称">
        </div>
      </div>
      <div class="form-group">
        <label for="itemPhoto"  class="col-sm-1 control-label">商品图片</label>

        <div class="col-sm-11">
          <img v-if="itemPhoto" :src="`http://10.9.163.51:3000/uploads/${itemPhoto}`" style="width: 100px; height: 100px;" alt="">
          <input type="file"  id="itemPhoto" name="itemPhoto">
        </div>
      </div>
      <div class="form-group">
        <label for="itemIntroduce"  class="col-sm-1 control-label">商品介绍</label>

        <div class="col-sm-11">
          <input type="text" v-model="itemIntroduce" class="form-control" id="itemIntroduce" name="itemIntroduce" placeholder="请输入商品介绍">
        </div>
      </div>
      <div class="form-group">
        <label for="itemPrice" class="col-sm-1 control-label">商品价格</label>

        <div class="col-sm-11">
          <input type="text" v-model="itemPrice" class="form-control" id="itemPrice" name="itemPrice" placeholder="请输入商品价格">
        </div>
      </div>
      <div class="form-group">
        <label for="itemEvaluate" class="col-sm-1 control-label">商品评分</label>

        <div class="col-sm-11">
          <input type="text" v-model="itemEvaluate" class="form-control" id="itemEvaluate" name="itemEvaluate" placeholder="请输入商品评分">
        </div>
      </div>
      <div class="form-group">
        <label for="itemDistance" class="col-sm-1 control-label">距离</label>

        <div class="col-sm-11">
          <input type="text" v-model="itemDistance" class="form-control" id="itemDistance" name="itemDistance" placeholder="请输入距离">
        </div>
      </div>
      <div class="form-group">
        <label for="serviceTime" class="col-sm-1 control-label">预计送达</label>

        <div class="col-sm-11">
          <input type="text" v-model="serviceTime" class="form-control" id="serviceTime" name="serviceTime" placeholder="请输入预计送达">
        </div>
      </div>
    </div>
    <!-- /.box-body -->
    <div class="box-footer">
      <a href="#/position"><button type="button" class="btn btn-default">返回</button></a>
      <button type="button" @click="doSubmit" class="btn btn-info pull-right">提交</button>
    </div>
    <!-- /.box-footer -->
  </form>
</div>
<!-- /.box -->

</template>

<script>
  import axios from 'axios'
  export default {
    data:() => {
      return {
        id:0,
        itemName : "",
        itemPhoto : "",
        itemIntroduce : "", 
        itemPrice : "",
        itemEvaluate : "",
        itemDistance : "",
        serviceTime : ""
      }
    },
    mounted(){
      if (this.$route.name == 'add') {
        this.$store.commit('setNav', {
            title: '商品管理',
            subtitle: '商品添加',
            navLevel1: '商品管理',
            navLevel2: '添加',
            url: '#/position'
        })
      } else {
        this.$store.commit('setNav', {
            title: '商品管理',
            subtitle: '商品编辑',
            navLevel1: '商品管理',
            navLevel2: '编辑',
            url: '#/position'
        })

        $.ajax({
          url:`/api/items/item/${this.$route.params.id}`
        })
          .then((result) => {
            if (result.ret) {
              let data = result.data
              this.id = data._id
              this.itemName = data.itemName
              this.itemPhoto = data.itemPhoto
              this.itemIntroduce = data.itemIntroduce
              this.itemPrice = data.itemPrice
              this.itemEvaluate = data.itemEvaluate
              this.itemDistance = data.itemDistance
              this.serviceTime = data.serviceTime

            }
          })
      }
    },
    methods:{
      doSubmit(){
        let url = this.$route.name === 'add' ? '/api/items/add' : '/api/items/edit/' + this.$route.params.id

        let options = {
          "success":handleSuccess,
           "resetForm" : true,
           "dataType" : "json",
           url
        }
        $("#Form").ajaxSubmit(options);
          

        function handleSuccess(data, status) {
          console.log(1)
          if (data.ret) {
            location.hash = '/position/' + pageno
          }
        }
      }
    }
  }

</script>