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
                        <router-link class="btn btn-info btn-sm mr-2" :to="{name:'Categoryedit',params:{id:item.id}}">
                          <i class="fas fa-pencil-alt"></i> Edit
                        </router-link>
                        <a class="btn btn-danger btn-sm" @click.prevent="onDeleteById(item.id)">
                          <i class="fas fa-trash"> </i>
                          Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div v-if="category.length" class="mt-3">
                    <v-pagination
                      v-model="page"
                      :pages="totalPage"
                      :range-size="10"
                      active-color="#DCEDFF"
                      @update:modelValue="getData"
                    />
                </div>
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
import { BASE_API_URL } from "@/constants";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  name: "Category",
  components: {
    VPagination
  },
  setup() {
    const category = ref([]);
    const alertMassage = ref("");
    const loading = ref(false);
    // const router = useRouter();
    const page = ref(1);
    const totalPage = ref(0);


    const getData = async (page) => {
      try {
        loading.value = true;
        const response = await axios.get(`${BASE_API_URL}/api/category?page=${page}&page_size=10`);
        category.value = response.data.data;
        
        totalPage.value = response.data.last_page;
        //console.log(response.data);
      } catch (error) {
        //console.log(error);
        alertMassage.value = error.response.data.message;

        //console.log(errorMessage);
        //errorMessage.value ="เกิดข้อผิดพลาด";

        Swal.fire({
          title: alertMassage.value,
          icon: "warning",
          type: "warning",
        });
      } finally{
        loading.value = false;
      }
    };

    onMounted(() => {
      getData(page.value);
    });


    const onDeleteById = async (id) => {
      try {
        await Swal.fire({
          title: 'ยืนยันการลบข้อมูล',
          text: "คุณต้องการลบข้อมูลนี้หรือไม่?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ยืนยันการลบ',
          cancelButtonText: 'ยกเลิก'
        }).then((result) => {
          if (result.isConfirmed) {
            
            axios.delete(`${BASE_API_URL}/api/category/${id}`);
        
            Swal.fire(
              'สำเร็จ!',
              'ข้อมูลของคุณถูกลบเรียบร้อย..',
              'success',
            );
           
          }
         
        })



      } catch (error) {
        
        alertMassage.value = error.response.data.message;

        Swal.fire({
          title: alertMassage.value,
          icon: "warning",
          type: "warning",
        });
        
      }
    }

    return { category , loading ,onDeleteById ,page, totalPage,getData};
    
   

  },
};
</script>

<style></style>
