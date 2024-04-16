import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './alert-dialog.component.html',
  styleUrl: './alert-dialog.component.scss',
})
export class AlertDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { message: string; info: any; result: any }
  ) {}

  ngOnInit(): void {}

  onDenie() {
    this.dialogRef.close('no');
  }
  onClose(result?: any) {
    if (result) {
      this.dialogRef.close(result);
    } else {
      this.dialogRef.close('yes');
    }
  }
}
