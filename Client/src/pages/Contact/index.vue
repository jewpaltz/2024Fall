<script setup lang="ts">

</script>

<template>
    <div>
        <h1 class="title">Contact Us</h1>
        <h2 class="subtitle">We'd love to hear from you</h2>

        <form>
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Your name">
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="Your email">
                </div>
            </div>

            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Your message"></textarea>
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