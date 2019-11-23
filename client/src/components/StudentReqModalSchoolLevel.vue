<template>
  <b-container>
    <b-form-checkbox @change="schoolLevelSelected()" value="SchoolLevel" button :button-variant="checked"> Level of Study </b-form-checkbox>
    <b-modal id="studReqSchoolLevelModal" ref="modelSchoolLevel" title="SchoolLevel"  @ok="returnData">
        <p>Select perferred level of study:</p>
        <b-form-checkbox-group
          id="checkboxStudReq"
          v-model="schoolLevel"
          name=""
          class="fontCheckbox mb-4"
        >
          <b-row >
            <b-col>
                <b-form-checkbox value="Certificate">Certificate</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="Diploma">Diploma</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="Post-diploma">Post-diploma</b-form-checkbox>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
                <b-form-checkbox value="Associate">Associate</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="Bachelor">Bachelor</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="Master">Master</b-form-checkbox>
            </b-col>
          </b-row>
          <b-row >
            <b-col>
                <b-form-checkbox value="Doctorate">Doctorate</b-form-checkbox>
            </b-col>
          </b-row>
          <b-row>
            
          </b-row>
          
        </b-form-checkbox-group>
        <importanceSlider />
    </b-modal>
  </b-container>
</template>

<script>
import importanceSlider from "@/components/ImportanceSlider.vue"
  export default {
    name: 'studentReqModalSchoolLevel',
    components: {
      importanceSlider
    },
    props: {
    },
    data() {
      return {
        checked: "secondary",
        selected: false,
        schoolLevel: [],  
      }
    }, 
    watch: {
    },
    methods: {
      schoolLevelSelected() {
        this.selected = !this.selected;
        if (this.selected) {
          this.$bvModal.show('studReqSchoolLevelModal');
          this.checked="primary";
        } else {
          this.$parent.schoolLevel.selectedSchoolLevel = ['Any'];
          this.$parent.selectedCriteria.schoolLevel = false;
          this.checked="secondary";
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault()
        this.$parent.schoolLevel.selectedSchoolLevel = this.schoolLevel;
        this.$parent.selectedCriteria.schoolLevel = true;

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqSchoolLevelModal');
        })
      }
    }
  }
</script>

<style scoped>
.fontCheckbox {
  font-size: 10pt;
}
</style>