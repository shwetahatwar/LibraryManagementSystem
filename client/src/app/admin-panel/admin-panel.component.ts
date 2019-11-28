import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAdd(){
    this.router.navigate(['/books-add']);
  }
  onViewBook(){
    this.router.navigate(['/books-list']);

  }
  onAddStudnet (){
    this.router.navigate(['/add-student']);
  }
  onViewStudent (){
    this.router.navigate(['/student-list-by-admin']);
  }
}
