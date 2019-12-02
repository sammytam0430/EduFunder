<template>
  <b-container>
    <b-button @click="financialNeedSelected()" value="FinancialNeed" :variant="checked"> Financial Need </b-button>
    <b-modal id="studReqFinancialNeedModal" ref="modelProvince" title="Financial Need"  
      @ok="returnData" @close="closeModal" @cancel="closeModal">
        <p>Is it only the students who have Financial need can apply</p>
        <b-form-radio-group id="financialNeed" v-model="financialNeed" class="mb-4">
                <b-row class = "text-center">
                    <b-col>
                        <b-form-radio value="Yes">Yes</b-form-radio>
                    </b-col>
                    <b-col>
                        <b-form-radio value="No">No</b-form-radio>
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
    name: 'studentReqModalFinancialNeed',
    components: {
      importanceSlider
      },
    props: {
    },
    data() {
      return {
        checked: "secondary",
        selected: false,
        financialNeed: 'No',
        importance: 0
      }
    },
    watch: {},
    methods: {
      financialNeedSelected() {
        this.selected = !this.selected;
        if (this.selected) {
          this.$bvModal.show('studReqFinancialNeedModal');
          this.checked="primary"
        } else {
          this.$parent.requirement.financialNeed.selectedFinancialNeed = 'No';
          this.$parent.requirement.financialNeed.importance = 0;
          this.$parent.requirement.selectedCriteria.financialNeed.selected = false;
          this.checked="secondary"
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault()
          
        this.$parent.requirement.financialNeed.selectedFinancialNeed = this.financialNeed;
        this.$parent.requirement.financialNeed.importance = this.$refs['importSlider'].getImportance();
        this.$parent.requirement.selectedCriteria.financialNeed.selected = true;

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqFinancialNeedModal');
        })
      },
      closeModal(bvModalEvt) {
          bvModalEvt.preventDefault();
          this.financialNeedSelected();

          this.$nextTick(()=>{
          this.$bvModal.hide('studReqFinancialNeedModal');
        })
      },
      getfinancialNeedImportance(value) {
        this.importance = value;
      }
    }
  };
</script>

