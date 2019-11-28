<template>
  <div class="content">
    <b-row>
    <b-col sm="2">

    </b-col>
    <b-col sm="10">
      <div class="grades">
        <b-form-select v-model="selected" :options="grades"></b-form-select>
      </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default{
   data() {
      return {
      grades:[
          { value: null, text: 'Grade %'},
          { value: '50', text: '50'},{ value: '51', text: '51'},{ value: '52', text: '52'},{ value: '53', text: '53'},{ value: '54', text: '54'},{ value: '55', text: '55'},{ value: '56', text: '56'},{ value: '57', text: '57'},{ value: '58', text: '58'},{ value: '59', text: '59'},
          { value: '60', text: '60'},{ value: '61', text: '61'},{ value: '62', text: '62'},{ value: '63', text: '63'},{ value: '64', text: '64'},{ value: '65', text: '65'},{ value: '66', text: '66'},{ value: '67', text: '67'},{ value: '68', text: '68'},{ value: '69', text: '69'},
          { value: '70', text: '70'},{ value: '71', text: '71'},{ value: '72', text: '72'},{ value: '73', text: '73'},{ value: '74', text: '74'},{ value: '75', text: '75'},{ value: '76', text: '76'},{ value: '77', text: '77'},{ value: '78', text: '78'},{ value: '79', text: '79'},
          { value: null, text: '80'},{ value: '81', text: '81'},{ value: '82', text: '82'},{ value: '83', text: '83'},{ value: '84', text: '84'},{ value: '85', text: '85'},{ value: '86', text: '86'},{ value: '87', text: '87'},{ value: '88', text: '88'},{ value: '89', text: '89'},
          { value: null, text: '90'},{ value: '91', text: '91'},{ value: '92', text: '92'},{ value: '93', text: '93'},{ value: '94', text: '94'},{ value: '95', text: '95'},{ value: '96', text: '96'},{ value: '97', text: '97'},{ value: '98', text: '98'},{ value: '99', text: '99'},{ value: '100', text: '100'}  
        ],
      }
    }
}
</script>
<style scoped>
  .content{
    margin-left:1%;
  }
</style>