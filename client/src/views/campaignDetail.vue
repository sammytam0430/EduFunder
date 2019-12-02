<template>
    <div>
        <!--First row content --> 
        <b-row>
            <b-col cols="6" class="text-right">
                <img class="image" src="https://picsum.photos/300/300/?image=41"/>
            </b-col>
            <b-col cols="6">
                <b-row>
                    <h2 class="title">Making a difference</h2>
                </b-row>
                <b-row>
                    by John Lee
                </b-row>
                <b-row>
                    <!--Students Location-->
                    <p id="address"><img id="location" src="../assets/mapMarker.png">Surrey, British Columbia, Canada</p>
                </b-row>
                <b-row class="mb-2 funding-status">
                    <b-col cols="2">
                        $2400.00
                    </b-col>
                    <b-col cols="2">
                        $20.00
                    </b-col>
                    <b-col cols="3">
                        321 Days Ago
                    </b-col>
                </b-row>
                <b-row class="funding-criteria">
                    <b-col cols="2">
                        Funding Goal
                    </b-col>
                    <b-col cols="2">
                        Fund Raised
                    </b-col>
                    <b-col cols="3">
                        Days to go
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col>
                        <p>Raised Percent: 0.12%</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-progress height="10px" :max="max">
                        <b-progress-bar :value="value">
                        </b-progress-bar>
                        </b-progress>
                    </b-col>
                </b-row>
                <b-row class="mt-4">
                    <b-col>
                        <b-button variant="success">Donate Now</b-button>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        <!--Second row content -->

        <!--Tabs -->



    </div>   
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
    p{
        font-family: 'Rubik', sans-serif;
        font-weight: 300;
        color: #737373;
        font-size: 18px;
    }
    .title{
        font-size: 30px;
        line-height: 40px;
        margin-bottom: 5px;
        font-family: "Source Sans Pro";
        font-weight: 600;
        font-style: normal;
        color: #313538;
    }
    #address{
        font-family: 'Rubik', sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }
    #location{
        padding-top:1%;
        padding-bottom:1%;
    }
    .funding-criteria{
        font-size:12px;
    }
    .funding-status{
        font-size:20px;
        font-weight: bold;
    }
</style>
    