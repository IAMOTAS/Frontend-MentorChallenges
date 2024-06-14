<template>

<v-container class="my-15">
    
    <V-row justify="center">

        <v-col lg="12" class="text-center">
            <v-subheader class="text-h4 justify-center">
                Partners
            </v-subheader>
            <p>2821Labs Partners with companies like BLKHD_Imaginations|IndustriRiject Inc.</p>
        </v-col>

        <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              class="bg-grey-lighten-2"
              height="125"
              src="https://picsum.photos/350/165?random"
            ></v-img>
            <v-card-title class="text-h6">
              height
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              class="bg-grey-lighten-2"
              height="125"
              src="https://picsum.photos/350/165?random"
              cover
            ></v-img>
            <v-card-title class="text-h6">
              height with cover
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              class="bg-grey-lighten-2"
              max-height="125"
              src="https://picsum.photos/350/165?random"
            ></v-img>
            <v-card-title class="text-h6">
              max-height
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              class="bg-grey-lighten-2"
              max-height="125"
              src="https://picsum.photos/350/165?random"
              cover
            ></v-img>
            <v-card-title class="text-h6">
              max-height with cover
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>

        </V-row>

</v-container>

</template>

<script>

export default{
    name:"AppPartners"
}

</script>

<style scoped>

</style>