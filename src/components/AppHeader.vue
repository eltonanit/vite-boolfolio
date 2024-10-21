<script>
export default {
    
}
</script>


   <template>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <ul class="list-unstyled d-flex justify-content-center">
                        <li class="me-2">
                            <router-link :to="{ name: 'homepage'}">Home</router-link>
                           
                        </li>
                        <li class="me-2">
                            <router-link :to="{ name: 'portfolio'}">Portfolio</router-link>
                           
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>


<style lang="">
    
</style>