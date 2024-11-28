import { HttpContext } from '@adonisjs/core/http'
import Task from '#models/task'

export default class TaskController {
  public async store(ctx: HttpContext) {
    const { request, response } = ctx
    const data = request.only(['title', 'description', 'assignee', 'due_date', 'priority'])

    const task = await Task.create(data)
    task.calculateCarbonFootprint()
    await task.save()

    return response.status(201).json(task)
  }

  public async index(ctx: HttpContext) {
    const { response } = ctx
    const tasks = await Task.all()
    return response.status(200).json(tasks)
  }

  public async show(ctx: HttpContext) {
    const { params, response } = ctx
    const task = await Task.find(params.id)
    if (!task) {
      return response.status(404).json({ message: 'Task not found' })
    }
    return response.status(200).json(task)
  }

  public async update(ctx: HttpContext) {
    const { params, request, response } = ctx
    const task = await Task.find(params.id)
    if (!task) {
      return response.status(404).json({ message: 'Task not found' })
    }

    const data = request.only(['title', 'description', 'assignee', 'due_date', 'priority'])
    task.merge(data)
    task.calculateCarbonFootprint()
    await task.save()

    return response.status(200).json(task)
  }

  public async destroy(ctx: HttpContext) {
    const { params, response } = ctx
    const task = await Task.find(params.id)
    if (!task) {
      return response.status(404).json({ message: 'Task not found' })
    }
    await task.delete()
    return response.status(204).json({ message: 'Task deleted successfully' })
  }
}
