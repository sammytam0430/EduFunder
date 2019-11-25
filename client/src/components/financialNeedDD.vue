<template>
    <b-row class="my-4 text-right">
            <b-col sm="4">
                    <label><code>Fiancial Need: </code></label>
            </b-col>
            <b-col sm="3">
                <div>
                    <b-form-select v-model="selected" :options="financialNeed"></b-form-select>
                </div>
            </b-col>
    </b-row>
</template>
<script>
export default{
    name: "financialNeed",
    data(){
        return{
        financialNeed:[
                {value:"Yes", text:"Yes"},
                {value:"No", text:"No"},
            ]
        }
    }
};
</script>