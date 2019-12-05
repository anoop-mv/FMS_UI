import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { PmoService } from 'src/app/services/pmo.service';
import { PocService } from 'src/app/services/poc.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdminHidden: boolean = false;
  isPmoHidden: boolean = false;
  isPocHidden: boolean = false;
  isAdmin:boolean=false;
  role:string="";

  constructor(private adminService: AdminService, private pmoService: PmoService, private pocService: PocService) {
    this.isAdmin=this.adminService.isAdmin();
    if (this.adminService.isAdmin()) {
      this.isAdminHidden = !this.isAdminHidden;
      this.isPmoHidden = !this.isPmoHidden;
      this.isPocHidden = !this.isPocHidden;
    }
    else if (this.pmoService.isPmo()) {
      this.isPmoHidden = !this.isPmoHidden;
    }
    else if (this.pocService.isPoc()) {
      this.isPocHidden = !this.isPocHidden;
    }
  }

  ngOnInit() {
    this.role=localStorage.getItem('role');
    $(".nav-item").on("click", function(){
    //$(".nav-item").find(".active").removeClass("active");
    $("li.nav-item.active").removeClass("active");
    $(this).addClass("active");
});
  }

  loader(status){
    let ele = document.getElementsByClassName('LoadingDiv') as HTMLCollectionOf<HTMLElement>;
    if (ele.length != 0){
      ele[0].style.display = status;
    }
  }
}
