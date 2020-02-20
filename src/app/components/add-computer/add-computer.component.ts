import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  computerForm: Computer;
  isLoading: boolean;
  marques: string[];
  types: string[];
  categories: string[];
  constructor(private computerService: ComputerService, private router: Router) { }

  ngOnInit() {
    this.computerForm = new Computer();
    this.marques = this.computerService.marques;
    this.types = this.computerService.types;
    this.categories = this.computerService.categories;
  }
  onSubmit() {
    this.computerService.add(this.computerForm).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }
}
