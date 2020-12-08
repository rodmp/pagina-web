# Laravel Vue Sample App for BigCommerce

## Installation

>Before jumping in, you'll want to make sure you have the system requirements met:
>
>### 1. Setup Environment
>
> - PHP ([Installation Guide](https://www.php.net/manual/en/install.php))
>
>- Composer ([Installation Guide](https://getcomposer.org/doc/00-intro.md))
>
>- Laravel ([Installation Guide](https://laravel.com/docs/8.x))
>
>- Local SSL Cert (Recommend Valet or Homestead to ease set up)
>
>- Mac OS: Valet ([Installation Guide](https://laravel.com/docs/8.x/>valet))
>- Windows / Linux: Homestead ([Installation Guide](https://laravel.>com/docs/8.x/homestead))
>
>### 2. Install PHP dependencies
>
>   ```bash
>   composer install
>   ```
>
>### 3. Install JS dependencies
>
>   ```bash
>   npm install
>   ```
>
>To test on a BigCommerce store, you can create a free trial on bigcommerce.com or request a free sandbox store by [signing up to be a tech partner](https://www.bigcommerce.com/partners/).
>
## Usage
>
>- To compile JS assets:
>
>   ```bash
>   npm run dev or npm run watch
>   ```
>
>   After compiling the app:
>   - You should be reachable at the site you are hosting the app on locally. i.e [https://laravel-vue-bigcommerce-app.test](https://laravel-vue-bigcommerce-app.test)
>
>   - Or you can simply run the app locally using below command and url.
>     ```bash
>     php artisan serve
>     ```
>       [http://localhost:8000](http://localhost:8000) or [http://127.0.0.1:8000](http://127.0.0.1:8000)
>
>- When running the app outside of BigCommerce, setting the follow environment variable will cause the app to use the local API credential (also in the .env file):
>`APP_ENV=local`
>
>- Likewise, setting it to production will use only the credentials received during the OAuth handshake when the app is install on the BigCommerce store:
>`APP_ENV=production`
>
>- To hide or show the sidebar of locally built sample app run in production, setting env like: `MIX_APP_INSTALL=production/local`

## Using React Components
>
>Can use the React [BigDesign](https://bigcommerce.github.io/big-design) Components or Custom React Components.
>
>### 1. Globally Usage
>
>
>- Register react components in reactComponents.js(`./resources/js/reactComponents.js`) file
>
>   ```bash
>   import { Button } from "@bigcommerce/big-design";
>   export default { ..., Button, };
>   ```
>
>- Use the registered react components in Vue Component
>
>   ```bash
>   <template>
>       ...
>           <BigButton variant="secondary" @onClick="handleClickViewStore"/>
>       ...
>   </template>
>   ```
>
>> **_Important:_** Needed to add the `Big` prefix, when use the registered react components. EX: `BigButton`
>
>### 2. Or locally Usage
>
>- Create react component(function or class) file with the name `example.react.jsx`
>
>>**_Important:_** Needed to add the suffix `react` to file or folder name.
>>EX: `columns.react.jsx` or `MainOrderActionModal.react`
>
>- Wrap the react component with `ReactInVue` function of [vuera](https://github.com/akxcv/vuera/) npm library.
>   ```bash
>   <script>
>   import { AlertsManager } from "@bigcommerce/big-design";
>   import { ReactInVue } from "vuera";
>
>   export default {
>       ...
>       components: {
>           "alerts-manager": ReactInVue(AlertsManager)
>       },
>      ...
>   };
>   </script>

## Contributing
>
>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

>MIT
