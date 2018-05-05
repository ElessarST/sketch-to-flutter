import {parseText} from "../../utils";
import {Component, IComponent, LayerItem} from "../component";
import {findLayer} from "../componentHolder";
import {ComponentType} from "../componentType";
import template from "./template";

class AppBarComponent extends Component implements IComponent {
    public type = ComponentType.AppBar;
    public name = "AppBarComponent";
    public template = template;
    public getTemplateVariables(layer: LayerItem): any {
        const layers = layer.layers;
        const titleLayer = findLayer(layers, "AppBarTitle");
        const title = parseText(titleLayer);
        return {
            title,
        };
    }
}

export default new AppBarComponent();
