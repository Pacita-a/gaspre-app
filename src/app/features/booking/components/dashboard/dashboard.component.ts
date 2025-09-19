import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingListApiService } from '../../services/booking-list/booking-list-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public toastMessage: string | null = null;
  public activeTab: string = 'bookings';
  public userMenuOpen = false;
  public userMenuItems = [
    { label: 'My profile' },
    { label: 'Edit profile' },
    { label: 'Log out' },
  ];

  constructor(
    private router: Router,
    private bookingListService: BookingListApiService
  ) {}

  ngOnInit(): void {
    this.router.navigate(['/bookings']);
  }

  public openCreateNewClass(): void {
    this.showToast('Create New Class');
  }

  public toggleUserMenu(): void {
    this.userMenuOpen = !this.userMenuOpen;
  }

  public onUserMenuClick(item: any): void {
    this.showToast(item.label + ' clicked!');
    this.userMenuOpen = false;
  }

  public selectTab(tab: string): void {
    this.activeTab = tab;
  }

  private showToast(message: string): void {
    this.toastMessage = message;
    setTimeout(() => (this.toastMessage = null), 2000);
  }
}
