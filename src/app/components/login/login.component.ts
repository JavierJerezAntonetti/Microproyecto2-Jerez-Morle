import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _as: AuthService) { }

  ngOnInit(): void {
  }

  ingresar(proveedor: string){
    console.log(proveedor);

    this._as.login();
  }

}
