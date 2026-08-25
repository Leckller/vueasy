<template>
    <DemoContent>
        <template #title>
            <div>
                <h1>
                    Bem vindo ao VuEasy!
                </h1>
                <p>
                    Aqui são hospedados componentes gratuitos utilizando a clássica abordagem copia e cola! Navegue
                    entre os
                    elementos e encontre o que procura, fique a vontade para fazer as modificações necessárias!
                </p>
            </div>
        </template>

        <template #navigator>
            <div>
                <h2>Como encontrar o componente que eu quero?</h2>
                <p>Os componentes são separados à esquerda, todos são classificados por um tipo específico, como a seção
                    de <strong>ações</strong>, onde ficam todos os elementos que possuem qualquer tipo interação com o
                    usuário, como um simples botão!
                    <br>
                    Tipo esse aí:
                </p>
                <Button radius="small">Olha q botão bacana!</Button>
            </div>
        </template>
        <template #footer>
            <DemoFooter back="" next="/components/getting-started/installation">
                <template #next>
                    Instalação
                </template>
            </DemoFooter>
        </template>
    </DemoContent>
</template>

<script lang="ts" setup>
import Button from '../actions/button/Button.vue';
import DemoContent from '../utils/DemoContent.vue';
import DemoFooter from '../utils/DemoFooter.vue';

</script>