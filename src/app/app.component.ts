import { Component, OnInit } from '@angular/core';
import { ItemService } from './shared/services/item.service';
import { Item } from './shared/models/item.model';
import { FileParser } from './shared/parsers/file-parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ElementsDrawer';

  items: Item[];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    const parser = new FileParser();
    this.itemService.getItems().subscribe(file => this.items = parser.parseInputFile(String(file)));
  }
}
