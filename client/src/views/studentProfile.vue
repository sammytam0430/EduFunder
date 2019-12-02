<template>
  <form-wizard @on-complete="validate4">    
  <h5 id="content-1-title" slot="title">Set up your student profile!</h5>
  <!--Basic Information -->
  
  <div class="content-1">
   <!-- :before-change="()=>validate()"  -->
  <tab-content title="Basic information" :before-change="()=>validate()">
    <b-container fluid >
    <div class="legend">Basic info</div>
    <div>
    <!-- <b-form @submit.stop.prevent="onSubmit">
      <b-form-group id="example-input-group-1" label="Name" label-for="example-input-1">
        <b-form-input
          id="example-input-1"  
          name="example-input-1"
          v-model="$v.form.name.$model"
          :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field and must be at least 3 characters.
        </b-form-invalid-feedback>
      </b-form-group> -->
    </div>
    <b-row class="my-4 text-right">
      <b-col sm="1">
        <label><code>First Name: </code></label>
      </b-col >
      <b-col sm="3">
        <b-form-input v-model="$v.form.name.$model" 
        :state="$v.form.name.$dirty ? !$v.form.name.$anyError : null"
        aria-describedby="input-1-live-feedback"
        ></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">
        </b-form-invalid-feedback>
        <b-form-invalid-feedback id="input-1-live-feedback">
          Please enter your first name
        </b-form-invalid-feedback>
      </b-col>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="1">
        <label><code>Last Name: </code></label>
      </b-col >
      <b-col sm="3">
        <b-form-input v-model="$v.form.lname.$model" 
        :state="$v.form.lname.$dirty ? !$v.form.lname.$anyError : null"
        aria-describedby="input-1-live-feedback"
        ></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">
          Please enter your last name
        </b-form-invalid-feedback>
      </b-col>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="1">
        <label><code>Email: </code></label>
      </b-col >
      <b-col sm="3">
        <b-form-input v-model="$v.form.email.$model" 
        :state="$v.form.email.$dirty ? !$v.form.email.$anyError : null"
        aria-describedby="input-1-live-feedback"
        ></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">
          Please enter an email
        </b-form-invalid-feedback>
      </b-col>
    </b-row>
    <b-row class="my-2 text-right">
      <b-col sm="1">
        <label><code>Birthday:</code></label>
      </b-col>
      <b-col sm="3">
        
        <b-form-input id=type-date type="date"
        v-model="$v.form.birthday.$model" 
        :state="$v.form.birthday.$dirty ? !$v.form.birthday.$error : null"
        aria-describedby="input-2-live-feedback"
         >
        </b-form-input>
        <b-form-invalid-feedback id="input-2-live-feedback">
          Please enter your birthday
        </b-form-invalid-feedback>
      </b-col>
    </b-row>
    <b-row class="gender">
      <b-col sm="0">
        <label><code>Gender:</code></label>
      </b-col>
      <b-col sm="2">
        <b-form-group label="" class="radio">
        <b-form-radio-group
         v-model="$v.form.gender.$model" 
        :state="$v.form.gender.$dirty ? !$v.form.gender.$error : null"
        aria-describedby="input-1-live-feedback"
        :options="gender"
        name="radio-inline"
        ></b-form-radio-group>
    </b-form-group>
      </b-col>
    </b-row>
    <b-row class="my-2 text-right">
      <b-col sm="1">
        
        <label><code>Current Location: </code></label>
      </b-col>

      <b-col class="address" sm="3">
        <b-form-input placeholder="City"
        id="example-input-1"  
          name="example-input-1"
          v-model="$v.form.city.$model"
          :state="$v.form.city.$dirty ? !$v.form.city.$error : null"
          aria-describedby="input-1-live-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>

        <b-form-input id=address placeholder="Country"
         v-model="$v.form.address.$model"
          :state="$v.form.address.$dirty ? !$v.form.address.$error : null"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>

        <b-form-input id=address placeholder="Postal/Zip code"
         name="example-input-1"
          v-model="$v.form.postalCode.$model"
          :state="$v.form.postalCode.$dirty ? !$v.form.postalCode.$error : null"
       ></b-form-input>
       <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col sm="2">
        <label><code>Country of Citizenship: </code></label>
      </b-col>
      <b-col cols="2">
      <div class="degreeLevel">
        <b-form-select :options="citizenship"
        name="example-input-1"
          v-model="$v.form.citizenship.$model"
          :state="$v.form.citizenship.$dirty ? !$v.form.citizenship.$error : null"></b-form-select>
          <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
      </div>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col sm="2">
        <label><code>Language Fluency: </code></label>
      </b-col>
      <b-col sm="2"
      >
        <b-form-input id=Language placeholder="Language"
        name="example-input-1"
          v-model="$v.form.language.$model"
          :state="$v.form.language.$dirty ? !$v.form.language.$anyError : null"></b-form-input>
          <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
      </b-col>
    </b-row>
    </b-container>
    <div>
      
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use statement<div>State: <strong>{{ status }}</strong></div>
    </b-form-checkbox>

    
    </div>
  </tab-content>
  </div>
  <!--Basic Information -->

  <!--Current Education :before-change="()=>validate2()" -->
  <tab-content title="Current Education" :before-change="()=>validate2()">
    <studentProfileTab2 ref="tab-content-2" @getTab2="getData"/>
  </tab-content>
  <!--Current Education -->

  <!--Educational Interest :before-change="()=>validate3()" -->
   <tab-content title="Educational Interest" :before-change="()=>validate3()">
     <studentProfileTab3 ref="tab-content-3" @getTab3="getData"/>
   </tab-content>
   
  <!--Educational Interest -->

    <!-- Scholarship Profile -->

  <tab-content title="Scholarship Profile">
    <studentProfileTab4 ref="tab-content-4" @getTab4="getData"/>
  </tab-content>
  <!-- Scholarship Profile -->

