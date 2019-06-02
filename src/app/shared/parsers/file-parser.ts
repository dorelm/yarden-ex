import { Item } from "../models/item.model";

export class FileParser {
    
    parseInputFile(file: string): Item[] {
        let items = [];
    
        const lines = file.split('\n');
        lines.forEach(line => items.push(this.convertLineToItem(line)));
        return items;
      }
    
      convertLineToItem(line: string): Item {
        const parts = line.split(';');
        let item = new Item();
        item.row = parseInt(parts[0]);
        item.col = parseInt(parts[1]);
        item.label = parts[2];
        item.type = parts[3];
        item.values = parts[4].split(',');
    
        return item;
      }
}