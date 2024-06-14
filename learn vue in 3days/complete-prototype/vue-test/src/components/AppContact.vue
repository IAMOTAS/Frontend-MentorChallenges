<template>

<v-container class="my-15">
    
    <V-row justify="center">

        <v-col lg="12" class="text-center">
            <v-subheader class="text-h4 justify-center">
                ContactUs
            </v-subheader>
            <p>Get intouch with our team.</p>
        </v-col>

        <v-col lg="6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254133.52713415658!2d-0.3445424528422615!3d5.591185714579514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1718387437959!5m2!1sen!2sgh" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </v-col>

       

    </V-row>

    
    
    <v-col lg="6">
        <form @submit.prevent="submit">
    <v-text-field
      v-model="contactInfo.name"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="contactInfo.phonenumber"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Phone Number"
    ></v-text-field>

    <v-text-field
      v-model="contactInfo.email"
      :error-messages="email.errorMessage.value"
      label="E-mail"
    ></v-text-field>

    <v-select
      v-model="select.value.value"
      :error-messages="select.errorMessage.value"
      :items="items"
      label="Select"
    ></v-select>

    <v-checkbox
      v-model="checkbox.value.value"
      :error-messages="checkbox.errorMessage.value"
      label="Option"
      type="checkbox"
      value="1"
    ></v-checkbox>

    <v-btn
      class="me-4"
      type="submit"
    >
      submit
    </v-btn>

<v-textarea labeel="message" v-model="contactInfo.message">

</v-textarea>

    <v-btn @click="handleReset">
      clear
    </v-btn>
  </form>
        </v-col>  

        

</v-container>

</template>

<script>

export default{
    name:"AppContact",
    data(){
        return{
            contactInfo:{

            }
        }
    }
}

</script>

<style scoped>

</style>