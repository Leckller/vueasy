<!-- 

Para funcionar a adição das divs com a classe de animação, é necessário que cada elemento que for adicionado dentro do slot, esteja envolto de um <template>
também é necessário que cada elemento dentro do slot tenha um nome, para que seja possível iterar sobre eles e adicionar a animação de forma individual.

bjs do ruy

-->

<template>
    <div class="demo-content">
        <div v-for="(_, name, index) in $slots" :key="name" class="slot-fade-in"
            :style="{ animationDelay: `${index * 300}ms` }">
            <slot :name="name" />
        </div>
    </div>
</template>

<style scoped>
.demo-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 80px 64px;
    max-width: 858px;
}

.slot-fade-in {
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(12px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>