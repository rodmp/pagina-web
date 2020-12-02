<?php

function getAppClientId()
{
    if (env('APP_ENV') === 'local') {
        return env('BC_LOCAL_CLIENT_ID');
    } else {
        return env('BC_APP_CLIENT_ID');
    }
}

function getAppSecret()
{
    if (env('APP_ENV') === 'local') {
        return env('BC_LOCAL_SECRET');
    } else {
        return env('BC_APP_SECRET');
    }
}

function getAccessToken($request)
{
    if (env('APP_ENV') === 'local') {
        return env('BC_LOCAL_ACCESS_TOKEN');
    } else {
        return $request->session()->get('access_token');
    }
}

function getStoreHash($request)
{
    if (env('APP_ENV') === 'local') {
        return env('BC_LOCAL_STORE_HASH');
    } else {
        return $request->session()->get('store_hash');
    }
}