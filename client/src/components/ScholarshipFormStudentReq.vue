<template>
    <b-container>
        <b-row class="text-center mb-3">
            <b-col>
                <studentReqModalAge></studentReqModalAge>    
            </b-col>
            <b-col>
                <studentReqModalProvince></studentReqModalProvince> 
            </b-col>
            <b-col>
                <studentReqModalGender></studentReqModalGender> 
            </b-col>
        </b-row>
        <b-row class="text-center mb-3">
            <b-col>
                <studentReqModalSchoolLevel></studentReqModalSchoolLevel>   
            </b-col>
            <b-col>
                <studentReqModalStudyField></studentReqModalStudyField>
            </b-col>
            <b-col>
                
            </b-col>
        </b-row>
        
    </b-container>
</template>

<script>
    import studentReqModalProvince from "@/components/StudentReqModalProvince.vue"
    import studentReqModalAge from "@/components/StudentReqModalAge.vue"
    import studentReqModalGender from "@/components/StudentReqModalGender.vue"
    import studentReqModalSchoolLevel from "@/components/StudentReqModalSchoolLevel.vue"
    import studentReqModalStudyField from "@/components/StudentReqModalStudyField.vue"
    
  export default {
    components: {
        studentReqModalProvince,
        studentReqModalAge,
        studentReqModalGender,
        studentReqModalSchoolLevel,
        studentReqModalStudyField
    },
    data() {
      return {
          showProvinceModal: false,
          selectedCriteria:  {
              age: false,
              province: false,
              gender: false,
              studyField: false
          },
          age: {
              selectedAge: [16, 65],
              importance: 0
          },
          province: {
              selectedProvince: ['Any'],
              importance: 0 
          },
          gender: {
              selectedGender: 'Male or Female',
              importance: 0
          },
          schoolLevel: {
              selectedSchoolLevel: ['Any'],
              importance: 0
          }, 
          studyFields: {
              selectedStudyFields: ['Any field of study'],
              importance: 0
          } 
      }
    },
    watch: {
    },
    methods: {   
    }
  }
</script>