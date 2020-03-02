import { ScaleType } from './scaletype';
import { SelectOptionModel } from './select-option-model';
import { SelectionModel } from '@angular/cdk/collections';
import { IndexedNote } from '../entities/indexed-note';

// circolo delle quinte (alterazioni #)
export const CircleOfFifth = [
    { note: 'C', relatedMinor: 'A', alterations: 0},
    { note: 'G', relatedMinor: 'E', alterations: 1},
    { note: 'D', relatedMinor: 'B', alterations: 2},
    { note: 'A', relatedMinor: 'F#', alterations: 3},
    { note: 'E', relatedMinor: 'C#', alterations: 4},
    { note: 'B', relatedMinor: 'G#', alterations: 5},
    { note: 'F#', relatedMinor: 'D#', alterations: 6},
    { note: 'C#', relatedMinor: 'A#', alterations: 7}
];

export const CircleOfFifthAlterations = [
    {index: 0, alteration: 'F'},
    {index: 1, alteration: 'C'},
    {index: 2, alteration: 'G'},
    {index: 3, alteration: 'D'},
    {index: 4, alteration: 'A'},
    {index: 5, alteration: 'E'},
    {index: 6, alteration: 'B'},
];

// circolo delle quarte (alterazioni b)
export const circleOfFourth = [
    { note: 'C', relatedMinor: 'A', alterations: 0},
    { note: 'F', relatedMinor: 'D', alterations: 1},
    { note: 'Bb', relatedMinor: 'G', alterations: 2},
    { note: 'Eb', relatedMinor: 'C', alterations: 3},
    { note: 'Ab', relatedMinor: 'F', alterations: 4},
    { note: 'Db', relatedMinor: 'Bb', alterations: 5},
    { note: 'Gb', relatedMinor: 'Eb', alterations: 6},
    { note: 'Cb', relatedMinor: 'Ab', alterations: 7}
];

export const circleOfFourthAlterations = [
    {index: 0, alteration: 'B'},
    {index: 1, alteration: 'E'},
    {index: 2, alteration: 'A'},
    {index: 3, alteration: 'D'},
    {index: 4, alteration: 'G'},
    {index: 5, alteration: 'C'},
    {index: 6, alteration: 'F'},
];

export const majorScaleTypeList = [
    new SelectOptionModel(ScaleType.natural, 'Naturale'),
    new SelectOptionModel(ScaleType.pentatonic, 'Pentatonica'),
    new SelectOptionModel(ScaleType.blues, 'Blues')
];

export const minorScaleTypeList: SelectOptionModel[] = [
    new SelectOptionModel(ScaleType.natural, 'Naturale'),
    new SelectOptionModel(ScaleType.melodic, 'Melodica'),
    new SelectOptionModel(ScaleType.harmonic, 'Armonica'),
    new SelectOptionModel(ScaleType.pentatonic, 'Pentatonica'),
    new SelectOptionModel(ScaleType.blues, 'Blues')
];

export const AscendingNoteList: IndexedNote[] = [
    new IndexedNote(0, 'A'),
    new IndexedNote(1, 'A#'),
    new IndexedNote(2, 'B'),
    new IndexedNote(3, 'B#'),
    new IndexedNote(4, 'C#'),
    new IndexedNote(5, 'D'),
    new IndexedNote(6, 'D#'),
    new IndexedNote(7, 'E'),
    new IndexedNote(8, 'E#'),
    new IndexedNote(9, 'F#'),
    new IndexedNote(10, 'G'),
    new IndexedNote(11, 'G#')
]

export const DescendingNoteList: IndexedNote[] = [
    new IndexedNote(0, 'A'),
    new IndexedNote(1, 'Bb'),
    new IndexedNote(2, 'Cb'),
    new IndexedNote(3, 'C'),
    new IndexedNote(4, 'Db'),
    new IndexedNote(5, 'D'),
    new IndexedNote(6, 'Eb'),
    new IndexedNote(7, 'Fb'),
    new IndexedNote(8, 'F'),
    new IndexedNote(9, 'Gb'),
    new IndexedNote(10, 'G'),
    new IndexedNote(11, 'Ab')
]