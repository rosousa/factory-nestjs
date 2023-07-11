import { Injectable } from '@nestjs/common';
import { Message } from './Message';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensagem',
    },
  ];

  public findAll() {
    return this.messages;
  }

  public async findById(id: number) {
    const message = this.messages.find((msg) => msg.id === id);

    if (!message) {
      throw Error(`Mensagem com o id ${id} não encontrada.`);
    }
    return;
  }

  public create(message: Message) {
    return this.messages.push(message);
  }

  public update(id: number, message: Message) {
    const index = this.messages.findIndex((message) => message.id === id);

    this.messages[index] = message;

    return message;
  }

  public delete(id: number) {
    const index = this.messages.findIndex((message) => message.id === id);

    delete this.messages[index];

    return true;
  }
}
