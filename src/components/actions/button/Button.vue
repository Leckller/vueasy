<template>
    <button :class="[size, variant, `r-${rounded}`]" @click="emit('click')">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';

export type ButtonSize = "normal" | "big"
export type ButtonVariant = "outline" | "filled" | "text"

const emit = defineEmits(['click'])
const props = defineProps({
    variant: {
        type: String as PropType<ButtonVariant>,
        default: "text" as ButtonVariant
    },
    size: {
        type: String as PropType<ButtonSize>,
        default: "normal" as ButtonSize
    },
    rounded: {
        type: String as PropType<ButtonSize>,
        default: "normal" as ButtonSize
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