<script setup lang="ts">
import { ref } from 'vue'
import { getAll, type Product } from '@/models/products';
import ProductCard from '@/components/ProductCard.vue';

const products = ref<Product[]>([]);
getAll().then((data) => products.value = data.data);

</script>

<template>
    <div class="shelf">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<style scoped>
.shelf {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.shelf .box {
    width: 17rem;
    flex-grow: 1;
}
</style>