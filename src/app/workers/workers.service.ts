import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Worker} from './worker.model';

@Injectable()
export class WorkersService {
  private workersEndPoint = 'http://localhost:8000/workers/';
  private workers: Worker[];
  workersChanged = new Subject<Worker[]>();

  constructor(private http: Http) {
  }

  getWorkers(): Worker[] {
    this.http.get(this.workersEndPoint).subscribe(
      (resp: Response) => {
        this.workers = resp.json();
        this.workersChanged.next(this.workers);
      }, (error) => {
        console.log(error);
      }
    );

    return this.workers;
  }

}
