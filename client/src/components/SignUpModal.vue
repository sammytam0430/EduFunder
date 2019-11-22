<template>
  <b-modal id="signup" v-model="show" title="Sign Up" @hide="close">
    <b-alert
      v-model="showAlert"
      :variant="response.success ? 'success' : 'danger'"
    >{{ response.message }}</b-alert>
    <b-form @submit.prevent="createAccount">
      <b-container>
        <b-form-row>
          <b-col>
            <div class="user-type">
              <h5>Are you a student or a donor?</h5>
              <div class="user-type-btn">
                <b-button :variant="b1" v-on:click="student" id="studentbtn">Student</b-button>
                <b-button :variant="b2" v-on:click="donor" id="donorbtn">Donor</b-button>
            </div>
            </div>
          </b-col>
        </b-form-row>
      </b-container>
      <b-container class="px-0">
        <b-form-row>
          <b-col>
            <b-form-group id="fname-group" label="First Name" label-for="fname">
              <b-form-input id="fname" v-model="signup.fname" type="text" required></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="lname-group" label="Last Name" label-for="lname">
              <b-form-input id="lname" v-model="signup.lname" type="text" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
      </b-container>
      <b-form-group id="email-group" label="Email" label-for="email">
        <b-form-input
          id="email"
          v-model="signup.email"
          type="email"
          pattern="\w+@my\.bcit\.ca"
          required
          placeholder="example@my.bcit.ca"
        ></b-form-input>
        
      </b-form-group>
      <!-- <b-form-group
        id="prefEmail-group"
        label="Preferred Email"
        label-for="prefEmail"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="prefEmail"
          v-model="signup.prefEmail"
          type="email"
          placeholder="example@gmail.com"
        ></b-form-input>
      </b-form-group> -->
      <b-form-group id="password-group" label="Password" label-for="password">
        <b-form-input id="password" v-model="signup.password" type="password" required></b-form-input>
      </b-form-group>
      
      <b-button class="w-100 mt-3" type="submit" variant="primary">Sign Up</b-button>
    </b-form>
    <template slot="modal-footer">
      <span class="mr-auto">
        Already have an account?
        <router-link :to="{name: 'LogInModal'}">Log in</router-link>
      </span>
    </template>
  </b-modal>
</template>

<script>
// import necessary components and services
import UsersService from "@/services/UsersService";

export default {
  name: "SignUpModal",
  data() {
    return {
      b1: "outline-dark",
      b2: "outline-dark",
      response: {
        success: false,
        message: {}
      },
      signup: {
        fname: "",
        lname: "",
        email: "",
        prefEmail: "",
        password: ""
      },
      showAlert: false,
      show: this.$route.meta.showSignUp
    };
  },
  watch: {
    "$route.meta"({ showSignUp }) {
      this.show = showSignUp;
    }
  },
  methods: {
    // create user in db
    async createAccount() {
      if (this.agreed) {
        const response = await UsersService.createUser(this.signup);
        this.response = response.data;
        this.showAlert = true;
      }
    },
    student: function(){

      this.b1 = "dark";
      this.b2 = "outline-dark";
      
    },
    donor: function(){
      
      this.b2 = "dark";
      this.b1 = "outline-dark";
    },
    // event handler on modal close
    close() {
      if (this.$route.path !== "/login") {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

.user-type-btn{
  margin-left: 26%;
}

.user-type-btn button{
  margin: 4%;
}

.user-type h5{
   text-align:center;
   font-size: 16px;
   font-weight: 400;
   line-height: 1.8em;
   color: black;
}
</style>