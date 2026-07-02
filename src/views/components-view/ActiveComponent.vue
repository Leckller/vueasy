<template>
    <component :is="activeComponent" v-if="activeComponent" />

    <div v-else>
        <h1>Componente não encontrado D:</h1>
    </div>
</template>

<script setup lang="ts">
import ButtonDemo from '@/components/actions/button/ButtonDemo.vue'
import { type Component, computed } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()

const components: Record<string, Record<string, Component>> = {
    actions: {
        button: ButtonDemo,
    },

    //   navigation: {
    //     sidebar: SidebarView,
    //   },

    //   typography: {
    //     'highlight-text': HighlightTextView,
    //   },
}

const activeComponent = computed(() => {
    const category = route.params.category as string || 'actions'
    const component = route.params.component as string || 'button'

    return components?.[category]?.[component] ?? null
})
</script>