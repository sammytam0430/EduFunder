<template>
  <form-wizard>    
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

  <!--Current Education -->
  <tab-content title="Current Education">
    <div class="content-2">
    <div class="legend1">Highschool Education</div>
    <b-row class="my-4 text-right">
      <b-col sm="0">
      <label><code>Current/Graduated High School: </code></label>
      </b-col>
      <b-col sm="3">
        <div class="options">
        <b-form-input name="example-input-1"
          v-model="$v.form2.highschool.$model"
          :state="$v.form2.highschool.$dirty ? !$v.form2.highschool.$error : null"></b-form-input>
          <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
        </div>
      </b-col>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="2">
      <label><code>Graduation Date: </code></label>
      </b-col>
      <monthYearDD />
    </b-row>
    
    <b-row class="my-4 text-right">
      <b-col sm="2">
      <label><code>Academic Average: </code></label>
      </b-col>
      <averageDD/>
    </b-row>
    <div class="legend1">Post-Secondary eduation</div>
    <b-row class="my-4">
      <b-col sm="0">
      <label><code>Current/Graduated University: </code></label>
      </b-col>
      <b-col sm="3">
        <div class="options">
        <b-form-input v-model="$v.form2.university.$model"
          :state="$v.form2.university.$dirty ? !$v.form2.university.$error : null"></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
        </div>
      </b-col>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="2">
      <label><code>Graduation Date: </code></label>
      </b-col>
      <monthYearDD/>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="2">
      <label><code>Academic Average:</code></label>
      </b-col>
      <averageDD/>
    </b-row>
    </div>

  </tab-content>
  <!--Current Education -->

  <!--Educational Interest -->
   <tab-content title="Educational Interest">
     <div class="content-3">
       <div class="legend1" style="margin-bottom:2%">Educational Interest: </div>
      <b-row class="my-4 text-right">
      <b-col sm="2">
        <label><code>School(s) of Interest:</code></label>
      </b-col>
      <b-col sm="3">
        <div class="options">
        <b-form-input   v-model="$v.form3.schoolInterest.$model"
          :state="$v.form3.schoolInterest.$dirty ? !$v.form3.schoolInterest.$error : null"></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-form-group label="" style="margin-left:17%">
      <b-form-radio-group
        v-model="selected"
        :options="schoolPref"
        name="radio-inline"
      ></b-form-radio-group>
    </b-form-group>
    </b-row>

    <b-row class="my-4 text-right">
      <b-col sm="2">
        <label><code>Field(s) of study interest:</code></label>
      </b-col>
      <b-col sm="3">
        <div class="options">
        <b-form-input v-model="$v.form3.fieldInterest.$model"
          :state="$v.form3.fieldInterest.$dirty ? !$v.form3.fieldInterest.$error : null"></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-form-group label="" style="margin-left:17%">
      <b-form-radio-group
        v-model="selected"
        :options="fieldPref"
        name="radio-inline"
      ></b-form-radio-group>
    </b-form-group>
    </b-row>

    <b-row class="my-4 text-right">
      <b-col sm="2">
      <label><code>Degree Level of interest:</code></label>
      </b-col>
      <b-col md="2">
      <div class="degreeLevel" style="width:120%">
        <b-form-select v-model="$v.form3.degreeLevel.$model" :options="degreeLevel"
          :state="$v.form3.degreeLevel.$dirty ? !$v.form3.degreeLevel.$error : null"></b-form-select>
        <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
      </div>
      </b-col>
      </b-row>

      <b-row class="my-4 text-right">
      <b-col sm="2">
        <label><code>Starting Date:</code></label>
      </b-col>
      <div style="padding-left:1%;">
      <monthYearDD/>
      </div>
      </b-row>

      <b-row class="text-right">
        <b-col sm="2">
           <label><code>Location interest:</code></label>
        </b-col>
        <b-col sm="2">
          <b-form-input id=Country placeholder="Country" v-model="$v.form3.country.$model"
          :state="$v.form3.country.$dirty ? !$v.form3.country.$error : null"></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
        </b-col>
      </b-row>
    </div>
   </tab-content>
   
  <!--Educational Interest -->

  <!-- Scholarship Profile -->

  <tab-content title="Scholarship Profile">
    <div class="content-4">
      <b-row class="text-right my-3">
        <b-col cols="4">
          <label><code>Choose An Academic Average:</code></label>
        </b-col>

        <averageDD style="margin-left:10px;"/>

      </b-row>
      <ecDD/>
      <ethnicityDD/>
      <heritageDD/>
      <courseLoadDD/>
      <financialNeedDD/>
    </div>
  </tab-content>
  <!-- Scholarship Profile -->
</form-wizard>
</template>


<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { validationMixin } from 'vuelidate'
import { required, email, alpha} from 'vuelidate/lib/validators'
import monthYearDD from "@/components/monthYearDD.vue";
import averageDD from "@/components/averageDD.vue";
import ethnicityDD from "@/components/ethnicityDD.vue"
import heritageDD from "@/components/heritageDD.vue"
import ecDD from "@/components/ecDD.vue"
import courseLoadDD from "@/components/courseLoadDD.vue"
import financialNeedDD from "@/components/financialNeedDD.vue"

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
    financialNeedDD
    },
    methods:{
      validate() {
      this.$v.form.$touch();
      var isValid = !this.$v.form.$invalid
      return isValid
      },
      onSubmit() {
        this.$v.form.$touch()
        if (this.$v.form.$anyError) {
          return
        }

        // Form submit logic
      }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

   #content-1-title{
    font-family: 'Montserrat', sans-serif;
    font-size: 24pt;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
    color:black;
  }
  .content-1{
    width: 95%;
    margin-left: 31%;
  }
  .legend{
    width:7%;
    text-align: center;
    background: #FDFDFD;
    border: 1px solid #DDD;
    padding: 4px;
    margin-top: 0.5%;
    margin-bottom: 2%;
    border-radius: 5px;
    font-weight: bold;
  }
  .legend1{
    width:20%;
    text-align: center;
    background: #F7F7F7;
    border: 1px solid #DDD;
    padding: 4px;
    margin-left: 12%;
    margin-top: 0.5%;
    margin-bottom: 2%;
    border-radius: 5px;
    font-weight: bold;
  }
  .legend2{
    width:20%;
    text-align: center;
    background: #F7F7F7;
    border: 1px solid #DDD;
    padding: 4px;
    margin-top: 0.5%;
    margin-bottom: 2%;
    margin-left: 10%;
    border-radius: 5px;
    font-weight: bold;
  }
  .content-2{
    width:95%;
    margin-left: 31%;
  }
  #address{
    margin-top: 4%;
  }
  .gender{
    padding-left:3.5%;
    padding-top:1%;
  }
  .radio{
    padding-left:8%;
  }
  .months{
    width:120%;
  }
  .content-3{
    width:95%;
    margin-left:28%;
    
  }
  .content-4{
    width:95%;
    padding-left:20%;
  }
</style>