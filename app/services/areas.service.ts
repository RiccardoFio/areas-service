import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { AreasRepository } from '../repositories/areas.repository';
import { Area } from '../entities/area.entity';
import { AreaDto } from '../dto/area.dto';

Service()
export class AreasService {
    constructor(
        @InjectRepository()
        private readonly areaRepository: AreasRepository,
    ) {}

    async create(areaDto: AreaDto){
        const area = new Area(
            areaDto.name,
            areaDto.description,
            areaDto.parent,
            areaDto.childrens,
            areaDto.devices
        )
        await this.areaRepository.save(area);
    }

    public async getAll(): Promise<Area[]> {
        return await this.areaRepository.find()
    }

    public async getOneById(id:number): Promise<Area> {
        return await this.areaRepository.getOneById(id);
    }

    public async delete(id: number) {
        await this.areaRepository.delete({id});
    }

}
