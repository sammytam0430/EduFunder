<template>
    <b-row class="my-4 text-right">
            <b-col sm="4">
                    <label><code>Ethnicity: </code></label>
            </b-col>
            <b-col sm="3">
                <div>
                    <b-form-select v-model="selected" :options="ethnicities"></b-form-select>
                </div>
            </b-col>
    </b-row>
</template>
<script>
export default{
    name: "studyFieldDD",
    data(){
        return{
        ethnicities:[
            { value:"African", text:"African"},
            { value:"American", text:"American"},
            { value:"Austrian", text:"Austrian"},
            { value:"Canadian", text:"Canadian"},
            { value:"Chinese", text:"Chinese"},
            { value:"French", text:"French"},
            { value:"English", text:"English"},
            { value:"Indian", text:"Indian"},
            { value:"Filipino", text:"Filipino"},
            { value:"Italian", text:"Italian"},
            { value:"Russian", text:"Russian"},
            { value:"Portuguese", text:"Portuguese"},
            { value:"Spanish", text:"Spanish"},
            { value:"Vietnamese", text:"Vietnamese"},
            { value:"Korean", text:"Korean"},
            { value:"Jewish", text:"Jewish"},
            { value:"Japanese", text:"Japanese"},
            { value:"Colombian", text:"Colombian"},
            { value:"South Asian", text:"South Asian"},
            { value:"South African", text:"South"},

        ]
        }
    }
}
</script>