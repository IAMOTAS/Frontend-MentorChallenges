<template>
  <v-app>

<Header/>    

 <v-main>
   
  
 </v-main>


  </v-app>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  name: 'App',
  components: {Header},

data(){
  return{
    menus: [
      {title:'Home',     route:'home'},
      {title:'About',    route:'about'},
      {title:'Services', route:'services'},
      {title:'Support',  route:'support'},
      {title:'Vision',   route:'vision'},
      {title:'Mission',  route:'mission'},
      {title:'Contact',  route:'contact'},
      {title:'Partners', route:'partners'},
      {title:'Languages',route:'Languages'},
    ]
  }
}

}
</script>
