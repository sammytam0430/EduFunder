<template>
  <b-container>
    <b-button @click="schoolLevelSelected()" value="SchoolLevel" :variant="checked"> Level of Study </b-button>
    <b-modal id="studReqSchoolLevelModal" ref="modelSchoolLevel" title="SchoolLevel"  
      @ok="returnData" @close="closeModal" @cancel="closeModal">
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
          
        </b-form-checkbox-group>
        <importanceSlider ref="importSlider"/>
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
          this.$parent.requirement.schoolLevel.selectedSchoolLevel = ['Did not specify'];
          this.$parent.requirement.schoolLevel.importance = 0;
          this.$parent.requirement.selectedCriteria.schoolLevel.selected = false;
          this.checked="secondary";
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault();
        if(this.schoolLevel.length < 1) {
                this.schoolLevel = ['Did not specify'];
            } else {
                if (this.schoolLevel[0] == "Did not specify" && this.schoolLevel.length > 1) {
                    this.schoolLevel.splice(0, 1);
                }
            }
        this.$parent.requirement.schoolLevel.selectedSchoolLevel = this.schoolLevel;
        this.$parent.requirement.schoolLevel.importance = this.$refs['importSlider'].getImportance();
        this.$parent.requirement.selectedCriteria.schoolLevel.selected = true;

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqSchoolLevelModal');
        })
      },
      closeModal(bvModalEvt) {
          bvModalEvt.preventDefault();
          this.schoolLevelSelected();

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