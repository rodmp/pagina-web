<?php
namespace App\Http\Traits;

trait Helpers {
    public function getAppClientId()
    {
        if (config('app.env') === 'local') {
            return config('bigcommerce.bc_local_client_id');
        } else {
            return config('bigcommerce.bc_app_client_id');
        }
    }

    public function getAppSecret()
    {
        if (config('app.env') === 'local') {
            return config('bigcommerce.bc_local_secret');
        } else {
            return config('bigcommerce.bc_app_secret');
        }
    }

    public function getAccessToken($request)
    {
        if (config('app.env') === 'local') {
            return config('bigcommerce.bc_local_access_token');
        } else {
            return $request->session()->get('access_token');
        }
    }

    public function getStoreHash($request)
    {
        if (config('app.env') === 'local') {
            return config('bigcommerce.bc_local_store_hash');
        } else {
            return $request->session()->get('store_hash');
        }
    }
}