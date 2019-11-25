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
                <studentReqModalStudySchool></studentReqModalStudySchool>
            </b-col>
        </b-row>
        <b-row class="text-center mb-3">
            <b-col>
                <studentReqModalStudyYear></studentReqModalStudyYear>   
            </b-col>
            <b-col>
                <studentReqModalCourseLoad></studentReqModalCourseLoad>
            </b-col>
            <b-col>
                <studentReqModalFinancialNeed></studentReqModalFinancialNeed>
            </b-col>
        </b-row>
        <b-row class="text-center mb-3">
            <b-col>
                <studentReqModalCitizenship></studentReqModalCitizenship>   
            </b-col>
            <b-col>
                <studentReqModalActivities></studentReqModalActivities>
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
    import studentReqModalStudySchool from "@/components/StudentReqModalStudySchool.vue"
    import studentReqModalStudyYear from "@/components/StudentReqModalStudyYear.vue"
    import studentReqModalCourseLoad from "@/components/StudentReqModalCourseLoad.vue"
    import studentReqModalFinancialNeed from "@/components/StudentReqModalFinancialNeed.vue"
    import studentReqModalCitizenship from "@/components/StudentReqModalCitizenship.vue"
    import studentReqModalActivities from "@/components/StudentReqModalActivities.vue"

    
  export default {
    components: {
        studentReqModalProvince,
        studentReqModalAge,
        studentReqModalGender,
        studentReqModalSchoolLevel,
        studentReqModalStudyField,
        studentReqModalStudySchool,
        studentReqModalStudyYear,
        studentReqModalCourseLoad,
        studentReqModalFinancialNeed,
        studentReqModalCitizenship,
        studentReqModalActivities
    },
    data() {
      return {
          showProvinceModal: false,
          selectedCriteria:  {
              age: false,
              province: false,
              gender: false,
              studyField: false,
              studySchool: false,
              studyYear: false,
              courseLoad: false,
              financialNeed: false,
              citizenship: false,
              activities: false
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
          },
          studySchools: {
              selectedStudySchools: ['Any school of study'],
              importance: 0
          },
          studyYear: {
              selectedStudyYear: 'Any year of study',
              importance: 0
          },
          courseLoad: {
              selectedCourseLoad: 'Full-time or Part-time',
              importance: 0
          },
          financialNeed: {
              selectedFinancialNeed: 'No',
              importance: 0
          },
          citizenship: {
              selectedCitizenship: 'Any',
              importance: 0
          },
          activities: {
              selectedActivities: ['Any'],
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