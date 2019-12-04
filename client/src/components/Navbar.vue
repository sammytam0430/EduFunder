<template>
  <b-navbar :class="scrolled ? 'scrolled' : 'normal'" toggleable="md" type="light" variant="light">
    <b-navbar-brand :to="show ? '/dashboard' : '/'">
      <img class="mr-n4" src="../assets/logo.png" alt="K">
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" class="ml-auto"></b-navbar-toggle>
    <b-collapse id="nav-collapse" v-model="expanded" is-nav>
      <b-navbar-nav v-if="show" class="ml-auto">
        <b-nav-item>
          <span>You're logged in as a {{ this.$session.get('userType') }}</span>
        </b-nav-item>
        <b-nav-item v-if="isStudent">
          <router-link :to="{path: '/campaignForm'}">
            <font-awesome-icon id="campaignFrom" size="lg" fixed-width icon="plus"/>
            <span v-if="expanded" class="ml-2">Campaign Form</span>
            <b-tooltip v-else target="campaignFrom" title="Campaign From" placement="bottom"></b-tooltip>
          </router-link>
        </b-nav-item>
        <b-nav-item v-else>
          <router-link :to="{path: '/scholarshipForm'}">
            <font-awesome-icon id="scholarshipForm" size="lg" fixed-width icon="plus"/>
            <span v-if="expanded" class="ml-2">Scholarship Form</span>
            <b-tooltip v-else target="scholarshipForm" title="Scholarship From" placement="bottom"></b-tooltip>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <a href @click.prevent="logout">
            <font-awesome-icon id="logout" size="lg" fixed-width icon="sign-out-alt"/>
            <span v-if="expanded" class="ml-2">Logout</span>
            <b-tooltip v-else target="logout" title="Logout" placement="bottom"></b-tooltip>
          </a>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
        <b-nav-item>
          <SignUpBtn/>
        </b-nav-item>
        <b-nav-item>
          <LogInBtn/>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import SignUpBtn from "@/components/SignUpBtn.vue";
import LogInBtn from "@/components/LogInBtn.vue";

export default {
  name: "navbar",
  components: {
    SignUpBtn,
    LogInBtn
  },
  watch: {
    $route() {
      this.show = this.$session.exists();
      this.userType = this.$session.get('userType')
    }
  },
  data() {
    return {
      show: this.$session.exists(),
      expanded: false,
      scrolled: false,
      userType: this.$session.get('userType'),
    };
  },
  computed: {
    isStudent() {
      return this.userType === "student";
    }
  },
  methods: {
    // event handler for window vertical scroll
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    // set user isActive to false on logout
    async setActive() {
      // await UsersService.updateUser(this.$session.get("currentUser"), {isActive: false});
    },
    // event handler on click on logout
    logout() {
      this.setActive();
      this.$session.destroy();
      this.$router.push("/");
      this.show = this.$session.exists();
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
img {
  height: 50px;
}
.navItem{
  margin-left: 10px;
}
.normal {
  transition: background-color 0.2s linear;
}

.scrolled {
  transition: background-color 0.2s linear;
  background-color: rgba(240, 240, 240, 0.95) !important;
}
</style>
