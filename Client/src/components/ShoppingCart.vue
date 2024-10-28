<script setup lang="ts">
import { refCart, count, total } from '@/models/shoppingCart';


const cart = refCart()

</script>

<template>
    <div class="cart">
        <h1 class="title">Shopping Cart</h1>
        <div v-if="cart.length === 0">
            <p>Your cart is empty</p>
        </div>
        <div v-else>
            <div v-for="item in cart" :key="item.product.id" class="item">
                <img :src="item.product.thumbnail" alt="product image" />
                <h3>{{ item.product.title }}</h3>
                <div>
                    ${{ item.product.price }} x
                    <select v-model="item.quantity">
                        <option v-for="n in 10" :key="n">{{ n }}</option>
                    </select> =
                    ${{ (item.quantity * item.product.price).toFixed(2) }}
                </div>
            </div>
            <div>
                <h3>{{ count }} items totaling ${{ total.toFixed(2) }}</h3>
            </div>
        </div>

    </div>
</template>

<style scoped>
h3 {
    font-weight: bold;
}

.item {
    margin-bottom: .5rem;
    padding-bottom: .5rem;
    border-bottom: 1px inset #ddd;
}

.cart {
    padding: 1rem;
}

.cart img {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    float: left;
}
</style>