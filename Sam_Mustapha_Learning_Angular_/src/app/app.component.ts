import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title= 'Sam_Mustapha_Learning_Angular';
  user1 = {id: 1, firstName: "Sam", lastName: "Mustapha",
 department: "Programming", isAdmin: false};
}

