<template>
  <div class="mt-8">
    <p class="text-xl mx-auto text-center m-16 tracking-wider font-bold">
      Welcome, {{ user?.displayName || 'New User' }}
    </p>
  </div>
</template>

<style>
body{
    background-color: lightgray;
}
</style>

<script setup>
import { user } from '../helpers/useAuth'
</script>