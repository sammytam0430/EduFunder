<template>
    <b-container class="w-75 p-5 formBody">
        <b-container class="pb-5">
            <b-row class = "mb-4">
                <b-col class = "text-center font-weight-bold"><div id = "donorType">Are You a <i>Private / Corporate</i> Donor?</div></b-col>
            </b-row>
            <b-row>
                <b-col class = "text-center">
                    <b-button class="w-75" @click="showPrivate()" :variant="privateBtn">Private</b-button>
                </b-col>
                <b-col class = "text-center">
                    <b-button class="w-75" @click="showCorporate()" :variant="corporateBtn">Corporate</b-button >
                </b-col>
            </b-row>
        </b-container>
        <DonorFormPrivate v-if="selectedPrivate"/>
        <DonorFormCorporate v-else/>
    </b-container>
</template>

<script>
import DonorFormPrivate from "@/components/DonorFormPrivate.vue";
import DonorFormCorporate from "@/components/DonorFormCorporate.vue"

export default {
    name: "DonorProfile",
    components: { 
        DonorFormPrivate,
        DonorFormCorporate
        },
    data() {
      return {
        privateBtn: "primary",
        corporateBtn: "outline-primary",
        selectedPrivate: true
      }
    },
    methods: {
        showPrivate() {
            this.selectedPrivate = true;
            this.privateBtn = "primary";
            this.corporateBtn = "outline-primary";
        },
        showCorporate() {
            this.selectedPrivate = false;
            this.privateBtn = "outline-primary";
            this.corporateBtn = "primary";
        },
        onSubmit() {

        },
        onReset() {
            
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    .formBody {
        font-family: "Montserrat";
    }

    #donorType {
        font-size: 20pt;
    }
</style>