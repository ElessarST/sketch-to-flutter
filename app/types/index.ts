export interface ISketch {
    _class: string;
    do_objectID: string;
    exportOptions: IExportOptions;
    frame: IFrame;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isVisible: boolean;
    layerListExpandedType: number;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: number;
    rotation: number;
    shouldBreakMaskChain: boolean;
    style: IStyle;
    hasClickThrough: boolean;
    layers: ILayersItem[];
    grid: IGrid;
    horizontalRulerData: IHorizontalRulerData;
    includeInCloudUpload: boolean;
    verticalRulerData: IVerticalRulerData;
}

export interface IExportOptions {
    _class: string;
    exportFormats: IExportFormatsItem[];
    includedLayerIds: any[];
    layerOptions: number;
    shouldTrim: boolean;
}

export interface IFrame {
    _class: string;
    constrainProportions: boolean;
    height: number;
    width: number;
    x: number;
    y: number;
    do_objectID?: string;
}

export interface IStyle {
    _class: string;
    endDecorationType: number;
    miterLimit: number;
    startDecorationType: number;
    fills?: IFillsItem[];
    contextSettings?: IContextSettings;
    textStyle?: ITextStyle;
    do_objectID?: string;
    borderOptions?: IBorderOptions;
    borders?: IBordersItem[];
    sharedObjectID?: string;
    shadows?: IShadowsItem[];
    blur?: IBlur;
    innerShadows?: IInnerShadowsItem[];
}

export interface ILayersItem {
    _class: string;
    do_objectID: string;
    exportOptions: IExportOptions;
    frame: IFrame;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isVisible: boolean;
    layerListExpandedType: number;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: number;
    rotation: number;
    shouldBreakMaskChain: boolean;
    style?: IStyle;
    hasClickThrough?: boolean;
    layers?: ILayersItem[];
    clippingMaskMode?: number;
    hasClippingMask?: boolean;
    windingRule?: number;
    booleanOperation?: number;
    edited?: boolean;
    isClosed?: boolean;
    pointRadiusBehaviour?: number;
    points?: IPointsItem[];
    path?: IPath;
    fixedRadius?: number;
    hasConvertedToNewRoundCorners?: boolean;
    clippingMask?: string;
    fillReplacesImage?: boolean;
    image?: IImage;
    attributedString?: IAttributedString;
    automaticallyDrawOnUnderlyingPath?: boolean;
    dontSynchroniseWithSymbol?: boolean;
    glyphBounds?: string;
    lineSpacingBehaviour?: number;
    textBehaviour?: number;
    horizontalSpacing?: number;
    overrideValues?: any[];
    scale?: number;
    symbolID?: string;
    verticalSpacing?: number;
    backgroundColor?: IBackgroundColor;
    grid?: IGrid;
    hasBackgroundColor?: boolean;
    horizontalRulerData?: IHorizontalRulerData;
    includeBackgroundColorInExport?: boolean;
    includeInCloudUpload?: boolean;
    isFlowHome?: boolean;
    layout?: ILayout;
    presetDictionary?: IPresetDictionary;
    resizesContent?: boolean;
    verticalRulerData?: IVerticalRulerData;
}

export interface IFillsItem {
    _class: string;
    do_objectID?: string;
    isEnabled: boolean;
    color: IColor;
    fillType: number;
    noiseIndex: number;
    noiseIntensity: number;
    patternFillType: number;
    patternTileScale: number;
    gradient?: IGradient;
    contextSettings?: IContextSettings;
}

export interface IColor {
    _class: string;
    alpha: number;
    blue: number;
    green: number;
    red: number;
}

export interface IPointsItem {
    _class: string;
    cornerRadius: number;
    curveFrom: string;
    curveMode: number;
    curveTo: string;
    hasCurveFrom: boolean;
    hasCurveTo: boolean;
    point: string;
    do_objectID?: string;
}

