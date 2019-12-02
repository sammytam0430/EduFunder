<template>
<div class="content-2">
      <b-row>
        <b-col cols="4">

        </b-col>
        <b-col cols="8">
            <div class="legend1">Highschool Education</div>
        </b-col>
      </b-row>
    <b-row class="my-4 text-right">
      <b-col cols="5">
      <label><code>Current/Graduated High School: </code></label>
      </b-col>
      <b-col sm="3" class="text-left">
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
      <b-col cols="5">
      <label><code>Graduation Date: </code></label>
      </b-col>
      <monthYearDD ref="hsMonthYearCheck"/>
    </b-row>
    
    <b-row class="my-4 text-right">
      <b-col cols="5">
      <label><code>Academic Average(%): </code></label>
      </b-col>
      <averageDD ref="hsAverage"/>
    </b-row>
    <b-row>
      <b-col cols="4">

      </b-col>
      <b-col cols="8">
        <div class="legend1">Post-Secondary eduation</div>
      </b-col>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col cols="5" >
      <label><code>Current/Graduated University: </code></label>
      </b-col>
      <b-col sm="3">
        <div class="options">
        <b-form-input v-model="$v.form2.university.$model"
          :state="$v.form2.university.$dirty ? !$v.form2.university.$error : null"></b-form-input>
        <b-form-invalid-feedback id="input-1-live-feedback" class="text-left">
          This is a required field.
        </b-form-invalid-feedback>
        </div>
      </b-col>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="5">
      <label><code>Graduation Date: </code></label>
      </b-col>
      <monthYearDD ref="collegeMonthYearCheck"/>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="5">
      <label><code>Academic Average:</code></label>
      </b-col>
      <averageDD ref="collegeAverage"/>
    </b-row>
    </div>
</template>

<script>
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'
import monthYearDD from "@/components/monthYearDD.vue";
import averageDD from "@/components/averageDD.vue";

export default{
     mixins: [validationMixin],
     data(){
        return{
            form2: {
                highschool: null,
                university: null,
                hsMonth: null,
                hsYear: null,
                hsAverage: null,
                collegeMonth: null,
                collegeYear: null,
                collegeAverage:null
            },            
            schoolPref:[
                {value: 'Not Decided', text: 'Not Decided'},
                {value: 'NA', text: 'I do not see school of my interest'}
            ],
            fieldPref:[
                {value: 'Not Decided', text: 'Not Decided'}
            ]
        }
     },
     validations:{
        form2: {
        highschool: {
          required
        },
        university: {
          required
        }
      }
     },
     components:{
        monthYearDD,
        averageDD,
    },
    methods:{
        check(){
            this.form2.hsMonth = this.$refs['hsMonthYearCheck'].getMonth();
            this.form2.hsYear = this.$refs['hsMonthYearCheck'].getYear();
            this.form2.hsAverage = this.$refs['hsAverage'].getAverage();
            
            this.form2.collegeMonth = this.$refs['collegeMonthYearCheck'].getMonth();
            this.form2.collegeYear = this.$refs['collegeMonthYearCheck'].getYear();
            this.form2.collegeAverage = this.$refs['collegeAverage'].getAverage();

            this.$v.form2.$touch();
            this.$refs['hsMonthYearCheck'].check();
            this.$refs['hsAverage'].check();
            this.$refs['collegeMonthYearCheck'].check();
            this.$refs['collegeAverage'].check();
            var isValid = !this.$v.form2.$invalid && this.$refs['hsMonthYearCheck'].check() && this.$refs['hsAverage'].check() && this.$refs['collegeMonthYearCheck'].check() && this.$refs['collegeAverage'].check();
            this.$emit('getTab2',this.form2, isValid);
            return isValid;
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
  .content-2{
    width:95%;
  }
</style>