export interface Size {
    width: number;
    height: number;
}
export declare class SizeCustomAttribute {
    private element;
    private observer;
    value: Size;
    width: number;
    height: number;
    constructor(element: HTMLElement);
    bind(): void;
    unbind(): void;
    getObserver(): any;
    valueChanged(size: Size): void;
}
