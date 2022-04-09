import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class FormMessage implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _value: string;
	private _paragraph: HTMLParagraphElement;
	private _container: HTMLDivElement;

	constructor() {

	}

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {

		this._paragraph = document.createElement("p");
		this._container = document.createElement("div");
		this._container.appendChild(this._paragraph);

		container.appendChild(this._container);
	}

	public updateView(context: ComponentFramework.Context<IInputs>): void {
		this._value = context.parameters.controlValue.raw!;
		var backgroundColourPart = "";
		if (context.parameters.backgroundColourValue.raw! != null) {
			backgroundColourPart = "background-color: " + context.parameters.backgroundColourValue.raw! + "; ";
		}
		var fontColourPart = "";
		if (context.parameters.fontColourValue.raw! != null) {
			fontColourPart = "color: " + context.parameters.fontColourValue.raw! + "; ";
		}
		var html = "    <div style='padding: 5px; display: table; text-align: center;  width: 100%; overflow: hidden; " + backgroundColourPart + "padding-right: 10px'>";
		html += "        <div style='display: table-cell; vertical-align: middle;'>";
		html += "            <div id='message' style='min-height: 25px; font-weight: bold; " + fontColourPart + "vertical-align: middle' >" + this._value + "</div>";
		html += "        </div>";
		html += "    </div>";
		this._paragraph.innerHTML = html;
	}

	public getOutputs(): IOutputs {
		let result: IOutputs = {
			controlValue: this._value
		};
		return result;
	}

	public destroy(): void {
	}
}