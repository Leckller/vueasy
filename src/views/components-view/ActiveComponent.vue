<template>
    <component :is="activeComponent" v-if="activeComponent" />

    <div v-else>
        <h1>Componente não encontrado D:</h1>
    </div>
</template>

<script setup lang="ts">
import ButtonDemo from '@/components/actions/button/ButtonDemo.vue'
import InputDemo from '@/components/forms/input/InputDemo.vue'
import SelectDemo from '@/components/forms/select/SelectDemo.vue'
import Installation from '@/components/getting-started/Installation.vue'
import Introduction from '@/components/getting-started/Introduction.vue'
import { type Component, computed } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()

const components: Record<string, Record<string, Component>> = {
    'getting-started': {
        'introduction': Introduction,
        'installation': Installation,
    },

    actions: {
        button: ButtonDemo,
    },

    forms: {
        input: InputDemo,
        select: SelectDemo,
    }

    //   navigation: {
    //     sidebar: SidebarView,
    //   },

    //   typography: {
    //     'highlight-text': HighlightTextView,
    //   },
}

const activeComponent = computed(() => {
    const category = route.params.category as string || 'getting-started'
    const component = route.params.component as string || ''

    return components?.[category]?.[component] ?? Introduction
})
</script>