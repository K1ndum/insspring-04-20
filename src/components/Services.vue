<template>
    <div class="mainContent">

        <div class="main what-we-do"> 
            <div class="childrenMain"> 
                <div id="what-we-do" style="opacity: 0">
                </div> 
            </div> 
        </div>

        <div class="main services-1">
            <div class="childrenMain services-2" >
                Services<br>
            </div>
        </div>

        <div class="main services-3">
            <div class="childrenMain services-4">
                • Business Analysis<br><br>
                • Product Management<br><br>
                • User Experience<br><br>
                • User Interface Design<br><br>
                • Project Management<br><br><br>
            </div>
        </div>

        <div class="main services-5">   
            <div class="childrenMain services-6">
                • Solutions &amp; Software Architecture<br><br>
                • Cloud Services<br><br>• DevOps Services<br><br>
                • Custom Software Development &amp; Delivery<br><br>
                • Quality Assurance<br><br>
                • Software &amp; Infrastructure Maintenance &amp; Support<br>
            </div>
        </div>     

        <div class="main services-img">
            <div class="childrenMain"> 
                <img 
                class="tn-atom__img" 
                data-original="https://static.tildacdn.com/tild3339-3335-4064-b761-323132313239/Services_1.svg" 
                imgfield="tn_img_1579082242299" 
                src="https://static.tildacdn.com/tild3339-3335-4064-b761-323132313239/Services_1.svg"
                > 
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">

    .what-we-do {
        @include mainLocationBlock(884px, calc(50% - 600px + 682px), 86px, none, 65);
    }

    .services-1{
        @include mainLocationBlock(975px, calc(50% - 600px + 20px), 160px, $mainColor, 58);
        letter-spacing: 3px;
    }

    .services-2 {
        @include textSettings (60px);
    }

    .services-3 {
        @include mainLocationBlock(1121px, calc(50% - 600px + 20px), 360px, $mainColor, 56);
    }
    
    .services-4 {
        @include textSettings (18px);
    }

    .services-5 {
        @include mainLocationBlock(1121px, calc(50% - 600px + 390px), 360px, $mainColor, 55);
    }

    .services-6 {
        @include textSettings (18px);
    }

    .services-img {
        @include mainLocationBlock(870px, calc(50% - 600px + 570px), 860px, none, 54);
    }


    @media (max-width: 1199px) {

        .what-we-do {
            top: 673px;
            left: calc(50% - 480px + 652px);
        }

        .services-1 {
            top: 840px;
            left: calc(50% - 480px + 60px);
        }

        .services-3 {
            top: 975px;
            left: calc(50% - 480px + 60px);
        }

        .services-4 {
            line-height: 1.25;
        }

        .services-5 {
            top: 1185px;
            left: calc(50% - 480px + 60px);
        }

        .services-6 {
            line-height: 1.25;
        }

        .services-img {
            top: 785px;
            left: calc(50% - 480px + 260px);
        }

    }

    @media (max-width: 959px) {

        .what-we-do {
            top: 510px;
            left: calc(50% - 320px + 448px);
        }
        
        .services-1 {
            top: 780px;
            left: calc(50% - 320px + 40px);
        }

        .services-2 {
            font-size: 50px;
        }

        .services-3 {
            top: 900px;
            left: calc(50% - 320px + 40px);
        }

        .services-4 {
            font-size: 18px;
            line-height: 1;
        }

        .services-5 {
            top: 1080px;
            left: calc(50% - 320px + 40px);
            width: 560px;
            text-align: left;
        }

        .services-6 {
            font-size: 18px;
            line-height: 1;
        }

        .services-img {
            top: 555px;
            left: calc(50% - 320px + 160px);
            width: 710px;
        }

    }

    @media (max-width: 639px) {

        .what-we-do {
            top: 617px;
            left: calc(50% - 240px + 355px);
        }
        
        .services-1 {
            top: 640px;
            left: calc(50% - 240px + 30px);
        }

        .services-2 {
            font-size: 36px;
        }

        .services-3 {
            top: 740px;
            left: calc(50% - 240px + 30px);
        }

        .services-5 {
            top: 920px;
            left: calc(50% - 240px + 30px);
            width: 410px;
        }

        .services-img {
            top: 430px;
            left: calc(50% - 240px + 110px);
            width: 580px;
        }

    }

    @media (max-width: 479px) {

        .what-we-do {
            top: 649px;
            left: calc(50% - 160px + 212px);
        }
        
        .services-1 {
            top: 735px;
            left: calc(50% - 160px + 30px);
        }

        .services-2 {
            font-size: 32px;
        }

        .services-3 {
            top: 821px;
            left: calc(50% - 160px + 30px);
        }

        .services-4 {
            font-size: 16px;
        }

        .services-5 {
            top: 981px;
            left: calc(50% - 160px + 30px);
            width: 230px;
        }

        .services-6 {
            font-size: 16px;
        }

        .services-img {
            top: 765px;
            left: calc(50% - 160px + 110px);
            width: 490px;
        }

    }

</style>