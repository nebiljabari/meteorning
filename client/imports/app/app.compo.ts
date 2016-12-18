import { Component }  from '@angular/core';
import { Http }       from '@angular/http';

import { Meteor }     from 'meteor/meteor';
import { MeteorObservable as MeteorObs } from 'meteor-rxjs';

import template       from './app.compo.html';

/* - - - IMPORTS - - - */

@Component({
  selector: 'app',
  template: template
})
export class AppCompo {
  onProcess: string; iris:  any;    wiki: any;
  baseUrl:   string; query: string; url: string;
  form: Object = new Object();

  constructor(private http: Http) {
    this.baseUrl = 'https://en.wikipedia.org/w/api.php';
    this.query   = '?format=json&action=query&origin=*&prop=extracts&exintro=&explaintext=&titles=';
    this.url     = `${this.baseUrl}${this.query}`;
  }

  callPython(inForm) {
    this.onProcess = 'data on process';

    MeteorObs.call('model', inForm.arg1.toString(), inForm.arg2.toString(),
                            inForm.arg3.toString(), inForm.arg4.toString() )
             .subscribe(res => { this.iris = res, this.onProcess = '', this.form = {};

                                 this.http.get(`${this.url}Iris_${this.iris}`)
                                          .subscribe(res => { let getPageQ   = res.json().query.pages;
                                                              let getPageNum = Object.keys(getPageQ);
                                                              let getPage    = getPageQ[getPageNum].extract;

                                                              this.wiki = getPage;
                                                            },
                                                     err => { throw new Meteor.Error('>> ERROR FROM HTTP', err); }
                                                    );
                               },
                        err => { throw new Meteor.Error('>> ERROR FROM CALL:', err); }
                       );
  }
}
