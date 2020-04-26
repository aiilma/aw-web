<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="minimum-scale=1,initial-scale=1,width=device-width,shrink-to-fit=no"/>
    <link rel="icon" href="/favicon.ico"/>
    <meta name="theme-color" content="#000000"/>
    <link rel="apple-touch-icon" href="/logo192.png"/>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

    <title>artworch</title>
</head>
<body>

<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>

@foreach($entrypoints as $point)
    <script src="/{{$point}}"></script>
@endforeach

</body>
</html>
