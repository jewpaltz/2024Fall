<script setup lang="ts">
import { refSession, useLogin } from '@/models/users';


const logins = useLogin();
function googleLogin() {
    logins.googleLogin();
}

const session = refSession()

</script>

<template>
    <a class="button is-primary">
        <strong>Sign up</strong>
    </a>
    <a class="button is-light" @click.prevent="googleLogin" v-if="!session.user">
        <i class="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google Logo" width="20" />
        </i>
        Google Log in
    </a>
    <div v-if="session.user">
        {{ session.user.firstName }}
        {{ session.user.lastName }}
    </div>
</template>

<style scoped></style>