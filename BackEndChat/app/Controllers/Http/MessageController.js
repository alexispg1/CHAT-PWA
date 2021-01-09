'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Message=use('App/Models/Menssage'); 

/**
 * Resourceful controller for interacting with messages
 */
class MessageController {
  
  async index ({ request, response, view }) {
    const messages= await Message.all();
    return response.json({messages});
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    const data=request.all();
    const messages=new Message();

    messages.message=data.message;
    messages.email=data.email;
    messages.name=data.name;
    console.log("name "+data.name+" email "+data.email+" messages "+data.message);
    if(data.message==null||data.email==null||data.name==null){
      return response.json({message:'fields emptys'});
    }
    else{
      await messages.save();
      return response.json({messages});
    }


  }

  async show ({ params, request, response, view }) {
  }


  async edit ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }

  
  async destroy ({ params, request, response }) {
  }
}

module.exports = MessageController
