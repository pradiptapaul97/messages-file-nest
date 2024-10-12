import { MessageRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class MessagesService {
    
    constructor(public messagesRepo: MessageRepository) {}

    async findOne(id : string)
    {
        return this.messagesRepo.findOne(id);
    }

    async findAll()
    {
        return this.messagesRepo.findAll();
    }

    async create(content : string)
    {
        return this.messagesRepo.create(content);
    }
}
