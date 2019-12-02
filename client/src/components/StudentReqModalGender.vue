<template>
  <b-container>
    <b-button @click="genderSelected()" value="Gender" :variant="checked"> Gender </b-button>
    <b-modal id="studReqGenderModal" ref="modelProvince" title="Gender"  
      @ok="returnData" @close="closeModal" @cancel="closeModal">
        <p>Select perferred gender:</p>
        <b-form-radio-group id="gender" v-model="gender" class="mb-4">
                <b-row class = "text-center mb-2">
                    <b-col>
                        <b-form-radio value="Male">Male</b-form-radio>
                    </b-col>
                    <b-col>
                        <b-form-radio value="Female">Female</b-form-radio>
                    </b-col>
                </b-row>
                <b-row class = "text-right">
                  <b-col>
                        <b-form-radio value="Male or Female">Does not matter</b-form-radio>
                  </b-col>
                  <b-col>
                  </b-col>
                </b-row>
            </b-form-radio-group>
        <importanceSlider ref="importSlider"/>
    </b-modal>
  </b-container>
</template>

<script>
  import importanceSlider from "@/components/ImportanceSlider.vue"
  export default {
    name: 'studentReqModalGender',
    components: {
      importanceSlider
      },
    props: {
    },
    data() {
      return {
        checked: "secondary",
        selected: false,
        gender: 'Male or Female',
        importance: 0
      }
    },
    watch: {},
    methods: {
      genderSelected() {
        this.selected = !this.selected;
        if (this.selected) {
          this.$bvModal.show('studReqGenderModal');
          this.checked="primary"
        } else {
          this.$parent.requirement.gender.selectedGender = 'Male or Female';
          this.$parent.requirement.gender.importance = 0;
          this.$parent.requirement.selectedCriteria.gender.selected = false;
          this.checked="secondary"
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault()
          
        this.$parent.requirement.gender.selectedGender = this.gender;
        this.$parent.requirement.gender.importance = this.$refs['importSlider'].getImportance();
        this.$parent.requirement.selectedCriteria.gender.selected = true;

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqGenderModal');
        })
      },
      closeModal(bvModalEvt) {
          bvModalEvt.preventDefault();
          this.genderSelected();

          this.$nextTick(()=>{
          this.$bvModal.hide('studReqGenderModal');
        })
      },
      getGenderImportance(value) {
        this.importance = value;
      }
    }
  };
</script>

