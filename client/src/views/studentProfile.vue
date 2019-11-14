<template>
  <form-wizard>    
  <h5 id="content-1-title" slot="title">Set up your student profile!</h5>
  <!--Basic Information -->
  
  <div class="content-1">
    
  <tab-content title="Basic information">
    <b-container fluid >
    <div class="legend">Basic info</div>
    <div>
    <!-- <b-row>
      <div class="legend">Basic info</div>
    </b-row> -->
    <b-row class="text-right"> 
      <b-col sm="1">
      <label ><code>I am a(?): </code></label>
      </b-col>
      <b-col sm="3">
        <font-awesome-icon icon="coffee" />
        <div class="options">
          
        <b-form-select v-model="selected" :options="options"></b-form-select>

        </div>
      </b-col>
    </b-row>

    </div>
    <b-row class="my-4 text-right" v-for="type in types" :key="type">
      <b-col sm="1">
        <label :for="`type-${type}`"> <code>{{ type }}</code>:</label>
      </b-col>
      <b-col sm="3">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-2 text-right">
      <b-col sm="1">
        <label><code>Birthday:</code></label>
      </b-col>
      <b-col sm="3">
        <b-form-input id=type-date type="date"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="gender">
      <b-col sm="0">
        <label><code>Gender:</code></label>
      </b-col>
      <b-col sm="2">
        <b-form-group label="" class="radio">
        <b-form-radio-group
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
        <b-form-input placeholder="City"></b-form-input>
        <b-form-input id=address placeholder="Country"></b-form-input>
        <b-form-input id=address placeholder="Postal/Zip code"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col sm="2">
        <label><code>Coutnry of Citizenship: </code></label>
      </b-col>
      <b-col sm="2">
        <b-form-input id=Country placeholder="Country" v-b-tooltip.hover title="Tooltip directive content"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col sm="2">
        <label><code>Langue Fluency: </code></label>
      </b-col>
      <b-col sm="2">
        <b-form-input id=Language placeholder="Language"></b-form-input>
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
      I accept the terms and use<div>State: <strong>{{ status }}</strong></div>
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
      <label><code>Current/Graduated High School </code></label>
      </b-col>
      <b-col sm="3">
        <div class="options">
        <b-form-input v-model="selected" :options="options"></b-form-input>
        </div>
      </b-col>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="2">
      <label><code>Graduation Date </code></label>
      </b-col>
      <b-col md="1">
      <div class="months">
        <b-form-select v-model="selected" :options="months"></b-form-select>
      </div>
      </b-col>
      <b-col sm="1">
      <div class="years">
        <b-form-select v-model="selected" :options="years"></b-form-select>
      </div>
      </b-col>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="2">
      <label><code>Academic Average</code></label>
      </b-col>
      <b-col sm="2">
      <div class="grades">
        <b-form-select v-model="selected" :options="grades"></b-form-select>
      </div>
      </b-col>
    </b-row>
    <div class="legend1">Post-Secondary eduation</div>
    <b-row class="my-4">
      <b-col sm="0">
      <label><code>Current/Graduated University </code></label>
      </b-col>
      <b-col sm="3">
        <div class="options">
        <b-form-input v-model="selected" :options="options"></b-form-input>
        </div>
      </b-col>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="2">
      <label><code>Graduation Date </code></label>
      </b-col>
      <b-col md="1">
      <div class="months">
        <b-form-select v-model="selected" :options="months"></b-form-select>
      </div>
      </b-col>
      <b-col sm="1">
      <div class="years">
        <b-form-select v-model="selected" :options="years"></b-form-select>
      </div>
      </b-col>
    </b-row>
    <b-row class="my-4 text-right">
      <b-col sm="2">
      <label><code>Academic Average:</code></label>
      </b-col>
      <b-col sm="2">
      <div class="grades">
        <b-form-select v-model="selected" :options="grades"></b-form-select>
      </div>
      </b-col>
    </b-row>
    </div>
  </tab-content>
  <!--Current Education -->

  <!--Educational Interest -->
   <tab-content title="Educational Interest">
     <div class="content-3">
       <div class="legend1" style="margin-bottom:2%">Educational Interest</div>
      <b-row class="my-4 text-right">
      <b-col sm="2">
        <label><code>School(s) of Interest:</code></label>
      </b-col>
      <b-col sm="3">
        <div class="options">
        <b-form-input v-model="selected" :options="options"></b-form-input>
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
        <b-form-input v-model="selected" :options="options" type='school'></b-form-input>
        </div>
      </b-col>
    </b-row>

    <b-row class="my-4">
      <b-col sm="2">
      </b-col>
      <b-col sm="3">
        <div class="options">
        <b-form-input v-model="selected" :options="options"></b-form-input>
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
        <b-form-select v-model="selected" :options="degreeLevel"></b-form-select>
      </div>
      </b-col>
      </b-row>

      <b-row class="my-4 text-right">
      <b-col sm="2">
        <label><code>Degree Level of interest:</code></label>
      </b-col>
      <b-col md="1">
      <div class="degreeLevel">
        <div class="months">
        <b-form-select v-model="selected" :options="months"></b-form-select>
        </div>
      </div>
      </b-col>
      <b-col md="1">
        <div class="years">
          <b-form-select v-model="selected" :options="years"></b-form-select>
        </div>
      </b-col>
      </b-row>

      <b-row class="text-right">
        <b-col sm="2">
           <label><code>Location interest:</code></label>
        </b-col>
        <b-col sm="2">
          <b-form-input id=Country placeholder="Country"></b-form-input>
        </b-col>
      </b-row>
    </div>
   </tab-content>
   
  <!--Educational Interest -->

  <!-- Scholarship Profile -->

  <tab-content title="Scholarship Profile">
    <div class="content-4">
    <b-row class="text-right my-3">
      <b-col sm="2">
      <label><code>Academic Average:</code></label>
      </b-col>
      <b-col sm="2">
      <div class="grades">
        <b-form-select v-model="selected" :options="grades"></b-form-select>
      </div>
      </b-col>
    </b-row>
    <b-row class="text-right my-3">
        <b-col sm="2">
           <label><code>Heritage:</code></label>
        </b-col>
        <b-col sm="2">
          <b-form-input id=Country placeholder="American,African"></b-form-input>
        </b-col>
      </b-row>
    <div class="EC">
      <div class="legend2">Extra-curricular Activities</div>
      <div style="width:15%;float:left;">
      <b-form-group label="">
        <b-form-checkbox-group
          v-model="selected"
          :options="EC"
          name="flavour-1a"
        ></b-form-checkbox-group>
      </b-form-group>
      </div>
      <div style="width:15%;">
      <b-form-group label="">
        <b-form-checkbox-group
          v-model="selected"
          :options="EC2"
          name="flavour-1a"
        ></b-form-checkbox-group>
      </b-form-group>
      </div>
    </div>
    </div>
  </tab-content>
  <!-- Scholarship Profile -->
