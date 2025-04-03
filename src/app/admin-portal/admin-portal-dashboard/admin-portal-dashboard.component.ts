import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal-dashboard',
  templateUrl: './admin-portal-dashboard.component.html',
  styleUrl: './admin-portal-dashboard.component.scss'
})
export class AdminPortalDashboardComponent {

	constructor() {}

  studentResultOptions = {
	  animationEnabled: true,
	  title: {
		text: "Student Results"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "Toys" },
		  { y: 28.2, name: "Electronics" },
		  { y: 14.4, name: "Groceries" },
		  { y: 43.3, name: "Furniture" }
		]
	  }]
	};

  resultsByCourseOptions = {
	  animationEnabled: true,
	  title: {
		text: "Results By Course"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "Toys" },
		  { y: 28.2, name: "Electronics" },
		  { y: 14.4, name: "Groceries" },
		  { y: 43.3, name: "Furniture" }
		]
	  }]
	};

	ngOnInit() {
    console.log('AdminPortalDashboardComponent initialized');
  }

}