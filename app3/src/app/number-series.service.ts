import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  generateSeries(lb:number,ub:number):Observable<number>{
    
    const bgJob = (observer:Observer<number>) => {

      if(lb>ub){
        observer.error("Invalid boundaries! Series ca not be generated");
        return;
      }

      let n = lb;
      let h = setInterval(() => {
        observer.next(n);
        n++;
        if(n>ub){
          clearInterval(h);
          observer.complete();
        }
      },500);
    };
    
    return new Observable<number>(bgJob);
  }
}