</form-wizard>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { required} from 'vuelidate/lib/validators'

export default{
   data() {
      return {
        status:'not accepted',
        EC: [
          {value: 'a', text: 'Agricultural Development'},
          {value: 'c', text: 'Archery'},    
          {value: 'e', text: 'Badminton'},
          {value: 'g', text: 'Christian Ministry'},
          
          {value: 'j', text: 'Cycling'},
        ],
        EC2: [
          {value: 'b', text: 'Alpine Sking'},
          {value: 'd', text: 'Basketball'},
          {value: 'f', text: 'Boxing'},
          {value: 'h', text: 'Canoeing'},
          {value: 'k', text: 'Debate'},
          {value: 'n', text: 'Diving'}
        ],
        types: [
          'First Name',
          'Last Name',
          'Email',
          'User Name',
          'Password',
        ],
        selected:[],
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'Student' },
          { value: 'b', text: 'Mature Student' },
          { value: 'c', text: 'Parent of a student'}
        ],
        months:[
          { value: null, text: 'Month'},
          { value: null, text: 'January'},
          { value: null, text: 'Feburary'},
          { value: null, text: 'March'},
          { value: null, text: 'April'},
          { value: null, text: 'May'},
          { value: null, text: 'June'},
          { value: null, text: 'July'},
          { value: null, text: 'August'},
          { value: null, text: 'Sept'},
          { value: null, text: 'Oct'},
          { value: null, text: 'Nov'},
          { value: null, text: 'Dec'}
        ],
        years:[
          { value: null, text: 'Year'},
          { value: null, text: '1980'},
          { value: null, text: '1981'},
          { value: null, text: '1982'},
          { value: null, text: '1983'},
          { value: null, text: '1984'},
          { value: null, text: '1986'},
          { value: null, text: '1987'},
          { value: null, text: '1988'},
          { value: null, text: '1989'},
          { value: null, text: '1990'},
          { value: null, text: '1992'},
          { value: null, text: '1992'},
          { value: null, text: '1993'},
          { value: null, text: '1994'},
          { value: null, text: '1995'},
          { value: null, text: '1996'},
          { value: null, text: '1997'},
          { value: null, text: '1998'},
          { value: null, text: '1999'},
          { value: null, text: '2000'},
          { value: null, text: '2001'},
          { value: null, text: '2002'},
          { value: null, text: '2003'},
          { value: null, text: '2004'},
          { value: null, text: '2005'},
          { value: null, text: '2006'},
          { value: null, text: '2007'},
          { value: null, text: '2008'},
          { value: null, text: '2009'},
          { value: null, text: '2010'},
          { value: null, text: '2011'},
          { value: null, text: '2012'},
          { value: null, text: '2013'},
          { value: null, text: '2014'},
          { value: null, text: '2015'},
          { value: null, text: '2016'},
          { value: null, text: '2017'},
          { value: null, text: '2018'},          
        ],
        grades:[
          { value: null, text: 'Grade %'},
          { value: null, text: '50'},{ value: null, text: '51'},{ value: null, text: '52'},{ value: null, text: '53'},{ value: null, text: '54'},{ value: null, text: '55'},{ value: null, text: '56'},{ value: null, text: '57'},{ value: null, text: '58'},{ value: null, text: '59'},
          { value: null, text: '60'},{ value: null, text: '61'},{ value: null, text: '62'},{ value: null, text: '63'},{ value: null, text: '64'},{ value: null, text: '65'},{ value: null, text: '66'},{ value: null, text: '67'},{ value: null, text: '68'},{ value: null, text: '69'},
          { value: null, text: '70'},{ value: null, text: '71'},{ value: null, text: '72'},{ value: null, text: '73'},{ value: null, text: '74'},{ value: null, text: '75'},{ value: null, text: '76'},{ value: null, text: '77'},{ value: null, text: '78'},{ value: null, text: '79'},
          { value: null, text: '80'},{ value: null, text: '81'},{ value: null, text: '82'},{ value: null, text: '83'},{ value: null, text: '84'},{ value: null, text: '85'},{ value: null, text: '86'},{ value: null, text: '87'},{ value: null, text: '88'},{ value: null, text: '89'},
          { value: null, text: '90'},{ value: null, text: '91'},{ value: null, text: '92'},{ value: null, text: '93'},{ value: null, text: '94'},{ value: null, text: '95'},{ value: null, text: '96'},{ value: null, text: '97'},{ value: null, text: '98'},{ value: null, text: '99'},  
        ],
        gender: [
          { value: 'a', text: 'Male'},
          { value: 'b', text: 'Female'}
        ],
        schoolPref:[
          {value: null, text: 'Not Decided'},
          {value: null, text: 'I do not see school of my interest'}
        ],
        fieldPref:[
          {value: null, text: 'Not Decided'}
        ],
        degreeLevel:[
          {value: null, text: 'Diploma'},
          {value: null, text: 'Degree'},
          {value: null, text: 'Master'}          
        ],
        validations: {
          selected: {
            required
          },
          form: ['selected']
        }
      }
   },
    //component code
    components: {
    FormWizard,
    TabContent
    },
    methods:{
      validate() {
      this.$v.form.$touch();
      var isValid = !this.$v.form.$invalid
      this.$emit('on-validate', this.$data, isValid)
      return isValid
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
    margin-left:32%;
  }
  .EC{
    margin-left:10%;
  }
</style>