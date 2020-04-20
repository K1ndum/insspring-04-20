<template>
    <div class="navBar">
        <div class="header">
            <div class="logo">
                <div>
                    <a href="">
                        <img src="https://static.tildacdn.com/tild3763-3832-4733-a630-623939396432/White.svg" 
                        class="t456__imglogo t456__imglogomobile" 
                        imgfield="img" 
                        style="max-width: 230px; width: 230px;" 
                        alt="Company">
                    </a>
                </div>
            </div>
            <div class="t280__burger"> 
                <span style="background-color:#ffffff;"></span> 
                <span style="background-color:#ffffff;"></span> 
                <span style="background-color:#ffffff;"></span> 
                <span style="background-color:#ffffff;"></span> 
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#what-we-do">What We Do</a></li>   
                    <li><a href="#whu-we-are">Who We Are</a></li>   
                    <li><a href="#engagement-models">Engagement Models</a></li>   
                    <li><a href="#contact-us">Contact Us</a></li>   
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

ul {
    float: right;
    list-style-type: none;
    display: block;
    padding: 0;
    
}

li {
    clear: both;
    font-size: 16px;
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0;
    white-space: nowrap;

}

a {
    text-decoration: none;
    color: #bfbfd9;
    font-size: 18px;
    font-weight: 400;
    margin: 0px;
    padding: 0px;
    border: 0px;

}


.header {
     width: 100%;
     height: 90px;
     display: table;
     max-width: 1200px;
     margin: 0 auto;
     position: relative;
     box-sizing: border-box;
}

.logo {
     display: table-cell;
     vertical-align: middle;
     padding-left: 20px;
}

.menu {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    position: relative;
}

.navBar {
    background:rgba(20,20,25,1);
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 999;
}

@media (max-width: 1199px) {
    .header {
        background: rgb(83, 13, 13);
    }
}

@media (max-width: 959px) {

    .header {
     background: rgb(21, 20, 129);
     height: 50px;
    }

    ul {
        display: none;
    }

    .t280__burger {
        position: absolute;
        width: 28px;
        height: 20px;
        top: 50%;
        margin-top: -10px;
        right: 40px;
        cursor: pointer;
        z-index: 999;
    }

    .t280__burger span{
        display: block;
        position: absolute;
        width: 100%;
        opacity: 1;
        left: 0;
        height: 3px;
        background-color: #000;
    }

    span:nth-child(3) {
    top: 8px;
    }

    span:nth-child(2) {
    top: 16px;
    
    }

}

@media (max-width: 639px) {

    .header {
     background: rgb(14, 95, 39);
    }

}

@media (max-width: 479px) {

    .header {
     background: rgb(169, 184, 41);
    }

}

</style>
