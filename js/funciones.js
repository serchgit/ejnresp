	function nav(){
		var nav = `<nav class="navbar navbar-toggleable-md navbar-inverse bg-faded fixed-top">
				      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				        <span class="navbar-toggler-icon"></span>
				      </button>
				      <a class="navbar-brand" href="index.html">EJN</a>
				      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
				        <ul class="navbar-nav">
				          <li class="nav-item active">
				            <a class="nav-link" href="index.html"><i class="fa fa-home"></i> Home <span class="sr-only">(current)</span></a>
				          </li>
				          <li class="nav-item">
				            <a class="nav-link" href="convNal.html">Convención 2019</a>
				          </li>
				          <li class="nav-item">
				            <a class="nav-link" href="camp.html">Campamento 2019</a>
				          </li>
				        </ul>
				      </div>
				    </nav>`;
		$('body').append(nav);
	}
	function footer(){
		var footer = `<div class="col-lg-3 col-md-6">
					    <div class="d-flex align-items-start">
					      <img src="images/logoFrat.jpg" width="50" class="img-fluid rounded-circle mr-3" alt="logo-footer">
					      <p>Fraternidad de Iglesias de Dios en la República Mexicana</p>  
					    </div>
					    <div class="icons-footer ">
					      <p class="m-0">Esfuerzo Juvenil Nacional</p>
					    </div>
					  </div>
					  <div class="col-lg-5 col-md-6 d-flex justify-content-center">
					    <ul>Contacto:
					      <li>
					        <b>Laura Berenice Garcia Cruz</b> <i>Directora Juvenil Nacional</i>
					        <p class="m-0">Cel: 55 6987 3041</p>
					      </li>
					      <li>
					        <b>Noé Macías</b> Ortíz <i>Secretario Juvenil Nacional</i>
					        <p class="m-0">Cel: 55 2213 9713</p>
					      </li>
					      <li>
					        <b>Monica</b> Estrada <i>Tesorera Juvenil Nacional</i>
					        <p class="m-0">Cel: 55 1854 1077</p>
					      </li>
					    </ul>
					  </div>
					  <div class="col-lg-3">
					    <h4>Síguenos en...</h4>
					    <div class="icons-footer mb-3">
					      <a href="https://www.facebook.com/esfuerzojuvenil/"><i class="fa fa-facebook-square mr-3"></i></a>
					      <a href="#"><i class="fa fa-youtube mr-3 text-danger"></i></a>
					      <a href="#"><i class="fa fa-twitter text-info"></i></a>
					    </div>
					  </div>`;
		$('footer').append(footer);
	}
	function lecturas(){
      var tablaL = `<table class="table table-success table-striped" id="table">
                      <thead>
                        <tr>
                          <td>Participante</td>
                          <td>Lugar</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Adonai</td><td>CDMX</td></tr>
                        <tr><td>Gethsemaní</td><td>CDMX</td></tr>
                        <tr><td>Jesús el Buen Pastor</td><td>CDMX</td></tr>
                        <tr><td>El Divino Salvador</td><td>CDMX</td></tr>
                        <tr><td>Gethsemaní</td><td>Edo de Méx</td></tr>
                        <tr><td>Monte de los Olivos</td><td>Tuxtepec Oaxaca</td></tr>
                        <tr><td>Bethel</td><td>Valle Nal. Oaxaca</td></tr>
                        <tr><td>Cristo Viene</td><td>Valle Nal. Oaxaca</td></tr>
                        <tr><td>Arca de Noé</td><td>Edo de Méx</td></tr>
                        <tr><td>La Hermosa</td><td>Sn Francisco Edo de Méx</td></tr>
                        </tbody>
                    </table>`;
            $('.tabla').html(tablaL);
            $('#table').DataTable();
    }
    function esgrima(){
      var tablaE = `<table class="table table-info table-success" id="table">
                      <thead>
                        <tr>
                          <td>Participante</td>
                          <td>Lugar</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Adonai</td><td>CDMX</td></tr>
                        <tr><td>Gethsemaní</td><td>CDMX</td></tr>
                        <tr><td>Jesús el Buen Pastor</td><td>CDMX</td></tr>
                        <tr><td>El Divino Salvador</td><td>CDMX</td></tr>
                        <tr><td>Gethsemaní</td><td>Edo de Méx</td></tr>
                        <tr><td>Monte de los Olivos</td><td>Tuxtepec Oaxaca</td></tr>
                        <tr><td>Bethel</td><td>Valle Nal. Oaxaca</td></tr>
                        <tr><td>Cristo Viene</td><td>Valle Nal. Oaxaca</td></tr>
                        <tr><td>Arca de Noé</td><td>Edo de Méx</td></tr>
                        <tr><td>La Hermosa</td><td>Sn Francisco Edo de Méx</td></tr>
                      </tbody>
                    </table>`;
            $('.tabla').html(tablaE);
            $('#table').DataTable();
    }
    function canto(){
    	var tablaC = `<table class="table table-info table-striped" id="table">
                      <thead>
                        <tr>
                          <td>Participante</td>
                          <td>Lugar</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Adonai</td><td>CDMX</td></tr>
                        <tr><td>Gethsemaní</td><td>CDMX</td></tr>
                        <tr><td>Jesús el Buen Pastor</td><td>CDMX</td></tr>
                        <tr><td>El Divino Salvador</td><td>CDMX</td></tr>
                        <tr><td>Gethsemaní</td><td>Edo de Méx</td></tr>
                        <tr><td>Monte de los Olivos</td><td>Tuxtepec Oaxaca</td></tr>
                        <tr><td>Bethel</td><td>Valle Nal. Oaxaca</td></tr>
                        <tr><td>Cristo Viene</td><td>Valle Nal. Oaxaca</td></tr>
                        <tr><td>Arca de Noé</td><td>Edo de Méx</td></tr>
                        <tr><td>La Hermosa</td><td>Sn Francisco Edo de Méx</td></tr>
                      </tbody>
                    </table>`;
            $('.tabla').html(tablaC);
            $('#table').DataTable();
    }
$(function(){
	console.log('hola desde funciones')
});