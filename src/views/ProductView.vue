<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Product</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Product</li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">


            <div class="card">
              <div class="card-header">
                <h3 class="card-title">DataTable with default features</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Detail</th>
                      <th>Date</th>
                      <th>Views</th>
                      <th>Picture</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in products" :key="item.id">
                      <td>{{item.title}}</td>
                      <td>{{item.detail}}</td>
                      <td>{{item.date}}</td>
                      <td>{{item.view}}</td>
                      <td><img :src="item.picture" width="80"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import { ref,onMounted } from 'vue';
import axios from 'axios';
export default {
  name: "Product",
  setup() {
    const products = ref([]);

    const getData = async () => {
      const response = await axios.get("https://api.codingthailand.com/api/course");
      products.value =  response.data.data;
      //console.log(response.data.data);
    }
    onMounted(() => {
      getData();
    });
    return {products}
  },
};
</script>

<style></style>
