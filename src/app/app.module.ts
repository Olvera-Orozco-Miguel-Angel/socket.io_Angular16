import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// de lado de nodejs npm install socket.io@4.0.0
// de lado de angular npm install ngx-socket-io@4.1.0
import {SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { Socket1Component } from './componentes/socket1/socket1.component';
const config: SocketIoConfig = { url: 'http://localhost:7000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    Socket1Component
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
