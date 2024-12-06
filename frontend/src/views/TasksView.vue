<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-4xl">Tasks</h1>
      <div class="card flex justify-center">
        <Button label="Create a task" icon="pi pi-plus" @click="visible = true" />
        <DialogView :visible="visible" @update:visible="visible = $event" />
      </div>
    </div>
    
    <hr class="my-4">

    <DataTable :tasks="taskStore.tasks" @deleteTask="handleDeleteTask" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTaskStore } from '../stores/TaskStore'
import DialogView from '../components/TaskView.vue'
import DataTable from '../components/DataTable.vue'
import Button from 'primevue/button'

const visible = ref(false)

const taskStore = useTaskStore()

onMounted(async () => {
  await taskStore.getAllTasks()
})

async function handleDeleteTask(id: number) {
  await taskStore.deleteTask(id)
}
</script>
