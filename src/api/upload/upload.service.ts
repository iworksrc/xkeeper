import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as encodeUrl from 'encodeurl';
import { ApiService } from '../../shared/services/api/api.service';
import { delay, map, retryWhen, timeout } from 'rxjs/operators';
import { generate, of } from 'rxjs';

@Injectable()
export class UploadService {

  rowSeparator = '\n';

  constructor(
    private readonly apiService: ApiService,
  ) {
  }

  doAllWork(file_descriptor): any {
    const results = [];
    const osm_ids = [];
    const data = fs.readFileSync(file_descriptor.path, 'utf8');

    const cities = data.split(this.rowSeparator);

    cities.forEach((city) => {
      this.apiService.get(encodeUrl(`https://nominatim.openstreetmap.org/search.php?q=${city}&polygon_geojson=1&format=jsonv2`))
        .toPromise()
        .then((resp) => {
          // console.log(resp);
          if (resp.data.length) {
            console.log('osm_id =>', resp?.data[0]?.osm_id);
          } else {
            console.log('NO data');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });

      // .pipe(
      //   // delay(2000),
      //   map((city) => {
      //     console.log(city);
      //   })
      // ).subscribe();

    // data.split(this.rowSeparator)
    //   .forEach((city, index) => {
    //     setTimeout(() => {
    //       console.log('start send #', index);
    //       this.apiService.get(encodeUrl(`https://nominatim.openstreetmap.org/search.php?q=${city}&polygon_geojson=1&format=jsonv2`))
    //         .subscribe(resp => {
    //           osm_ids.push(resp?.data[0]?.osm_id);
    //           console.log('index #', index, ' osm_id =>', resp?.data[0]?.osm_id);
    //         });
    //     }, 1000*index);
    //   });

    return results;
  }
}
