import { Routes } from '@angular/router';
import { Home } from './home/home';
import { StudentList } from './student-list/student-list';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { NewStudent } from './new-student/new-student';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'students', component: StudentList },
    { path: 'about', component: About },
    { path: 'profile', component: Profile },
    { path: 'new-student', component: NewStudent }];
