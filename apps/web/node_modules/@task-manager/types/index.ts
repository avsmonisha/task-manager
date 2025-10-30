// Shared types for the task manager application

export type Task = {
  id: string
  title: string
  description?: string
  status: 'todo' | 'in-progress' | 'done'
  priority?: 'low' | 'medium' | 'high'
  dueDate?: string
  createdAt: string
  updatedAt: string
}

export type User = {
  id: string
  email: string
  name?: string
  createdAt: string
}