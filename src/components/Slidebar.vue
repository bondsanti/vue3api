<template>
    <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

     
      <!-- Sidebar Menu -->
      <nav class="mt-2">
         
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-header">เมนูหลัก</li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="nav-icon fas fa-dashboard"></i>
              <p>
                Dashbord
                <span class="right badge badge-danger">New</span>
              </p>
            </router-link>
          </li>

          <li class="nav-header">จัดการระบบ </li>
          <li class="nav-item">
            <router-link to="/product" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>Products</p>
            </router-link>
          </li>
           <li class="nav-item">
            <router-link to="/category" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>Category</p>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="https://adminlte.io/docs/3.1/" class="nav-link">
              <i class="nav-icon fas fa-file"></i>
              <p>Documentation</p>
            </a>
          </li>

          <li class="nav-header">Howto</li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="onLogout">
              <i class="nav-icon far fa-circle text-danger"></i>
              <p class="text">ออกจากระบบ</p>
            </a>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'about'}" class="nav-link">
              <i class="nav-icon far fa-circle text-info"></i>
              <p>เกี่ยวกับเรา</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
name: "Sildbar",

setup(){

  const router = useRouter();

  const onLogout = async() =>{
    localStorage.removeItem("token");
    router.replace("/login");
  }
  return {onLogout}
}
}
</script>

<style>

</style>