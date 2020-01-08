import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
import { MyhttpService } from 'src/app/Services/MyHttpService/myhttp.service';
import { InteractionsService } from 'src/app/Services/InteractionsService/interactions.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  searchInput = new FormControl('');
  constructor(private myHttp:MyhttpService,private interaction:InteractionsService,private route:Router) { }

  ngOnInit() {
  }


  onEnter(event){
    if(event.keyCode===13){
      //console.log(this.searchInput.value)
      this.route.navigate([`search/${this.searchInput.value}`])
      /*this.myHttp.search(this.searchInput.value).subscribe((data)=>{
        console.log(data);
        this.searchInput.reset('');
        this.interaction.setSearchResults(data);
        setTimeout(()=>this.route.navigate(['search']),3000)
        
      })*/
    }
    
  }
}
