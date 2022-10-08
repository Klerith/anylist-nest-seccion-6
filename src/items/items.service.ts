import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemInput,UpdateItemInput } from './dto/inputs';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  
  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>
  ){}

  async create(createItemInput: CreateItemInput): Promise<Item> {
    const newItem = this.itemsRepository.create(createItemInput)
    return this.itemsRepository.save(newItem)
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
