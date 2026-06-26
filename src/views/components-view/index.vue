<script setup lang="ts">
import Link from '@/components/links/Link.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import SidebarColapseGroup from '@/components/sidebar/SidebarColapseGroup.vue';
import SideBarGroup from '@/components/sidebar/SideBarGroup.vue';

</script>

<template>

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

</template>