</form-wizard>
</template>


<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'
import monthYearDD from "@/components/monthYearDD.vue";
import averageDD from "@/components/averageDD.vue";
import ethnicityDD from "@/components/ethnicityDD.vue"
import heritageDD from "@/components/heritageDD.vue"
import ecDD from "@/components/ecDD.vue"
import courseLoadDD from "@/components/courseLoadDD.vue"
import financialNeedDD from "@/components/financialNeedDD.vue"
import studentProfileTab1 from "@/components/studentProfileTab1.vue"
import studentProfileTab2 from "@/components/studentProfileTab2.vue"
import studentProfileTab3 from "@/components/studentProfileTab3.vue"
import studentProfileTab4 from "@/components/studentProfileTab4.vue"

import 'animate.css/animate.min.css'


export default{
   mixins: [validationMixin],
   data() {
      return {
        foods: ['apple', 'orange'],
        form: {
          name: null,
          email: null,
          lname: null,
          language: null,
          city: null,
          address: null,
          postalCode: null,
          birthday: null,
          gender: null,
          citizenship: null
        },
        form2: {
          highschool: null,
          university: null
        },
        form3: {
          schoolInterest: null,
          fieldInterest: null,
          degreeLevel: null,
          country: null
        },
        status:'not accepted',
        types: [
          'First Name',
          'Last Name',
          'Email',
        ],
        selected:[],
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'Student' },
          { value: 'b', text: 'Mature Student' },
          { value: 'c', text: 'Parent of a student'}
        ],
        gender: [
          { value: 'a', text: 'Male'},
          { value: 'b', text: 'Female'}
        ],
        schoolPref:[
          {value: 'A', text: 'Not Decided'},
          {value: 'B', text: 'I do not see school of my interest'}
        ],
        fieldPref:[
          {value: 'A', text: 'Not Decided'}
        ],
        degreeLevel:[
          {value: null, text: 'Diploma'},
          {value: null, text: 'Degree'},
          {value: null, text: 'Master'}          
        ],
        citizenship:[
          {value: 'Canadian', text:'Canadian'},
          {value: 'American', text:'American'},
        ],
        validations: {
          selected: {
            required
          },
          form: ['selected']
        }
      }
   },
   validations: {
      form: {
        email:{
          required,
          email
        },
        name: {
          required,
         alpha
        },
        lname: {
          required,
          alpha
        },
        city: {
          required
        },
        language:{
          required,
          alpha
        },
        citizenship:{
          required
        },
        address: {
          required
        },
        postalCode: {
          required
        },
        birthday: {
          required
        },
        gender: {
          required
        }
      },
      form2: {
        highschool: {
          required
        },
        university: {
          required
        }
      },
      form3: {
        schoolInterest: {
          required
        },
        fieldInterest: {
          required
        },
        degreeLevel: {
          required
        },
        country: {
          required
        }
      }
    },
    //component code
    components: {
    FormWizard,
    TabContent,
    monthYearDD,
    averageDD,
    ethnicityDD,
    heritageDD,
    ecDD,
    courseLoadDD,
    financialNeedDD,
    studentProfileTab1,
    studentProfileTab2,
    studentProfileTab3,
    studentProfileTab4
    },
    methods:{
      getData(tabContent, isValid){
         if(isValid){
           console.log("hello world");
           this.FormData = Object.assign({}, this.FormData, tabContent);
         }
         
      },
      validate() {
        return this.$refs['tab-content-1'].check();
      },
      validate2() {
        return this.$refs['tab-content-2'].check();
      },
      validate3(){
        return this.$refs['tab-content-3'].check();
      },
      validate4(){
        console.log("hello World");
        if (this.$refs['tab-content-4'].check()){
          this.$refs['tab-content-4'].check();
          alert("hello World");
        } else {
          alert("error alert");
        }
      },
      onSubmit() {
        console.log("hello World"); 
        if (this.validate4()) {
          alert("hello World");
        } else {
          alert("this is an error");
        }

        // Form submit logic
      }

      // Form submit logic
    }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");

   #content-1-title{
    font-family: 'Montserrat', sans-serif;
    font-size: 24pt;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
    color:black;
  }
  .content-3{
    width:95%;
  }
  .content-4{
    width:95%;
    padding-left:20%;
  }
  /*Slide Animation */
  .wizard-tab-content {
  display: flex;
  }
  .wizard-tab-container {
    display: block;
    animation: fadeInRight 0.3s;
  }
</style>