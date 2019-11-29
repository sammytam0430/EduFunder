<template>
    <b-container class="mb-5">
        <div class="text-center mb-5">
            <h4>What criteria will you use to select a student?</h4>
            <h6>Select all that you want to include</h6>
        </div>
        <b-row class="text-center">
            <b-col lg="3" md = "6" class="mb-3">
                <studentReqModalAge></studentReqModalAge>    
            </b-col>
            <b-col lg="3" md = "6" class="mb-3">
                <studentReqModalActivities></studentReqModalActivities>
            </b-col>
            <b-col lg="3" md = "6" class="mb-3">
                <studentReqModalGender></studentReqModalGender> 
            </b-col>
            <b-col lg="3" md = "6" class="mb-3">
                <studentReqModalStudyYear></studentReqModalStudyYear>   
            </b-col>
        </b-row>
        <b-row class="text-center">
            <b-col lg="3" md = "6" class="mb-3">
                <studentReqModalSchoolLevel></studentReqModalSchoolLevel>   
            </b-col>
            <b-col lg="3" md = "6" class="mb-3">
                <studentReqModalCourseLoad></studentReqModalCourseLoad>
            </b-col>
            <b-col lg="3" md = "6" class="mb-3">
                <studentReqModalStudyField></studentReqModalStudyField>
            </b-col>
            <b-col lg="3" md = "6" class="mb-3">
                <studentReqModalStudySchool></studentReqModalStudySchool>
            </b-col>
        </b-row>
        <b-row class="text-center">
            <b-col lg="3" md = "6" class="mb-3">
                <studentReqModalProvince></studentReqModalProvince> 
            </b-col>
            <b-col lg="3" md = "6" class="mb-3">
                <studentReqModalCitizenship></studentReqModalCitizenship>   
            </b-col>
            <b-col lg="3" md = "6" class="mb-3">
                <studentReqModalFinancialNeed></studentReqModalFinancialNeed>
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
          requirement : {
            selectedCriteria:  {
                age: {
                    criteriaTitle: "Age",
                    selected: false
                },
                province: {
                    criteriaTitle: "Province",
                    selected: false
                },
                gender: {
                    criteriaTitle: "Gender",
                    selected: false
                },
                schoolLevel: {
                    criteriaTitle: "Level of School",
                    selected: false
                },
                studyField: {
                    criteriaTitle: "Field of Study",
                    selected: false
                },
                studySchool: {
                    criteriaTitle: "School of Study",
                    selected: false
                },
                studyYear: {
                    criteriaTitle: "Year of Study",
                    selected: false
                },
                courseLoad: {
                    criteriaTitle: "Course Load",
                    selected: false
                },
                financialNeed: {
                    criteriaTitle: "Financial Need",
                    selected: false
                },
                citizenship: {
                    criteriaTitle: "Citizenship",
                    selected: false
                },
                activities: {
                    criteriaTitle: "Activities",
                    selected: false
                }
            },
            age: {
                selectedAge: [16, 65],
                importance: 0
            },
            province: {
                selectedProvince: ['Did not specify'],
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
                selectedStudyFields: ['Did not specify'],
                importance: 0
            },
            studySchools: {
                selectedStudySchools: ['Any school'],
                importance: 0
            },
            studyYear: {
                selectedStudyYear: 'Did not specify',
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
                selectedCitizenship: ['Did not specify'],
                importance: 0
            },
            activities: {
                selectedActivities: ['Did not specify'],
                importance: 0
            }
          }  
      }
    },
    watch: {
    },
    methods: {
        getReq() {
            this.$emit('returnData', this.$data, true);
        } 
    }
  }
</script>