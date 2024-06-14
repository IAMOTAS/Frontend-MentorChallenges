<template>

    <v-container class="my-15">
    
        <V-row justify="center">
    
            <v-col lg="12" class="text-center">
                <v-subheader class="text-h4 justify-center">
                    Services
                </v-subheader>
                <p>Below are the services we offer and some already completed Projects.</p>
            </v-col>
            
            <v-col lg="12">
                <div class="text-center">
                    <v-chip :color ="activePortfolio='webapp' ? 'success' : ''" class="mx-5">Web App</v-chip>
                    <v-chip @click="activePortfolio='Mobile App' ? 'success' : ''" class="mx-5">Mobile App</v-chip>
                    <v-chip @click="activePortfolio='Desktop App' ? 'success' : ''" class="mx-5">Desktop App</v-chip>
                    <v-chip @click="activePortfolio='Telecomms' ? 'success' : ''" class="mx-5">Telecomms</v-chip>
                    <v-chip @click="activePortfolio='Networking' ? 'success' : ''" class="mx-5">Networking</v-chip>
                    <v-chip @click="activePortfolio='Sys-Admin' ? 'success' : ''" class="mx-5">Sys-Admin</v-chip>
                    <v-chip @click="activePortfolio='Telecomms' ? 'success' : ''" class="mx-5">Telecomms</v-chip>
                    <v-chip @click="activePortfolio='AI&ML' ? 'success' : ''" class="mx-5">AI&ML</v-chip>
                    <v-chip @click="activePortfolio='Electronics' ? 'success' : ''" class="mx-5">Electronics</v-chip>
                    <v-chip @click="activePortfolio='cryptoProg.' ? 'success' : ''" class="mx-5">cryptoProg.</v-chip>
                </div>
            </v-col>
          <slot >

            <v-col lg="3" >
                <v-card class="mx-auto" max-width="400">
    <v-img
      color="surface-variant"
      height="200"
      src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
      cover
    >


      <v-toolbar color="transparent">
        <template v-slot:prepend>
          <v-btn icon="$menu"></v-btn>
        </template>

        <v-toolbar-title class="text-h6" text="Messages"></v-toolbar-title>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-toolbar>
    </v-img>

    <v-card-text>
      <div class="font-weight-bold ms-1 mb-2">Today</div>

      <v-timeline align="start" density="compact">
        <v-timeline-item
          v-for="message in messages"
          :key="message.time"
          :dot-color="message.color"
          size="x-small"
        >
          <div class="mb-4">
            <div class="font-weight-normal">
              <strong>{{ message.from }}</strong> @{{ message.time }}
            </div>

            <div>{{ message.message }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
            </v-col>
          </slot>

          <slot >

<v-col lg="3" >
    <v-card class="mx-auto" max-width="400">
<v-img
color="surface-variant"
height="200"
src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
cover
>


<v-toolbar color="transparent">
<template v-slot:prepend>
<v-btn icon="$menu"></v-btn>
</template>

<v-toolbar-title class="text-h6" text="Messages"></v-toolbar-title>

<template v-slot:append>
<v-btn icon="mdi-dots-vertical"></v-btn>
</template>
</v-toolbar>
</v-img>

<v-card-text>
<div class="font-weight-bold ms-1 mb-2">Today</div>

<v-timeline align="start" density="compact">
<v-timeline-item
v-for="message in messages"
:key="message.time"
:dot-color="message.color"
size="x-small"
>
<div class="mb-4">
<div class="font-weight-normal">
  <strong>{{ message.from }}</strong> @{{ message.time }}
</div>

<div>{{ message.message }}</div>
</div>
</v-timeline-item>
</v-timeline>
</v-card-text>
</v-card>
</v-col>
</slot>

<slot >

<v-col lg="3" >
    <v-card class="mx-auto" max-width="400">
<v-img
color="surface-variant"
height="200"
src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
cover
>


<v-toolbar color="transparent">
<template v-slot:prepend>
<v-btn icon="$menu"></v-btn>
</template>

<v-toolbar-title class="text-h6" text="Messages"></v-toolbar-title>

<template v-slot:append>
<v-btn icon="mdi-dots-vertical"></v-btn>
</template>
</v-toolbar>
</v-img>

<v-card-text>
<div class="font-weight-bold ms-1 mb-2">Today</div>

<v-timeline align="start" density="compact">
<v-timeline-item
v-for="message in messages"
:key="message.time"
:dot-color="message.color"
size="x-small"
>
<div class="mb-4">
<div class="font-weight-normal">
  <strong>{{ message.from }}</strong> @{{ message.time }}
</div>

<div>{{ message.message }}</div>
</div>
</v-timeline-item>
</v-timeline>
</v-card-text>
</v-card>
</v-col>
</slot>
          <slot >

<v-col lg="3" >
    <v-card class="mx-auto" max-width="400">
<v-img
color="surface-variant"
height="200"
src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
cover
>


<v-toolbar color="transparent">
<template v-slot:prepend>
<v-btn icon="$menu"></v-btn>
</template>

<v-toolbar-title class="text-h6" text="Messages"></v-toolbar-title>

<template v-slot:append>
<v-btn icon="mdi-dots-vertical"></v-btn>
</template>
</v-toolbar>
</v-img>

<v-card-text>
<div class="font-weight-bold ms-1 mb-2">Today</div>

<v-timeline align="start" density="compact">
<v-timeline-item
v-for="message in messages"
:key="message.time"
:dot-color="message.color"
size="x-small"
>
<div class="mb-4">
<div class="font-weight-normal">
  <strong>{{ message.from }}</strong> @{{ message.time }}
</div>

<div>{{ message.message }}</div>
</div>
</v-timeline-item>
</v-timeline>
</v-card-text>
</v-card>
</v-col>
</slot>

        </V-row>
    
    </v-container>
    
    </template>
    
    <script>
    
        export default{
            name : "ServiceOffer",
            data(){
              return{
                aactivePortfolio:"webApp",
                webApps:[
                  {title:'web App 1'}
                ]
                //Do same for other services.
              }
            }
        }
    
    </script>
    
    <style scoped>
    
    </style>