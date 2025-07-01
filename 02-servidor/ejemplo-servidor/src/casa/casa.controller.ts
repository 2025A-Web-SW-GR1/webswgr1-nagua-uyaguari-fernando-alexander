import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CasaService } from './casa.service';
import { FindManyOptions, Like } from 'typeorm';
import { BuscarDTO } from './dto/buscar.dto';
import { Casa } from './casa.entity';
import { CrearEditarDTO } from './dto/crear-editar.base.dto';

@Controller('api/casa')
export class CasaController {
    constructor(
        private readonly casaService: CasaService
    ) {

    }
    
    @Get()
    obtener(
        @Query() parametrosConsulta:BuscarDTO,
    ){
        const objetoBusqueda: FindManyOptions<Casa> = {};
        if(parametrosConsulta.nombre){
            objetoBusqueda.where = {
                nombre: 
                   Like("%" + parametrosConsulta.nombre + "%"),
            }
        }
        return this.casaService.obtenerTodos(objetoBusqueda);
    }

    @Post()
    crear(
        @Body() casa: CrearEditarDTO
    ){
        return this.casaService.crearUno(casa.nombre, casa.valor, casa.imagenUrl);
    }
}