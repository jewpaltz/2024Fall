<script setup lang="ts">

const props = defineProps<{
    isOpen: boolean
}>()
</script>

<template>
    <div class="flyout" :class="{ isOpen }">
        <slot />
    </div>
</template>

<style scoped>
.flyout {
    position: fixed;
    top: 56px;
    right: 0;
    bottom: 0;
    width: 20rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    z-index: 1000;
    transform: translateX(85%);
    transition: transform 0.3s ease-in-out;
}

.flyout:hover,
.flyout.isOpen {
    transform: translateX(0);
}
</style>