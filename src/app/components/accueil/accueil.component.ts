import { Component, OnInit, Input } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  computers: Computer[];
  isLoading: boolean;
  benef: number;
  faTrash = faTrash;
  faEdit = faEdit;
  constructor(private computerService: ComputerService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.computerService.getAllComputers().subscribe((data: Computer[]) => {
      this.computers = data;
      this.isLoading = false;
    });
  }
  deleteComputer(id: number): void {
    this.isLoading = true;
    this.computerService.deleteComputer(id).subscribe(then => {
      this.computerService.getAllComputers().subscribe((data: Computer[]) => {
        this.computers = data;
        this.isLoading = false;

      });
      this.router.navigate(['/home']);
    });
  }
}
