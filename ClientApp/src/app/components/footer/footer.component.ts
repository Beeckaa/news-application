import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <p>
        Denna sida är skapad av Rebecka Lindskog
      </p>
    </footer>
  `,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
