<script> //Com JavaScript
            let form = document.querySelector("form");
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let data = new FormData(form);
                fetch('https://script.google.com/macros/s/AKfycbyhrprRPq3A4-Jg48Bpv8UHyqez_HCX_tJW-tylmyd7rYIKeIVKLFbJqv38CbluYSDc/exec', {
                    method: "POST",
                    body: data
                })
                    .then(res => res.text())
                    .then(data => { 
                        document.querySelector("#msg").innerHTML = "Mensagem após envio"
                        document.querySelector("#sub").value = "Mensagem quando termina o envio";
                    });
            });
</script>