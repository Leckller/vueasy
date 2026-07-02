<script setup lang="ts">
import Link from '@/components/navigation/link/Link.vue';
import Sidebar from '@/components/navigation/sidebar/Sidebar.vue';
import SideBarGroup from '@/components/navigation/sidebar/SideBarGroup.vue';
import HighLightText from '@/components/typography/texts/HighLightText.vue';

</script>

<template>
    <header>

        <RouterLink to="/">
            <img src="../../../public/favicon.ico" alt="">
        </RouterLink>

        <nav>
            <Link path="/components/actions/button">
                <HighLightText>
                    Components
                </HighLightText>
            </Link>
        </nav>

    </header>
    <div id="main-content">
        <Sidebar v-show="$route.path.includes('components')">

            <template #body>

                <SideBarGroup group-name="Ações">

                    <Link path="/components/actions/button">Botão</Link>

                </SideBarGroup>

                <SideBarGroup group-name="formulário">
                    <Link path="/components/forms/input">Input</Link>
                    <Link path="/components/forms/select">Select</Link>
                </SideBarGroup>

            </template>

        </Sidebar>
        <slot />
    </div>

</template>

<style scoped>
#main-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

header {
    display: flex;
    width: 100%;
    border-bottom: solid 1px gainsboro;
    max-height: 70px;
    justify-content: space-between;
}

nav {
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 16px;
}

a {
    text-decoration: none;
}

header img {
    height: 100%;
}
</style>