<script setup lang="ts">
import { Transition } from 'vue';
import { RouterView } from 'vue-router';
import Layout from './components/layout/Layout.vue';
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Layout>
      <Transition name="slide-fade" mode="out-in" appear>
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </Layout>
  </RouterView>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
