import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Websocket1Service {

  constructor(private socket: Socket) {}

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }
/*   getMessage() {
    return this.socket.fromEvent('message').pipe(map((data:any) => data.msg));
  } */
  getMessage() {
    return this.socket.fromEvent('message');
  }

}
