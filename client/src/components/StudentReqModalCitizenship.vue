<template>
  <b-container>
    <b-button @click="citizenshipSelected()" value="Citizenship" :variant="checked"> Citizenship </b-button>
    <b-modal id="studReqCitizenshipModal" ref="modelCitizenship" title="Citizenship"  
      @ok="returnData" @close="closeModal" @cancel="closeModal">
        <p>Select perferred citizenship:</p>
        <b-form-checkbox-group
          id="checkboxStudReqCitizenship"
          v-model="citizenship"
          name=""
          class="fontCheckbox mb-4"
        >
          <b-row>
            <b-col>
                <b-form-checkbox value="Canadian">Canadian</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="Amercian">Amercian</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="International">International</b-form-checkbox>
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
    name: 'studentReqModalCitizenship',
    components: {
      importanceSlider
    },
    props: {
    },
    data() {
      return {
        checked: "secondary",
        selected: false,
        citizenship: [],  
      }
    }, 
    watch: {
    },
    methods: {
      citizenshipSelected() {
        this.selected = !this.selected;
        if (this.selected) {
          this.$bvModal.show('studReqCitizenshipModal');
          this.checked="primary";
        } else {
          this.$parent.requirement.citizenship.selectedCitizenship = ['Did not specify'];
          this.$parent.requirement.citizenship.importance = 0;
          this.$parent.requirement.selectedCriteria.citizenship.selected = false;
          this.checked="secondary";
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault();
        if(this.citizenship.length < 1) {
                this.citizenship = ['Did not specify'];
            } else {
                if (this.citizenship[0] == "Did not specify" && this.citizenship.length > 1) {
                    this.citizenship.splice(0, 1);
                }
            }
        this.$parent.requirement.citizenship.selectedCitizenship = this.citizenship;
        this.$parent.requirement.citizenship.importance = this.$refs['importSlider'].getImportance();
        this.$parent.requirement.selectedCriteria.citizenship.selected = true;

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqCitizenshipModal');
        })
      },
      closeModal(bvModalEvt) {
          bvModalEvt.preventDefault();
          this.citizenshipSelected();

          this.$nextTick(()=>{
          this.$bvModal.hide('studReqCitizenshipModal');
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