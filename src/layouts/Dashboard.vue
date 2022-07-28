<template>
  <div class="wrapper hold-transition sidebar-mini layout-fixed">
    <Navbar />
    <div id="">
      <Slidebar />
      <div id="">
        <main>
          <router-view />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Slidebar from "../components/Slidebar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Dashboard",
  components: {
    Navbar,
    Slidebar,
    Footer,
  },
};
</script>

<style></style>
