export interface DOMCoordinates {
    x: number;
    y: number;
}

export interface CoordinateSet {
    topLeft: DOMCoordinates;
    topRight: DOMCoordinates;
    bottomLeft: DOMCoordinates;
    bottomRight: DOMCoordinates;
    center: DOMCoordinates;
    width: number;
    height: number;
}

export interface ViewportInfo {
    scrollX: number;
    scrollY: number;
    width: number;
    height: number;
}

export interface DOMElementNode {
    tagName: string;
    attributes: Record<string, string>;
    xpath: string;
    children: number[]; // Array of IDs referencing other nodes in the map
    isInteractive: boolean;
    isVisible: boolean;
    isTopElement: boolean;
    highlightIndex?: number; // Optional, only present for interactive elements
    shadowRoot?: boolean; // Optional, only present if element has shadow DOM
    viewportCoordinates?: CoordinateSet; // Coordinates relative to viewport
    pageCoordinates?: CoordinateSet; // Coordinates relative to page
    viewport?: ViewportInfo; // Information about viewport and scroll position
}

// Text node representation
export interface DOMTextNode {
    type: "TEXT_NODE";
    text: string;
    isVisible: boolean;
}

export type DOMNode = DOMElementNode | DOMTextNode;

export interface DOMHashMap {
    [id: string]: DOMNode;
}

export type NodeType = Element | Text;

export interface Action {
    type: 'click' | 'scroll' | 'input' | 'navigate' | 'url' | 'copy' | 'switchToTab';
    element_id?: string;
    xpath_ref?: string;
    selector?: string;
    text?: string;
    amount?: number;
    url?: string;
    tab_id?: number;
} 

export interface AutomationOptions {
    debug?: boolean;
    cursorSize?: number;
    cursorUI?: string;
}

export interface ExecuteActionResult {
    success: boolean
    message: string
}