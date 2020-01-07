import { Component, OnInit } from '@angular/core';
import { InteractionsService } from 'src/app/Services/InteractionsService/interactions.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private interactions:InteractionsService) { }

  ngOnInit() {
  }

}
