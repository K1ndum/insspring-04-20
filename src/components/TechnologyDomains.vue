<template>
    <div class="mainContent">

        <div class="main technology-1">
            <div class="childrenMain technology-2">
                Technology Domains<br>
            </div>
        </div>

        <div class="main technology-3">
            <div class="childrenMain technology-4">
                • Web Applications and Services<br><br>
                • Mobile Applications<br><br>
                • Enterprise Applications Integration<br><br>
                • System Integration<br><br>
                • Clouds Technologies, Microservices<br><br> 
                • Data Processing<br><br>
                • Blockchain<br><br></div>
        </div>

        <div class="main technology-img">
            <div class="childrenMain"> 
                <img 
                class="tn-atom__img" 
                data-original="https://static.tildacdn.com/tild3562-3561-4361-b662-616261346538/Group_37.svg" 
                imgfield="tn_img_1578910215129" 
                src="https://static.tildacdn.com/tild3562-3561-4361-b662-616261346538/Group_37.svg"
                > 
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">

    .technology-1 {
        @include mainLocationBlock(1845px, calc(50% - 600px + 20px), 718px, $mainColor, 61);
        letter-spacing: 3px;
    }

    .technology-2 {
        @include textSettings(60px);
    }

    .technology-3 {
        @include mainLocationBlock(2000px, calc(50% - 600px + 20px), 360px, $mainColor, 59);
    }

    .technology-4 {
        @include textSettings(18px);
    }

    .technology-img {
        @include mainLocationBlock(1610px, calc(50% - 600px + 380px), 1120px, none, 2);

    }

    @media (max-width: 1199px) {

        .technology-1 {
            top: 1674px;
            left: calc(50% - 480px + 60px);
            width: 388px;
        }

        .technology-2 {
            line-height: 1;
        }

        .technology-3 {
            top: 1855px;
            left: calc(50% - 480px + 60px);
        }

        .technology-4 {
            line-height: 1.25;
        }

        .technology-img {
            top: 1440px;
            left: calc(50% - 480px + 220px);
        }

    }

    @media (max-width: 959px) {

        .technology-1 {
            top: 1465px;
            left: calc(50% - 320px + 40px);
            width: 518px;
        }

        .technology-2 {
            font-size: 50px;
        }

        .technology-3 {
            top: 1620px;
            left: calc(50% - 320px + 40px);
            width: 520px;
        }

        .technology-4 {
            font-size: 18px;
            line-height: 1;
        }

        .technology-img {
            top: 1235px;
            left: calc(50% - 320px + 240px);
            width: 620px;
        }

    }

    @media (max-width: 639px) {

        .technology-1 {
            top: 1318px;
            left: calc(50% - 240px + 30px);
            width: 368px;
        }

        .technology-2 {
            font-size: 36px;
        }

        .technology-3 {
            top: 1443px;
            left: calc(50% - 240px + 30px);
            width: 400px;
        }

        .technology-4 {
            font-size: 18px;
        }

        .technology-img {
            top: 1150px;
            left: calc(50% - 240px + 170px);
            width: 480px;
        }

    }

    @media (max-width: 479px) {

        .technology-1 {
            top: 1496px;
            left: calc(50% - 160px + 30px);
            width: 248px;
            text-align: left;
        }

        .technology-2 {
            font-size: 32px;
        }

        .technology-3 {
            top: 1611px;
            left: calc(50% - 160px + 30px);
            width: 270px;
        }

        .technology-4 {
            font-size: 16px;
        }

        .technology-img {
            top: 1225px;
            left: calc(50% - 160px + -40px);
            width: 300px;
        }

    }
</style>