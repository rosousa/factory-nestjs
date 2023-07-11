import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';

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
    return this.messages.filter(Boolean);
  }

  public async findById(id: number) {
    const message = this.messages.find((msg) => msg?.id === id);

    if (!message) {
      throw Error(`Mensagem com o id ${id} não encontrada.`);
    }
    return message;
  }

  public create(messageDto: MessageDto) {
    const id = this.messages.length + 1;

    const message: Message = {
      id,
      ...messageDto,
    };

    this.messages.push(message);

    return message;
  }

  public async update(id: number, messageDto: MessageDto) {
    const index = this.messages.findIndex((msg) => msg?.id === id);

    if (index < 0) {
      throw Error(`Mensagem com o id ${id} não encontrada.`);
    }

    const message: Message = {
      id,
      ...messageDto,
    };

    this.messages[index] = message;

    return message;
  }

  public async delete(id: number) {
    const index = this.messages.findIndex((msg) => msg?.id === id);

    if (index < 0) {
      throw Error(`Mensagem com o id ${id} não encontrada.`);
    }

    delete this.messages[index];
  }
}
