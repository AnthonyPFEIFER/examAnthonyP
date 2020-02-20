import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {
  computerForm: Computer;
  isLoading: boolean;
  marques: string[];
  types: string[];
  categories: string[];

  constructor(private activatedRoute: ActivatedRoute, private computerService: ComputerService, private router: Router
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.marques = this.computerService.marques;
    this.types = this.computerService.types;
    this.categories = this.computerService.categories;
    this.computerService.getComputerById(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.computerForm = data;
        this.isLoading = false;
      });

  }
  onSubmit() {
    this.computerService.edit(this.computerForm).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }
  edit() {
    this.computerService.edit(this.computerForm).subscribe((data) => {
      this.router.navigate(['/home']);
    });
  }

}
