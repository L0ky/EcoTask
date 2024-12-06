<template>
  <Dialog v-model:visible="props.visible" modal header="Create task" :style="{ width: '35rem' }">
    <div class="gap-4 mb-4">
        <p class="font-semibold mb-2">Title</p>
        <InputText v-model="title" class="w-full" autocomplete="off" />
        <p v-if="errors.title" class="text-red-500 text-sm">{{ errors.title }}</p>
    </div>
    <div class="gap-4 mb-4">
        <p class="font-semibold mb-2">Description</p>
        <Textarea v-model="description" rows="5" cols="35" class="w-full" />
        <p v-if="errors.description" class="text-red-500 text-sm">{{ errors.description }}</p>
    </div>
    <div class="gap-4 mb-4">
        <p class="font-semibold mb-2">Due date</p>
        <DatePicker v-model="dueDate" showIcon fluid iconDisplay="input" inputId="icondisplay" />
        <p v-if="errors.dueDate" class="text-red-500 text-sm">{{ errors.dueDate }}</p>
    </div>
    <div class="gap-4 mb-8">
      <p class="font-semibold mb-2">Priority</p>
      <Select v-model="selectedPriority" :options="priorities" optionLabel="name" placeholder="Select a priority" class="w-full" />
    </div>
    <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="closeDialog"></Button>
        <Button type="button" label="Save" @click="createTask"></Button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import { useTaskStore } from '../stores/TaskStore'

import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'

const taskStore = useTaskStore()

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
}>();

const title = ref('')
const description = ref('')
const dueDate = ref('')
const selectedPriority = ref(null)

const errors = ref({
  title: '',
  description: '',
  dueDate: '',
})

const closeDialog = () => {
  emit('update:visible', false)
}

const validateForm = () => {
  let isValid = true
  errors.value.title = ''
  errors.value.description = ''
  errors.value.dueDate = ''

  if (!title.value.trim()) {
    errors.value.title = 'Title is required.'
    isValid = false
  }
  
  if (!description.value.trim()) {
    errors.value.description = 'Description is required.'
    isValid = false
  }

  if (!dueDate.value) {
    errors.value.dueDate = 'Due date is required.'
    isValid = false
  }

  return isValid
}

async function createTask() {
  if (validateForm()) {
    await taskStore.createTask({
      title: title.value,
      description: description.value,
      dueDate: dueDate.value,
      priority: selectedPriority.value,
    })
    closeDialog()
  }
}
</script>
