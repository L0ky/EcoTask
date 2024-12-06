export interface Task {
  id: number
  title: string
  description?: string
  dueDate?: string
  completed: boolean
  assignee?: string
  createdAt?: string
  carbonFootPrint: number
  timeSpent: number
  type: 'light' | 'technical' | 'heavy'
  priority: 'low' | 'medium' | 'high'
}