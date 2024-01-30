import { Controller, Get } from '@nestjs/common';

@Controller('api/hello')
export class HelloController {
    @Get()
    getHello():{ message: string } {
        return { message: 'Hello World! From Nest Js' };
    }
}