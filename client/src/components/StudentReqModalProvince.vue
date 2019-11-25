<template>
  <b-container>
    <b-form-checkbox @change="provinceSelected()" value="Province" button :button-variant="checked"> Province </b-form-checkbox>
    <b-modal id="studReqProvinceModal" ref="modelProvince" title="Province"  @ok="returnData">
        <p>Select perferred province:</p>
        <b-form-checkbox-group
          id="checkboxStudReq"
          v-model="province"
          name=""
          class="fontCheckbox mb-4"
        >
          <b-row >
            <b-col>
                <b-form-checkbox value="AB">Alberta</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="ON">Ontario</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="MB">Manitoba</b-form-checkbox>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
                <b-form-checkbox value="QC">Quebec</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="NS">Nova Scotia</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="SK">Saskatchewan</b-form-checkbox>
            </b-col>
          </b-row>
          <b-row >
            <b-col>
                <b-form-checkbox value="NB">New Brunswick</b-form-checkbox>
            </b-col>
            <b-col>
              <b-form-checkbox value="BC">British Columbia</b-form-checkbox>
                
            </b-col>
          </b-row>
          <b-row>
            <b-col>
                <b-form-checkbox value="NL">Newfoundland and Labrador</b-form-checkbox>
            </b-col>
            <b-col>
                <b-form-checkbox value="PE">Prince Edward Island</b-form-checkbox>
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
          this.$parent.province.selectedProvince = ['Any'];
          this.$parent.selectedCriteria.province = false;
          this.checked="secondary"
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault()
        this.$parent.province.selectedProvince = this.province;
        this.$parent.selectedCriteria.province = true;

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