<template>
  <div id="app">
    <Header />
    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../../client/components/Header";
export default {
  name: "App",
  components: { Header },
};
</script>
