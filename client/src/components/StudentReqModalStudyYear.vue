<template>
  <b-container>
    <b-button @click="studyYearSelected()" value="StudyYear" :variant="checked"> Year of study </b-button>
    <b-modal id="studReqStudyYearModal" ref="modelProvince" title="Year of Study"  
      @ok="returnData" @close="closeModal" @cancel="closeModal">
        <p>Select perferred year of study:</p>
        <b-form-radio-group id="studyYear" v-model="studyYear" class="mb-4">
                <b-row class = "text-center">
                    <b-col>
                        <b-form-radio value="1">Year 1</b-form-radio>
                    </b-col>
                    <b-col>
                        <b-form-radio value="2">Year 2</b-form-radio>
                    </b-col>
                    <b-col>
                        <b-form-radio value="3">Year 3</b-form-radio>
                    </b-col>
                    <b-col>
                        <b-form-radio value="4">Year 4</b-form-radio>
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
    name: 'studentReqModalStudyYear',
    components: {
      importanceSlider
      },
    props: {
    },
    data() {
      return {
        checked: "secondary",
        selected: false,
        studyYear: '',
        importance: 0
      }
    },
    watch: {},
    methods: {
      studyYearSelected() {
        this.selected = !this.selected;
        if (this.selected) {
          this.$bvModal.show('studReqStudyYearModal');
          this.checked="primary"
        } else {
          this.$parent.studyYear.selectedStudyYear = 'Any Year';
          this.$parent.selectedCriteria.studyYear = false;
          this.checked="secondary"
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault()
          
        this.$parent.studyYear.selectedStudyYear = this.studyYear;
        this.$parent.studyYear.importance = this.importance;
        this.$parent.selectedCriteria.studyYear = true;

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqStudyYearModal');
        })
      },
      closeModal(bvModalEvt) {
          bvModalEvt.preventDefault();
          this.studyYearSelected();

          this.$nextTick(()=>{
          this.$bvModal.hide('studReqStudyYearModal');
        })
      },
      getGenderImportance(value) {
        this.importance = value;
      }
    }
  };
</script>