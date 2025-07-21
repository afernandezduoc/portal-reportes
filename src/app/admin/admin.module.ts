import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { ReactiveFormsModule }   from '@angular/forms';
import { RouterModule }          from '@angular/router';

// Material
import { MatCardModule }         from '@angular/material/card';
import { MatFormFieldModule }    from '@angular/material/form-field';
import { MatInputModule }        from '@angular/material/input';
import { MatSelectModule }       from '@angular/material/select';
import { MatDatepickerModule }   from '@angular/material/datepicker';
import { MatNativeDateModule }   from '@angular/material/core';
import { MatButtonModule }       from '@angular/material/button';
import { MatTableModule }        from '@angular/material/table';
import { MatIconModule }         from '@angular/material/icon';
import { MatDialogModule }       from '@angular/material/dialog';

import { AdminDashboardComponent }     from './admin-dashboard/admin-dashboard.component';
import { EditAssignDialogComponent }   from './admin-dashboard/edit-assign-dialog/edit-assign-dialog.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    EditAssignDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forChild([
      { path: '', component: AdminDashboardComponent }
    ])
  ]
})
export class AdminModule {}
