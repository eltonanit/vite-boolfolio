  <script>
  import ProjectCard from './components/ProjectCard.vue';
  import axios from 'axios';

  export default {
    components: {
      ProjectCard

    }, 

    data() {
      return {
        projects: []
      }
    },
    methods: {
      getAllProjects() {
        axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
          this.projects = res.data.results;

        });
      }
    },
    created() {
      this.getAllProjects();

     }
  }
</script>
 
 <template>

  <div claas="container p-2">
    <div claas="row gy-4">
      <div claas="col-12">
        <h1 claas="text-center">Elenco progetti</h1>
      </div>
    </div>
    <div claas="row">
      <ProjectCard v-for="proj in projects" :key="proj.id" :project="proj"/>
       
    </div>
  </div>

</template>

<style lang="scss">

 @use './styles/generals.scss'
 </style>
