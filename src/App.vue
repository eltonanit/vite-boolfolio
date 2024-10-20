  <script>
  import axios from 'axios';

  export default {
    data(){
      return{
        projects: []
      }
    },
    methods:{
      getAllProjects(){
        axios.get('https://127.0.0.1:8000/api/projects').then((res) => {
          this.projects = res.data.results;

        });
      }
    },
    created(){
      this.getAllProjects(); 

    }
  }
</script>
 
 <template lang="">
  <div claas="container">
    <div claas="row">
      <div claas="col-12">
        <h1 claas="text-center">Elenco progetti</h1>
      </div>
      <div claas="col-12">
        <!--elenco progetti -->
        <<div class="row">
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <img class="card-img-top" src="">
            <div class="card-body">
                <h4 class="card-title">Titolo</h4>
                <p>Lorem ipsum</p>
            </div>
        </div>
    </div>
</div>
    </div>
    </div>
  </div>
 </template>

<style lang="scss">
@import './styles/generals.scss'
</style>