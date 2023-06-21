import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Websocket1Service } from 'src/app/services/websocket1.service';
@Component({
  selector: 'app-socket1',
  templateUrl: './socket1.component.html',
  styleUrls: ['./socket1.component.css']
})
export class Socket1Component implements OnInit {
  constructor(private socket: Websocket1Service){
    this.socket.sendMessage("hola servidor adfsadf");
    this.socket.getMessage().subscribe((msg: any) => {
      console.log("este es el mensaje que manda el servidor",msg);
       // Realiza las acciones necesarias con el mensaje recibido
     });
     this.socket.getMessage().subscribe((message: any) => {
     console.log(message);
    });  

  }



  ngOnInit(  ) {
  }


}
