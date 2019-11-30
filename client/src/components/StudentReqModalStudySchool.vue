<template>
  <b-container>
    <b-button @click="studySchoolSelected()" value="studySchool" :variant="checked"   > School of Study </b-button>
    <b-modal id="studReqStudySchoolModal" ref="modelStudySchool" title="School of Study"  
      @ok="returnData" @close="closeModal" @cancel="closeModal">
        <p>Enter perferred school of study:</p>
        <b-input-group size="sm" class="mb-4">
            <b-form-input v-model="studySchool" placeholder="Enter perferred school"></b-form-input>
            <b-input-group-append>
                <b-button @click="addSchool">Add</b-button>
            </b-input-group-append>
        </b-input-group>
        <div class="mt-3">
            Added School: <br>
            <ul>
                <li v-for="school in studySchools" :key="school">{{school}}</li>
            </ul>
        </div>
        
        <importanceSlider ref="importSlider"/>
    </b-modal>
  </b-container>
</template>

<script>
  import importanceSlider from "@/components/ImportanceSlider.vue"
  export default {
    name: 'studentReqModalStudySchool',
    components: {
      importanceSlider
      },
    props: {
    },
    data() {
      return {
        checked: "secondary",
        selected: false,
        studySchool: '',
        studySchools: [],
        importance: 0
        }
    },
    watch: {},
    methods: {
      studySchoolSelected() {
        this.selected = !this.selected;
        if (this.selected) {
          this.$bvModal.show('studReqStudySchoolModal');
          this.checked="primary";
        } else {
          this.$parent.requirement.studySchools.selectedStudySchools = ['Any school'];
          this.$parent.requirement.studySchools.importance = 0;
          this.$parent.requirement.selectedCriteria.studySchool.selected = false;
          this.checked="secondary";
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault();
        if(this.studySchools.length < 1) {
                this.studySchools = ['Any school'];
            } else {
                if (this.studySchools[0] == "Any school" && this.studySchools.length > 1) {
                    this.studySchools.splice(0, 1);
                }
            }  
        this.$parent.requirement.studySchools.selectedStudySchools = this.studySchools;
        this.$parent.requirement.studySchools.importance = this.$refs['importSlider'].getImportance();
        this.$parent.requirement.selectedCriteria.studySchool.selected = true;
        this.studySchools = [];

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqStudySchoolModal');
        })
      },
      closeModal(bvModalEvt) {
          bvModalEvt.preventDefault();
          this.studySchoolSelected();

          this.$nextTick(()=>{
          this.$bvModal.hide('studReqStudySchoolModal');
        })
      },
      getGenderImportance(value) {
        this.importance = value;
      },
      addSchool() {
          this.studySchools.push(this.studySchool);
          this.studySchool = '';
      }
    }
  };
</script>