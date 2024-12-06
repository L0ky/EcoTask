import { defineStore } from 'pinia'
import api from './ProductService.api.ts'
import type { Task } from '../Types/Task'

export const useTaskStore = defineStore('useTaskStore', {
  state: () => ({
    tasks: [] as Task[],
  }),

  actions: {
    async getAllTasks(): Promise<Task[] | void> {
      try {
        const tasks = await api.getAllTasks()
        
        this.tasks = tasks.map((task) => ({
          ...task,
          carbonFootPrint: task.carbonFootPrint ?? 0,
          timeSpent: task.timeSpent ?? 0,
          type: task.type ?? 'light',
          priority: task.priority ?? 'low',
          assignee: task.assignee ?? '',
          dueDate: task.dueDate ?? '',
        }))
        return tasks
      } catch (error) {
        console.error('Erreur lors de la récupération des tâches :', error)
      }
    },

    async getTask(id: number): Promise<Task | void> {
      try {
        return await api.getTask(id)
      } catch (error) {
        console.error('Erreur lors de la récupération de la tâche :', error)
      }
    },

    async createTask(task: Task): Promise<Response | void> {
      try {
        task.carbonFootPrint = this.calculateCarbonFootprint(task)
        const response = await api.createTask(task)
        await this.getAllTasks()
        return response
      } catch (error) {
        console.error('Erreur lors de la création de la tâche :', error)
      }
    },
    
    async updateTask(task: Task): Promise<Response | void> {
      try {
        task.carbonFootPrint = this.calculateCarbonFootprint(task)
        const response = await api.updateTask(task)
        await this.getAllTasks()
        return response
      } catch (error) {
        console.error('Erreur lors de la mise à jour de la tâche :', error)
      }
    },

    async deleteTask(id: number): Promise<Response | void> {
      try {
        const response = await api.deleteTask(id)
        this.tasks = this.tasks.filter((task) => task.id !== id)
        return response
      } catch (error) {
        console.error('Erreur lors de la suppression de la tâche :', error)
      }
    },

    calculateCarbonFootprint(task: Task): number {
      let carbonPerHour = 0

      switch (task.type) {
        case 'light':
          carbonPerHour = 0.1
          break
        case 'technical':
          carbonPerHour = 0.5 + Math.random() * (1.5 - 0.5)
          break
        case 'heavy':
          carbonPerHour = 2 + Math.random() * (5 - 2)
          break
      }

      return task.timeSpent * carbonPerHour
    },
  },
})
