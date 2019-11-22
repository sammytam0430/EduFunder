<template>
  <b-container>
    <b-form-checkbox @change="ageSelected()" value="Age" button> Age </b-form-checkbox>
    <b-modal id="studReqAgeModal" ref="modelAge" title="Select your preferred age" @ok="returnData">
        <b-container id = "slider">
          <p id = "titleAge"> Age: <strong>{{age[0]}} - {{age[1]}}</strong></p>
          <b-row class="mb-4 ">
            <b-col cols="1" class="px-0 text-center fontAge">16</b-col>
            <b-col cols="10">
            <vue-slider id='ageSlider' v-model="age" :min="16" :max="60" :height="5"></vue-slider>
            </b-col>
          <b-col cols="1" class="px-0 text-center fontAge">65</b-col>
        </b-row>  
        </b-container>
        <importanceSlider :getImportance="getAgeImportance"></importanceSlider>
    </b-modal>
  </b-container>
</template>

<script>
  import importanceSlider from "@/components/ImportanceSlider.vue"
  export default {
    name: 'studentReqModalAge',
    components: {
      importanceSlider
      },
    props: {
    },
    data() {
      return {
        selected: false,
        age:[17, 35],
        importance: 0
      }
    },
    watch: {},
    methods: {
      ageSelected() {
        this.selected = !this.selected;
        if (this.selected) {
          this.$bvModal.show('studReqAgeModal');
        } else {
          this.$parent.age.selectedAge = [16, 65];
          this.$parent.selectedCriteria.age = false;
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault()
          
        this.$parent.age.selectedAge = this.age;
        this.$parent.age.importance = this.importance;
        this.$parent.selectedCriteria.age = true;

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqAgeModal');
        })
      },
      getAgeImportance(value) {
        this.importance = value;
      }
    }
  };
</script>

<style scoped>
  
  .fontAge {
    font-size: 10pt;
  }
  #hint {
    font-size: 11pt;
  }
  #titleAge {
    text-align: center; 
  }
</style>