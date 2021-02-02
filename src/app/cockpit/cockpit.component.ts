import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  cockpit = this;
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('newServerContentInput', {static: true}) newServerContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(value: string) {
    this.serverCreated.emit({
      serverName: this.newServerName,
      // serverContent: value
      serverContent: this.newServerContentInput.nativeElement.value
    });
  }

  onAddBlueprint(newServerContent: string) {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: newServerContent
    });
  }
}
