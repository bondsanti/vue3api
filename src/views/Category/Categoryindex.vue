<template>
  <div class="content-wrapper">
    <div class="preloader flex-column justify-content-center align-items-center" v-if="loading">
      <img class="animation__shake" src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
    </div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Category</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Category</li>
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
                <h3 class="card-title"><router-link class="btn btn-primary btn-sm mr-2" to="/category/insert"><i class="fas fa-add"></i> Create</router-link></h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th class="text-center">Name</th>
                      <th class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in category" :key="item.id">
                      <td class="">{{ item.name }}</td>
                      <td class="text-center">
                        <a class="btn btn-info btn-sm mr-2" href="#">
                          <i class="fas fa-pencil-alt"></i>Edit
                        </a>
                        <a class="btn btn-danger btn-sm" href="#">
                          <i class="fas fa-trash"> </i>
                          Delete
                        </a>
                      </td>
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
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  name: "Category",
  setup() {
    const category = ref([]);
    const errorMessage = ref("");
    const loading = ref(false);


    const getData = async () => {
      try {
        loading.value = true;
        const response = await axios.get(
          "https://api.codingthailand.com/api/category"
        );
        category.value = response.data;
        
        //console.log(response.data);
      } catch (error) {
        //console.log(error);
        errorMessage.value = error.response.data.message;

        //console.log(errorMessage);
        //errorMessage.value ="เกิดข้อผิดพลาด";

        Swal.fire({
          title: errorMessage.value,
          icon: "warning",
          type: "warning",
        });
      } finally{
        loading.value = false;
      }
    };
    onMounted(() => {
      getData();
    });
    return { category , loading};
  },
};
</script>

<style></style>
