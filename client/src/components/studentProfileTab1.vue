<template>
    <div>
      <b-row class="text-center">
        <b-col cols="4">
        </b-col>
        <b-col cols="1">
          <div class="legend">Basic info</div>
        </b-col>  
      </b-row>

    <b-row class="my-4 text-right">
      <b-col sm="5">
        <label><code>First Name: </code></label>
      </b-col >
      <b-col sm="3">
        <b-form-input v-model="$v.form.firstName.$model" 
        :state="$v.form.firstName.$dirty ? !$v.form.firstName.$anyError : null"
        aria-describedby="input-1-live-feedback"
        ></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">
          Please enter your first name
        </b-form-invalid-feedback>
      </b-col>
    </b-row>
<b-row class="my-4 text-right">
      <b-col sm="5">
        <label><code>Last Name: </code></label>
      </b-col >
      <b-col sm="3">
        <b-form-input v-model="$v.form.lastName.$model" 
        :state="$v.form.lastName.$dirty ? !$v.form.lastName.$anyError : null"
        aria-describedby="input-1-live-feedback"
        ></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">
          Please enter your last name
        </b-form-invalid-feedback>
      </b-col>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="5">
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
      <b-col sm="5">
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
    <b-row class="my-3 text-right">
      <b-col cols="5">
        <label><code>Gender:</code></label>
      </b-col>
      <b-col sm="2">
        <b-form-group label="" class="radio">
        <b-form-radio-group
         v-model="$v.form.gender.$model" 
        :state="$v.form.gender.$dirty ? !$v.form.gender.$error : null"
        aria-describedby="input-1-live-feedback"
        :options="genderop"
        name="radio-inline"
        ></b-form-radio-group>
    </b-form-group>
      </b-col>
    </b-row>
    <b-row class="my-2 text-right">
      <b-col sm="5">
        
        <label><code>Current Location: </code></label>
      </b-col>

      <b-col class="address" sm="3">
        <b-form-input placeholder="City"
          v-model="$v.form.city.$model"
          :state="$v.form.city.$dirty ? !$v.form.city.$error : null"
          aria-describedby="input-1-live-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>

        <b-form-input class="mt-3" placeholder="Country"
         v-model="$v.form.address.$model"
          :state="$v.form.address.$dirty ? !$v.form.address.$error : null"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>

        <b-form-input class="mt-3" placeholder="Postal/Zip code"
         name="example-input-1"
          v-model="$v.form.postalCode.$model"
          :state="$v.form.postalCode.$dirty ? !$v.form.postalCode.$error : null"
       ></b-form-input>
       <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
      </b-col>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="5">
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
      <b-col cols="5 text-right">
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
    <div>
      <b-row class="my-4 text-center">
    <b-col cols="12">
    </b-col>
    </b-row>
    </div> 
    </div>
</template>

<script>
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { validationMixin } from 'vuelidate'
import { required, email, alpha} from 'vuelidate/lib/validators'

export default{
   mixins: [validationMixin],
   data() {
      return {
        form:{
          firstName: null,
          lastName: null,
          email: null,
          language: null,
          city: null,
          address: null,
          postalCode: null,
          birthday: null,
          gender: null,
          citizenship: null,
        },
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'Student', text: 'Student' },
          { value: 'MatureStudent', text: 'Mature Student' },
          { value: 'ParentStudent', text: 'Parent of a student'}
        ],
        genderop: [
          { value: 'Male', text: 'Male'},
          { value: 'Female', text: 'Female'}
        ],
        citizenship:[
          {value: 'Canadian', text:'Canadian'},
          {value: 'American', text:'American'},
        ]
    }
 },
    methods:{
        check(){
            this.$v.form.$touch();
            var isValid = !this.$v.form.$invalid;
            this.$emit('getTab1',this.form, isValid);
            return isValid;
        }
    },
   validations:{
       form:{
       email:{
          required,
          email
        },
        firstName: {
          required,
         alpha
        },
        lastName: {
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
       }
     }
   }
</script>

<style scoped>
  .legend{
    background: #FDFDFD;
    border: 1px solid #DDD;
    border-radius: 5px;
    padding: 4px;
    font-weight: bold;
  }
  .legend1{
    width:40%;
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
</style>
