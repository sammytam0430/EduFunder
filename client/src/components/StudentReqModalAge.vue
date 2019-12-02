<template>
  <b-container>
    <b-button @click="ageSelected()" value="Age" :variant="checked"> Age </b-button>
    <b-modal id="studReqAgeModal" ref="modelAge" title="Select your preferred age" 
      @ok="returnData" @close="closeModal" @cancel="closeModal">
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
        <importanceSlider ref="importSlider"></importanceSlider>
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
        checked: "secondary",
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
          this.checked="primary";
        } else {
          this.$parent.requirement.age.selectedAge = [16, 65];
          this.$parent.requirement.age.importance = 0;
          this.$parent.requirement.selectedCriteria.age.selected = false;
          this.checked="secondary";
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault()
          
        this.$parent.requirement.age.selectedAge = this.age;
        this.$parent.requirement.age.importance = this.$refs['importSlider'].getImportance();
        this.$parent.requirement.selectedCriteria.age.selected = true;

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqAgeModal');
        })
      },
      closeModal(bvModalEvt) {
          bvModalEvt.preventDefault();

          this.ageSelected();

          this.$nextTick(()=>{
          this.$bvModal.hide('studReqAgeModal');
        })
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