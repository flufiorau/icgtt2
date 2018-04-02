# Icgtt2

## Assignment

Onepage application with list of clients and their
details. Clients data are stored in 'clients.json' which will be loaded
dynamicaly via XHR.

## Wireframe description:
* **Clients list:** Every item will display smaller avatar (in
	json there is only one avatar size, so feel free to resize it). Next to the
	avatar there will be clients name and job title. When user clicks on
	an item, it will display client's details on the right.

* **Search:** Above this list there will be search bar. It will search
	all informations, not only those showed in the clients list. Results will
	be displayed instead of list of clients and they will show instantly
	as user starts to type.

* **Client's details:** Pretty self-explanatory, on the left there
	will be full size avatar (128x128px), next to it big clients name,
	smaller job title and company name ("{job.title} - {job.company}") below
	this name. Next there will be all other clients informations like
	address, and contact informations.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
