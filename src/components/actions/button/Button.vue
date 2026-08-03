vue
<template>
    <button :class="[`size-${size}`, variant, `radius-${radius}`]" :style="colorVars" :disabled="loading"
        @click="emit('click')">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { type PropType, computed } from 'vue';

export type ButtonSize = 1 | 2 | 3 | 4
export type ButtonRadius = "none" | "small" | "medium" | "large" | "full"
export type ButtonVariant = "classic" | "solid" | "soft" | "surface" | "outline" | "ghost"
export type ButtonColor = "green" | "yellow" | "red" | "blue" | "gray"

// P manter as cores legíveis, algumas cores precisam de contraste maior!
const LIGHT_COLORS: ButtonColor[] = ["yellow"]

const emit = defineEmits(['click'])
const props = defineProps({
    size: { type: Number as PropType<ButtonSize>, default: 2 as ButtonSize },
    variant: { type: String as PropType<ButtonVariant>, default: "classic" as ButtonVariant },
    radius: { type: String as PropType<ButtonRadius>, default: "none" as ButtonRadius },
    color: { type: String as PropType<ButtonColor>, default: "green" as ButtonColor },
    loading: { type: Boolean, default: false }
})

// Computed CSS vars pra cor do botão, baseado na prop color
const colorVars = computed(() => ({
    '--accent-9': `var(--${props.color}-9)`,
    '--accent-10': `var(--${props.color}-10)`,
    '--accent-11': `var(--${props.color}-11)`,
    '--accent-a2': `var(--${props.color}-a2)`,
    '--accent-a3': `var(--${props.color}-a3)`,
    '--accent-a4': `var(--${props.color}-a4)`,
    '--accent-a6': `var(--${props.color}-a6)`,
    '--accent-a7': `var(--${props.color}-a7)`,
    '--accent-contrast': LIGHT_COLORS.includes(props.color) ? '#1c1a15' : '#fff',
}))
</script>

<style scoped>
button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s ease, border-color 0.2s ease, filter 0.2s ease;
}

button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

/* tamanhos */

.size-1 {
    padding: 4px 12px;
    font-size: 13px;
}

.size-2 {
    padding: 8px 16px;
    font-size: 14px;
}

.size-3 {
    padding: 12px 20px;
    font-size: 15px;
}

.size-4 {
    padding: 16px 28px;
    font-size: 16px;
}

/* variantes — sempre usando --accent-*, nunca uma cor fixa */

.classic {
    background-color: var(--accent-9);
    color: var(--accent-contrast);
    border: 1px solid var(--accent-9);
    box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.1);
}

.solid {
    background-color: var(--accent-9);
    color: var(--accent-contrast);
    border: 1px solid transparent;
}

.soft {
    background-color: var(--accent-a3);
    color: var(--accent-11);
    border: 1px solid transparent;
}

/* surface agora usa a mesma alpha do soft, só que com borda */
.surface {
    background-color: var(--accent-a2);
    color: var(--accent-11);
    border: 1px solid var(--accent-a6);
}

.outline {
    background-color: transparent;
    color: var(--accent-11);
    border: 1px solid var(--accent-a7);
}

.ghost {
    background-color: transparent;
    color: var(--accent-11);
    border: 1px solid transparent;
}


/* border-radius */

.radius-none {
    border-radius: 0;
}

.radius-small {
    border-radius: 4px;
}

.radius-medium {
    border-radius: 8px;
}

.radius-large {
    border-radius: 12px;
}

.radius-full {
    border-radius: 9999px;
}
</style>