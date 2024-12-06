import type { Task } from '../Types/Task'

export const CarbonService = {
  calculateCarbonFootprint(task: Task): number {
    let carbonPerHour: number

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
      default:
        carbonPerHour = 0
        break
    }

    return task.timeSpent * carbonPerHour
  },
}
