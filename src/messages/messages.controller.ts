import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { createMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller('messages')
export class MessagesController {

    messagesService : MessagesService;

    constructor()
    {
        this.messagesService = new MessagesService()
    }

    @Get()
    listMessages()
    {
        return this.messagesService.findAll();
    }

    @Get("/:id")
    getMessage(@Param("id") id : string)
    {
        console.log(id);
        return this.messagesService.findOne(id);
    }

    @Post()
    createMessage(@Body() body : createMessageDto)
    {
        console.log(body);
        return this.messagesService.create(body.content);
    }
}
