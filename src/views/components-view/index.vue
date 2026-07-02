<script setup lang="ts">
import Link from '@/components/navigation/link/Link.vue';
import Sidebar from '@/components/navigation/sidebar/Sidebar.vue';
import SidebarColapseGroup from '@/components/navigation/sidebar/SidebarColapseGroup.vue';
import SideBarGroup from '@/components/navigation/sidebar/SideBarGroup.vue';
import ActiveComponent from './ActiveComponent.vue';

</script>

<template>

    <main>
        <Sidebar>

            <template #body>

                <SideBarGroup group-name="Componentes">

                    <Link>Botão</Link>
                    <Link>Checkbox</Link>

                </SideBarGroup>

                <SidebarColapseGroup>
                    oi
                </SidebarColapseGroup>

            </template>

        </Sidebar>

        <ActiveComponent />
    </main>

</template>