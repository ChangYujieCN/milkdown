/* Copyright 2021, Milkdown by Mirone. */
import { calculateTextPosition, EditorView } from '@milkdown/prose';

export const calcButtonPos = (buttons: HTMLElement, view: EditorView) => {
    buttons.classList.remove('hide');
    calculateTextPosition(view, buttons, (start, end, target, parent) => {
        const selectionWidth = end.left - start.left;
        let left = start.left - parent.left - (target.width - selectionWidth) / 2;
        let top = start.top - parent.top - target.height - 14;

        if (left < 0) left = 0;

        if (start.top < target.height) {
            top = start.bottom - parent.top + 14;
        }

        return [top, left];
    });
};
