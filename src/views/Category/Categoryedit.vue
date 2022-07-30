<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Edit Category</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
              <li class="breadcrumb-item"><router-link to="/category">Category</router-link></li>
              <li class="breadcrumb-item active">Edit Category</li>
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
            <div class="card card-danger">
              <div class="card-header">
                <h3 class="card-title">Form</h3>
              </div>
              <!-- /.card-header -->
              <form @submit.prevent="onSubmit">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Edit Category Name</label>
                    <input v-model="name" type="text" class="form-control text-danger" id="name">
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary btn-sm mr-2"><i class="fas fa-save"></i> Update</button>
                  <button type="reset" class="btn btn-danger btn-sm "><i class="fas fa-reload"></i> Reset</button>
                </div>
              <!-- /.card-body -->
              </form>
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
import { useRouter,useRoute } from 'vue-router';
import { BASE_API_URL } from '@/constants';


export default {
  name: "Categoryedit",

  setup(){
    const router = useRouter();
    const route = useRoute();
    const name = ref("");
    const alertMassage = ref("");
    const id = ref(0);
   
   onMounted(() =>{
      id.value = route.params.id;
      //alert(id.value)
      getDataById(id.value);
    })

    const getDataById = async (id) => {
      try {
          const response =  await axios.get(`${BASE_API_URL}/api/category/${id}`);
          name.value = response.data.name

      } catch (error) {
        alertMassage.value = error.response.data.message;

        //console.log(errorMessage);
        //errorMessage.value ="เกิดข้อผิดพลาด";

        Swal.fire({
          title: alertMassage.value,
          icon: "warning",
          type: "warning",
        });
      }
    }

    const onSubmit = async () => {
      try {
        const response =  await axios.put(`${BASE_API_URL}/api/category`,{
          id: id.value,
          name: name.value
        });

        alertMassage.value = response.data.message;     

        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: alertMassage.value ,
          showConfirmButton: false,
          timer: 1500
        });

        router.replace("/category");

        

      } catch (error) {

          Swal.fire({
          position: 'center',
          icon: 'error',
          title: "ไม่สามารถบันทึกข้อมูลได้",
          showConfirmButton: false,
          timer: 1500
        });
        
      }
     

   }
    
    return { name ,onSubmit}
  }
}
</script>

<style></style>
