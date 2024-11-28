import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string | null

  @column()
  declare assignee: string | null

  @column.dateTime()
  declare dueDate: DateTime | null

  @column()
  declare priority: number

  @column()
  declare carbonFootprint: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  public calculateCarbonFootprint() {
    let footprint = 0

    switch (this.priority) {
      case 5:
        footprint = 10
        break
      case 4:
        footprint = 8
        break
      case 3:
        footprint = 5
        break
      case 2:
        footprint = 3
        break
      case 1:
        footprint = 1
        break
      default:
        footprint = 0
    }

    this.carbonFootprint = footprint
  }
}
