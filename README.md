# Laravel Vue Sample App for BigCommerce

## Installation

Before jumping in, you'll want to make sure you have the system requirements met:

- PHP ([Installation Guide](https://www.php.net/manual/en/install.php))

- Composer ([Installation Guide](https://getcomposer.org/doc/00-intro.md))

- Laravel ([Installation Guide](https://laravel.com/docs/8.x))

- Local SSL Cert (Recommend Valet or Homestead to ease set up)

  - Mac OS: Valet ([Installation Guide](https://laravel.com/docs/8.x/valet))
  - Windows / Linux: Homestead ([Installation Guide](https://laravel.com/docs/8.x/homestead))

To install PHP dependencies:

```bash
composer install
```

And JS dependencies:

```bash
npm install
```

To test on a BigCommerce store, you can create a free trial on bigcommerce.com or request a free sandbox store by [signing up to be a tech partner](https://www.bigcommerce.com/partners/).

## Usage

To compile JS assets:

```bash
npm run dev or npm run watch
```

After compiling the app should be reachable at the site you are hosting the app on locally. i.e [https://laravel-vue-bigcommerce-app.test](https://laravel-vue-bigcommerce-app.test)

When running the app outside of BigCommerce, setting the follow environment variable will cause the app to use the local API credential (also in the .env file):

APP_ENV=local
Likewise, setting it to production will use only the credentials received during the OAuth handshake when the app is install on the BigCommerce store:

APP_ENV=production

To hide or show the sidebar of locally built sample app run in production, setting env like bellow.
MIX_APP_INSTALL=production
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
