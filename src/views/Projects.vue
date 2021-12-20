<template>
  <div id="workflow-list" class="container pt-3">
    <h3>Projects</h3>
    <ProjectCard v-for="item in allProjects" :key="item.id" :id="item.id" :title="item.title" class="mt-2"></ProjectCard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import ProjectCard from '@/components/ProjectCard.vue'

@Component({
  components: {
    ProjectCard
  },
  computed: mapState(['allProjects'])
})
export default class Projects extends Vue {}
</script>

<style scoped>
</style>
