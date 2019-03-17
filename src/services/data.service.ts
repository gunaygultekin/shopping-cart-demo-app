import { Injectable } from '@angular/core';

/**
 * Data service class for sharing data between components
 */
@Injectable()
export class DataSharingService {
  private data: any = undefined;

  setData(data: any) {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }
}
