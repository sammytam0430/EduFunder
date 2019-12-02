<template>
    <div class="content-4">
      <b-row>
        <b-col cols="2">

        </b-col>
        <b-col cols="10">
           <div class="legend1">Scholarship Profile:   </div>
        </b-col>
      </b-row>
      <b-row class="text-right my-3">
        <b-col cols="4">
          <label><code>Choose An Academic Average:</code></label>
        </b-col>
        <averageDD ref="averageValue"/>

      </b-row>
      <ecDD ref="ecValue" />
      <ethnicityDD ref="ethnicityValue"/>
      <heritageDD ref="heritageValue" />
      <courseLoadDD ref="courseLoadValue"/>
      <financialNeedDD ref="financialValue"/>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'
import ethnicityDD from "@/components/ethnicityDD.vue"
import heritageDD from "@/components/heritageDD.vue"
import ecDD from "@/components/ecDD.vue"
import courseLoadDD from "@/components/courseLoadDD.vue"
import financialNeedDD from "@/components/financialNeedDD.vue"
import averageDD from "@/components/averageDD.vue";


export default{
    mixins: [validationMixin],
   data() {
       return{
          form4:{
          academicAverageValue:null,
          ecValue: null,
          ethnicityValue: null,
          heritageValue: null,
          courseLoadValue: null,
          financialNeedValue: null
       }
       }
   },
   components:{
        ethnicityDD,
        heritageDD,
        ecDD,
        courseLoadDD,
        financialNeedDD,
        averageDD
   },
   methods:{
       check(){
           this.form4.academicAverageValue = this.$refs['averageValue'].getAverage();
           this.form4.ecValue = this.$refs['ecValue'].getEC();
           this.form4.ethnicityValue = this.$refs['ethnicityValue'].getEthnicity();
           this.form4.heritageValue = this.$refs['heritageValue'].getHeritage();
           this.form4.courseLoadValue = this.$refs['courseLoadValue'].getCourseLoad();  
           this.form4.financialValue = this.$refs['financialValue'].getFinancialNeed();


           
           this.$refs['averageValue'].check();
           this.$refs['ecValue'].check();
           this.$refs['ethnicityValue'].check();
           this.$refs['heritageValue'].check();
           this.$refs['courseLoadValue'].check();
           this.$refs['financialValue'].check();

           var isValid = this.$refs['averageValue'].check() && this.$refs['ecValue'].check() && this.$refs['ethnicityValue'].check() && this.$refs['heritageValue'].check() && this.$refs['courseLoadValue'].check() && this.$refs['financialValue'].check();
           this.$emit('getTab4', this.form4, isValid);
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