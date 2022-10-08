import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(): Promise<Item[]> {
    //TODO: filtrar, paginar, por usuario...
    return this.itemsRepository.find()
  }

  async findOne(id: string): Promise<Item> {
    const item = this.itemsRepository.findOneBy({id})

    if(!item) throw new NotFoundException(`Item with id: ${id} not found`)

    return item;
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
