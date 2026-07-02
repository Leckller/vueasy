<script setup lang="ts">
import Link from '@/components/navigation/link/Link.vue';
import Sidebar from '@/components/navigation/sidebar/Sidebar.vue';
// import SidebarColapseGroup from '@/components/navigation/sidebar/SidebarColapseGroup.vue';
import SideBarGroup from '@/components/navigation/sidebar/SideBarGroup.vue';
import ActiveComponent from './ActiveComponent.vue';

</script>

<template>

    <main>
        <ActiveComponent />
    </main>

</template>

<style scoped>
main {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}
</style>