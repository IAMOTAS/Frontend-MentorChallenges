<template>
  <v-app>

    <v-app-bar

style="padding:0px 90px"

 app
 color="dark"
 light
 elevation="6"
 
 
 >

 <v-toolbar-title> O.T.A.S </v-toolbar-title>
<v-spacer/>
 <v-list>

<v-list-item  v-for="(menu, index) in menus" :key="index" :to="menu.route">
  <v-list-item-title>{{ menu.title }}</v-list-item-title>
</v-list-item>

 </v-list>

</v-app-bar>

 <v-main>
   
  
 </v-main>


  </v-app>
</template>

<script>


export default {
  name: 'App',

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
