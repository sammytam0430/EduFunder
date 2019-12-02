<template>
  <b-container>
    <b-button @click="courseLoadSelected()" value="CourseLoad" :variant="checked"> Course Load </b-button>
    <b-modal id="studReqCourseLoadModal" ref="modelProvince" title="Course Load"  
      @ok="returnData" @close="closeModal" @cancel="closeModal">
        <p>Select perferred course load:</p>
        <b-form-radio-group id="courseLoad" v-model="courseLoad" class="mb-4">
                <b-row class = "text-center">
                    <b-col>
                        <b-form-radio value="Full-time">Full-time</b-form-radio>
                    </b-col>
                    <b-col>
                        <b-form-radio value="Part-time">Part-time</b-form-radio>
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
    name: 'studentReqModalCourseLoad',
    components: {
      importanceSlider
      },
    props: {
    },
    data() {
      return {
        checked: "secondary",
        selected: false,
        courseLoad: 'Full-time or Part-time',
        importance: 0
      }
    },
    watch: {},
    methods: {
      courseLoadSelected() {
        this.selected = !this.selected;
        if (this.selected) {
          this.$bvModal.show('studReqCourseLoadModal');
          this.checked="primary"
        } else {
          this.$parent.requirement.courseLoad.selectedCourseLoad = 'Full-time or Part-time';
          this.$parent.requirement.courseLoad.importance = 0;
          this.$parent.requirement.selectedCriteria.courseLoad.selected = false;
          this.checked="secondary"
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault()
          
        this.$parent.requirement.courseLoad.selectedCourseLoad = this.courseLoad;
        this.$parent.requirement.courseLoad.importance = this.$refs['importSlider'].getImportance();
        this.$parent.requirement.selectedCriteria.courseLoad.selected = true;

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqCourseLoadModal');
        })
      },
      closeModal(bvModalEvt) {
          bvModalEvt.preventDefault();
          this.courseLoadSelected()

          this.$nextTick(()=>{
          this.$bvModal.hide('studReqCourseLoadModal');
        })
      },
      getGenderImportance(value) {
        this.importance = value;
      }
    }
  };
</script>