import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Registration } from './registration/registration';
import { RegisteredCourses } from './registered-courses/registered-courses';

export const routes: Routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: 'register', component: Registration },
    { path: 'registered-courses', component: RegisteredCourses }
];
