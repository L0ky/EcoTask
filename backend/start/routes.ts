/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const TaskController = () => import('#controllers/tasks_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.get('/', [TaskController, 'index'])
    router.get('/:id', [TaskController, 'show'])
    router.post('/', [TaskController, 'store'])
    router.put('/:id', [TaskController, 'update'])
    router.delete('/:id', [TaskController, 'destroy'])
  })
  .prefix('tasks')
