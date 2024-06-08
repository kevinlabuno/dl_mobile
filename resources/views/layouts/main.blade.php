<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <link rel="manifest" href="/manifest.json">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dava Laundry</title>
    <link href="{{ asset('assets/css/app.css') }}" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link rel="icon" href="assets/img/dal.png" sizes="220x220" type="image/png">
    <link rel="apple-touch-icon" href="assets/img/dal.png"> <!-- Ukuran ikon dapat disesuaikan dengan kebutuhan -->
</head>
<body>
    <div class="app-container">

        @include('layouts.mainheader')

        <div class="main-content">
            @yield('content')
        </div>

        @include('layouts.bottom')

    </div>

    <script src="{{ asset('assets/js/app.js') }}"></script>
    <script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
      });
  }
</script>
</body>
</html>
