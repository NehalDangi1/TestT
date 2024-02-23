import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from '../app/test-component/test-component.component'; // Import your test component

const routes: Routes = [
  // Define your routes here
  { path: 'testt', component: TestComponentComponent }, // Route for 'testt' segment
  // Add other routes as needed
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home if no route matches
  { path: '**', redirectTo: '/not-found' } // Redirect to not-found if the route doesn't match any defined route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
