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
        <h1>Hello World</h1>
        <button class="btn btn-success">Hello</button>
    </div>
    @vite('resources/js/app.js')
    </body>
</html>
