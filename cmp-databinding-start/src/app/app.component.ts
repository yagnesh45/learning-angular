import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "Test Server", content: "Just a test server" },
    {
      type: "blueprint",
      name: "Blue Server",
      content: "Just a blueprint server",
    },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    blueprintName: string;
    blueprintContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent,
    });
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
