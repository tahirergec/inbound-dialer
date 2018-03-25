import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Message } from './model/model.class';
import { AppService } from '../shared/service/AppService.class';

@Injectable()
export class MessageService extends AppService<Message>{
  private action:string;
  constructor(protected http : HttpClient) { 
    super(http);
    this.appmod="message/";
  }
  
  public get Action() : string {
    return this.action
  }
  
  public set Action(v : string) {
    this.action = v;
  }
  
}
