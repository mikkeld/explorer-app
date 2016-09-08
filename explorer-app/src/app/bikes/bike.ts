/**
 * Created by mikkeld on 9/8/16.
 */

export class BikeStand {
  constructor(
    public name: string,
    public number: number,
    public address: string,
    public position: {lat: number, lng: number},
    public bike_stands: number,
    public available_bike_stands: number,
    public available_bikes: number,
    public last_update: number,
    public imagePath?: string
  ) { }
}
