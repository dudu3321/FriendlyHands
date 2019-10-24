import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component';
import { LoginDialogData } from '../../models/login-dialog-data';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  headerToolbar = document.getElementsByClassName('header-toolbar')

  ngOnInit() {
    this.scrollEvent();
  }

  // Login dialog event
  openLoginDialog(): void{
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '450px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // 偵測scrollbar滾動，非至頂時縮小toolbar
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    this.scrollEvent();
  }

  scrollEvent(): void {
    if (scrollY > 0) {
      this.headerToolbar[0].classList.add('header-toolbar-notontop');
      this.headerToolbar[0].children[0].children[0].setAttribute('style', 'color: #F45B69;');
      this.headerToolbar[0].children[1].setAttribute('style', 'padding: 0 10px 0 15px');
    } else {
      this.headerToolbar[0].classList.remove('header-toolbar-notontop');
      this.headerToolbar[0].children[0].children[0].removeAttribute('style');
      this.headerToolbar[0].children[1].removeAttribute('style');
    }
  }
}
