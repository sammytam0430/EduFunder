<template>
  <b-container>
    <b-button @click="studyFieldSelected()" value="studyField" :variant="checked"> Field of study </b-button>
    <b-modal id="studReqStudyFieldModal" ref="modelStudyField" title="Field of Study"  
      @ok="returnData" @close="closeModal" @cancel="closeModal">
        <p>Select perferred field of study:</p>
        <b-input-group size="sm" class="mb-4">
            <b-form-select v-model="studyField" :options="fields" ></b-form-select>
            <b-input-group-append>
                <b-button @click="addField">Add</b-button>
            </b-input-group-append>
        </b-input-group>
        <div class="mt-3">
            Added Field: <br>
            <ul>
                <li v-for="field in studyFields" :key="field">{{field}} 
                  <!-- <b-button @click="deleteField(field)"></b-button> -->
                  </li>
            </ul>
        </div>
        
        <importanceSlider ref="importSlider"/>
    </b-modal>
  </b-container>
</template>

<script>
  import importanceSlider from "@/components/ImportanceSlider.vue"
  export default {
    name: 'studentReqModalStudyField',
    components: {
      importanceSlider
      },
    props: {
    },
    data() {
      return {
        checked: "secondary",
        selected: false,
        studyField: '',
        studyFields: [],
        importance: 0,
        fields:[
            {value: "Uncategorized", text: 'Uncategorized'},
            {value: "Accounting & Finance", text: 'Accounting & Finance'},
            {value: "Aeronatuical & Manufacturing Engineering", text: 'Aeronatuical & Manufacturing Engineering'},
            {value: "Agriculture & Forestry", text: 'Agriculture & Forestry'},
            {value: "American Studies", text: 'American Studies'},
            {value: "Anatomy & Physiology", text: 'Anatomy & Physiology'},
            {value: "Anthropology", text: 'Anthropology'},
            {value: "Archaeology", text: 'Archaeology'},
            {value: "Architecture", text: 'Architecture'},
            {value: "Art & Design", text: 'Art & Design'},
            {value: "Aural & Oral Sciences", text: 'Aural & Oral Sciences'},            
            {value: "Behaviour Intervantion", text: 'Behaviour Intervantion'},
            {value: "Biological Sciences", text: 'Biological Sciences'},
            {value: "Building", text: 'Building'},
            {value: "Business & Management Studies", text: 'Business & Management Studies'},
            {value: "Career & Employment Preparation", text: 'Career & Employment Preparation'},
            {value: "Carpentry", text: 'Carpentry'},
            {value: "Celtic Studies", text: 'Celtic Studies'},
            {value: "Chemical Engineering", text: 'Chemical Engineering'},
            {value: "Chemistry", text: 'Chemistry'},
            {value: "Child & Youth Services", text: 'Child & Youth Services'},
            {value: "Civil Engineering", text: 'Civil Engineering'},
            {value: "Classics & Ancient History", text: 'Classics & Ancient History'},
            {value: "Commerce & Business", text: 'Commerce & Business'},
            {value: "Communication & Media Studies", text: 'Communication & Media Studies'},
            {value: "Community Health Worker", text: 'Community Health Worker'},
            {value: "Complementary Medicine", text: 'Complementary Medicine'},
            {value: "Computer Science", text: 'Computer Science'},
            {value: "Counselling", text: 'Counselling'},
            {value: "Creative Writing", text: 'Creative Writing'},
            {value: "Criminology", text: 'Criminology'},
            {value: "Culinary Arts", text: 'Culinary Arts'},
            {value: "Dental Assistance", text: 'Dental Assistance'},
            {value: "Dentistry", text: 'Dentistry'},
            {value: "Digital Arts", text: 'Digital Arts'},
            {value: "Drama, Dance & Cinematics", text: 'Drama, Dance & Cinematics'},
            {value: "E-commerce", text: 'E-commerce'},
            {value: "Early Childhood Education", text: 'Early Childhood Education'},
            {value: "East & South Asian Studies", text: 'East & South Asian Studies'},
            {value: "Economics", text: 'Economics'},
            {value: "Education", text: 'Education'},
            {value: "Elctrical &Electronic Engineering", text: 'Elctrical &Electronic Engineering'},
            {value: "English", text: 'English'},
            {value: "Fashion", text: 'Fashion'},
            {value: "Film Making", text: 'Film Making'},
            {value: "Food Science", text: 'Food Science'},
            {value: "Forensic Science", text: 'Forensic Science'},
            {value: "French", text: 'French'},
            {value: "General Engineering", text: 'General Engineering'},
            {value: "Geography & Environmental Sciences", text: 'Geography & Environmental Sciences'},
            {value: "Geology", text: 'Geology'},
            {value: "German", text: 'German'},
            {value: "Health Care", text: 'Health Care'},
            {value: "History", text: 'History'}
        ]
      }
    },
    watch: {},
    methods: {
      studyFieldSelected() {
        this.selected = !this.selected;
        if (this.selected) {
          this.$bvModal.show('studReqStudyFieldModal');
          this.checked="primary";
        } else {
          this.$parent.requirement.studyFields.selectedStudyFields = ['Did not specify'];
          this.$parent.requirement.studyFields.importance = 0;
          this.$parent.requirement.selectedCriteria.studyField.selected = false;
          this.checked="secondary";
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault();
        if(this.studyFields.length < 1) {
                this.studyFields = ['Did not specify'];
            } else {
                if (this.studyFields[0] == "Did not specify" && this.studyFields.length > 1) {
                    this.studyFields.splice(0, 1);
                }
            }  
        this.$parent.requirement.studyFields.selectedStudyFields = this.studyFields;
        this.$parent.requirement.studyFields.importance = this.$refs['importSlider'].getImportance();
        this.$parent.requirement.selectedCriteria.studyField.selected = true;
        this.studyFields = [];

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqStudyFieldModal');
        })
      },
      closeModal(bvModalEvt) {
          bvModalEvt.preventDefault();
          this.studyFieldSelected();

          this.$nextTick(()=>{
          this.$bvModal.hide('studReqStudyFieldModal');
        })
      },
      getGenderImportance(value) {
        this.importance = value;
      },
      addField() {
          this.studyFields.push(this.studyField);
      }
      // deleteField(index) {
      //     this.studyFields.splice(index, 1);
      // }
    }
  };
</script>
