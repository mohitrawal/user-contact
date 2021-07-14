<template>
    <div>
        <h1 class="text-center">Welcome to my application</h1>
        <br>
        <h1 class="text-center">Please see all the user list</h1>
        <InvoiceTable :headers="headers" :data="getContactList"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Home",
    components: {
        InvoiceTable: () => import('../components/InvoiceTable.vue')
    },
    data () {
      return {
          headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Email', value: 'email' },
          { text: 'City', value: 'city' },
          { text: 'Zipcode', value: 'zipCode' },
        ]
      }
    },
    computed: {
        ...mapGetters({
            getContactList: "GET_CONTACT_LIST"
        }),
    }
}
</script>
<style scoped>
.text-center {
    text-align: center;
}
</style>
