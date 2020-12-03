import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TodoModule } from './todo/todo.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TodoModule],
})
//NestModule Pour pouvoir utiliser des middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //throw new Error('Method not implemented.');
    consumer.apply(LoggerMiddleware).forRoutes('transform'); //laisser routes vides si on veut que ça soit sur toutes les routes
    //peut aussi prendre un controlleur
    // ou des objets du style {path:'path', method:RequestMethod.GET}, {...}
  }
}
