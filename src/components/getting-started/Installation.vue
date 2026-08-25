<template>
    <DemoContent>
        <template #title>
            <div>
                <h1>Instalação? Mas não eram componentes "copia e cola"?</h1>
            </div>
        </template>
        <template #description>
            <div>
                <p>
                    Sim pequeno gafanhoto, são componentes "copia e cola", porém as cores não são. Para utilizar você
                    pode simplesmente adicionar as suas próprias cores e seguir as instruções dos componentes para
                    alterar o estilo, ou pode simplesmente instalar a o pacote de cores do radix com o simples comando:
                </p>
                <CopyText text="npm install @radix-ui/colors">
                    <span :style="{ color: 'var(--blue-11)' }">npm install</span> @radix-ui/colors
                </CopyText>
                <p>Após a instação desse pacote basta sair e copiando o que quiser!</p>
            </div>
        </template>
        <template #footer>
            <DemoFooter back="" next="/components/actions/button">
                <template #next>
                    Botão
                </template>
            </DemoFooter>
        </template>
    </DemoContent>

</template>

<script lang="ts" setup>
import CopyText from '../utils/CopyText.vue';
import DemoContent from '../utils/DemoContent.vue';
import DemoFooter from '../utils/DemoFooter.vue';


</script>