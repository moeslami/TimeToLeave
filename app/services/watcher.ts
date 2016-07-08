import {Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {WatchlistRepo} from './watchlist-repo'
import {RouteInfo} from '../common/route-info'


@Injectable()
export class Watcher {
    constructor(private watchlistRepo: WatchlistRepo) { }
    start() {
        var source = Observable.interval(20000);
        source.subscribe(() => {
            var watchlist = this.watchlistRepo.getList();

            watchlist.forEach((item) => {
                //calc travel time

                var from = new google.maps.LatLng(item.from.lat, item.from.long);
                var to = new google.maps.LatLng(item.to.lat, item.to.long);


                var directionsService = new google.maps.DirectionsService();
                
                var departureTime = new Date();
                
                departureTime.setMinutes(departureTime.getMinutes() + 3);
                
                directionsService.route({
                    origin: from,
                    destination: to,
                    travelMode: google.maps.TravelMode.DRIVING,
                    drivingOptions: {
                            departureTime: departureTime,
                            //trafficModel: google.maps.TrafficModel.PESIMISTIC
                        },
                        unitSystem: google.maps.UnitSystem.IMPERIAL,
                        avoidHighways: false,
                        avoidTolls: item.prefs.avoidTolls,
                    
                    
                }, (response, status) => {
                    
                            if (status == google.maps.DistanceMatrixStatus.OK) {
                                
                            try {
                                var route = response.routes[0];
                                var leg = route.legs[0];
                                item.bestRoute.distance = leg.distance.text;
                                item.bestRoute.duration = leg.duration.text;

                            } catch (e) {

                            }
                        }
                    
                    
                });



                // var service = new google.maps.DistanceMatrixService();

                // service.getDistanceMatrix(
                //     {
                //         origins: [from],
                //         destinations: [to],
                //         travelMode: google.maps.TravelMode.DRIVING,
                //         // transitOptions: TransitOptions,
                //         drivingOptions: {
                //             departureTime: new Date(),
                //             trafficModel: google.maps.TrafficModel.PESSIMISTIC
                //         },
                //         unitSystem: google.maps.UnitSystem.IMPERIAL,
                //         avoidHighways: false,
                //         avoidTolls: item.prefs.avoidTolls,
                //     }, (response, status) => {
                //         // callback
                //         if (status == google.maps.DistanceMatrixStatus.OK) {
                //             try {
                //                 var row = response.rows[0];
                //                 var element = row.elements[0];
                //                 item.bestRoute.distance = element.distance.text;
                //                 item.bestRoute.duration = element.duration.text;

                //             } catch (e) {

                //             }
                //         }


                //     });


            });
        }, (e) => { }, () => { });
    }
    stop() {

    }
}