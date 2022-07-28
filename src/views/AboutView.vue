<template>
  <div class="content-wrapper">

          <!-- Content Header (Page header) -->
          <div class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1 class="m-0">About</h1>
                </div>
                <!-- /.col -->
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">About</li>
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
                <div class="">
                  <h2>Code : {{ code }}</h2>
                  <h3>Link : <a :href="urlExternal" target="_blank">Go Website</a></h3>
                  <img :src="imgUrl.url" :alt="imgUrl.alt" v-if="isShow">

                  <button  @click="click" class="btn btn-danger">คลิ๊ก</button>
                </div>
              </div>
            </div>
            <!-- /.container-fluid -->
          </section>
          <!-- /.content -->

  </div>
</template>
<script>
import { ref,reactive,onMounted, onUnmounted } from 'vue';

export default {
  name:"About",
  setup(){
    console.log("started!");
    const code = ref("6501034");
    const urlExternal = ref("https://www.google.co.th");
    const imgUrl = reactive({
      url:"https://via.placeholder.com/100",
      alt:"MyImage"
    });
    const isShow = ref(false);

    onMounted(()=>{
      alert("aboutPage");
    });
    onUnmounted(()=>{
      alert("bye aboutPage");
    })

    const click =()=>{
     // alert("vue3");

     isShow.value = !isShow.value;
    }

    return {code,urlExternal,imgUrl,isShow,click};
  },
}
</script>
