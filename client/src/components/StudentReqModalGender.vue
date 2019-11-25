<template>
  <b-container>
    <b-form-checkbox @change="genderSelected()" value="Gender" button :button-variant="checked"> Gender </b-form-checkbox>
    <b-modal id="studReqGenderModal" ref="modelProvince" title="Gender"  @ok="returnData">
        <p>Select perferred gender:</p>
        <b-form-radio-group id="gender" v-model="gender" class="mb-4">
                <b-row class = "text-center">
                    <b-col>
                        <b-form-radio value="Male">Male</b-form-radio>
                    </b-col>
                    <b-col>
                        <b-form-radio value="Female">Female</b-form-radio>
                    </b-col>
                </b-row>
            </b-form-radio-group>
        <importanceSlider />
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
        gender: '',
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
          this.$parent.gender.selectedGender = 'Male or Female';
          this.$parent.selectedCriteria.gender = false;
          this.checked="secondary"
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault()
          
        this.$parent.gender.selectedGender = this.gender;
        this.$parent.gender.importance = this.importance;
        this.$parent.selectedCriteria.gender = true;

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

