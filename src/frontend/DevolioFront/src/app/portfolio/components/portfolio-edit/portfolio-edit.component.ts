import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from '../../models/update-portfolio.dto';
import { PortfolioService } from '../../services/portfolio.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio-edit',
  templateUrl: './portfolio-edit.component.html',
  styleUrls: ['./portfolio-edit.component.scss'],
})
export class PortfolioEditComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  selectFormControl = new FormControl('', Validators.required);

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  portfolio!: Portfolio;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.form = this.formBuilder.group({
      developerName: ['', Validators.required],
      developerType: ['', Validators.required],
      knownTechnologies: ['', Validators.required],
      bio: ['', Validators.required],
      workExperiences: ['', Validators.required],
    });

    if (!this.isAddMode) {
      this.portfolioService
        .getPortfolioById(this.id)
        .pipe(first())
        .subscribe((x) => this.form.patchValue(x));
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createPortofolio();
    } else {
      this.updatePortfolio();
    }
  }

  private createPortofolio() {
    this.portfolioService.addPortfolio(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  private updatePortfolio() {
    this.portfolioService.updatePortfolio(this.id, this.form.value).subscribe({
      next: () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
