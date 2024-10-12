import { MessageRepository } from './messages.repository';

export class MessagesService {
    messagesRepo: MessageRepository

    constructor() {
        this.messagesRepo = new MessageRepository();
    }

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
