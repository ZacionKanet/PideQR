import { Component} from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import {  NavController, Animation, AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  username: string = '';


  constructor(private platform: Platform, private navCtrl: NavController,    private router: Router,
    private toastCtrl: ToastController ) {

    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
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
  irLogin() {
    this.showToast('Ingresa tus datos');

    
    this.router.navigate(['/login']); 
  }

  crearCuenta() {
    this.showToast('Registra tus datos');

    
    this.router.navigate(['/register']); 
  }
}
