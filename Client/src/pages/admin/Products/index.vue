<script setup lang="ts">
import { ref } from 'vue'
import { getAll, type Product } from '@/models/products';

const products = ref([] as Product[]);

getAll().then((data) => {
    console.log(data);
    products.value = data.data;
});

</script>

<template>
    <div>
        <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tile</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>
                        <img :src="product.thumbnail" alt="product.title" width="50" height="50">
                    </td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>
                        {{ product.description }}
                    </td>
                    <td>
                        <router-link :to="'/admin/Products/edit/' + product.id"
                                     class="btn btn-primary">Edit</router-link>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>