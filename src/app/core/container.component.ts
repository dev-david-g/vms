import { DestroyRef, inject } from '@angular/core';

export class ContainerComponent {
   public readonly destroyRef = inject(DestroyRef);

    // constructor(private readonly destroyRef: DestroyRef) {}
}
