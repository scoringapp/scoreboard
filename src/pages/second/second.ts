import { Component } from '@angular/core';
import { NavController,NavParams,AlertController} from 'ionic-angular';
import { Thirdpage } from '../ThirdPage/third';

@Component({
  selector: 'page-second',
  templateUrl:'second.html',
})
export class secondPage {
	scoresobj:any={};
	TeamAScore:any={};
	TeamBScore:any={};
	ScoringFormatObj={};
	Firstserve:any={};
	SetType:string;
	Team1Active=false;
	Team2Active=false;
	TimoutStop;
	timeMints=0;
	timeSecondes=0;
	time=false;
	SideOutButtonActive=true;
	SelectedTimeOutObj;
	timeformate:string = '1min';
	Lastopstionvalue;
	CurentScore=0;
	CourtChange=false;
	GameStartHovers=0;
	GameStartMints=0;
	GameStartSecondes=0;
	Add11formate=false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  	//function for page onload.  
  	ionViewDidLoad(){
	  	if(this.navParams.data.GameFormat ==="2 of 3 to 11"){
			  this.Add11formate=true;
	  	this.SetType="SetOneScores";
	  		this.scoresobj ={"GameFormat":"2 of 3 to 11",
					"Team1":
						{
							"Team":"Team1",
								"SetoneActive":true,
								"SetOneServe":false,
								"SelectedTeam":null,
									"SetOneScores":[
										{"Score":0,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":16,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":17,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":18,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":19,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":20,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":21,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":22,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":23,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":24,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":25,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":26,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":27,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":28,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":29,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":30,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":31,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":32,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":33,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":34,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":35,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":36,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false,"Hide":true}
									],
									"SetOneTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team1"},
										{"TimeOut":2,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team1"}
									],
									"SetTwoServe":false,
									"SetTwoScores":[
										{"Score":0,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":false},	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":16,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":17,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":18,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":19,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":20,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":21,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":22,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":23,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":24,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":25,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":26,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":27,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":28,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":29,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":30,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":31,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":32,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":33,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":34,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":35,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":36,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team1","Point":false,"Hide":true}
									],
									"SetTwoTimeOuts":[
											{"TimeOut":1,"complete":false,"set":"SetTwoTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team1"},
											{"TimeOut":2,"complete":false,"set":"SetTwoTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team1"}
										],
									"SetThreeServe":false,
									"SetThreeScores":[
										{"Score":0,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":false},	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":false},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":16,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":17,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":18,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":19,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":20,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":21,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":22,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":23,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":24,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":25,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":26,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":27,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":28,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":29,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":30,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":31,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":32,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":33,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":34,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":35,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true},
										{"Score":36,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team1","Point":false,"Hide":true}
									],
									"SetThreeTimeOuts":[
											{"TimeOut":1,"complete":false,"set":"SetThreeTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team1"},
											{"TimeOut":2,"complete":false,"set":"SetThreeTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team1"}
									]
						},

					"Team2":{
							"Team":"Team2",
							"SetoneActive":true,
							"SetOneServe":false,
							"SelectedTeam":null,
									"SetOneScores":[
										{"Score":0,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":false},	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":16,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":17,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":18,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":19,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":20,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":21,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":22,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":23,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":24,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":25,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":26,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":27,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":28,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":29,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":30,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":31,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":32,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":33,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":34,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":35,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":36,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false,"Hide":true}
									],
									"SetOneTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team2"},
										{"TimeOut":2,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team2"}
									],
									"SetTwoServe":false,
									"SetTwoScores":[
										{"Score":0,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":false},	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":16,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":17,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":18,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":19,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":20,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":21,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":22,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":23,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":24,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":25,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":26,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":27,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":28,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":29,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":30,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":31,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":32,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":33,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":34,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":35,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":36,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2","Point":false,"Hide":true}
									],
									"SetTwoTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetTwoTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team2"},
										{"TimeOut":2,"complete":false,"set":"SetTwoTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team2"}
									],
								
									"SetThreeServe":false,
									"SetThreeScores":[
										{"Score":0,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":false},	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":false},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":16,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":17,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":18,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":19,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":20,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":21,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":22,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":23,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":24,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":25,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":26,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":27,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":28,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":29,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":30,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":31,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":32,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":33,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":34,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":35,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true},
										{"Score":36,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetThreeScores","Team":"Team2","Point":false,"Hide":true}
									],
									"SetThreeTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetThreeTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team2"},
										{"TimeOut":2,"complete":false,"set":"SetThreeTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team2"}
									]
								}		
						}

	  	}else if(this.navParams.data.GameFormat ==="1 to 15"){
			  this.Add11formate=false;
	  	this.SetType="SetOneScores";
	  		this.scoresobj ={"GameFormat":"1 to 15",
					"Team1":
						{
							"Team":"Team1",
							"SetoneActive":true,
								"SetOneServe":false,
								"SelectedTeam":null,
									"SetOneScores":[
									{"Score":0,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1"},	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false}
									],
									"SetOneTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team1"},
										{"TimeOut":2,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team1"}
									]
									
						},

					"Team2":{
							"Team":"Team2",
							"SetoneActive":true,
							"SetOneServe":false,
							"SelectedTeam":null,
									"SetOneScores":[	
										{"Score":0,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false}
									],
									"SetOneTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team2"},
										{"TimeOut":2,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team2"}
									]		
						}
					}

	  	}else if(this.navParams.data.GameFormat ==="1 to 21"){
			  this.Add11formate=true;
	  		this.SetType="SetOneScores";
	  		this.scoresobj ={"GameFormat":"1 to 21",
					"Team1":
						{
							"Team":"Team1",
							"SetoneActive":true,
							"SelectedTeam":null,
								"SetOneServe":false,
									"SetOneScores":[
										{"Score":0,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":16,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":17,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":18,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":19,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":20,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false},
										{"Score":21,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1","Point":false}
									],
									"SetOneTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team1"},
										{"TimeOut":2,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team1"},
										{"TimeOut":3,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team1"}
									]
								
						},

					"Team2":{
							"Team":"Team2",
							"SetoneActive":true,
							"SetOneServe":false,
							"SelectedTeam":null,
									"SetOneScores":[
										{"Score":0,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":16,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":17,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":18,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":19,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":20,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false},
										{"Score":21,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team2","Point":false}
									],
									"SetOneTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team2"},
										{"TimeOut":2,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team2"},
										{"TimeOut":3,"complete":false,"set":"SetOneTimeOuts","Status":false,"Time":null,"ClickedTime":false,"Team":"Team2"}
									]		
						}
					}

	  	}
	  	this.TeamAScore=this.scoresobj.Team1;
	  	this.TeamBScore=this.scoresobj.Team2;
		if(this.navParams.data.Event === 'Doubles'){
			this.scoresobj.Team1.SetoneActive=false;
  			this.scoresobj.Team2.SetoneActive=false;
		}
	}




	//function for back to home page.
	backtohome(){
		//this.navParams.data.Serve=false;
		window.location.reload(true);
  		this.navCtrl.pop();
  	}


  	//function for how is the first serve.
  	FirstServe(data){
  		
	if(this.navParams.data.Event==="singles"){
			this.scoresobj.Team1.SetoneActive=false;
  			this.scoresobj.Team2.SetoneActive=false;

  			if(this.navParams.data.Team1.Team===data){
				  this.Firstserve.GameStart=true;
				this.Team1Active=true;
				this.Team2Active=false;
				if(this.scoresobj.Team1.SetOneScores.length===37){
					this.scoresobj.Team1.SetOneServe=true;
					this.scoresobj.Team2.SetTwoServe=true;
					this.scoresobj.Team1.SetThreeServe=true;
					this.Firstserve.minValue=0;
					this.Firstserve.maxValue=11;
					this.scoresobj.Team2.SetOneServe=false;
					this.scoresobj.Team2.SetThreeServe=false;
					this.scoresobj.Team1.SetTwoServe=false;
				}else{
					this.scoresobj.Team1.SetOneServe=true;
					this.scoresobj.Team2.SetOneServe=false;
				}
  				
  			}else{
				  this.Team2Active=true;
				  this.Team1Active=false;
				   this.Firstserve.GameStart=true;
				  if(this.scoresobj.Team2.SetOneScores.length===37){
						this.scoresobj.Team2.SetOneServe=true;
						this.scoresobj.Team1.SetTwoServe=true;
						this.scoresobj.Team2.SetThreeServe=true;
						this.scoresobj.Team1.SetOneServe=false;
						this.scoresobj.Team2.SetTwoServe=false;
						this.scoresobj.Team1.SetThreeServe=false;
						this.Firstserve.minValue=0;
						this.Firstserve.maxValue=11;
					}else{
						this.scoresobj.Team2.SetOneServe=true;
						this.scoresobj.Team1.SetOneServe=false;
					}
  			}
  			
	  		let Teama:any={};
	  		let Teamb:any={};
	  		Teama.nameA1=this.navParams.data.Team1.Players[0]['Name'];
	  		Teama.TeamAPoints=0;
	  		Teama.TeamAServeCount=1;
	  		Teamb.nameB1=this.navParams.data.Team2.Players[0]['Name'];
	  		Teamb.TeamBPoints=0;
	  		Teamb.TeamBServeCount=1;
	  		this.Firstserve.Team1=Teama;
	  		this.Firstserve.Team2=Teamb;
	  	}else{
			if(this.Firstserve.teamAserve!=undefined && this.Firstserve.teamBserve!=undefined){
				this.Firstserve.GameStart=true;
				this.SideOutButtonActive=true;
				this.scoresobj.Team1.SetoneActive=false;
  				this.scoresobj.Team2.SetoneActive=false;
				let Teama:any={};
				let Teamb:any={};
				Teama.TeamAPoints=0;
				Teama.TeamAServeCount=2;
				Teamb.TeamBPoints=0;
				Teamb.TeamBServeCount=2;
				this.Firstserve.Team1=Teama;
				this.Firstserve.Team2=Teamb;
				if(this.navParams.data.Team1.Team===data){
					this.Firstserve.selectedTeam="Team1";
					if(this.scoresobj.Team1.SetOneScores.length===37){
						this.scoresobj.Team1.SetOneServe=true;
						this.scoresobj.Team2.SetTwoServe=true;
						this.scoresobj.Team1.SetThreeServe=true;
						this.Firstserve.minValue=0;
						this.Firstserve.maxValue=11;
						this.scoresobj.Team2.SetOneServe=false;
						this.scoresobj.Team2.SetThreeServe=false;
						this.scoresobj.Team1.SetTwoServe=false;
					}else{
						this.scoresobj.Team1.SetOneServe=true;
						this.scoresobj.Team2.SetOneServe=false;
					}
					
					
				}else{
					this.Firstserve.selectedTeam="Team2";
					if(this.scoresobj.Team2.SetOneScores.length===37){
						this.scoresobj.Team2.SetOneServe=true;
						this.scoresobj.Team1.SetTwoServe=true;
						this.scoresobj.Team2.SetThreeServe=true;
						this.Firstserve.minValue=0;
						this.Firstserve.maxValue=11;
						this.scoresobj.Team1.SetOneServe=false;
						this.scoresobj.Team2.SetTwoServe=false;
						this.scoresobj.Team1.SetThreeServe=false;
					}else{

						this.scoresobj.Team2.SetOneServe=true;
						this.scoresobj.Team1.SetOneServe=false;
					}
					
				}
			}
		}	
  	}

	//function for match start.
	MatchStart(){
		this.Firstserve.GameStart=false;
		this.scoresobj.Team1.SetoneActive=false;
  		this.scoresobj.Team2.SetoneActive=false;
	  	this.navParams.data.Serve=true;
		if(this.Firstserve.selectedTeam==="Team1"){
			if(this.navParams.data.Event ==='Doubles'){
				this.Firstserve.showhedding=true;
				if(this.navParams.data.Team1.Players[0].Served === true){
					this.Firstserve.nameA1=this.navParams.data.Team1.Players[0]['Name'];
					this.Firstserve.nameA2=this.navParams.data.Team1.Players[1]['Name'];
					this.Firstserve.Team1.nameA1=this.navParams.data.Team1.Players[0]['Name'];
					this.Firstserve.Team1.nameA2=this.navParams.data.Team1.Players[1]['Name'];
				}else{
					this.Firstserve.nameA1=this.navParams.data.Team1.Players[1]['Name'];
					this.Firstserve.nameA2=this.navParams.data.Team1.Players[0]['Name'];
					this.Firstserve.Team1.nameA1=this.navParams.data.Team1.Players[1]['Name'];
					this.Firstserve.Team1.nameA2=this.navParams.data.Team1.Players[0]['Name'];
				}
				if(this.navParams.data.Team2.Players[0].Served === true){
					this.Firstserve.nameB1=this.navParams.data.Team2.Players[0]['Name'];
					this.Firstserve.nameB2=this.navParams.data.Team2.Players[1]['Name'];
					this.Firstserve.Team2.nameB1=this.navParams.data.Team2.Players[0]['Name'];
					this.Firstserve.Team2.nameB2=this.navParams.data.Team2.Players[1]['Name'];
				}else{
					this.Firstserve.nameB1=this.navParams.data.Team2.Players[1]['Name'];
					this.Firstserve.nameB2=this.navParams.data.Team2.Players[0]['Name'];
					this.Firstserve.Team2.nameB1=this.navParams.data.Team2.Players[1]['Name'];
					this.Firstserve.Team2.nameB2=this.navParams.data.Team2.Players[0]['Name'];
				}
				this.Team1Active=true;
				this.Team2Active=false;
				this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.nameA1;
				this.Firstserve.ServingTeamActivePlayerSide="Left";
				this.Firstserve.ServingTeamPlayerName=this.Firstserve.nameA2;
				this.Firstserve.ServingTeamPlayerSide="Right";
				this.Firstserve.ReseivingTeamActivePlayerName=this.Firstserve.nameB1;
				this.Firstserve.ReseivingTeamPlayerName=this.Firstserve.nameB2;
				this.Firstserve.ReseivingTeamActivePlayerSide="Left";
			}else{
				this.Firstserve.nameA1=this.navParams.data.Team1.Players[0]['Name'];
				this.Firstserve.nameB1=this.navParams.data.Team2.Players[0]['Name'];
				this.Firstserve.Team1.nameA1=this.navParams.data.Team1.Players[0]['Name'];
				this.Firstserve.Team2.nameB1=this.navParams.data.Team2.Players[0]['Name'];
			}

			this.Team1Active=true;
			this.Team2Active=false;
		  	this.TeamAScore=this.scoresobj.Team1;
	  		this.TeamBScore=this.scoresobj.Team2;
		}else{
			if(this.navParams.data.Event ==='Doubles'){
					this.Firstserve.showhedding=true;
					if(this.navParams.data.Team1.Players[0].Served === true){
						this.Firstserve.nameB1=this.navParams.data.Team1.Players[0]['Name'];
						this.Firstserve.nameB2=this.navParams.data.Team1.Players[1]['Name'];
						this.Firstserve.Team1.nameA1=this.navParams.data.Team1.Players[0]['Name'];
						this.Firstserve.Team1.nameA2=this.navParams.data.Team1.Players[1]['Name'];
					}else{
						this.Firstserve.nameB1=this.navParams.data.Team1.Players[1]['Name'];
						this.Firstserve.nameB2=this.navParams.data.Team1.Players[0]['Name'];
						this.Firstserve.Team1.nameA1=this.navParams.data.Team1.Players[1]['Name'];
						this.Firstserve.Team1.nameA2=this.navParams.data.Team1.Players[0]['Name'];
					}
					if(this.navParams.data.Team2.Players[0].Served === true){
						this.Firstserve.nameA1=this.navParams.data.Team2.Players[0]['Name'];
						this.Firstserve.nameA2=this.navParams.data.Team2.Players[1]['Name'];
						this.Firstserve.Team2.nameB1=this.navParams.data.Team2.Players[0]['Name'];
						this.Firstserve.Team2.nameB2=this.navParams.data.Team2.Players[1]['Name'];
					}else{
						this.Firstserve.nameA1=this.navParams.data.Team2.Players[1]['Name'];
						this.Firstserve.nameA2=this.navParams.data.Team2.Players[0]['Name'];
						this.Firstserve.Team2.nameB1=this.navParams.data.Team2.Players[1]['Name'];
						this.Firstserve.Team2.nameB2=this.navParams.data.Team2.Players[0]['Name'];
					}
					this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.nameA1;
					this.Firstserve.ServingTeamActivePlayerSide="Left";
					this.Firstserve.ServingTeamPlayerName=this.Firstserve.nameA2;
					this.Firstserve.ServingTeamPlayerSide="Right";
					this.Firstserve.ReseivingTeamActivePlayerName=this.Firstserve.nameB1;
					this.Firstserve.ReseivingTeamPlayerName=this.Firstserve.nameB2;
					this.Firstserve.ReseivingTeamActivePlayerSide="Left";
					
			}else{
				this.Firstserve.nameA1=this.navParams.data.Team2.Players[0]['Name'];
				this.Firstserve.nameB1=this.navParams.data.Team1.Players[0]['Name'];
				this.Firstserve.Team1.nameA1=this.navParams.data.Team1.Players[0]['Name'];
				this.Firstserve.Team2.nameB1=this.navParams.data.Team2.Players[0]['Name'];
			}
			this.Team2Active=true;
			this.Team1Active=false;
			this.TeamAScore=this.scoresobj.Team2;
			this.TeamBScore=this.scoresobj.Team1;
		}
		this.scoresobj.Team1.SetOneTimeOuts[0].Status=true;
		this.scoresobj.Team2.SetOneTimeOuts[0].Status=true;
		this.scoresobj.Team1.SetOneScores[0].clicked=true;
		this.scoresobj.Team1.SetOneScores[0].Status=true;
		this.scoresobj.Team2.SetOneScores[0].clicked=true;
		this.scoresobj.Team2.SetOneScores[0].Status=true;
		this.scoresobj.Team1.SetOneScores[1].Status=true;
		this.scoresobj.Team2.SetOneScores[1].Status=true;
		this.scoresobj.Team1.SetOneScores[0].ServicesDowen=true;
		this.scoresobj.Team2.SetOneScores[0].ServicesDowen=true;

		this.MatchStartToEndTime();
	}

  	// function for TeamB Select First Serve Player Name.
	TeamASelectFirstServePlayerName(myvalue){
		this.Firstserve.teamAserve=true;
		if(myvalue === 0){
			this.navParams.data.Team1.Players[0].Served = true;
			this.navParams.data.Team1.Players[1].Served = false;
		}else{
			this.navParams.data.Team1.Players[1].Served = true;
			this.navParams.data.Team1.Players[0].Served = false;
		}
		if(this.Firstserve.teamBserve !=undefined && this.Firstserve.GameStart===undefined){
			this.scoresobj.Team1.SetoneActive=true;
  			this.scoresobj.Team2.SetoneActive=true;
		 }
		 



		// this.Firstserve.teamAserve=true;
		// if(this.Team1Active){
		// 	if(myvalue===0){
		// 		this.Firstserve.nameA1=this.navParams.data.Team1.Players[0]['Name'];
		//   	this.Firstserve.nameA2=this.navParams.data.Team1.Players[1]['Name'];
		  		

		// 		this.Firstserve.Team1.nameA1=this.navParams.data.Team1.Players[0]['Name'];
  		// 		this.Firstserve.Team1.nameA2=this.navParams.data.Team1.Players[1]['Name'];
		// 	}else{
		// 		this.Firstserve.nameA1=this.navParams.data.Team1.Players[1]['Name'];
		//   		this.Firstserve.nameA2=this.navParams.data.Team1.Players[0]['Name'];

		// 		this.Firstserve.Team1.nameA1=this.navParams.data.Team1.Players[1]['Name'];
  		// 		this.Firstserve.Team1.nameA2=this.navParams.data.Team1.Players[0]['Name'];
		// 	}
		// 	this.navParams.data.Team1.Players[myvalue]['Served']=true;
		// }else{
		// 	if(myvalue===0){
		// 		this.Firstserve.nameA1=this.navParams.data.Team2.Players[0]['Name'];
		//   		this.Firstserve.nameA2=this.navParams.data.Team2.Players[1]['Name'];

		// 		this.Firstserve.Team2.nameB1=this.navParams.data.Team2.Players[0]['Name'];
  		// 		this.Firstserve.Team2.nameB2=this.navParams.data.Team2.Players[1]['Name'];
		// 	}else{
		// 		this.Firstserve.nameA1=this.navParams.data.Team2.Players[1]['Name'];
		//   		this.Firstserve.nameA2=this.navParams.data.Team2.Players[0]['Name'];

		// 		this.Firstserve.Team2.nameB1=this.navParams.data.Team2.Players[1]['Name'];
  		// 		this.Firstserve.Team2.nameB2=this.navParams.data.Team2.Players[0]['Name'];
		// 	}
		// 	this.navParams.data.Team2.Players[myvalue]['Served']=true;
		// }
		// this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.nameA1;
  		// this.Firstserve.ServingTeamActivePlayerSide="Left";
  		// this.Firstserve.ServingTeamPlayerName=this.Firstserve.nameA2;
  		// this.Firstserve.ServingTeamPlayerSide="Right";
		// if(this.Firstserve.teamBserve !=undefined){
		// 	this.SideOutButtonActive = true;
		// 	this.navParams.data.Serve=true;
		// 	this.scoresobj.Team1.SetOneTimeOuts[0].Status=true;
	  	// 	this.scoresobj.Team2.SetOneTimeOuts[0].Status=true;
	  	// 	this.scoresobj.Team1.SetOneScores[0].clicked=true;
  		// 	this.scoresobj.Team1.SetOneScores[0].Status=true;
  		// 	this.scoresobj.Team2.SetOneScores[0].clicked=true;
  		// 	this.scoresobj.Team2.SetOneScores[0].Status=true;
  		// 	this.scoresobj.Team1.SetOneScores[1].Status=true;
  		// 	this.scoresobj.Team2.SetOneScores[1].Status=true;
  		// 	this.scoresobj.Team1.SetOneScores[0].ServicesDowen=true;
	  	// 	this.scoresobj.Team2.SetOneScores[0].ServicesDowen=true;
		// }
	}

	// function for TeamB Select First Serve Player Name.
	TeamBSelectFirstServePlayerName(myvalue){
		this.Firstserve.teamBserve=true;
		if(myvalue === 0){
			this.navParams.data.Team2.Players[0].Served = true;
			this.navParams.data.Team2.Players[1].Served = false;
		}else{
			this.navParams.data.Team2.Players[1].Served = true;
			this.navParams.data.Team2.Players[0].Served = false;
		}

		if(this.Firstserve.teamAserve !=undefined && this.Firstserve.GameStart===undefined){
			this.scoresobj.Team1.SetoneActive=true;
  			this.scoresobj.Team2.SetoneActive=true;
		}



		// this.Firstserve.teamBserve=true;
		// if(this.Team1Active===false){
  				
		// 	if(myvalue===0){

		// 		this.Firstserve.nameB1=this.navParams.data.Team1.Players[0]['Name'];
		//   		this.Firstserve.nameB2=this.navParams.data.Team1.Players[1]['Name'];
  				
		// 		this.Firstserve.Team1.nameA1=this.navParams.data.Team1.Players[0]['Name'];
	  	// 		this.Firstserve.Team1.nameA2=this.navParams.data.Team1.Players[1]['Name'];
  		// 	}else{
  		// 		this.Firstserve.nameB1=this.navParams.data.Team1.Players[1]['Name'];
		//   		this.Firstserve.nameB2=this.navParams.data.Team1.Players[0]['Name'];

  		// 		this.Firstserve.Team1.nameA1=this.navParams.data.Team1.Players[1]['Name'];
	  	// 		this.Firstserve.Team1.nameA2=this.navParams.data.Team1.Players[0]['Name'];
  		// 	}
		// 	this.navParams.data.Team1.Players[myvalue]['Served']=true;
		// }else{
		// 	if(myvalue===0){
		// 		this.Firstserve.nameB1=this.navParams.data.Team2.Players[0]['Name'];
		//   		this.Firstserve.nameB2=this.navParams.data.Team2.Players[1]['Name'];

		// 		this.Firstserve.Team2.nameB1=this.navParams.data.Team2.Players[0]['Name'];
		//   		this.Firstserve.Team2.nameB2=this.navParams.data.Team2.Players[1]['Name'];
  		// 	}else{
  		// 		this.Firstserve.nameB1=this.navParams.data.Team2.Players[1]['Name'];
		//   		this.Firstserve.nameB2=this.navParams.data.Team2.Players[0]['Name'];

  		// 		this.Firstserve.Team2.nameB1=this.navParams.data.Team2.Players[1]['Name'];
		//   		this.Firstserve.Team2.nameB2=this.navParams.data.Team2.Players[0]['Name'];
  		// 	}
		// 	this.navParams.data.Team2.Players[myvalue]['Served']=true;
		// }
		// this.Firstserve.ReseivingTeamActivePlayerName=this.Firstserve.nameB1;
  		// this.Firstserve.ReseivingTeamPlayerName=this.Firstserve.nameB2;
  		// this.Firstserve.ReseivingTeamActivePlayerSide="Left";
		// if(this.Firstserve.teamAserve !=undefined){
		// 	this.SideOutButtonActive = true;
		// 	this.navParams.data.Serve=true;
		// 	this.scoresobj.Team1.SetOneTimeOuts[0].Status=true;
	  	// 	this.scoresobj.Team2.SetOneTimeOuts[0].Status=true;
	  	// 	this.scoresobj.Team1.SetOneScores[0].clicked=true;
  		// 	this.scoresobj.Team1.SetOneScores[0].Status=true;
  		// 	this.scoresobj.Team2.SetOneScores[0].clicked=true;
  		// 	this.scoresobj.Team2.SetOneScores[0].Status=true;
  		// 	this.scoresobj.Team1.SetOneScores[1].Status=true;
  		// 	this.scoresobj.Team2.SetOneScores[1].Status=true;
  		// 	this.scoresobj.Team1.SetOneScores[0].ServicesDowen=true;
	  	// 	this.scoresobj.Team2.SetOneScores[0].ServicesDowen=true;
		// }
	}
	



  	//function for inter change the score board.
  	SideOut(){
  		
		if(this.Team1Active===true && this.navParams.data.Event === "Doubles"){
  			if(this.Firstserve.Team1.TeamAPoints%2===0){
  				this.Firstserve.ReseivingTeamActivePlayerName=this.Firstserve.Team1.nameA1;
  				this.Firstserve.ReseivingTeamPlayerName=this.Firstserve.Team1.nameA2;
  				this.Firstserve.ReseivingTeamActivePlayerSide="Left";
  			}else{
  				this.Firstserve.ReseivingTeamActivePlayerName=this.Firstserve.Team1.nameA2;
  				this.Firstserve.ReseivingTeamPlayerName=this.Firstserve.Team1.nameA1;
  				this.Firstserve.ReseivingTeamActivePlayerSide="Left";
  			}

  			if(this.Firstserve.Team2.TeamBPoints%2===0){
  				this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.Team2.nameB1;
	  			this.Firstserve.ServingTeamActivePlayerSide="Left";
	  			this.Firstserve.ServingTeamPlayerName=this.Firstserve.Team2.nameB2;
	  			this.Firstserve.ServingTeamPlayerSide="Right";
	  			this.Firstserve.Team2.TeamBServeCount=1;
	  			this.Firstserve.ServingTeamActiveTeamname="B1";
	  		}else{
	  			this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.Team2.nameB2;
	  			this.Firstserve.ServingTeamActivePlayerSide="Left";
	  			this.Firstserve.ServingTeamPlayerName=this.Firstserve.Team2.nameB1;
	  			this.Firstserve.ServingTeamPlayerSide="Right";
	  			this.Firstserve.Team2.TeamBServeCount=1;
	  			this.Firstserve.ServingTeamActiveTeamname="B2";
	  		}
		}else if(this.Team2Active===true && this.navParams.data.Event==="Doubles"){
  			if(this.Firstserve.Team2.TeamBPoints%2===0){
  				this.Firstserve.ReseivingTeamActivePlayerName=this.Firstserve.Team2.nameB1;
  				this.Firstserve.ReseivingTeamPlayerName=this.Firstserve.Team2.nameB2;
  				this.Firstserve.ReseivingTeamActivePlayerSide="Left";
  			}else{
  				this.Firstserve.ReseivingTeamActivePlayerName=this.Firstserve.Team2.nameB2;
  				this.Firstserve.ReseivingTeamPlayerName=this.Firstserve.Team2.nameB1;
  				this.Firstserve.ReseivingTeamActivePlayerSide="Left";
  			}
  			if(this.Firstserve.Team1.TeamAPoints%2===0){
  				this.Firstserve.Team2.TeamAServeCount=1;
	  			this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.Team1.nameA1;
	  			this.Firstserve.ServingTeamActivePlayerSide="Left";
	  			this.Firstserve.ServingTeamPlayerName=this.Firstserve.Team1.nameA2;
	  			this.Firstserve.ServingTeamPlayerSide="Right";
	  			this.Firstserve.ServingTeamActiveTeamname="A1";
	  		}else{
	  			this.Firstserve.Team2.TeamAServeCount=1;
	  			this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.Team1.nameA2;
	  			this.Firstserve.ServingTeamActivePlayerSide="Left";
	  			this.Firstserve.ServingTeamPlayerName=this.Firstserve.Team1.nameA1;
	  			this.Firstserve.ServingTeamPlayerSide="Right";
	  			this.Firstserve.ServingTeamActiveTeamname="A2";
	  		}	
  		}

  		if(this.Team1Active && this.navParams.data.Serve===true){
  			if(this.Firstserve.Team1.TeamAPoints!=0){
  				this.scoresobj.Team1[this.SetType][this.Firstserve.Team1.TeamAPoints].Point=false;
  				this.scoresobj.Team1[this.SetType][this.Firstserve.Team1.TeamAPoints]['ServicesDowen'] = true;
  				this.CurentScore=this.Firstserve.Team2.TeamBPoints;
  			}
  		}else if(this.Team2Active && this.navParams.data.Serve===true){
  			if(this.Firstserve.Team2.TeamBPoints!=0){
  				this.scoresobj.Team2[this.SetType][this.Firstserve.Team2.TeamBPoints].Point=false;
  				this.scoresobj.Team2[this.SetType][this.Firstserve.Team2.TeamBPoints]['ServicesDowen'] = true;
  				this.CurentScore=this.Firstserve.Team1.TeamAPoints;
  			}
  		}
		  
  		if(this.navParams.data.Event==="singles"){
  			if(this.navParams.data.Serve===true){
	  			this.SideOutButtonActive = true;
	  			this.Team1Active = !this.Team1Active;
	  			this.Team2Active = !this.Team2Active;
  			}
  		}else{
  			if(this.Team1Active && this.navParams.data.Serve===true){
	  			this.Firstserve.Team2.TeamBServeCount=1;
	  		}else if(this.navParams.data.Serve===true){
	  			this.Firstserve.Team1.TeamAServeCount=1;
	  		}
	  		if(this.Team1Active===true || this.Team2Active===true ){
				if(this.navParams.data.Serve){
					this.SideOutButtonActive = !this.SideOutButtonActive;
				}
	  			
	  			this.Team1Active = !this.Team1Active;
	  			this.Team2Active = !this.Team2Active;
	  		}
  		}

  		
		if(this.TeamAScore.Team === 'Team1'){
  			this.TeamAScore=this.scoresobj.Team2;
  			this.TeamBScore=this.scoresobj.Team1;
		}else{
			this.TeamAScore=this.scoresobj.Team1;
			this.TeamBScore=this.scoresobj.Team2;
		}
	}

  	//function for UpdateScore.
  	UpdateScore(score){

  		if(this.Firstserve.ServingTeamActivePlayerSide==="Right" && this.navParams.data.Event==="Doubles" ){
			this.Firstserve.ServingTeamActivePlayerSide="Left"
			this.Firstserve.ServingTeamPlayerSide="Right";
  		}else if(this.Firstserve.ServingTeamActivePlayerSide==="Left" && this.navParams.data.Event==="Doubles"){
  			this.Firstserve.ServingTeamActivePlayerSide="Right";
			this.Firstserve.ServingTeamPlayerSide="Left";
  		}
  		if(this.Team1Active){
  			this.Firstserve.Team1.TeamAPoints=this.Firstserve.Team1.TeamAPoints+1;
  		}else{
  			this.Firstserve.Team2.TeamBPoints=this.Firstserve.Team2.TeamBPoints+1;
  		}


  		let team = score.Team;
  		this.SetType= score.set;
  		let myscore =score.Score;
  		myscore=myscore;
		 if(this.scoresobj[team][this.SetType].length >myscore){
			this.scoresobj[team][this.SetType][myscore-1].Point=false;
			this.scoresobj[team][this.SetType][myscore].Point=true;
		}

  		if(this.scoresobj[team][this.SetType].length===16 && this.CourtChange===false){
			if(this.Firstserve.Team1.TeamAPoints>this.Firstserve.Team2.TeamBPoints && this.Firstserve.Team1.TeamAPoints === 8 ){
				this.CourtChange=true;
			 	let prompt = this.alertCtrl.create({
			      	message: "Players Change Sides",
			      	buttons: [
			        	{
			          text: 'ok',
			          handler: data => {
			          }
			        }
			      ]
			    });
			    prompt.present();
			}else if(this.Firstserve.Team2.TeamBPoints>this.Firstserve.Team1.TeamAPoints && this.Firstserve.Team2.TeamBPoints === 8){
				this.CourtChange=true;
				let prompt = this.alertCtrl.create({
			      	message: "Players Change Sides",
			      	buttons: [
			        	{
			          text: 'ok',
			          handler: data => {
			          }
			        }
			      ]
			    });
			    prompt.present();
			}
		}else if(this.scoresobj[team][this.SetType].length===37 && this.CourtChange===false && this.scoresobj[team][this.SetType][myscore].set==="SetThreeScores"){
			if(this.Firstserve.Team1.TeamAPoints>this.Firstserve.Team2.TeamBPoints && this.Firstserve.Team1.TeamAPoints === 6 ){
				this.CourtChange=true;
			 	let prompt = this.alertCtrl.create({
			      	message: "Players Change Sides",
			      	buttons: [
			        	{
			          text: 'ok',
			          handler: data => {
			          }
			        }
			      ]
			    });
			    prompt.present();
			}else if(this.Firstserve.Team2.TeamBPoints>this.Firstserve.Team1.TeamAPoints && this.Firstserve.Team2.TeamBPoints === 6){
				this.CourtChange=true;
				let prompt = this.alertCtrl.create({
			      	message: "Players Change Sides",
			      	buttons: [
			        	{
			          text: 'ok',
			          handler: data => {
			          }
			        }
			      ]
			    });
			    prompt.present();
			}
		}else if(this.scoresobj[team][this.SetType].length===22 && this.CourtChange===false){
			if(this.Firstserve.Team1.TeamAPoints>this.Firstserve.Team2.TeamBPoints && this.Firstserve.Team1.TeamAPoints === 11){
				this.CourtChange=true;
			 	let prompt = this.alertCtrl.create({
			      	message: "Players Change Sides",
			      	buttons: [
			        	{
			          text: 'ok',
			          handler: data => {
			          }
			        }
			      ]
			    });
			    prompt.present();
			}else if(this.Firstserve.Team2.TeamBPoints>this.Firstserve.Team1.TeamAPoints && this.Firstserve.Team2.TeamBPoints === 11){
				this.CourtChange=true;
				let prompt = this.alertCtrl.create({
			      	message: "Players Change Sides",
			      	buttons: [
			        	{
			          text: 'ok',
			          handler: data => {
			          }
			        }
			      ]
			    });
			    prompt.present();
			}
		}
  		this.scoresobj[team][this.SetType][myscore].clicked = true;
		  console.log("this.scoresobj[team][this.SetType][myscore].clicked = true",this.scoresobj[team][this.SetType][myscore].clicked);
  		myscore=myscore+1;

  		if(this.scoresobj[team][this.SetType].length >myscore){
  			if(this.Team1Active && this.navParams.data.Event==="Doubles"){
	  			this.Firstserve.Team2.TeamBServeCount=1;
	  		}else if(this.Team2Active && this.navParams.data.Event==="Doubles"){
	  			this.Firstserve.Team1.TeamAServeCount=1;
	  		}
	  		this.scoresobj[team][this.SetType][myscore].Status = true;
			if(this.navParams.data.GameFormat ==="2 of 3 to 11"){
				console.log("this.Firstserve.maxValue",this.Firstserve.maxValue,"myscore-1",myscore-1);
				
				if(this.Firstserve.Team2.TeamBPoints>this.Firstserve.Team1.TeamAPoints && this.Firstserve.Team2.TeamBPoints-this.Firstserve.Team1.TeamAPoints >= 2 && this.Firstserve.Team2.TeamBPoints>=11){
					this.WinneingSets2of3();
				}else if(this.Firstserve.Team1.TeamAPoints>this.Firstserve.Team2.TeamBPoints && this.Firstserve.Team1.TeamAPoints-this.Firstserve.Team2.TeamBPoints >= 2 && this.Firstserve.Team1.TeamAPoints>=11){
					this.WinneingSets2of3();
				}else if(this.Firstserve.maxValue === myscore-1){

						this.scoresobj.Team1[this.SetType][this.Firstserve.maxValue+1].Hide=false;
						this.scoresobj.Team1[this.SetType][this.Firstserve.maxValue+2].Hide=false;
						this.scoresobj.Team1[this.SetType][this.Firstserve.maxValue+3].Hide=false;
						this.scoresobj.Team1[this.SetType][this.Firstserve.maxValue+4].Hide=false;
						this.scoresobj.Team1[this.SetType][this.Firstserve.maxValue+5].Hide=false;

						this.scoresobj.Team2[this.SetType][this.Firstserve.maxValue+1].Hide=false;
						this.scoresobj.Team2[this.SetType][this.Firstserve.maxValue+2].Hide=false;
						this.scoresobj.Team2[this.SetType][this.Firstserve.maxValue+3].Hide=false;
						this.scoresobj.Team2[this.SetType][this.Firstserve.maxValue+4].Hide=false;
						this.scoresobj.Team2[this.SetType][this.Firstserve.maxValue+5].Hide=false;

						this.scoresobj.Team1[this.SetType][this.Firstserve.minValue].Hide=true;
						this.scoresobj.Team1[this.SetType][this.Firstserve.minValue+1].Hide=true;
						this.scoresobj.Team1[this.SetType][this.Firstserve.minValue+2].Hide=true;
						this.scoresobj.Team1[this.SetType][this.Firstserve.minValue+3].Hide=true;
						this.scoresobj.Team1[this.SetType][this.Firstserve.minValue+4].Hide=true;

						this.scoresobj.Team2[this.SetType][this.Firstserve.minValue].Hide=true;
						this.scoresobj.Team2[this.SetType][this.Firstserve.minValue+1].Hide=true;
						this.scoresobj.Team2[this.SetType][this.Firstserve.minValue+2].Hide=true;
						this.scoresobj.Team2[this.SetType][this.Firstserve.minValue+3].Hide=true;
						this.scoresobj.Team2[this.SetType][this.Firstserve.minValue+4].Hide=true;
						
						if(this.Firstserve.maxValue===11){
							this.Firstserve.OldmaxValue=11;	
						}else{
							this.Firstserve.OldmaxValue=this.Firstserve.OldmaxValue+5;
						}
						this.Firstserve.maxValue=this.Firstserve.maxValue+5;
						this.Firstserve.minValue=this.Firstserve.minValue+5;

				}
			}
  		}else{	
				if(this.Team1Active){
					this.scoresobj.Team1[this.SetType][myscore-1].Point=false;
					if(this.scoresobj[team][this.SetType].length===16){
						this.scoresobj.Team1.SetOneTimeOuts[0].Status=false;
						this.scoresobj.Team1.SetOneTimeOuts[1].Status=false;
						this.scoresobj.Team2.SetOneTimeOuts[0].Status=false;
						this.scoresobj.Team2.SetOneTimeOuts[1].Status=false;
						this.scoresobj.Team1.SetOneTimeOuts[0].ClickedTime=false;
						this.scoresobj.Team1.SetOneTimeOuts[1].ClickedTime=false;
						this.scoresobj.Team2.SetOneTimeOuts[0].ClickedTime=false;
						this.scoresobj.Team2.SetOneTimeOuts[1].ClickedTime=false;
  						let winnersobj:any={};
  						winnersobj.winnerteam="team1";
  						winnersobj.Team1score=this.Firstserve.Team1.TeamAPoints;
  						winnersobj.Team2score=this.Firstserve.Team2.TeamBPoints;
  						this.Firstserve.Winner=winnersobj;
  						this.SideOutButtonActive = false;
  						this.Firstserve.Matchcomplete=true;
					}else if(this.scoresobj[team][this.SetType].length===22){
						this.scoresobj.Team1.SetOneTimeOuts[0].Status=false;
						this.scoresobj.Team1.SetOneTimeOuts[1].Status=false;
						this.scoresobj.Team1.SetOneTimeOuts[2].Status=false;
						this.scoresobj.Team2.SetOneTimeOuts[0].Status=false;
						this.scoresobj.Team2.SetOneTimeOuts[1].Status=false;
						this.scoresobj.Team2.SetOneTimeOuts[2].Status=false;

						this.scoresobj.Team1.SetOneTimeOuts[0].ClickedTime=false;
						this.scoresobj.Team1.SetOneTimeOuts[1].ClickedTime=false;
						this.scoresobj.Team1.SetOneTimeOuts[2].ClickedTime=false;
						this.scoresobj.Team2.SetOneTimeOuts[0].ClickedTime=false;
						this.scoresobj.Team2.SetOneTimeOuts[1].ClickedTime=false;
						this.scoresobj.Team2.SetOneTimeOuts[2].ClickedTime=false;

						let winnersobj:any={};
  						winnersobj.winnerteam="team1";
  						winnersobj.Team1score=this.Firstserve.Team1.TeamAPoints;
  						winnersobj.Team2score=this.Firstserve.Team2.TeamBPoints;
  						this.Firstserve.Winner=winnersobj;
  						this.SideOutButtonActive = false;
  						this.Firstserve.Matchcomplete=true;
					}
						
				}else{
						this.scoresobj.Team2[this.SetType][myscore-1].Point=false;
						if(this.scoresobj[team][this.SetType].length===16){
						this.scoresobj.Team1.SetOneTimeOuts[0].Status=false;
						this.scoresobj.Team1.SetOneTimeOuts[1].Status=false;
						this.scoresobj.Team2.SetOneTimeOuts[0].Status=false;
						this.scoresobj.Team2.SetOneTimeOuts[1].Status=false;
						this.scoresobj.Team1.SetOneTimeOuts[0].ClickedTime=false;
						this.scoresobj.Team1.SetOneTimeOuts[1].ClickedTime=false;
						this.scoresobj.Team2.SetOneTimeOuts[0].ClickedTime=false;
						this.scoresobj.Team2.SetOneTimeOuts[1].ClickedTime=false;
  						let winnersobj:any={};
  						winnersobj.winnerteam="team2";
  						winnersobj.Team1score=this.Firstserve.Team1.TeamAPoints;
  						winnersobj.Team2score=this.Firstserve.Team2.TeamBPoints;
  						this.Firstserve.Winner=winnersobj;
  						this.SideOutButtonActive = false;
  						this.Firstserve.Matchcomplete=true;
					}else if(this.scoresobj[team][this.SetType].length===22){
						this.scoresobj.Team1.SetOneTimeOuts[0].Status=false;
						this.scoresobj.Team1.SetOneTimeOuts[1].Status=false;
						this.scoresobj.Team1.SetOneTimeOuts[2].Status=false;
						this.scoresobj.Team2.SetOneTimeOuts[0].Status=false;
						this.scoresobj.Team2.SetOneTimeOuts[1].Status=false;
						this.scoresobj.Team2.SetOneTimeOuts[2].Status=false;
						this.scoresobj.Team1.SetOneTimeOuts[0].ClickedTime=false;
						this.scoresobj.Team1.SetOneTimeOuts[1].ClickedTime=false;
						this.scoresobj.Team1.SetOneTimeOuts[2].ClickedTime=false;
						this.scoresobj.Team2.SetOneTimeOuts[0].ClickedTime=false;
						this.scoresobj.Team2.SetOneTimeOuts[1].ClickedTime=false;
						this.scoresobj.Team2.SetOneTimeOuts[2].ClickedTime=false;
						let winnersobj:any={};
  						winnersobj.winnerteam="team2";
  						winnersobj.Team1score=this.Firstserve.Team1.TeamAPoints;
  						winnersobj.Team2score=this.Firstserve.Team2.TeamBPoints;
  						this.Firstserve.Winner=winnersobj;
  						this.SideOutButtonActive = false;
  						this.Firstserve.Matchcomplete=true;
					}

				}
		}
  		
	}


	//Winning game format 2 of 3 sets.
	WinneingSets2of3(){
			let score=this.Firstserve.Team2.TeamBPoints+1;
			let score1=this.Firstserve.Team1.TeamAPoints+1;
			this.scoresobj.Team2[this.SetType][score].Status=false;
			this.scoresobj.Team1[this.SetType][score1].Status=false;
		if(this.Team1Active){
			this.CourtChange=false;
			if(this.scoresobj.Team1[this.SetType][0].set==="SetOneScores"){
				
				this.scoresobj.Team2.SetOneTimeOuts[0].Status=false;
				this.scoresobj.Team1.SetOneTimeOuts[0].Status=false;
				this.scoresobj.Team2.SetOneTimeOuts[1].Status=false;
				this.scoresobj.Team1.SetOneTimeOuts[1].Status=false;
				this.scoresobj.Team1.SetOneTimeOuts[0].ClickedTime=false;
					this.scoresobj.Team1.SetOneTimeOuts[1].ClickedTime=false;
					this.scoresobj.Team2.SetOneTimeOuts[0].ClickedTime=false;
					this.scoresobj.Team2.SetOneTimeOuts[1].ClickedTime=false;

					let teama:any=[];
					let winnersobj:any={};
					winnersobj.winnerteam="team1";
					winnersobj.Team1score=this.Firstserve.Team1.TeamAPoints;
					winnersobj.Team2score=this.Firstserve.Team2.TeamBPoints;
					teama.push(winnersobj);
					this.Firstserve.winnerTeam=teama;
					this.Firstserve.FirsteSetWinner="Team1";
					
					this.TimerStart("CourtChange");

				}else if(this.scoresobj.Team1[this.SetType][0].set==="SetTwoScores"){
					this.CourtChange=false;
					this.scoresobj.Team2.SetTwoTimeOuts[0].Status=false;
					this.scoresobj.Team1.SetTwoTimeOuts[0].Status=false;
					this.scoresobj.Team2.SetTwoTimeOuts[1].Status=false;
					this.scoresobj.Team1.SetTwoTimeOuts[1].Status=false;

					this.scoresobj.Team1.SetTwoTimeOuts[0].ClickedTime=false;
					this.scoresobj.Team1.SetTwoTimeOuts[1].ClickedTime=false;
					this.scoresobj.Team2.SetTwoTimeOuts[0].ClickedTime=false;
					this.scoresobj.Team2.SetTwoTimeOuts[1].ClickedTime=false;
					let winnersobj:any={};
					winnersobj.winnerteam="team1";
					winnersobj.Team1score=this.Firstserve.Team1.TeamAPoints;
					winnersobj.Team2score=this.Firstserve.Team2.TeamBPoints;
					this.Firstserve.winnerTeam.push(winnersobj);
					this.Firstserve.SecondSetWinner= "Team1";
					if(this.Firstserve.FirsteSetWinner == "Team1" && this.Firstserve.SecondSetWinner == "Team1"){
						this.Firstserve.Gamecomplete=true;
						this.SideOutButtonActive = false;
						this.Firstserve.Matchcomplete=true;
						this.Firstserve.WinningTeam="Team1";
					}else{
						this.TimerStart("CourtChange");
					}
					
				}else if(this.scoresobj.Team1[this.SetType][0].set==="SetThreeScores"){
					this.scoresobj.Team1.SetThreeTimeOuts[0].Status=false;
					this.scoresobj.Team1.SetThreeTimeOuts[1].Status=false;
					this.scoresobj.Team2.SetThreeTimeOuts[0].Status=false;
					this.scoresobj.Team2.SetThreeTimeOuts[1].Status=false;

					this.scoresobj.Team1.SetThreeTimeOuts[0].ClickedTime=false;
					this.scoresobj.Team1.SetThreeTimeOuts[1].ClickedTime=false;
					this.scoresobj.Team2.SetThreeTimeOuts[0].ClickedTime=false;
					this.scoresobj.Team2.SetThreeTimeOuts[1].ClickedTime=false;
					this.SideOutButtonActive = false;
					let winnersobj:any={};
					winnersobj.winnerteam="team1";
					winnersobj.Team1score=this.Firstserve.Team1.TeamAPoints;
					winnersobj.Team2score=this.Firstserve.Team2.TeamBPoints;
					this.Firstserve.winnerTeam.push(winnersobj);
					this.Firstserve.SetThreeScores="Team1";
					this.Firstserve.Gamecomplete=true;
					this.Firstserve.Matchcomplete=true;
					this.Firstserve.WinningTeam="Team1";
				}
					
		}else{
			if(this.scoresobj.Team2[this.SetType][0].set==="SetOneScores"){
				this.CourtChange=false;
				this.scoresobj.Team2.SetOneTimeOuts[0].Status=false;
				this.scoresobj.Team1.SetOneTimeOuts[0].Status=false;
				this.scoresobj.Team2.SetOneTimeOuts[1].Status=false;
				this.scoresobj.Team1.SetOneTimeOuts[1].Status=false;
				this.scoresobj.Team1.SetOneTimeOuts[0].ClickedTime=false;
				this.scoresobj.Team1.SetOneTimeOuts[1].ClickedTime=false;
				this.scoresobj.Team2.SetOneTimeOuts[0].ClickedTime=false;
				this.scoresobj.Team2.SetOneTimeOuts[1].ClickedTime=false;
				
				let teama:any=[];
				let winnersobj:any={};
				winnersobj.winnerteam="team2";
				winnersobj.Team1score=this.Firstserve.Team1.TeamAPoints;
				winnersobj.Team2score=this.Firstserve.Team2.TeamBPoints;
				teama.push(winnersobj);
				this.Firstserve.winnerTeam=teama;
				this.Firstserve.FirsteSetWinner="Team2";

				this.TimerStart("CourtChange");
				
			}else if(this.scoresobj.Team2[this.SetType][0].set==="SetTwoScores"){
				this.CourtChange=false;
				this.scoresobj.Team2.SetTwoTimeOuts[0].Status=false;
				this.scoresobj.Team1.SetTwoTimeOuts[0].Status=false;
				this.scoresobj.Team2.SetTwoTimeOuts[1].Status=false;
				this.scoresobj.Team1.SetTwoTimeOuts[1].Status=false;
				this.scoresobj.Team1.SetTwoTimeOuts[0].ClickedTime=false;
				this.scoresobj.Team1.SetTwoTimeOuts[1].ClickedTime=false;
				this.scoresobj.Team2.SetTwoTimeOuts[0].ClickedTime=false;
				this.scoresobj.Team2.SetTwoTimeOuts[1].ClickedTime=false;

				let winnersobj:any={};
				winnersobj.winnerteam="team2";
				winnersobj.Team1score=this.Firstserve.Team1.TeamAPoints;
				winnersobj.Team2score=this.Firstserve.Team2.TeamBPoints;
				this.Firstserve.winnerTeam.push(winnersobj);
				this.Firstserve.SecondSetWinner="Team2";

				if(this.Firstserve.FirsteSetWinner === "Team2" && this.Firstserve.SecondSetWinner === "Team2"){
					this.Firstserve.Gamecomplete=true;
					this.SideOutButtonActive = false;
					this.Firstserve.Matchcomplete=true;
					this.Firstserve.WinningTeam="Team2";
				}else{
					this.TimerStart("CourtChange");
				}
			}else if(this.scoresobj.Team2[this.SetType][0].set==="SetThreeScores"){
				this.scoresobj.Team1.SetThreeTimeOuts[0].Status=false;
				this.scoresobj.Team1.SetThreeTimeOuts[1].Status=false;
				this.scoresobj.Team2.SetThreeTimeOuts[0].Status=false;
				this.scoresobj.Team2.SetThreeTimeOuts[1].Status=false;
				this.scoresobj.Team1.SetThreeScores[0].ClickedTime=false;
				this.scoresobj.Team1.SetThreeScores[1].ClickedTime=false;
				this.scoresobj.Team2.SetThreeScores[0].ClickedTime=false;
				this.scoresobj.Team2.SetThreeScores[1].ClickedTime=false;
				let winnersobj:any={};
				winnersobj.winnerteam="team2";
				this.SideOutButtonActive = false;
				winnersobj.Team1score=this.Firstserve.Team1.TeamAPoints;
				winnersobj.Team2score=this.Firstserve.Team2.TeamBPoints;
				this.Firstserve.winnerTeam.push(winnersobj);
				this.Firstserve.SetThreeScores="Team2";
				this.Firstserve.WinningTeam="Team2";
				this.Firstserve.Gamecomplete=true;
				this.Firstserve.Matchcomplete=true;
			}
		}
	}
	//function for 11 th formate Winning Game Time Out.
	WinneingGame11formate(){
		if(this.Team1Active){
			if(this.scoresobj.Team1[this.SetType][0].set==="SetOneScores"){
				this.scoresobj.Team2.SetTwoTimeOuts[0].Status=true;
				this.scoresobj.Team1.SetTwoTimeOuts[0].Status=true;
				this.scoresobj.Team1.SetTwoScores[0].Status=true;
				this.scoresobj.Team2.SetTwoScores[0].Status=true;
				this.scoresobj.Team1.SetTwoScores[0].clicked=true;
				this.scoresobj.Team2.SetTwoScores[0].clicked=true;
				this.scoresobj.Team1.SetTwoScores[1].Status=true;
				this.scoresobj.Team2.SetTwoScores[1].Status=true;
				this.scoresobj.Team1.SetOneScores[0].Status=false;
				this.scoresobj.Team1.SetTwoScores[0].ServicesDowen=true;
				this.scoresobj.Team2.SetTwoScores[0].ServicesDowen=true;
				this.Firstserve.Team1.TeamAPoints=0;
				this.Firstserve.Team2.TeamBPoints=0;
				this.CurentScore=this.Firstserve.Team1.TeamAPoints;
				this.Firstserve.minValue=0;
				this.Firstserve.maxValue=11;
				if(this.scoresobj.Team1.SetOneServe===true){
					this.SideOut();
					if(this.navParams.data.Event==="Doubles"){
						this.Firstserve.Team2.TeamBServeCount=2;
						this.SideOutButtonActive = true;
					}
				}else{
					if(this.navParams.data.Event==="Doubles"){
						this.Firstserve.Team1.TeamAServeCount=2;
						this.SideOutButtonActive = true;
						this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.Team1.nameA1;
						this.Firstserve.ServingTeamActivePlayerSide="Left";
						this.Firstserve.ServingTeamPlayerName=this.Firstserve.Team1.nameA2;
						this.Firstserve.ServingTeamPlayerSide="Right";
						this.Firstserve.ReseivingTeamActivePlayerName=this.Firstserve.nameB1;
						this.Firstserve.ReseivingTeamPlayerName=this.Firstserve.nameB2;
						this.Firstserve.ReseivingTeamActivePlayerSide="Left";
					}
				}
			}else if(this.scoresobj.Team1[this.SetType][0].set==="SetTwoScores"){
					this.scoresobj.Team2.SetThreeTimeOuts[0].Status=true;
					this.scoresobj.Team1.SetThreeTimeOuts[0].Status=true;
					this.scoresobj.Team1.SetThreeScores[0].Status=true;
					this.scoresobj.Team2.SetThreeScores[0].Status=true;
					this.scoresobj.Team1.SetThreeScores[0].clicked=true;
					this.scoresobj.Team2.SetThreeScores[0].clicked=true;
					this.scoresobj.Team1.SetThreeScores[1].Status=true;
					this.scoresobj.Team2.SetThreeScores[1].Status=true;
					this.scoresobj.Team1.SetThreeScores[0].ServicesDowen=true;
					this.scoresobj.Team2.SetThreeScores[0].ServicesDowen=true;
					this.Firstserve.Team1.TeamAPoints=0;
					this.Firstserve.Team2.TeamBPoints=0;
					this.CurentScore=this.Firstserve.Team2.TeamBPoints;
					this.Firstserve.minValue=0;
					this.Firstserve.maxValue=11;

					if(this.scoresobj.Team1.SetTwoServe===true){
						this.SideOut();
						if(this.navParams.data.Event==="Doubles"){
							this.Firstserve.Team2.TeamBServeCount=2;
							this.SideOutButtonActive = true;
						}
					}else{
						if(this.navParams.data.Event==="Doubles"){
							this.SideOutButtonActive = true;
							this.Firstserve.Team1.TeamAServeCount=2;
							this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.Team1.nameA1;
							this.Firstserve.ServingTeamActivePlayerSide="Left";
							this.Firstserve.ServingTeamPlayerName=this.Firstserve.Team1.nameA2;
							this.Firstserve.ServingTeamPlayerSide="Right";
							this.Firstserve.ReseivingTeamActivePlayerName=this.Firstserve.nameB1;
							this.Firstserve.ReseivingTeamPlayerName=this.Firstserve.nameB2;
							this.Firstserve.ReseivingTeamActivePlayerSide="Left";
						}
					}

			}
		}else{
			if(this.scoresobj.Team2[this.SetType][0].set==="SetOneScores"){
				this.scoresobj.Team2.SetTwoTimeOuts[0].Status=true;
				this.scoresobj.Team1.SetTwoTimeOuts[0].Status=true;
				this.scoresobj.Team1.SetTwoScores[0].Status=true;
				this.scoresobj.Team2.SetTwoScores[0].Status=true;
				this.scoresobj.Team1.SetTwoScores[0].clicked=true;
				this.scoresobj.Team2.SetTwoScores[0].clicked=true;
				this.scoresobj.Team1.SetTwoScores[1].Status=true;
				this.scoresobj.Team2.SetTwoScores[1].Status=true;
				this.scoresobj.Team1.SetOneScores[0].Status=false;
				this.scoresobj.Team1.SetTwoScores[0].ServicesDowen=true;
				this.scoresobj.Team2.SetTwoScores[0].ServicesDowen=true;
				this.Firstserve.Team1.TeamAPoints=0;
				this.Firstserve.Team2.TeamBPoints=0;
				this.CurentScore=this.Firstserve.Team1.TeamAPoints;
				this.Firstserve.minValue=0;
				this.Firstserve.maxValue=11;
				if(this.scoresobj.Team2.SetOneServe===true){
					this.SideOut();
					if(this.navParams.data.Event==="Doubles"){
						this.Firstserve.Team1.TeamAServeCount=2;
						this.SideOutButtonActive = true;
					}
				}else{
					if(this.navParams.data.Event==="Doubles"){
						this.SideOutButtonActive = true;
						this.Firstserve.Team2.TeamBServeCount=2;
						this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.Team2.nameB1;
						this.Firstserve.ServingTeamActivePlayerSide="Left";
						this.Firstserve.ServingTeamPlayerName=this.Firstserve.Team2.nameB2;
						this.Firstserve.ServingTeamPlayerSide="Right";
						this.Firstserve.ReseivingTeamActivePlayerName=this.Firstserve.nameA1;
						this.Firstserve.ReseivingTeamPlayerName=this.Firstserve.nameA2;
						this.Firstserve.ReseivingTeamActivePlayerSide="Left";
					}
				}
			}else if(this.scoresobj.Team2[this.SetType][0].set==="SetTwoScores"){
				this.scoresobj.Team2.SetThreeTimeOuts[0].Status=true;
				this.scoresobj.Team1.SetThreeTimeOuts[0].Status=true;
				this.scoresobj.Team1.SetThreeScores[0].Status=true;
				this.scoresobj.Team2.SetThreeScores[0].Status=true;
				this.scoresobj.Team1.SetThreeScores[0].clicked=true;
				this.scoresobj.Team2.SetThreeScores[0].clicked=true;
				this.scoresobj.Team1.SetThreeScores[1].Status=true;
				this.scoresobj.Team2.SetThreeScores[1].Status=true;
				this.scoresobj.Team1.SetThreeScores[0].ServicesDowen=true;
				this.scoresobj.Team2.SetThreeScores[0].ServicesDowen=true;
				this.Firstserve.Team1.TeamAPoints=0;
				this.Firstserve.Team2.TeamBPoints=0;
				this.CurentScore=this.Firstserve.Team1.TeamAPoints;
				this.Firstserve.minValue=0;
				this.Firstserve.maxValue=11;
				if(this.scoresobj.Team2.SetTwoServe===true){
					this.SideOut();
					if(this.navParams.data.Event==="Doubles"){
						this.Firstserve.Team1.TeamAServeCount=2;
						this.SideOutButtonActive = true;
					}
				}else{
					if(this.navParams.data.Event==="Doubles"){
						this.SideOutButtonActive = true;
						this.Firstserve.Team2.TeamBServeCount=2;
						this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.Team2.nameB1;
						this.Firstserve.ServingTeamActivePlayerSide="Left";
						this.Firstserve.ServingTeamPlayerName=this.Firstserve.Team2.nameB2;
						this.Firstserve.ServingTeamPlayerSide="Right";
						this.Firstserve.ReseivingTeamActivePlayerName=this.Firstserve.nameA1;
						this.Firstserve.ReseivingTeamPlayerName=this.Firstserve.nameA2;
						this.Firstserve.ReseivingTeamActivePlayerSide="Left";
					}
				}
			}
		}
	}


	//function for serveDownCount count Increasing.
	serveDownCount(count){
		if(count===1 && this.Team1Active ){

			if(this.Firstserve.ServingTeamActiveTeamname==="A1"){
				this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.Team1.nameA2;
				this.Firstserve.ServingTeamPlayerName=this.Firstserve.Team1.nameA1;
				if(this.Firstserve.ServingTeamActivePlayerSide==="Left"){
					this.Firstserve.ServingTeamActivePlayerSide="Right";
					this.Firstserve.ServingTeamPlayerSide="Left";
				}else{
					this.Firstserve.ServingTeamActivePlayerSide="Left";
					this.Firstserve.ServingTeamPlayerSide="Right";
				}
			}else{
				this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.Team1.nameA1;
				this.Firstserve.ServingTeamPlayerName=this.Firstserve.Team1.nameA2;
				if(this.Firstserve.ServingTeamActivePlayerSide==="Left"){
					this.Firstserve.ServingTeamActivePlayerSide="Right";
					this.Firstserve.ServingTeamPlayerSide="Left";
				}else{
					this.Firstserve.ServingTeamActivePlayerSide="Left";
					this.Firstserve.ServingTeamPlayerSide="Right";
				}
			}
			this.Firstserve.Team1.TeamAServeCount=this.Firstserve.Team1.TeamAServeCount+1;
			this.SideOutButtonActive=true;
		}else if(count===1 && this.Team2Active){
			if(this.Firstserve.ServingTeamActiveTeamname==="B1"){
				this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.Team2.nameB2;
				this.Firstserve.ServingTeamPlayerName=this.Firstserve.Team2.nameB1;
				if(this.Firstserve.ServingTeamActivePlayerSide==="Left"){
					this.Firstserve.ServingTeamActivePlayerSide="Right";
					this.Firstserve.ServingTeamPlayerSide="Left";
				}else{
					this.Firstserve.ServingTeamActivePlayerSide="Left";
					this.Firstserve.ServingTeamPlayerSide="Right";
				}
			}else{
				this.Firstserve.ServingTeamActivePlayerName=this.Firstserve.Team2.nameB1;
				this.Firstserve.ServingTeamPlayerName=this.Firstserve.Team2.nameB2;
				if(this.Firstserve.ServingTeamActivePlayerSide==="Left"){
					this.Firstserve.ServingTeamActivePlayerSide="Right";
					this.Firstserve.ServingTeamPlayerSide="Left";
				}else{
					this.Firstserve.ServingTeamActivePlayerSide="Left";
					this.Firstserve.ServingTeamPlayerSide="Right";
				}
			}
			this.Firstserve.Team2.TeamBServeCount = this.Firstserve.Team2.TeamBServeCount+1;
			this.SideOutButtonActive=true;
		}
	}


	//function for time out start.
	TimerStart(obj){

		if(typeof(obj) !="string"){
			this.scoresobj[obj.Team][obj.set][obj.TimeOut-1].Status="pending";
			this.timeMints=1;
			this.timeSecondes=0;
			this.SelectedTimeOutObj=obj;
			this.scoresobj[obj.Team][obj.set][obj.TimeOut-1].Time="1min";
			this.time=!this.time;
			this.TimoutStop=setTimeout(() => {
				this.TimoutStop.stopobj=obj;
				this.time=!this.time;
				this.scoresobj[obj.Team][obj.set][obj.TimeOut-1].Status=true;
				this.scoresobj[obj.Team][obj.set][obj.TimeOut-1].complete=true;
				this.scoresobj[obj.Team][obj.set][obj.TimeOut-1].ClickedTime=true;
				if(obj.TimeOut>1){
					this.scoresobj[obj.Team][obj.set][obj.TimeOut-2].ClickedTime=false;
				}
				if(this.navParams.data.GameFormat ==="1 to 21"){
					if(obj.TimeOut < 3){
						this.scoresobj[obj.Team][obj.set][obj.TimeOut].Status=true;
					}
				}else{
					if(obj.TimeOut < 2){
						this.scoresobj[obj.Team][obj.set][obj.TimeOut].Status=true;
					}
				}	
		    }, 60000);
		    this.TimeCount();
		}else if(obj==="CourtChange"){
			this.time=!this.time;
			this.SelectedTimeOutObj=obj;
			this.TimoutStop=setTimeout(() => {
				this.time=!this.time;
				this.WinneingGame11formate();	
		    }, 120000);
		    this.timeMints=2;
			this.timeSecondes=0;
			this.TimeCount();
		}else{
			this.time=!this.time;
			this.SelectedTimeOutObj=obj;
			if(this.timeformate==="1min"){
				this.timeMints=1;
				this.timeSecondes=0;
				this.TimeCount();
				this.TimoutStop=setTimeout(() => {
					this.time=!this.time;	
			    }, 60000);
			}else if(this.timeformate==="2min"){
				this.TimoutStop=setTimeout(() => {
					this.time=!this.time;	
			    }, 120000);
			    this.timeMints=2;
				this.timeSecondes=0;
				this.TimeCount();
			}else if(this.timeformate==="3min"){
				this.TimoutStop=setTimeout(() => {
					this.time=!this.time;	
			    }, 180000);
			    this.timeMints=3;
				this.timeSecondes=0;
				this.TimeCount();
			}else if(this.timeformate==="4min"){
				this.TimoutStop=setTimeout(() => {
					this.time=!this.time;	
			    }, 240000);
			    this.timeMints=4;
				this.timeSecondes=0;
				this.TimeCount();
			}else if(this.timeformate==="5min"){
				this.TimoutStop=setTimeout(() => {
					this.time=!this.time;	
			    }, 300000);
			    this.timeMints=5;
				this.timeSecondes=0;
				this.TimeCount();
			}else if(this.timeformate==="6min"){
				this.TimoutStop=setTimeout(() => {
					this.time=!this.time;	
			    }, 360000);
			    this.timeMints=6;
				this.timeSecondes=0;
				this.TimeCount();
			}else if(this.timeformate==="7min"){
				this.TimoutStop=setTimeout(() => {
					this.time=!this.time;	
			    }, 420000);
			    this.timeMints=7;
				this.timeSecondes=0;
				this.TimeCount();
			}else if(this.timeformate==="10min"){
				this.TimoutStop=setTimeout(() => {
					this.time=!this.time;	
			    }, 600000);
			    this.timeMints=10;
				this.timeSecondes=0;
				this.TimeCount();
			}else if(this.timeformate==="15min"){
				this.TimoutStop=setTimeout(() => {
					this.time=!this.time;	
			    }, 900000);
			    this.timeMints=15;
				this.timeSecondes=0;
				this.TimeCount();
			}
		}
	}
	//function for Time out undo function.
	TimeOutUndo(obj){
		this.scoresobj[obj.Team][obj.set][obj.TimeOut-1].Status=true;
		this.time=!this.time;
		clearTimeout(this.TimoutStop);
	}

	//function for Completed time out undo action.
	EndingTimeOutUndo(obj){
		this.scoresobj[obj.Team][obj.set][obj.TimeOut-1].Status=true;
		this.scoresobj[obj.Team][obj.set][obj.TimeOut-1].complete=false;
		this.scoresobj[obj.Team][obj.set][obj.TimeOut-1].ClickedTime=false;
		if(this.navParams.data.GameFormat ==="1 to 21"){
			if(obj.TimeOut < 3){
				this.scoresobj[obj.Team][obj.set][obj.TimeOut].Status=false;
			}
		}else{
			if(obj.TimeOut < 2){
				this.scoresobj[obj.Team][obj.set][obj.TimeOut].Status=false;
			}
		}

	}
	// function for show the time out time.
	TimeCount(){

		if(this.timeSecondes===0){
			if(this.timeMints===0){
				this.timeSecondes=0;
				this.timeMints=0;
			}else{
				this.timeSecondes=59;
				this.timeMints--;
			}
		}
		setTimeout(() => {
			this.timeSecondes--;
			if(this.time===true){
	    		this.TimeCount();
	    	}
		}, 1000);
	}
	// function for stop the timer.
	StopTimer(){
		if(typeof(this.SelectedTimeOutObj) !="string"){
			this.time=!this.time;
			clearTimeout(this.TimoutStop);
			let obj=this.SelectedTimeOutObj;
			if(obj.TimeOut>1){
				this.scoresobj[obj.Team][obj.set][obj.TimeOut-2].ClickedTime=false;
			}
			this.scoresobj[obj.Team][obj.set][obj.TimeOut-1].complete=true;
			this.scoresobj[obj.Team][obj.set][obj.TimeOut-1].Status=true;
			this.scoresobj[obj.Team][obj.set][obj.TimeOut-1].ClickedTime=true;
			if(this.navParams.data.GameFormat ==="1 to 21"){
				if(obj.TimeOut <3){
					this.scoresobj[obj.Team][obj.set][obj.TimeOut].Status=true;
				}
			}else{
				if(obj.TimeOut <2){
					this.scoresobj[obj.Team][obj.set][obj.TimeOut].Status=true;
				}
			}
		}else if(this.SelectedTimeOutObj==="CourtChange"){
			this.WinneingGame11formate();
			clearTimeout(this.TimoutStop);
			this.time=!this.time;
		}else{
			clearTimeout(this.TimoutStop);
			this.time=!this.time;
		}
		
	}
	// undo function for score update.
	ScoreUndo(obj){

		if(this.Firstserve.maxValue != undefined && this.Firstserve.maxValue>11){
			console.log("this.Firstserve.maxValue",this.Firstserve.maxValue);
			console.log("this.Firstserve.OldmaxValue",this.Firstserve.OldmaxValue);
			if(this.Firstserve.Team1.TeamAPoints>this.Firstserve.Team2.TeamBPoints && this.Firstserve.Team1.TeamAPoints===this.Firstserve.OldmaxValue){
				console.log("this.Firstserve.maxValue",this.Firstserve.maxValue);
				this.MaxPointUndoscore();
			}else if(this.Firstserve.Team2.TeamBPoints>this.Firstserve.Team1.TeamAPoints && this.Firstserve.Team2.TeamBPoints===this.Firstserve.OldmaxValue){
				this.MaxPointUndoscore();
			}

		}

		if(this.scoresobj[obj.Team][obj.set].length===16 && this.CourtChange===true){
			if(this.Firstserve.Team1.TeamAPoints>this.Firstserve.Team2.TeamBPoints && this.Firstserve.Team1.TeamAPoints === 8 ){
				this.CourtChange=false;
			}else if(this.Firstserve.Team2.TeamBPoints>this.Firstserve.Team1.TeamAPoints && this.Firstserve.Team2.TeamBPoints === 8){
				this.CourtChange=false;
			}
		}else if(this.scoresobj[obj.Team][obj.set].length===22 && this.CourtChange===true){
			if(this.Firstserve.Team1.TeamAPoints>this.Firstserve.Team2.TeamBPoints && this.Firstserve.Team1.TeamAPoints === 11 ){
				this.CourtChange=false;
			}else if(this.Firstserve.Team2.TeamBPoints>this.Firstserve.Team1.TeamAPoints && this.Firstserve.Team2.TeamBPoints === 11){
				this.CourtChange=false;
			}
		}else if(this.scoresobj[obj.Team][obj.set].length===37 && this.CourtChange===true && this.scoresobj[obj.Team][obj.set][0].set==="SetThreeScores"){
			if(this.Firstserve.Team1.TeamAPoints>this.Firstserve.Team2.TeamBPoints && this.Firstserve.Team1.TeamAPoints === 6 ){
				this.CourtChange=false;
			}else if(this.Firstserve.Team2.TeamBPoints>this.Firstserve.Team1.TeamAPoints && this.Firstserve.Team2.TeamBPoints === 6){
				this.CourtChange=false;
			}
		}	
		if(this.Team1Active){
			if(this.scoresobj[obj.Team][obj.set][this.Firstserve.Team1.TeamAPoints-1].ServicesDowen=== false){
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team1.TeamAPoints-1].Point=true;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team1.TeamAPoints].Point=false;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team1.TeamAPoints].clicked=false;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team1.TeamAPoints+1].Status =false;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team1.TeamAPoints].Status =true;
				this.Firstserve.Team1.TeamAPoints=this.Firstserve.Team1.TeamAPoints-1;
			}else{
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team1.TeamAPoints].Point=false;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team1.TeamAPoints].clicked=false;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team1.TeamAPoints+1].Status =false;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team1.TeamAPoints].Status =true;
				this.Firstserve.Team1.TeamAPoints=this.Firstserve.Team1.TeamAPoints-1;
			}
		}else{
			if(this.scoresobj[obj.Team][obj.set][this.Firstserve.Team2.TeamBPoints-1].ServicesDowen === false){
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team2.TeamBPoints-1].Point=true;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team2.TeamBPoints].Point=false;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team2.TeamBPoints].clicked=false;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team2.TeamBPoints+1].Status =false;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team2.TeamBPoints].Status =true;
				this.Firstserve.Team2.TeamBPoints=this.Firstserve.Team2.TeamBPoints-1;
			}else{
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team2.TeamBPoints].Point=false;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team2.TeamBPoints].clicked=false;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team2.TeamBPoints+1].Status =false;
				this.scoresobj[obj.Team][obj.set][this.Firstserve.Team2.TeamBPoints].Status =true;
				this.Firstserve.Team2.TeamBPoints=this.Firstserve.Team2.TeamBPoints-1;
			}
		}
		
		if(this.Firstserve.ServingTeamActivePlayerSide==="Right" && this.navParams.data.Event==="Doubles" ){
			this.Firstserve.ServingTeamActivePlayerSide="Left"
			this.Firstserve.ServingTeamPlayerSide="Right";
  		}else if(this.Firstserve.ServingTeamActivePlayerSide==="Left" && this.navParams.data.Event==="Doubles"){
  			this.Firstserve.ServingTeamActivePlayerSide="Right";
			this.Firstserve.ServingTeamPlayerSide="Left";
  		}
	}
	//function for tie point reached and max value reaced max score point undo function.
	MaxPointUndoscore(){
		console.log("MaxPointUndoscore",">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		this.scoresobj.Team1[this.SetType][this.Firstserve.maxValue].Hide=true;
		this.scoresobj.Team1[this.SetType][this.Firstserve.maxValue-1].Hide=true;
		this.scoresobj.Team1[this.SetType][this.Firstserve.maxValue-2].Hide=true;
		this.scoresobj.Team1[this.SetType][this.Firstserve.maxValue-3].Hide=true;
		this.scoresobj.Team1[this.SetType][this.Firstserve.maxValue-4].Hide=true;
		this.scoresobj.Team2[this.SetType][this.Firstserve.maxValue].Hide=true;
		this.scoresobj.Team2[this.SetType][this.Firstserve.maxValue-1].Hide=true;
		this.scoresobj.Team2[this.SetType][this.Firstserve.maxValue-2].Hide=true;
		this.scoresobj.Team2[this.SetType][this.Firstserve.maxValue-3].Hide=true;
		this.scoresobj.Team2[this.SetType][this.Firstserve.maxValue-4].Hide=true;
		


		this.scoresobj.Team1[this.SetType][this.Firstserve.minValue-1].Hide=false;
		this.scoresobj.Team1[this.SetType][this.Firstserve.minValue-2].Hide=false;
		this.scoresobj.Team1[this.SetType][this.Firstserve.minValue-3].Hide=false;
		this.scoresobj.Team1[this.SetType][this.Firstserve.minValue-4].Hide=false;
		this.scoresobj.Team1[this.SetType][this.Firstserve.minValue-5].Hide=false;
		
		
		this.scoresobj.Team2[this.SetType][this.Firstserve.minValue-1].Hide=false;
		this.scoresobj.Team2[this.SetType][this.Firstserve.minValue-2].Hide=false;
		this.scoresobj.Team2[this.SetType][this.Firstserve.minValue-3].Hide=false;
		this.scoresobj.Team2[this.SetType][this.Firstserve.minValue-4].Hide=false;
		this.scoresobj.Team2[this.SetType][this.Firstserve.minValue-5].Hide=false;
		if(this.Firstserve.maxValue===11){
				this.Firstserve.OldmaxValue=11;	
		}else{
			this.Firstserve.OldmaxValue=this.Firstserve.OldmaxValue-5;
		}
		this.Firstserve.maxValue=this.Firstserve.maxValue-5;
		this.Firstserve.minValue=this.Firstserve.minValue-5;
		
	}

	//function for Match start to End showing time.
	MatchStartToEndTime(){
		if(this.GameStartSecondes===59){
			this.GameStartMints++;
			this.GameStartSecondes=0;
			if(this.GameStartMints===59){
				this.GameStartHovers++;
				this.GameStartMints=0;
			}
		
		}
	setTimeout(() => {
			this.GameStartSecondes++;
			if(this.Firstserve.Gamecomplete === undefined  && this.Firstserve.Winner === undefined){
	    		this.MatchStartToEndTime();
	    	}
		}, 1000);
	}
	

  
  
}