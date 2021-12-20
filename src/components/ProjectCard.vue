<template>
  <div class="workflow-card card card-body">
    <router-link :to="'/workflows/'+id"><span class="title">{{ title }}</span></router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class WorkflowCard extends Vue {
  @Prop() private id!: string;
  @Prop() private title!: string;
}
</script>

<style scoped>
.title {

}
</style>
