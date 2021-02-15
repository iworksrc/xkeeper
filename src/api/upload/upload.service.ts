import { HttpService, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as encodeUrl from 'encodeurl';

@Injectable()
export class UploadService {

  rowSeparator = '\n';

  constructor(
    private readonly httpService: HttpService,
  ) {
  }

  doAllWork(file_descriptor): any {
    const results = [];

    const data = fs.readFileSync(file_descriptor.path, 'utf8')

    data.split(this.rowSeparator)
      .map((city)=> {
        this.httpService.get(encodeUrl(`https://nominatim.openstreetmap.org/search.php?q=${city}&polygon_geojson=1&format=jsonv2`))
          .toPromise()
          .then((resp) => {
              console.log(`city: ${city} id => `, resp.data[0]?.osm_id)
          })
      });

    return;
  }
}
