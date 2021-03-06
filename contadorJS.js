<!DOCTYPE html>
<meta charset="UTF-8">
<html>
    <head>
        <title>Projeto Cronometro JS</title>
        <style>
            .container {
                text-align: center;
            }
            button {
                background : blue;
                color: rgb(236, 229, 229);
                font-size: 32px;
                padding: 15px;
                cursor: pointer;
            }    
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Minutos:</h2>
            <select name="minutos" id="minutos">                
            </select>
            <h2>Segundos:</h2>
            <select name="segundos" id="segundos">
            </select>
        </br>
        </br>
            <button id="começar">
            Começar!
            </button>
            <div id="display">
                <h3>00:00:00</h3>
            </div>
            <button id="interromper">
                Interromper
            </button>
        </div>
        <script>
            var display = document.getElementById("display");

            var minutos = document.getElementById("minutos");
            var segundos = document.getElementById("segundos");

            var começar = document.getElementById("começar");
            var interromper = document.getElementById("interromper");

            var cronometroSeg;

            var minutoAtual;
            var segundoAtual;

            var interval;

            for(var i = 0; i <= 60; i++) {
                minutos.innerHTML +='<option value="' + i + '">' + i + '</option>';
            }
            for(var i = 1; i <= 60; i++) {
                segundos.innerHTML +='<option value="' + i + '">' + i + '</option>';
            }

            começar.addEventListener('click', function(){
                minutoAtual = minutos.value;
                segundoAtual = segundos.value;

                display.childNodes[1].innerHTML = minutoAtual + ":"+ segundoAtual;

                interval = setInterval(function(){
                    segundoAtual--;
                    if(segundoAtual <= 0){
                        if(minutoAtual > 0){
                            minutoAtual--;
                            segundoAtual = 59;
                        }else{
                            alert("Acabou a contagem");
                            clearInterval(interval);                            
                        }
                    }
                    display.childNodes[1].innerHTML = minutoAtual + ":"+ segundoAtual;
                },1000);
            })
        </script>
    </body>
</html>
