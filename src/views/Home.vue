<template>
  <div class="dark layui-layout-body content-body all-index-page" >

      <header id="header" class="header">
          <h1><mark>Kantatsu</mark>&nbsp;&nbsp;数据监控系统</h1>
          <a href="/Admin/Login" class="login-link">登录管理系统&nbsp;<i class="iconfont">&#xe9e2;</i></a>
      </header>
      <main>
          <article class="cards-box">
              <div class="index-col-10">
                  <router-link class="card" to="/Dumo">
                      <div class="card-header">
                          <span class="halo"></span>
                          <h3><i class="iconfont" style="font-size:28px;">镀膜</i></h3>
                      </div>
                      <div class="card-body">
                          <span>镀膜机</span>
                      </div>
                  </router-link>
              </div>
              <div class="index-col-10">
                  <router-link class="card" to="/other">
                      <div class="card-header">
                          <span class="halo"></span>
                          <h3>其他</h3>
                      </div>
                      <div class="card-body">
                          <span>其他设备截图</span>
                      </div>
                  </router-link>
              </div>
              <div class="index-col-10">
                  <router-link class="card" to="/other2">
                      <div class="card-header">
                          <span class="halo"></span>
                          <h3><i class="iconfont" style="font-size:28px;">静态</i></h3>
                      </div>
                      <div class="card-body">
                          <span>静态1</span>
                      </div>
                  </router-link>
              </div>
          </article> 
      </main>
  </div>
</template>
<script>

  export default {
      name: 'home',
      data:function(){
          return {
          }
      },
      methods:{
          
          
      },
      mounted () {
      
      },
      created:function(){
          
      }
  }
</script>
