'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'JSON' }
})


Route.group(() => {

  Route.post('user/register','UserController.store');
  Route.post('user/login','UserController.login');
  Route.get('user/all','UserController.index');
  
  Route.post('user/logs','LogController.store');
  Route.get('user/logs/all','LogController.index');

  Route.post('user/message','MessageController.store');
  Route.get('user/message/all','MessageController.index');
  Route.get('user/app','MessageController.index');
  
}).prefix('api/v1/');

