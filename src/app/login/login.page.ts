import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController
  ) {}



  login() {
    const passwordPattern = /^(?=.*\d{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]).{8,}$/;
    if (this.username.length >= 3 && this.username.length <= 8) {
      if (passwordPattern.test(this.password)) {
        localStorage.setItem('username', this.username);
        this.router.navigate(['/home']);
      } else {
        this.showToast('La contraseña debe tener entre 3 y 8 caracteres, 4 números y una mayúscula.');
      }
    } else {
      this.showToast('El nombre de usuario debe tener entre 3 y 8 caracteres.');
    }
  }


  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  crearCuenta() {
    this.showToast('Ingresa tus datos');

    
    this.router.navigate(['/register']); 
  }

  olvidasteContrasena() {

    this.navCtrl.navigateForward(['/recoverpass']); 
  }
  volver() {
    this.navCtrl.navigateBack(['']);
}}



