import { InputElement } from "./core/InputElement.js";
import type { ITextBasedInputElement } from './core/ITextBasedInputElement.js';
import { InputModeType } from './core/InputModeType.js';
import { AutocompleteType } from './core/AutocompleteType.js';
export declare type InputNumberValue = number;
export declare class InputNumberElement extends InputElement<InputNumberValue> implements ITextBasedInputElement<InputNumberValue> {
    readonly defaultValue: InputNumberValue;
    min: number | null;
    max: number | null;
    step: number | null;
    value: InputNumberValue;
    placeholder: string | null;
    disabled: boolean;
    readOnly: boolean;
    autocomplete: AutocompleteType;
    inputMode: InputModeType;
    name: string;
    private _computeInputMode;
    private _input;
    private _onInput;
    private _onFocus;
    private _onBlur;
    private _onKeyDown;
    private _onClearValue;
    private _updateValue;
    private _formatValue;
    clearValue(): void;
    hasSameValueAs(value: InputNumberValue): boolean;
    focus(): void;
    blur(): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResultGroup;
}
