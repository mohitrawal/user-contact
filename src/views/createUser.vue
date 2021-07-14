<template>
    <div>
            <h1 class="text-center">Contact Information</h1>
                <v-container fill-height fluid>
                <v-row align="center"
                    justify="center">
                    <v-col >
                        
                    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
                       <v-text-field
                            v-model="name"
                            :rules="requiredRule"
                            label="Name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="Email"
                            required
                        ></v-text-field>
                         <v-text-field
                            v-model="address"
                            :rules="requiredRule"
                            label="Address"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="city"
                            :rules="requiredRule"
                            label="City"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="zipCode"
                            :rules="requiredRule"
                            label="Zipcode"
                            required
                        ></v-text-field>
                        <v-dialog ref="dialog" v-model="modal" :return-value.sync="dob" persistent width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="dob"
                                    label="Date Of Birth"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="dob" scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="modal = false">
                                    Cancel
                                </v-btn>
                                <v-btn text color="primary" @click="$refs.dialog.save(dob)"> OK </v-btn>
                            </v-date-picker>
                        </v-dialog>

                        
                        <v-btn block color="primary" large raised
                            type="submit">Save Contact</v-btn>
                    </v-form>
                    </v-col>
                </v-row>
                </v-container>
    </div>
</template>
<script>

export default {
    components: {
       
    },
    data: () => ({
        valid: true,
        name:'',
        email:'',
        address:'',
        city:'',
        zipCode:'',
        requiredRule: [
            v => !!v || 'Field is required',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        dob: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        modal:false
    }),
    methods: {
        submit () {
            this.valid = this.$refs.form.validate();
            if(this.valid === true) {
                // calling the state function
                let myContact = {
                    'name' : this.name,
                    'email': this.email,
                    'address':this.address,
                    'city':this.city,
                    'zipCode': this.zipCode,
                    'dob':this.dob
                }
                this.$store.dispatch('ADD_NEW_CONTACT', myContact);
                this.$router.push({ name: 'Home' })
            }
        }
    }
}
</script>
<style scoped>
.text-center {
    text-align: center;
}
</style>
