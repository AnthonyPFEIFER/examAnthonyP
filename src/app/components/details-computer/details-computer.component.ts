import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-details-computer',
  templateUrl: './details-computer.component.html',
  styleUrls: ['./details-computer.component.css']
})
export class DetailsComputerComponent implements OnInit {
  isLoading: boolean;
  computer: Computer;
  computers: Computer[];
  constructor(private route: ActivatedRoute, private computerService: ComputerService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.computerService.getComputerById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Computer) => {
      this.computer = data;
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
