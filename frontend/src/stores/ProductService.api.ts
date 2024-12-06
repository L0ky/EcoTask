const apiUrl = 'http://127.0.0.1:6432';
import type { Task } from '../Types/Task';

export default {
  async getAllTasks(): Promise<Task[]> {
    return fetch(apiUrl + '/tasks').then(response => response.json());
  },

  async getTask(id: number): Promise<Task> {
    return fetch(`${apiUrl}/tasks/${id}`).then(response => response.json());
  },

  async createTask(task: Omit<Task, 'id'>): Promise<Response> {
    return fetch(`${apiUrl}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  },

  async updateTask(task: Task): Promise<Response> {
    return fetch(`${apiUrl}/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  },

  async deleteTask(id: number): Promise<Response> {
    return fetch(`${apiUrl}/tasks/${id}`, {
      method: 'DELETE',
    });
  },
};
