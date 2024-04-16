import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertDialogComponent } from '../../shared/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Vms } from '../../shared/models/vms';

@Component({
  selector: 'app-vms-details-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './vms-details-edit.component.html',
  styleUrl: './vms-details-edit.component.scss',
})
export class VmsDetailsEditComponent {
  private router = inject(Router);
  private readonly dialog = inject(MatDialog);
  hasUnsavedChanges!: boolean;

  navigateToAnotherRoute() {
    this.hasUnsavedChanges = true;
    if (this.hasUnsavedChanges) {
      const dialogRef = this.dialog.open(AlertDialogComponent, {
        data: {
          message: 'Are you sure that you wanna leave this page?',
          info: 'You have unsaved changes!',
        },
      });
      dialogRef.afterClosed().subscribe((response: any) => {
        if (response === 'yes') { // Assuming 'yes' is the value returned when the user clicks "Yes"
            this.hasUnsavedChanges = false; // Set to false after the user confirms
            this.router.navigate(['/']);
        } else {
            this.hasUnsavedChanges = true; // Set to true if the user cancels
        }
    });
    }
  }
}
