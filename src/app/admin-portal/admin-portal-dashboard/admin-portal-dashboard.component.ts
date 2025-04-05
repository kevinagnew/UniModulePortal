import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-admin-portal-dashboard',
	templateUrl: './admin-portal-dashboard.component.html',
	styleUrl: './admin-portal-dashboard.component.scss'
})
export class AdminPortalDashboardComponent implements OnInit {

	user: any;

	constructor(private userService: UserService) { }

	studentResultOptions = {
		animationEnabled: true,
		title: {
			text: "Computer Science Results 2024"
		},
		data: [{
			type: "pie",
			startAngle: -90,
			indexLabel: "{name}: {y}",
			yValueFormatString: "#,###.##'%'",
			dataPoints: [
				{ y: 14.1, name: "3rd" },
				{ y: 28.2, name: "1st" },
				{ y: 14.4, name: "2:2" },
				{ y: 43.3, name: "2:1" }
			]
		}]
	};

	resultsByCourseOptions = {
		animationEnabled: true,
		title: {
			text: "Results By Year"
		},
		data: [{
			type: "pie",
			startAngle: -90,
			indexLabel: "{name}: {y}",
			yValueFormatString: "#,###.##'%'",
			dataPoints: [
				{ y: 10, name: "Year 1" },
				{ y: 28.2, name: "Year 3" },
				{ y: 28.5, name: "Year 2" },
				{ y: 33.3, name: "Year 4" }
			]
		}]
	};

	ngOnInit() {
		this.user = this.userService.getUser();
	}

}
