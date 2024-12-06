<template>
  <div class="flex">
    <SideMenuView class="fixed left-0 top-0 h-full w-64" />
    <div class="ml-64 flex flex-col w-full">
      <HeaderComponent class="sticky top-0 z-10" />
      <main class="flex-grow p-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import SideMenuView from "./components/SideMenu.vue"
import 'primeicons/primeicons.css'
</script>