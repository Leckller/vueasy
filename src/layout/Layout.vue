<script setup lang="ts">
import Button from '@/components/actions/button/Button.vue'
import Link from '@/components/navigation/link/Link.vue'
import Sidebar from '@/components/navigation/sidebar/Sidebar.vue'
import SideBarGroup from '@/components/navigation/sidebar/SideBarGroup.vue'
import HighLightText from '@/components/typography/texts/HighLightText.vue'

function toggleTheme() {
    const html = document.documentElement

    if (html.classList.contains('light')) {
        html.classList.remove('light')
        html.classList.add('dark')
    } else {
        html.classList.remove('dark')
        html.classList.add('light')
    }
}
</script>

<template>
    <div class="layout">

        <header class="header">

            <RouterLink to="/" class="logo">
                <img src="../../../public/favicon.ico" alt="Logo">
            </RouterLink>

            <nav class="nav">
                <Link path="/components/actions/button">
                    <HighLightText>
                        Components
                    </HighLightText>
                </Link>
                <Link path="/icons">
                    <HighLightText>
                        Ícones
                    </HighLightText>
                </Link>
            </nav>

            <div class="options">
                <Button variant="text" @click="toggleTheme">
                    Toggle Tema
                </Button>

            </div>
        </header>

        <div class="content">

            <aside v-if="$route.path.includes('components')" class="sidebar-container">
                <Sidebar>

                    <template #body>

                        <SideBarGroup group-name="Ações">
                            <Link path="/components/actions/button">
                                Botão
                            </Link>
                        </SideBarGroup>

                        <SideBarGroup group-name="Formulários">
                            <Link path="/components/forms/input">
                                Input
                            </Link>

                            <Link path="/components/forms/select">
                                Select
                            </Link>
                        </SideBarGroup>

                    </template>

                </Sidebar>
            </aside>

            <main class="main">
                <slot />
            </main>

        </div>

    </div>
</template>

<style scoped>
.layout {
    min-height: 100vh;
}

.header {
    position: sticky;
    top: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 70px;
    padding: 0 24px;

    border-bottom: 1px solid var(--gray-6, gainsboro);

    backdrop-filter: blur(12px);
}

.logo {
    display: flex;
    align-items: center;
    height: 100%;
}

.logo img {
    height: 48px;
}

.options {
    display: flex;
    max-width: 48px;
}

.nav {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-grow: 1;
    justify-content: center;
}

.content {
    display: flex;
    align-items: flex-start;
}

.sidebar-container {
    position: sticky;
    top: 70px;

    height: calc(100vh - 70px);

    flex-shrink: 0;

    overflow-y: auto;
}

.main {
    flex: 1;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
}

a {
    text-decoration: none;
}
</style>