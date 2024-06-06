import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'; 
import * as passport from 'passport'; 

passport.serializeUser(function(user, done) { 
  done(null, user); 
}); 
passport.deserializeUser(function(user, done) { 
  done(null, user); 
}); 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use( 
    session({ 
      secret: 'demo-session-secret', 
      resave: false, 
      saveUninitialized: false, 
    }), 
  ); 
  app.use(passport.initialize()); 
  app.use(passport.session()); 


  await app.listen(3000);
}
bootstrap();