import {Component, OnDestroy, OnInit} from '@angular/core';
import {WorkersService} from '../workers.service';
import {Subscription} from 'rxjs/Subscription';
import {Worker} from '../worker.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-workers-grid',
  templateUrl: './workers-grid.component.html',
  styleUrls: ['./workers-grid.component.css']
})
export class WorkersGridComponent implements OnInit, OnDestroy {

  workers: Worker[];
  workersSubscription: Subscription;

  constructor(private workersService: WorkersService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.workers = this.workersService.getWorkers();
    this.workersSubscription = this.workersService.workersChanged.subscribe(
      (workers) => {
        this.workers = workers;
        console.log(this.workers);
      }
    );

  }

  ngOnDestroy(): void {
    this.workersSubscription.unsubscribe();
  }

  onEditUser(id: number) {
    this.router.navigate([id, 'edit'], {relativeTo: this.route});
  }

}
