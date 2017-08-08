# Norwegian (bokmål) Translations for Admin-on-rest

Norwegian translations for [admin-on-rest](https://github.com/marmelab/admin-on-rest), the frontend framework for building admin applications on top of REST services.

![admin-on-rest demo](http://static.marmelab.com/admin-on-rest.gif)

## Installation

```sh
npm install --save aor-language-norwegian
```

## Usage

```js
import norwegianMessages from 'aor-language-norwegian';

const messages = {
    'nb': norwegianMessages,
};

<Admin locale="nb" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE).
