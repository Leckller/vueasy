<template>
    <div class="not-found">
        <div class="content">
            <span class="code">404</span>

            <h1>Página não encontrada</h1>

            <p>
                A página que você tentou acessar não existe ou foi movida.
            </p>

            <button class="back-button" @click="goBack">
                ← Voltar
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
    router.back()
}
</script>

<style scoped>
.not-found {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    color: #f8fafc;
}

.content {
    max-width: 500px;
    text-align: center;
}

.code {
    display: block;
    font-size: 7rem;
    font-weight: 800;
    line-height: 1;
    background: linear-gradient(135deg, var(--green-12), var(--green-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h1 {
    margin: 1rem 0;
    font-size: 2rem;
    font-weight: 700;
}

p {
    margin-bottom: 2rem;
    color: #94a3b8;
    line-height: 1.6;
}

.back-button {
    border: none;
    border-radius: 12px;
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    background: #42b883;
    color: white;
    transition: all 0.2s ease;
}

.back-button:hover {
    transform: translateY(-2px);
    opacity: 0.9;
}

.back-button:active {
    transform: translateY(0);
}
</style>