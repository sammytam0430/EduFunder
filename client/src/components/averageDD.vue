<template>
    <b-row>
    <b-col sm="2">

    </b-col>
    <b-col sm="12">
      <div class="grades">
        <b-form-select v-model="selected" :options="grades"></b-form-select>
      </div>
      </b-col>
    </b-row>
</template>
<script>
export default{
   data() {
      return {
      grades:[
          { value: null, text: 'Grade %'},
          { value: null, text: '50'},{ value: null, text: '51'},{ value: null, text: '52'},{ value: null, text: '53'},{ value: null, text: '54'},{ value: null, text: '55'},{ value: null, text: '56'},{ value: null, text: '57'},{ value: null, text: '58'},{ value: null, text: '59'},
          { value: null, text: '60'},{ value: null, text: '61'},{ value: null, text: '62'},{ value: null, text: '63'},{ value: null, text: '64'},{ value: null, text: '65'},{ value: null, text: '66'},{ value: null, text: '67'},{ value: null, text: '68'},{ value: null, text: '69'},
          { value: null, text: '70'},{ value: null, text: '71'},{ value: null, text: '72'},{ value: null, text: '73'},{ value: null, text: '74'},{ value: null, text: '75'},{ value: null, text: '76'},{ value: null, text: '77'},{ value: null, text: '78'},{ value: null, text: '79'},
          { value: null, text: '80'},{ value: null, text: '81'},{ value: null, text: '82'},{ value: null, text: '83'},{ value: null, text: '84'},{ value: null, text: '85'},{ value: null, text: '86'},{ value: null, text: '87'},{ value: null, text: '88'},{ value: null, text: '89'},
          { value: null, text: '90'},{ value: null, text: '91'},{ value: null, text: '92'},{ value: null, text: '93'},{ value: null, text: '94'},{ value: null, text: '95'},{ value: null, text: '96'},{ value: null, text: '97'},{ value: null, text: '98'},{ value: null, text: '99'},  
        ],
      }
    }
}
</script>