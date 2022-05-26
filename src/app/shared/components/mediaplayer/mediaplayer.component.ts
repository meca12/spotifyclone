import { Component, OnInit } from '@angular/core';
import {TrackModel} from '@core/models/tracks.model';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit {
   mockOver: TrackModel = {
     cover:'',
     album:'',
     name:'',
     url: '',
     _id:''

   }
  constructor() { }

  ngOnInit(): void {
  }

}