export interface IPath {
    _class: string;
    isClosed: boolean;
    pointRadiusBehaviour: number;
    points: IPointsItem[];
}

export interface IContextSettings {
    _class: string;
    do_objectID?: string;
    blendMode: number;
    opacity: number;
}

export interface IImage {
    _class: string;
    _ref_class: string;
    _ref: string;
}

export interface ITextStyle {
    _class: string;
    encodedAttributes: IEncodedAttributes;
    verticalAlignment: number;
}

export interface IEncodedAttributes {
    MSAttributedStringFontAttribute: IMSAttributedStringFontAttribute;
    MSAttributedStringColorAttribute?: IMSAttributedStringColorAttribute;
    paragraphStyle: IParagraphStyle;
    ligature?: number;
    kerning?: number;
}

export interface IMSAttributedStringFontAttribute {
    _archive: string;
}

export interface IMSAttributedStringColorAttribute {
    _class: string;
    alpha: number;
    blue: number;
    green: number;
    red: number;
}

export interface IParagraphStyle {
    _archive: string;
}

export interface IAttributedString {
    _class: string;
    archivedAttributedString: IArchivedAttributedString;
}

export interface IArchivedAttributedString {
    _archive: string;
}

export interface IBorderOptions {
    _class: string;
    isEnabled: boolean;
    dashPattern: number[];
    lineCapStyle: number;
    lineJoinStyle: number;
}

export interface IBordersItem {
    _class: string;
    isEnabled: boolean;
    color: IColor;
    fillType: number;
    position: number;
    thickness: number;
    gradient?: IGradient;
    contextSettings?: IContextSettings;
    do_objectID?: string;
}

export interface IGradient {
    _class: string;
    elipseLength: number;
    from: string;
    gradientType: number;
    stops: IStopsItem[];
    to: string;
    do_objectID?: string;
}

export interface IStopsItem {
    _class: string;
    color: IColor;
    position: number;
    do_objectID?: string;
}

export interface IShadowsItem {
    _class: string;
    do_objectID?: string;
    isEnabled: boolean;
    blurRadius: number;
    color: IColor;
    contextSettings: IContextSettings;
    offsetX: number;
    offsetY: number;
    spread: number;
}

export interface IBlur {
    _class: string;
    isEnabled: boolean;
    center: string;
    motionAngle: number;
    radius: number;
    type: number;
}

export interface IInnerShadowsItem {
    _class: string;
    do_objectID?: string;
    isEnabled: boolean;
    blurRadius: number;
    color: IColor;
    contextSettings: IContextSettings;
    offsetX: number;
    offsetY: number;
    spread: number;
}

export interface IExportFormatsItem {
    _class: string;
    absoluteSize: number;
    fileFormat: string;
    name: string;
    namingScheme: number;
    scale: number;
    visibleScaleType: number;
}

export interface IBackgroundColor {
    _class: string;
    alpha: number;
    blue: number;
    green: number;
    red: number;
}

export interface IGrid {
    _class: string;
    do_objectID: string;
    isEnabled: boolean;
    gridSize: number;
    thickGridTimes: number;
}

export interface IHorizontalRulerData {
    _class: string;
    base: number;
    guides: number[];
    do_objectID?: string;
}

export interface ILayout {
    _class: string;
    isEnabled: boolean;
    columnWidth: number;
    drawHorizontal: boolean;
    drawHorizontalLines: boolean;
    drawVertical: boolean;
    gutterHeight: number;
    gutterWidth: number;
    guttersOutside: boolean;
    horizontalOffset: number;
    numberOfColumns: number;
    rowHeightMultiplication: number;
    totalWidth: number;
}

export interface IPresetDictionary {
    height: number;
    offersLandscapeVariant: number;
    name: string;
    width: number;
    allowResizedMatching: number;
}

export interface IVerticalRulerData {
    _class: string;
    base: number;
    guides: any[];
    do_objectID?: string;
}
