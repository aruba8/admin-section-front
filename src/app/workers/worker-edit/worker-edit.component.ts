import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Worker} from '../worker.model';
import {WorkersService} from '../workers.service';
import {Response} from '@angular/http';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {
  worker: Worker;
  isWorkerLoaded = false;
  workerId: number;
  workerTypes: { id: number, worker_type_name: string }[];
  workerFormGroup: FormGroup;
  showSuccess = false;
  showError = false;


  constructor(private router: Router,
              private workersService: WorkersService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.workerFormGroup = new FormGroup({
      name: new FormControl(null),
      workerType: new FormControl({id: 0, worker_type_name: ''})
    });
    this.workersService.getWorkerTypes().subscribe(
      (resp: Response) => {
        this.workerTypes = resp.json();
        this.isWorkerLoaded = true;
      }
    );
    this.route.params.subscribe(
      (params: Params) => {
        this.workerId = +params['id'];
        this.workersService.getWorker(this.workerId).subscribe(
          (resp: Response) => {
            this.worker = resp.json();
            this.worker.id = this.workerId;
            this.workerFormGroup.setValue({
              'name': this.worker.name,
              'workerType': this.worker.worker_type
            });
          }
        );
      }
    );

  }

  onCancel() {
    this.router.navigate(['/workers'], {relativeTo: this.route});
  }

  onUpdateWorker() {
    this.worker.name = this.workerFormGroup.value.name;
    this.worker.worker_type = this.workerFormGroup.value.workerType;
    this.workersService.updateWorker(this.worker).subscribe(
      () => {
        this.showSuccess = true;
      }, (error) => {
        this.showError = true;
        console.log(error);
      }
    );
  }

  compare(val1, val2) {
    return val1.id === val2.id;
  }

  onSubmit() {
    this.onUpdateWorker();
  }

}
