<template>
  <div class="card">
    <DataTable :value="props.tasks" tableStyle="min-width: 50rem">
      <Column field="title" header="Title" />
      <Column field="description" header="Description" />
      <Column field="assignee" header="Assignee" />
      <Column field="dueDate" header="Due date">
        <template v-slot:body="slotProps">
          {{ formatDate(slotProps.data.dueDate) }}
        </template>
      </Column>
      <Column field="carbonFootPrint" header="Carbon FP" />
      <Column field="createdAt" header="Created at">
        <template v-slot:body="slotProps">
          {{ formatDate(slotProps.data.createdAt) }}
        </template>
      </Column>
      <Column field="id" header="">
        <template v-slot:body="slotProps">
          <div class="flex gap-2">
            <Button @click="getTask(slotProps.data.id)" icon="pi pi-pencil" />
            <Button @click="deleteTask(slotProps.data.id)" icon="pi pi-trash" class="p-button-danger" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'

const emit = defineEmits(['deleteTask'])

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
})

function formatDate(value: string | Date): string {
  if (!value) return 'N/A'

  const date = new Date(value)

  if (isNaN(date.getTime())) {
    return 'Invalid date'
  }

  return date.toISOString().split('T')[0]
}

function getTask(id: number) {
  console.log(id)
}

function deleteTask(id: number) {
  emit('deleteTask', id)
}
</script>
