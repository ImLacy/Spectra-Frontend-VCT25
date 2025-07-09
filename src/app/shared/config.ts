export class Config {
  serverEndpoint = "http://localhost:5200";
  redirectUrl = "https://nobii.dev/src/landing";
  sponsorImageUrls: string[] = [];
  sponsorImageRotateSpeed = 5000; // in milliseconds

  mapbanEndpoint = "http://localhost:11201";

  attackerColorPrimary = "#b82e3c";
  attackerColorSecondary = "#ff4557";
  attackerColorShieldCurrency = "#ff838f";

  defenderColorPrimary = "#46F4CF";
  defenderColorSecondary = "#46F4CF";
  defenderColorShieldCurrency = "#46F4CF";

  showEventName = false;
  eventName = "Spectra Invitational 2025";

  public constructor(init?: Partial<Config>) {
    Object.assign(this, init);
  }
}
