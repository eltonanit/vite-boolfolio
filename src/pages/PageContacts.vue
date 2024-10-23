<script>
import axios from 'axios';

import { store } from './store.js';

export default {
    data(){
        return{
            store,
            name:'',
            surname:'',
            email:'',
            phone:'',
            content:''
        }
    },
    methods: {
        sendForm() {
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                content: this.content
            }

            axios.post(`${store.baseUrl}/contacts`, data).then((res) => {
                if (res.data.success) {
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.phone = '';
                    this.content = '';
                }
            });
        }
    }

}
</script>

<template>
    <div class="my-5">
        <div class="container">
            <div class="row gy-5">
                <div class="col-12">
                    <h1 class="text-center">Contatti</h1>
                </div>
                <div class="col-12">
                    <form method="post" @submit.prevent="sendForm()">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <label class="control-label">Nome</label>
                                <input type="text" class="form-control" name="name" id="name" v-model="name" placeholder="Nome">
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label">Cognome</label>
                                <input type="text" class="form-control" name="surnamw" id="surnamw" v-model="surnamw" placeholder="Cognome">
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label">Email</label>
                                <input type="text" class="form-control" name="email" id="email" v-model="email" placeholder="Email">
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label">Telefono</label>
                                <input type="text" class="form-control" name="phone" id="phone" v-model="phone" placeholder="Telefono">
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label">Messaggio</label>
                                <input type="text" class="form-control" name="content" id="content" v-model="content"
                                placeholder="Messaggio">
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-sm btn-primary">Invia</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style >
    
</style>