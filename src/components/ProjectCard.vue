<script>
export default {
    name: 'ProjectCard',
    props:{
        project: Object
    }
    
}
</script>
<template>
     <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img class="card-img-top" :src="project.image != null ? `http://127.0.0.1:8000/storage/${project.image}` : `https://placehold.co/600x400?text=Immagine+copertina`" >
          <div class="card-body">
            <h4 class="card-title">{{project.name}}</h4>
            <p>{{ project.summary }}</p>
          </div>
        </div>
      </div>
</template>

<style lang="scss">
 @use '../styles/generals.scss'
 </style>