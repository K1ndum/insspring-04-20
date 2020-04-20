<template>
    <div class="mainContent">
        <div class="main welcom-1">
            <div class="childrenMain welcom-2">
                We make tech
            </div>
        </div>    
        <div class="main welcom-3">
            <div class="childrenMain welcom-4">
                Build your ideas from scratch
            </div>
        </div>
        <div class="main contact-1">
            <a class="childrenMain contact-2" href="#contact-us">
                Contact Us
            </a>
        </div>
    </div>
</template>                   


<style scoped lang="scss">

    .welcom-1 {  
        @include mainLocationBlock(270px, calc(50% - 600px + 0px), 1500px, $mainColor, 62);
    }
    .welcom-2 {
        @include textSettings(170px);
        letter-spacing: 3px;
    }

    .welcom-3 {
        @include mainLocationBlock(515px, calc(50% - 600px + 20px), 560px, $mainColor, 64);
    }

    .welcom-4 {
        @include textSettings(32px);
    }

    .contact-1 {
        @include mainLocationBlock(650px, calc(50% - 600px + 20px), 210px, $mainColor, 63);
        height: 55px;
        text-align: center;
    }

    .contact-2 {
        @include textSettings(24px);
        border-width: 1px;
        border-radius: 30px;
        background-color: #4949dd;
        text-decoration: none;
    }
    
    @media (max-width: 1199px) {

        .welcom-1 {
            top: 210px;
            left: calc(50% - 480px + 60px);
        }
        .welcom-2 {
            font-size: 100px;
        }

        .welcom-3 {
            top: 355px;
            left: calc(50% - 480px + 60px);
        }

        .contact-1 {
            top: 520px;
            left: calc(50% - 480px + 60px);
        }

    }

    @media (max-width: 959px) {

        .welcom-1 {
            top: 280px;
            left: calc(50% - 320px + 40px);
            width: 620px;
        }

        .welcom-2 {
            font-size: 60px;
            line-height: 1;
            letter-spacing: 1px;;   
        }

        .welcom-3 {
            top: 355px;
            left: calc(50% - 320px + 40px);
        }

        .welcom-4 {
            font-size: 28px;
        }

        .contact-1 {
            top: 459px;
            left: calc(50% - 320px + 40px);
            width: 180px;
            height: 48px;
        }

        .contact-2 {
            font-size: 18px;
        }
    }

    @media (max-width: 639px) {

        .welcom-1 {
            top: 265px;
            left: calc(50% - 240px + 30px);
            width: 450px;
        }

        .welcom-2 {
            font-size: 52px;
        }

        .welcom-3 {
            top: 330px;
            left: calc(50% - 240px + 30px);
            width: 370px;
        }

        .welcom-4 {
            font-size: 18px;
        }

        .contact-1 {
            top: 410px;
            left: calc(50% - 240px + 30px);
        }

    }

    @media (max-width: 479px) {

        .welcom-1 {
            top: 175px;
            left: calc(50% - 160px + 30px);
            width: 313px;
        }

        .welcom-2 {
            font-size: 80px;
        }

        .welcom-3 {
            top: 445px;
            left: calc(50% - 160px + 30px);
            width: 250px;
            text-align: left;
        }

        .welcom-4 {
            font-size: 16px;
        }

        .contact-1 {
            top: 510px;
            left: calc(50% - 160px + 30px);
            width: 260px;
        }

    }

</style>