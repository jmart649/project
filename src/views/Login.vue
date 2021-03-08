<template>
    <section class="bg-coolGray-100 text-coolGray-800">
	<div class="container flex items-center justify-center text-center">
		<form submit.prevent class="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-coolGray-800">
			<label for="username" class="self-start text-xs font-semibold">Username</label>
			<input id="username" type="text" class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900">
			<label for="password" class="self-start mt-3 text-xs font-semibold">Password</label>
			<input id="password" type="password" class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900">
			<button @click="login" class="btn btn-primary mt-4">Login</button>
		</form>
	</div>
</section>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { isAuthenticated } from '../helpers/useAuth'
const router = useRouter()
const login = () => {
    isAuthenticated.value = true
    router.push('/')
}
</script>