<script setup lang="ts">
import DemoContent from '@/components/utils/DemoContent.vue';
import Button, { type ButtonColor, type ButtonRadius, type ButtonVariant } from './Button.vue';
import buttonSource from '@/components/actions/button/Button.vue?raw';
import { ref } from 'vue';
import CodePreview from '@/components/utils/CodePreview.vue';

const variant = ref('classic' as ButtonVariant);
const radius = ref('small' as ButtonRadius);
const color = ref('green' as ButtonColor);

</script>

<template>

    <DemoContent>

        <template #header>
            <h1>Botão</h1>
        </template>
        <template #variantes>
            <div class="demo-variants">

                <div class="demo-variants__select">
                    <label>
                        Variante:
                        <select name="variants" v-model="variant">
                            <option value="classic">Classic</option>
                            <option value="solid">Solid</option>
                            <option value="soft">Soft</option>
                            <option value="surface">Surface</option>
                            <option value="outline">Outline</option>
                            <option value="ghost">Ghost</option>
                        </select>
                    </label>
                    <label>
                        Cor:
                        <select name="colors" v-model="color">
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="gray">Gray</option>
                        </select>
                    </label>
                    <label>
                        Border-radius:
                        <select name="border-radius" v-model="radius">
                            <option value="none">None</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="full">Full</option>
                        </select>
                    </label>
                </div>

                <Button :variant="variant" :radius="radius" :color="color">
                    Enviar
                </Button>
            </div>

        </template>

        <template #code>
            <CodePreview :code="buttonSource" lang="vue" />
        </template>

    </DemoContent>

</template>

<style scoped>
.demo-variants {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.demo-variants__select {
    display: flex;
    gap: 16px;
}
</style>