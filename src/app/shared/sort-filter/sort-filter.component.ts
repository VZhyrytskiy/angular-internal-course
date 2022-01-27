import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith } from 'rxjs';
import { ISearchValue, TFilterNames, TFilterNamesCart } from '../types';
import { SortService } from '../sort.service';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss'],
})
export class SortFilterComponent implements OnInit {
  @Input() filterNameArr!: TFilterNames[] | TFilterNamesCart[];
  sort = true;

  sortFilterForm!: FormGroup

  constructor(
    public sortService: SortService
  ) { }

  ngOnInit(): void {
    this.sortFilterForm = new FormGroup({
      filter: new FormControl(this.filterNameArr[0]),
      sort: new FormControl(this.sort)
    })

    this.sortFilterForm.valueChanges.pipe(
      startWith(this.sortFilterForm.getRawValue()),
    ).subscribe((res: ISearchValue) => this.sortService.setSelectedFilter(res))
  }
}
