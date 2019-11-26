<template>
  <div class="wrapper">
    <SignUpModal />
    <LogInModal />
    <b-container class="my-5 py-5">
      <b-row align-v="center">
        <b-col cols="12" lg="8" md="6">
          <b-row class="justify-content-center text-center py-3">
            <h1 class="Montserrat font-weight-bold">
              Searching for scholarships? We can help
            </h1>
          </b-row>
          <b-row class="justify-content-center text-center py-3">
            <h5 class="Montserrat">
              Get help paying for your education
            </h5>
          </b-row>
          <b-row class="justify-content-center pt-3 pb-5">
            <SignUpBtn />
          </b-row>
        </b-col>
        <b-col class="text-center" cols="12" lg="4" md="6">
          <img class="w-75" src="../assets/educationFund.jpg">
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row class="py-5 bg-light text-center" align-v="center">
        <b-col :cols=Math.floor(12/schools.length) :key=school.website v-for="school in schools">
          <a :href="school.website">
            <img class="w-50 opacity-25" :src="require(`../assets/${school.image}`)" />
          </a>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="py-4">
      <b-row class="py-5 justify-content-center" align-v="center">
        <b-col cols="12" md="6">
          <img class="w-100" src="../assets/content2A.png">
        </b-col>
        <b-col cols="12" offset-md="1" md="5">
          <span class="element-dividier-separator-purple"></span>
          <h2 class="Montserrat my-4">STUDENTS ARE THE FUTURUE</h2>
          <h5 class="roboto text-secondary">Today's young bright minds are THE most valuable resources on our planet. We
            all win the future
            when the future is bright!</h5>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bg-light py-4" fluid>
      <b-row class="py-3" align-v="center">
        <b-col class="text-center" order-md="2" md="6">
          <img class="w-75 p-sm-5" src="../assets/content3A.png">
        </b-col>
        <b-col order-md="1" offset="1" md="5">
          <span class="element-dividier-separator-green"></span>
          <h2 class="Montserrat my-4">START SMART</h2>
          <h5 class="roboto"><span id="start-Campaign">START A CAMPAGIN</span> - It's free!</h5>
          <ul>
            <li>Share YOUR story</li>
            <li>Get Sponsored</li>
            <li>Work hard and graduate!</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="py-4">
      <b-row class="px-5">
        <h2 class="Source-Sans-Pro text-dark">
          Education is the GIFT of a lived life.
        </h2>
      </b-row>
      <b-row class="py-2 px-5">
        <b-button pill variant="primary" size="md">Donate Today</b-button>
      </b-row>
      <b-row class="py-3 justify-content-center" align-v="center">
        <b-col class="text-center" md="6">
          <img class="w-100 px-5 px-md-0" src="../assets/content4a.png">
        </b-col>
        <b-col class="roboto text-secondary font-weight-bold py-3 px-5" md="6">
          <h4><em>"In just a few minutes after launching my campaign I saw a $50 donation pop up from my neighbour.
              I had no idea people cared so much about my education.</em></h4>
          <div class="text-center">
            <img class="w-25" src="../assets/circle-cropped.png">
            <div class="py-2 text-danger font-weight-bold">JULIA CHONG</div>
            <div class="opacity-25 font-weight-bold roboto text-secondary">Student</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="p-5 green-gradient" fluid>
      <b-row class="justify-content-center text-center">
        <b-col>
          <h1 class="w-75 mx-auto Source-Sans-Pro text-white">EduFund YOUR education for a smarter and brighter future.
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="p-md-5">
          <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/watch?v=IZUKtCY4Eew?rel=0"
            allowfullscreen></b-embed>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="py-4">
      <b-row align-v="center">
        <b-col lg="6">
          <div class="text-center py-4">
            <h1 class="Montserrat">Create Account</h1>
            <h5 class="roboto text-secondary">you a student or a donor?</h5>
            <b-button class="mx-2" :variant="b1" @click="student">Student</b-button>
            <b-button class="mx-2" :variant="b2" @click="donor">Donor</b-button>
          </div>
          <b-container class="justify-content-center text-center">
            <b-row class="py-1" v-for="type in types" :key="type">
              <b-col class="text-left" sm="12" md="4">
                <label :for="`type-${type}`"> {{ type }}:</label>
              </b-col>
              <b-col sm="12" md="8">
                <b-form-input :id="`type-${type}`"></b-form-input>
              </b-col>
            </b-row>
            <b-button class="mt-4" variant="primary">Sign Up</b-button>
          </b-container>
        </b-col>
        <b-col lg="6">
          <div>
            <div class="Montserrat mt-5" :key=benefit v-for="benefit in benefits">
              <img src="../assets/sub1.png">
              <h3 class="d-inline pl-2">{{ benefit }}</h3>
              <p class="ml-4 pl-5 roboto text-secondary">By graduating debt free, you don't have to worry about interest that will
                pile up!</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  // import necessary components and services
  import SignUpModal from "@/components/SignUpModal.vue";
  import LogInModal from "@/components/LogInModal.vue";
  import SignUpBtn from "@/components/SignUpBtn.vue";

  export default {
    data() {
      return {
        b1: "outline-dark",
        b2: "outline-dark",
        types: [
          'First Name',
          'Last Name',
          'Email',
          'Phone Number',
          'School Name',
          'Organization Name'
        ],
        schools: [{
            website: "https://www.ubc.ca",
            image: "ubc-logo.png"
          },
          {
            website: "https://www.bcit.ca",
            image: "bcit-logo.png"
          },
          {
            website: "https://www.queensu.ca",
            image: "queen-logo.png"
          }
        ],
        benefits: ["Graduate debt free!", "Be free of financial worries!", "Connect with others!"]
      }
    },
    name: "home",
    components: {
      SignUpModal,
      LogInModal,
      SignUpBtn
    },
    methods: {
      student() {
        this.b1 = "dark";
        this.b2 = "outline-dark";

      },
      donor() {
        this.b2 = "dark";
        this.b1 = "outline-dark";
      },
    }
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

  .opacity-25 {
    opacity: 0.25;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .Montserrat {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }

  .roboto {
    font-family: "roboto", Sans-serif;
  }

  .Source-Sans-Pro {
    font-family: "Source Sans Pro", Sans-serif;
  }

  .green-gradient {
    background-image: linear-gradient(200deg, #32dc74 0%, #21c4a3 100%);
  }

  .element-dividier-separator-grey {
    margin-top: 4%;
    border-top-style: solid;
    border-top-width: 100pt;
    border-top-color: #f9f9f9;
    display: inline-block;
    width: 100%;
  }

  .element-dividier-separator-purple {
    border-top-style: solid;
    border-top-width: 5px;
    border-top-color: #8e1284;
    display: inline-block;
    width: 20%;
  }

  .element-dividier-separator-green {
    border-top-style: solid;
    border-top-width: 5px;
    border-top-color: lightgreen;
    display: inline-block;
    width: 20%;
  }

  #start-Campaign {
    color: lightgreen;
    font-weight: bold;
  }
</style>