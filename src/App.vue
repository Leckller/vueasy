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
@import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Chelsea Market", system-ui;
  font-weight: 400;
  font-style: normal;
  color: rgb(49, 66, 82);
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
