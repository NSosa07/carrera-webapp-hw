import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-screen',
  templateUrl: './perfil-screen.component.html',
  styleUrls: ['./perfil-screen.component.scss']
})
export class PerfilScreenComponent implements OnInit{

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  }

}
