import { Injectable } from '@angular/core';
import { ISearchValue } from './types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(
  // {providedIn: 'platform'}
)
export class SortService {

  private _selectedFilter$$: BehaviorSubject<ISearchValue> = new BehaviorSubject<ISearchValue>({} as ISearchValue)

  public selectedFilter$: Observable<ISearchValue> = this._selectedFilter$$.asObservable()

  constructor() {
  }

  setSelectedFilter(searchValue: ISearchValue): void {
    this._selectedFilter$$.next(searchValue)
  }
}
