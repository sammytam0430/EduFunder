<template>
  <div class="home">
    <h1>Welcom</h1>
    <SignUpModal/>
    <LogInModal/>
  </div>
</template>

<script>
// import necessary components and services
import SignUpModal from "@/components/SignUpModal.vue";
import LogInModal from "@/components/LogInModal.vue";

export default {
  name: "home",
  components: {
    SignUpModal,
    LogInModal
  }
};
</script>
