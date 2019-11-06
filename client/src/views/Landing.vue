<template>
  <div class="wrapper">
  <div class="content1">
    <b-container class="bv-example">
      <b-row>
        <b-col lg="8" cols="12" md="8">
          <div id="content1A">
            <div>
              <h1 class="content1Text" id="content-text-head">
                Searching for scholarships? We can help
              </h1>
              <h5 class="content1Text" id="content-text-subhead">
                Get help paying for your education
              </h5>
            <div id="Sign-Up">
              <SignUpBtn value="Hello"/>
            </div>
            </div>
          </div>
        </b-col>
        <b-col lg="2" cols="12" md="2" >
          <div class="content1Img">
            <img src="../assets/educationFund.jpg">
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="bar" style="background-color:#f9f9f9;margin-top:13%">
      <div class="logos" style="padding-left:30%;padding-top:1%;">
      <a href="https://www.ubc.ca"><img src="../assets/ubc-logo.png" style="padding-right:5%;opacity:0.2;"></a>
      <a href="https://www.bcit.ca"><img src="../assets/bcit-logo.png" style="padding-right:5%; opacity:0.2;"></a>
      <a href="https://www.queensu.ca"><img src="../assets/queen-logo.png" style="opacity:0.2;"></a>
      </div>
    </div>
    <SignUpModal/>
    <LogInModal/>
  </div>
  <div class="content2">
    <b-container fluid>
      <b-row class="justify-content-md-center">
        <b-col lg="6" cols="4" md="6">
            <div id="content-2-Img">
              <img src="../assets/content2A.png">
            </div>
        </b-col>
        <b-col lg="4" cols="2" md="2">
          <div id="content2B">
            <div id="content-2-Text">
              <div class="element-divider">
                <span class="element-dividier-separator-purple"></span>
                <h3>STUDENTS ARE THE FUTURUE</h3>
                <h5>Today's young bright minds are THE most valuable resources on our planet. We all win the future when the future is bright!</h5>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="content3">
      <b-container>
        <b-row>
          <b-col lg="7">
            <div id="content-3-Text">
            <span class="element-dividier-separator-green"></span>
            <h3>START SMART</h3>
            <h5><span id="start-Campaign">START A CAMPAGIN</span>- It's free!</h5>
            <ul>
              <li>Share YOUR story</li>
              <li>Get Sponsored</li>
              <li>Work hard and graduate!</li>
            </ul>
            </div>
          </b-col>
          <b-col lg="4">
            <img src="../assets/content3A.png">
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="content4">
      <b-container>
        <row class="text-center">
          <b-col lg="16">
            <div id="content-4-heading">
            Education is the GIFT of a lived life.
            </div>
          </b-col>
        </row>
        <row class="text-center">
          <b-col lg="16">
            <b-button pill variant="primary" size="lg" style="margin-top:2%">Donate Today</b-button>
          </b-col>
        </row>
        <b-row>
          <b-col lg="6" style="margin-top:4%;margin-bottom:4%">
            <img src="../assets/content4a.png">
          </b-col>
          <b-col lg="6" style="margin-top:4%;margin-bottom:4%">
            <div class="content-4-subtext">
            "In just a few minutes after launching my campaign I saw a $50 donation pop up from my neighbour. I had no idea people cared so much about my education.
            </div>
            <div class="student-testimony">
            <img style="padding-left:45%;padding-top:4%" src="../assets/circle-cropped.png">
            <div class="student-name">JULIA CHONG</div>
            <div class="student-title">Student</div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="content-6">
      <b-container>
        <row class="text-center">
          <b-col >
            <div class="content-6-heading">
            EduFund YOUR education for a smarter and brighter future.
            </div>
          </b-col>
        </row>
        <b-row>
          <b-col>
           <div style="padding-bottom:6%">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/watch?v=IZUKtCY4Eew?rel=0"
              allowfullscreen
            ></b-embed>
          </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="content5">
      <b-container>
        <b-row>
          <b-col lg="7">
            <div id="user-type-btn">
            <h2>Create Account</h2>
            <h5>Are you a student or a donar?</h5>
            <b-button variant="outline-dark" v-on:click="student" id="studentbtn">Student</b-button>
            <b-button variant="outline-dark" v-on:click="donar" id="donarbtn">Donar</b-button>
            </div>
            <template>
              <b-container fluid>
                <b-row class="my-1" v-for="type in types" :key="type">
                  <b-col sm="3" md="3">
                    <label :for="`type-${type}`"> {{ type }}:</label>
                  </b-col>
                  <b-col sm="6">
                    <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
                  </b-col>
                </b-row>
              </b-container>
            </template>
            <b-button variant="primary" style="margin-left:35%; margin-top:3%">Sign Up</b-button>
          </b-col>
          <b-col lg="5">
          
          <div class="content-5-text">
            <div class="sub">
              <img src="../assets/sub1.png">
              <h3 style="display:inline">Graduate debt free!</h3>
              <h5>By graduating debt free, you don't have to worry about interest that will pile up!</h5>
            </div>
            <div class="sub">
              <img src="../assets/sub1.png">
              <h3 style="display:inline">Be free of financial worries!</h3>
              <h5>By graduating debt free, you don't have to worry about interest that will pile up!</h5>
            </div>
            <div class="sub">
              <img src="../assets/sub1.png">
              <h3 style="display:inline">Connect with others!</h3>
              <h5>By graduating debt free, you don't have to worry about interest that will pile up!</h5>
            </div>
          </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
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
        types: [
          'First Name',
          'Last Name',
          'Email',
          'Phone Number',
          'School Name',
          'Organization Name'
        ]
      }
    },
  name: "home",
  components: {
    SignUpModal,
    LogInModal,
    SignUpBtn
  },
  methods: {
    student: function(){
      document.getElementById("studentbtn").style.backgroundColor = "rgb(211,211,211)";
      document.getElementById("donarbtn").style.backgroundColor = "white";
      document.getElementsByClassName("col-sm-3")[5].style.display = "none";
      document.getElementsByClassName("col-sm-6")[5].style.display = "none";
      document.getElementsByClassName("col-sm-3")[4].style.display = "";
      document.getElementsByClassName("col-sm-6")[4].style.display = "";
    },
    donar: function(){
      document.getElementById("studentbtn").style.backgroundColor = "white";
      document.getElementById("donarbtn").style.backgroundColor = "rgb(211,211,211)";
      document.getElementsByClassName("col-sm-3")[4].style.display = "none";
      document.getElementsByClassName("col-sm-6")[4].style.display = "none";
      document.getElementsByClassName("col-sm-3")[5].style.display = "";
      document.getElementsByClassName("col-sm-6")[5].style.display = "";
    },
    onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
  .wrapper{
  
  }
  #Sign-Up{
    padding-top:20px;
    padding-left:320px;
  }
  .content1{
    padding-top:6%;
  }
  #content1A{
    padding-top: 2%;
    padding-bottom: 2%;
  }
  .content1Img{

  }
 .content1Text{
   font-family: 'Montserrat', sans-serif;
   text-align: center;
   padding-top: 6%;
   color:black;
 }
 #content-text-head{
   font-size: 36pt;
   font-weight: bold;
 }
 .element-dividier-separator-grey{
    margin-top: 4%;
    border-top-style: solid;
    border-top-width: 100pt;
    border-top-color: #f9f9f9;
    display:inline-block;
    width: 100%;
 }
 .element-dividier-separator-purple{
    border-top-style: solid;
    border-top-width: 5px;
    border-top-color: #8e1284;
    display:inline-block;
    width: 20%;
 }
 .element-dividier-separator-green{
    border-top-style: solid;
    border-top-width: 5px;
    border-top-color: lightgreen;
    display:inline-block;
    width: 20%;
 }
 #content-2-Text{
    padding-top: 2%;
 }
 .content3{
   background-color:#f7f7f7;
   padding-top: 50px;
 }
 #content-3-Text h3{
   font-size:24pt;
   padding-top: 40px;
   padding-bottom: 20px;
   font-family: 'Montserrat', sans-serif;
   font-weight: bold;
 }
 #content-3-Text ul{
   font-family: "Roboto", Sans-serif;
   font-size: 17px;
   color: #7a7a7a;
   font-weight: 300;
   line-height: 1.8em;
 }
 #start-Campaign{
   color:lightgreen;
   font-weight: bold;
 }
 .element-divider h3{
   font-size:24pt;
   padding-top: 20px;
   padding-bottom: 20px;
   font-family: 'Montserrat', sans-serif;
   font-weight: bold;
 }
 .element-divider h5{
   font-size: 17px;
   font-weight: 300;
   line-height: 1.8em;
   color: #7a7a7a;
   font-family: "Roboto", Sans-serif;
 }

 .btn-outline-primary:after{
   background-color:#007bff;
 }
 #user-type-btn{
   padding-left:15%;
   padding-top:7%;
   padding-bottom:5%;
 }
 #user-type-btn h2{
   padding-left:11%;
   font-size:24pt;
   padding-top: 2%;
   padding-bottom: 1%;
   font-family: 'Montserrat', sans-serif;
   font-weight: bold;
 }
 #user-type-btn h5{
   padding-left: 14%;
   font-size: 15px;
   font-weight: 300;
   line-height: 1.8em;
   color: #7a7a7a;
   font-family: "Roboto", Sans-serif;
 }
 #studentbtn{
   margin-left: 15%;
   margin-right: 5%;
   margin-top: 2%;
 }
 #donarbtn{
   margin-top: 2%;
 }
 .col-sm-3{
   margin-top: 1%;
 }
 .col-sm-6{
   margin-top: 1%;
 }
 #sponsorBar{
   background-color:grey;
   display: inline-block;
   border-top-style: solid;
    border-top-width: 5px;
    border-top-color: #8e1284;
 }
 #content-4-heading{
   margin-top: 2%;
   font-family: "Source Sans Pro";
   font-style: normal;
   color: #313538;
   font-size: 42px;
 }
 .content-4-subtext{
    font-family: "Roboto", Sans-serif;
    color: #54595f;
    font-size: 27px;
    font-weight: 300;
    font-style: italic;
 }
 .student-name{
   color: #ff7633;
   font-size: 19px;
   text-transform: uppercase;
   letter-spacing: 1.3px;
   padding-left: 37%;
   padding-top: 1%;
 }
 .student-title{
    color: rgba(0,0,0,0.25);
    font-size: 13px;
    line-height: 1.3em;
    font-family: "Roboto Slab", Sans-serif;
    font-weight: 400;
    padding-top: 1%;
    padding-left: 46%;
 }
 .content-5-text{
   margin-top: 6%;
 }
 .content-5-text h3{

   padding-left:3%;
   font-size:20pt;
   padding-top: 2%;
   padding-bottom: 1%;
   font-family: 'Montserrat', sans-serif;

 }
 .content-5-text h5{
   padding-top: 2%;
   padding-left: 16%;
   font-size: 12pt;
   font-weight: 300;
   line-height: 1.8em;
   color: #7a7a7a;
   font-family: "Roboto", Sans-serif;
 }
 .content-6-heading{
    font-family: "Source Sans Pro";
    color: white;
    font-size: 42px;
    padding-top:6%;
    padding-bottom: 4%;
    margin-left:20%;
    width:60%;
 }
 .content-6{
   background-image:linear-gradient(200deg, #32dc74 0%, #21c4a3 100%);
 }
 .sub{
   margin-top: 12%;
 }
</style>
