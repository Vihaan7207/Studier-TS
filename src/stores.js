import { writable } from "svelte/store";

export const titlePipe = writable('');

export const classes = writable([
    'Math',
    'ELA',
    'Social Studies',
    'Science'
]);