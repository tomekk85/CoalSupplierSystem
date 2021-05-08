import { Injectable } from '@angular/core';
import { Article } from '../common/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  BOOTSTRAP_DATA: Article[] = [
    {index: 2003, name: "Wungiel Czarny", amout: 4003},
    {index: 1033, name: "Wungiel Czarn", amout: 43},
    {index: 2001, name: "Wungiel Czar", amout: 4403},
    {index: 1534, name: "Wungiel Cza", amout: 1003},
    {index: 1332, name: "Wungiel Cz", amout: 3},
    {index: 2213, name: "Wungiel C", amout: 203},
    {index: 1663, name: "Wungiel", amout: 6003},
    {index: 1887, name: "Wungie Czarny", amout: 7003},
    {index: 3203, name: "Wungi Czarny", amout: 1003},
    {index: 1433, name: "Wung Czarny", amout: 7003},
    {index: 2031, name: "Wun Czarny", amout: 4603},
    {index: 1234, name: "Wu Czarny", amout: 3603},
    {index: 2332, name: "W Czarny", amout: 4233},
    {index: 2513, name: "Czarny", amout: 1323},
    {index: 1663, name: "Ungiel Czarny", amout: 113},
    {index: 1897, name: "Ungiel Biały", amout: 4303}
  ];

  constructor() { }

  getAllProducts(): Article[] {
    return this.BOOTSTRAP_DATA;
  }
}
