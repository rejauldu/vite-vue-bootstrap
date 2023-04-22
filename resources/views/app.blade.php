<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        @vite(['resources/css/app.css', 'resources/sass/app.scss'])
    </head>
    <body>
    <div id="app">
        <div class="container">
            <navbar></navbar>
            <router-view></router-view>
        </div>
    </div>
    @vite('resources/js/app.js')
    </body>
</html>
