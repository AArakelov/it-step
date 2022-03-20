import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {authActions, authSelectors} from "../../store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.form = this.fb.group({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null)
    })
  }

  public signIn(): void {
    if (this.form.valid) {
      this.store.dispatch(authActions.signIn({
        email: this.form.value.email,
        password: this.form.value.password
      }))
    }
  }
}
