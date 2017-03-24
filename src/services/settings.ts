

export class SettingsService {


	public altBackground: boolean = false;

	public changeBooleanSetting (value: boolean, item: string) {
		console.log("Changing boolean setting value: "+item+" to "+value);
		switch (item) {
			case "altBackground":
				this.altBackground = value;
				break;
			
			default:
				// code...
				break;
		}
	}


	public isBooleanSettingChecked (item: string) {
		console.log("checking boolean setting value: "+item);
		switch (item) {
			case "altBackground":
				return this.altBackground;			
			default:
				// code...
				break;
		}
	}


	

}