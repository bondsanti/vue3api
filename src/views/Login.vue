<template>
<div class="login-page">
  <div class="login-box">
    <div class="login-logo">
      <a href=""><b>Admin</b> Login</a>
    </div>

    <div class="card">
      <div class="card-body login-card-body">

        <form @submit.prevent="onSubmit">
          <div class="input-group mb-3">
            <input v-model="email" type="text" class="form-control" placeholder="Email" />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button type="submits" class="btn btn-primary btn-block">
                Sign In
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { BASE_API_URL } from "@/constants";
import  Axios  from 'axios';

export default {
  name: "Login",

  setup(){

    const email = ref("");
    const password = ref("");
    const alertMassage = ref("");
    const router = useRouter();

    const onSubmit = async ()=> {

      try {

        // console.log(email.value);
        // console.log(password.value);
        const response = await Axios.post(`${BASE_API_URL}/api/login`,{
          headers: { 'content-type': 'application/json' },
          email:email.value,
          password:password.value
        })
        console.log(response.data);

           

        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: "เข้าสู่ระบบสำเร็จ",
          showConfirmButton: false,
          timer: 1500
        });

        localStorage.setItem("token",JSON.stringify(response.data));
        router.replace("/");

      } catch (error) {
        alertMassage.value = error.response.data.message;     


          Swal.fire({
          position: 'center',
          icon: 'error',
          title: alertMassage.value,
          showConfirmButton: false,
          timer: 1500
        });
      }

    }

    return {email,password,onSubmit}
  }
};
</script>

<style scoped>

.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
}
</style>
