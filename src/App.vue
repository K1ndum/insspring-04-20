<template>
  <div id="app">
    <div class="content"> 
        <Header />
        <MainWelcomeSection />
        <Services />
        <TechnologyDomains />
        <WhoWeAre />
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import MainWelcomeSection from '@/components/MainWelcomeSection.vue'
import Services from '@/components/Services.vue'
import TechnologyDomains from '@/components/TechnologyDomains.vue'
import WhoWeAre from '@/components/WhoWeAre.vue'




export default {
  name: 'App',
  components: {
    Header, MainWelcomeSection, Services, TechnologyDomains, WhoWeAre
  }
};

</script>

<style lang="scss">

body {
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: 'Helvetica',Arial,sans-serif;
  background:rgba(20,20,25,1);
  height: 8000px;
  overflow: hidden;
}

.mainContent {   
  box-sizing: border-box;
  display: table;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  line-height: 1.55;
}

.tn-atom__img {
  width: 100%;
  display: block;
}

.main {
  position: absolute;
  box-sizing: border-box;
  display: table;
}

.childrenMain {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  -webkit-text-size-adjust: 100%;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
}
</style>
