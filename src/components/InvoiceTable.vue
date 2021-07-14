<template>
    <v-container>
        <div class="align-right">
          <router-link to="/create-user" active-class="active ">Create User</router-link>
        </div>
        <v-data-table
            :headers="headers"
            :items="data"
            :items-per-page="5"
            class="elevation-1"
            :search="search"
        >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          ></v-text-field>
      </template>
        </v-data-table>
    </v-container>
</template>
<script>
  export default {
    props: ['headers','data'],
    data () {
      return {
        search:'',
      }
    },
  }
</script>
<style>
.align-right {
  text-align:right
}
</style>
