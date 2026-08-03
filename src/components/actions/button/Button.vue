<template>
    <button :class="[size, variant, radius, color]" @click="emit('click')">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';

export type ButtonSize = 1 | 2 | 3 | 4
export type ButtonRadius = "none" | "small" | "medium" | "large" | "full"
export type ButtonVariant = "classic" | "solid" | "soft" | "surface" | "outline" | "ghost"
export type ButtonColor = "green"

const emit = defineEmits(['click'])
const props = defineProps({
    size: {
        type: Number as PropType<ButtonSize>,
        default: 2 as ButtonSize
    },
    variant: {
        type: String as PropType<ButtonVariant>,
        default: "classic" as ButtonVariant
    },
    radius: {
        type: String as PropType<ButtonRadius>,
        default: "none" as ButtonRadius
    },
    color: {
        type: String as PropType<ButtonColor>,
        default: "green" as ButtonColor
    },
    loading: {
        type: Boolean,
        default: false
    }
})

</script>

<style scoped>
button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

button:hover {
    filter: brightness(1.5);
}

.normal {
    padding: 8px 16px;
}

.big {
    padding: 16px 24px;
}

.r-normal {
    border-radius: 4px;
}

.r-big {
    border-radius: 8px;
}

/* variantes */

.outline {
    background-color: transparent;
    border: 1px solid #000;
}

.filled {
    background-color: #000;
    color: #fff;
}

.text {
    background-color: transparent;
    text-decoration: underline;
}
</style>