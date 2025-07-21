import { Component, Inject }                          from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA }              from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators }         from '@angular/forms';
import { PdfMeta }                                    from '../../../pdf/services/pdf.service';

interface Client { id: string; name: string; }
interface DialogData { pdf: PdfMeta; clients: Client[]; }

@Component({
  selector: 'app-edit-assign-dialog',
  templateUrl: './edit-assign-dialog.component.html'
})
export class EditAssignDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditAssignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.form = this.fb.group({
      //client: [data.pdf.clientId || null, Validators.required]
    });
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close({ client: this.form.value.client });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
