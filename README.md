<!doctype html>
<html lang="en" class="h-100">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">

    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/cover/">

    

    <!-- Bootstrap core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <script src="textFile.js"></script>

    <script src="test.js"></script>
    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    
    <!-- Custom styles for this template -->
    <link href="cover.css" rel="stylesheet">
  </head>
  <body class="d-flex h-100 text-center text-white bg-dark">
    
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">Spelling</h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Word List</a>
      </nav>
    </div>
  </header>

  <main class="px-3">
    <p>  <a href="#" onclick="play()" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Play</a>
    <p class="lead">
        <input id="word" type="text">
        
    </p>
    <p class="lead">
        <a href="#" onclick="submit()" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Submit Word</a>
    </p>
  </main>

  <footer class="mt-auto text-white-50">
  </footer>
</div>


    
  </body>
</html>

<!-- <button onclick="play()">Play</button> 
<br>
<br>
<input id="word" type="text">
<br>
<br>
<button onclick="submit()">Submit Word</button>  -->
