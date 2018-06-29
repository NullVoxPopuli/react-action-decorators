export type Mut = (field: string) => (e: Event) => void;
export type Toggle = (field: string) => (e: Event) => void;
export type Pipe = (actions: Array<Function>) => (e: Event) => void;

export { withTemplateHelpers } from './decorators';
