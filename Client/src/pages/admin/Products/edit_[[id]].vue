<script setup lang="ts">
import { ref } from 'vue'
import { type Product, create, getById, update } from '@/models/products';
import { useRoute } from 'vue-router';

const product = ref({} as Product);

const route = useRoute();

route.params.id && getById(+route.params.id).then((data) => {
    product.value = data.data;
});

function onsubmit() {
    if (route.params.id) {
        update(product.value).then((data) => {
            console.log(data);
        });
    } else {
        create(product.value).then((data) => {
            console.log(data);
        });
    }
}

</script>

<template>
    <div>
        <h1 class="title">{{ route.params.id ? 'Edit' : 'Add' }} Product</h1>
        <form @submit.prevent="onsubmit">
            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                    <input class="input" type="text" v-model="product.title">
                </div>
            </div>
            <div class="field">
                <label class="label">Price</label>
                <div class="control">
                    <input class="input" v-model="product.price">
                </div>
            </div>
            <div class="field">
                <label class="label">Category</label>
                <div class="control">
                    <input class="input" type="text" v-model="product.category">
                </div>
            </div>
            <div class="field">
                <label class="label">Description</label>
                <div class="control">
                    <textarea class="textarea" v-model="product.description"></textarea>
                </div>
            </div>
            <div class="field">
                <label class="label">Thumbnail</label>
                <div class="control">
                    <input class="input" type="text" v-model="product.thumbnail">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped></style>