<script setup lang="ts">
import DemoContent from '@/components/utils/DemoContent.vue';
import Button, { type ButtonVariant } from './Button.vue';
import { ref } from 'vue';

const variant = ref('classic' as ButtonVariant);

</script>

<template>

    <DemoContent>
        <template #header>
            <h1>Botão</h1>
            <p>Vincule um evento</p>
        </template>
        <template #demo>

            <select name="variants" v-model="variant">
                <option value="classic">Classic</option>
                <option value="solid">Solid</option>
                <option value="soft">Soft</option>
                <option value="surface">Surface</option>
                <option value="outline">Outline</option>
                <option value="ghost">Ghost</option>
            </select>

            <Button :variant="variant">
                Enviar
            </Button>

        </template>
    </DemoContent>

</template>