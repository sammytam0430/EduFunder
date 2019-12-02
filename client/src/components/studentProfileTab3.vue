<template>
<div class="content-3">
       <b-row>
        <b-col cols="4">

        </b-col>
        <b-col cols="8">
           <div class="legend1">Educational Interest: </div>
        </b-col>
      </b-row>
      <b-row class="my-4 text-right">
      <b-col sm="5">
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
      <b-col cols="5">
      </b-col>
      <b-col cols="4">
      <b-form-group label="">
      <b-form-radio-group
        :options="schoolPref"
        name=""
      ></b-form-radio-group>
    </b-form-group>
    </b-col>
    </b-row>

    <b-row class="my-4 text-right">
      <b-col sm="5">
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
      <b-col cols="5">

      </b-col>
      <b-col cols="4">

      
      <b-form-group label="">
      <b-form-radio-group
        :options="fieldPref"
        name="radio-inline"
      ></b-form-radio-group>
    </b-form-group>
    </b-col>
    </b-row>

    <b-row class="my-4 text-right">
      <b-col sm="5">
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
      <b-col sm="5">
        <label><code>Starting Date:</code></label>
      </b-col>
      <div style="padding-left:1%;">
         <monthYearDD ref="startMonthYear"/>
      </div>
      </b-row>

      <b-row class="text-right">
        <b-col sm="5">
           <label><code>Location interest:</code></label>
        </b-col>
        <b-col sm="2">
          <b-form-input id=Country placeholder="Country" v-model="$v.form3.locationInterest.$model"
          :state="$v.form3.locationInterest.$dirty ? !$v.form3.locationInterest.$error : null"></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
        </b-col>
      </b-row>
    </div>
</template>
<script>

import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'
import monthYearDD from "@/components/monthYearDD.vue";


export default{
   mixins: [validationMixin],
   data() {
       return{
           form3: {
                schoolInterest: null,
                fieldInterest: null,
                degreeLevel: null,
                locationInterest: null,
                startMonth: null,
                startYear: null
           },
            degreeLevel:[
                {value: 'Diploma', text: 'Diploma'},
                {value: 'Degree', text: 'Degree'},
                {value: 'Master', text: 'Master'}          
           ]
       }
   },
   validations:{
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
        locationInterest: {
          required
        }
      }
   },
   components:{
       monthYearDD
   },
   methods:{
       check(){
           this.form3.startMonth = this.$refs['startMonthYear'].getMonth();
           this.form3.startYear = this.$refs['startMonthYear'].getYear();

          this.$refs['startMonthYear'].check();
           this.$v.form3.$touch();
           var isValid = !this.$v.form3.$invalid && this.$refs['startMonthYear'].check();
           this.$emit('getTab3', this.form3, isValid); 
           return isValid;
       }
   }
}

</script>
<style scoped>
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