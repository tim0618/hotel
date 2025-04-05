<script setup>
import MainLayout from './layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <template #context>
      <div class="content">
        <router-view></router-view>
      </div>
    </template>
  </MainLayout>

</template>

<style scoped>
.content{
  padding-top: 50px;
  margin: 20px;
}
</style>