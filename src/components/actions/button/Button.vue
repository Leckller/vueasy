<template>
    <button :class="[variant, `r-${rounded}`]" @click="emit('click')">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { onMounted, type PropType } from 'vue';

export type ButtonVariant = "normal" | "big"

const emit = defineEmits(['click'])
const props = defineProps({
    variant: {
        type: String as PropType<ButtonVariant>,
        default: "normal" as ButtonVariant
    },
    rounded: {
        type: String as PropType<ButtonVariant>,
        default: "normal" as ButtonVariant
    }
})

</script>

<style scoped>
button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
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
</style>