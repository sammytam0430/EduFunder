<template>
  <b-row>
    <b-col md="6">
      <div class="months">
        <b-form-select v-model="selected" :options="months"></b-form-select>
      </div>
      </b-col>
      <b-col sm="6">
      <div class="years">
        <b-form-select v-model="selected" :options="years"></b-form-select>
      </div>
      </b-col>
    </b-row>
</template>

<script>
export default{
   data() {
      return {
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
        ]
      }
   }
}
</script>