import {ILayersItem} from "../../../types";
import {Component, IComponent, LayerItem} from "../component";
import {getComponent} from "../componentHolder";
import {ComponentType} from "../componentType";
import template from "../root/template";

class RootComponent extends Component implements IComponent {
    public type = ComponentType.Root;
    public name = "Root";
    public template = template;
    public getTemplateVariables(layer: LayerItem): any {
        const layers: ILayersItem[] = layer.layers;
        const appBar = getComponent(layers, ComponentType.AppBar);
        return {
            appBar,
        };
    }
}

export default new RootComponent();
