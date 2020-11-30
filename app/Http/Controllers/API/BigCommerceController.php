<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class BigCommerceController extends Controller
{
    protected $baseURL;

    public function __construct()
    {
        $this->baseURL = env('APP_URL');
    }

    public function makeBigCommerceAPIRequest(Request $request, $endpoint)
    {
        $requestConfig = [
            'headers' => [
                'X-Auth-Client' => getAppClientId(),
                'X-Auth-Token' => getAccessToken($request),
                'Content-Type' => 'application/json',
            ],
        ];

        if ($request->method() === 'PUT') {
            $requestConfig['body'] = $request->getContent();
        }

        if ($request->method() === 'GET') {
            $requestConfig['query'] = $request->query();
        }

        $client = new Client();
        $result = $client->request($request->method(), 'https://api.bigcommerce.com/' . getStoreHash($request) . '/' . $endpoint, $requestConfig);
        return $result;
    }

    public function proxyBigCommerceAPIRequest(Request $request, $endpoint)
    {
        if (strrpos($endpoint, 'v2') !== false) {
            // For v2 endpoints, add a .json to the end of each endpoint, to normalize against the v3 API standards
            $endpoint .= '.json';
        }

        $result = $this->makeBigCommerceAPIRequest($request, $endpoint);

        return response($result->getBody(), $result->getStatusCode())->header('Content-Type', 'application/json');
    }
}