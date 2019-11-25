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
        <importanceSlider />
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
          this.$parent.citizenship.selectedCitizenship = ['Any'];
          this.$parent.selectedCriteria.citizenship = false;
          this.checked="secondary";
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault();
        this.$parent.citizenship.selectedCitizenship = this.schoolLevel;
        this.$parent.selectedCriteria.citizenship = true;

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