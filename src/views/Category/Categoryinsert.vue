<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Add Category</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
              <li class="breadcrumb-item"><router-link to="/category">Category</router-link></li>
              <li class="breadcrumb-item active">Add Category</li>
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
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Form</h3>
              </div>
              <!-- /.card-header -->
              <form @submit.prevent="onSubmit">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Category Name</label>
                    <input v-model="name" type="text" class="form-control" id="name">
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary btn-sm mr-2"><i class="fas fa-save"></i> Save</button>
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
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


export default {
  name: "Categoryinsert",

  setup(){
    const router = useRouter;
    const name = ref("");
    const alertMassage = ref("");

    const onSubmit = async () => {
      try {
        const response =  await axios.post("https://api.codingthailand.com/api/category",{
          name:name.value
        });

        alertMassage.value = response.data.message;

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: alertMassage.value ,
          showConfirmButton: false,
          timer: 1500
        });

        //router.push("/category");
        router.replace("/category")

      } catch (error) {
        
        
          
          Swal.fire({
          position: 'top-end',
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
