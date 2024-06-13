<template>

<v-container class="pt-15">

<v-row>

<v-col lg="6">
<h2 class="intro-text">This was made with vuetify</h2>
<p class="description">This is the beginning we still on our way to the top</p>
<v-btn color="primary" class="white--text" mr="10" rounded>We Begin</v-btn>
<v-btn color="indigo" class="white--text" rounded>
    <v-icon>mdi-play-circle</v-icon> 
    Watch Video
</v-btn>
</v-col>

<v-col lg="6">
<img width="100%" src="" alt="_blank"/>
</v-col>

</v-row>

</v-container>
</template>

<script>

export default{

    name: "HeroComponent"

}

</script>

<style scoped>

h2.intro-text {
    font-size:60px;
    font-weight:bold;
    color:#444;
}

p.description{
    font-size: 19px;
    font-family:cursive;
    margin:32 0px;
    color:#444444ba;
}

</style>