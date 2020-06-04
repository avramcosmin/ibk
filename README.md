# World Journey

An easy, enjoyable journey around the world.

## Installation

```
  npm install
  npm run start
```

Once the server started go to [http://localhost:4200](http://localhost:4200).

## Good to know

1. I had to reformat the `json` data you provided (and, also to add an ID).
2. I used the `in memory api` service provided by Angular to be able to mock an api server. For "journey around the world" I call an external API endpoint.
3. The "journey around the world" is an example of NgRX (see [this](https://youtu.be/YvPZfkTcZnE) for more details).

## Video walk-around

[Workflow, design & missing features - VIDEO](https://youtu.be/YvPZfkTcZnE)

## @ToDo

Unit testing...work in progress.

- Library - created test file for pipe (2 tests).
- Library - created test file for component (5 tests).

## Testing the library

Test coverage 100%.

```
  npm run test-lib
```

## Testing the app

Test coverage 5%.

```
  npm run test-app
```

## Workflow

The journey around the world:

1. When selecting a _region_ the `regionSelected` action gets dispatched by the component to update the corresponding value inside the store.
1. If a valid _region_ was selected two things will happen:
     - The component property will be updated by the subscription to store selector which in change 
     will trigger an update inside the template.
     - If the store is empty, a get request gets dispatched.
     - If the selected _region_ is null or other, the local properties get deleted.
1. If a _country_ is selected, a store selector will query the content.
1. `subSink` is used to manage subscriptions.
1. One pipe and two components have been created. The pipe and the reusable _select_ component will be managed 
   as part of an angular library.
1. The workflow is quite standard and mostly depends on the _NGRX_ design pattern.

The list of entries

1. Click on any entry.
2. A detailed view of the entry will be displayed.
3. This detailed view will showcase a simple implementation example of Highcharts.
4. The entire workflow relies on Angular routing.

## Style guides & CSS standards

The test app uses [Bootstrap](https://getbootstrap.com/).
