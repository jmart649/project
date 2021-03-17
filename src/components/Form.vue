<template>
  <section
    class="container flex items-center justify-center text-center bg-content-800 rounded-xl mx-auto mt-24 max-w-md"
  >
    <form @submit.prevent class="flex flex-col w-full p-12 shadow-lg bg-lightBlue-200">
      <label
        v-if="form == 'signup'"
        for="name"
        class="self-start text-xs font-semibold text-content-200"
        >Name</label
      >
      <input
        v-if="form == 'signup'"
        id="name"
        type="text"
        class="flex items-center h-12 px-4 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2"
        v-model="name"
      />
      <label
        for="username"
        class="self-start mt-3 text-xs font-semibold text-content-200"
        >Email</label
      >
      <input
        id="username"
        type="text"
        class="flex items-center h-12 px-4 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2"
        v-model="email"
      />
      <p class="text-red-700 font-bold">{{ errorEmail }}</p>
      <label
        for="password"
        class="self-start mt-3 text-xs font-semibold text-content-200"
        >Password</label
      >
      <input
        id="password"
        type="password"
        class="flex items-center h-12 px-4 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2"
        v-model="password"
      />
      <p class="text-red-700 font-bold">{{ passwordError }}</p>
      <button v-if="form == 'login'" @click="login" class="btn btn-accent mt-8">
        Login
      </button>
      <button v-else @click="register" class="btn btn-accent mt-8">
        SignUp
      </button>
      <button @click="google" class="btn bg-orange-600 mt-8">Sign Up with Google</button>
    </form>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useField } from 'vee-validate'
import { signIn, signUp, googlePopup, auth } from '../helpers/useAuth'
import { isError, msg } from '../helpers/useError'

const router = useRouter()
const login = async () => {
  try {
    await signIn(email.value, password.value)
    isError.value = false
    router.push('/')
  } catch (error) {
    isError.value = true
    msg.value = 'There was an Authentication Error'
    console.log(error)
  }
}
const register = async () => {
  try {
    await signUp(email.value, password.value)
    isError.value = false
    const user = auth().currentUser
    await user.updateProfile({ displayName: name.value })
    router.push('/')
  } catch (error) {
    isError.value = true
    msg.value = 'There was an Authentication Error'
    console.log(error)
  }
}
const google = async () => {
  try {
    await googlePopup()
    isError.value = false
    router.push('/')
  } catch (error) {
    isError.value = true
    msg.value = 'There was an Authentication Error'
    console.log(error)
  }
}

const validateEmail = value => {
  if (!value) {
    return 'Email is required!'
  }
  return true
}
const validatePassword = value => {
  if (!value) {
    return 'Password is required!'
  }
  return true
}
const name = ref('')
const { value: email, errorMessage: errorEmail } = useField('email', validateEmail)
const { value: password, errorMessage: passwordError } = useField('password', validatePassword)
defineProps({
  form: {
    type: String,
    default: 'login',
  },
})
</script>