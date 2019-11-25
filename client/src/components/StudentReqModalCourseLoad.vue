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
        <importanceSlider />
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
        courseLoad: '',
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
          this.$parent.courseLoad.selectedCourseLoad = 'Full-time or Part-time';
          this.$parent.selectedCriteria.courseLoad = false;
          this.checked="secondary"
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault()
          
        this.$parent.courseLoad.selectedCourseLoad = this.courseLoad;
        this.$parent.courseLoad.importance = this.importance;
        this.$parent.selectedCriteria.courseLoad = true;

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