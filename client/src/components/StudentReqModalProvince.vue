<template>
  <b-container>
    <b-button @click="provinceSelected()" value="Province" :variant="checked"> Province </b-button>
    <b-modal id="studReqProvinceModal" ref="modelProvince" title="Province"  
      @ok="returnData" @close="closeModal" @cancel="closeModal">
        <p>Select perferred province:</p>
        <b-form-checkbox-group
          id="checkboxStudReq"
          v-model="province"
          name=""
          class="fontCheckbox mb-4"
        >
          <b-row >
            <b-col>
                <b-form-checkbox value="Alberta">Alberta</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="Ontario">Ontario</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="Manitoba">Manitoba</b-form-checkbox>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
                <b-form-checkbox value="Quebec">Quebec</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="Nova Scotia">Nova Scotia</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="Saskatchewan">Saskatchewan</b-form-checkbox>
            </b-col>
          </b-row>
          <b-row >
            <b-col>
                <b-form-checkbox value="New Brunswick">New Brunswick</b-form-checkbox>
            </b-col>
            <b-col>
              <b-form-checkbox value="British Columbia">British Columbia</b-form-checkbox>
                
            </b-col>
          </b-row>
          <b-row>
            <b-col>
                <b-form-checkbox value="Newfoundland and Labrador">Newfoundland and Labrador</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="Prince Edward Island">Prince Edward Island</b-form-checkbox>
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
    name: 'studentReqModalProvince',
    components: {
      importanceSlider
    },
    props: {
    },
    data() {
      return {
        checked: "secondary",
        selected: false,
        province: [],  
      }
    }, 
    watch: {
    },
    methods: {
      provinceSelected() {
        this.selected = !this.selected;
        if (this.selected) {
          this.$bvModal.show('studReqProvinceModal');
          this.checked="primary"
        } else {
          this.$parent.requirement.province.selectedProvince = ['Did not specify'];
          this.$parent.requirement.province.importance = 0;
          this.$parent.requirement.selectedCriteria.province.selected = false;
          this.checked="secondary"
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault();
        if(this.province.length < 1) {
                this.province = ['Did not specify'];
            } else {
                if (this.province[0] == "Did not specify" && this.province.length > 1) {
                    this.province.splice(0, 1);
                }
            }
        this.$parent.requirement.province.selectedProvince = this.province;
        this.$parent.requirement.province.importance = this.$refs['importSlider'].getImportance();
        this.$parent.requirement.selectedCriteria.province.selected = true;

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqProvinceModal');
        })
      },
      closeModal(bvModalEvt) {
          bvModalEvt.preventDefault();
          this.provinceSelected()

          this.$nextTick(()=>{
          this.$bvModal.hide('studReqProvinceModal');
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