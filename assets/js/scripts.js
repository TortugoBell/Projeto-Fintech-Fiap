document.getElementById('btnNovoUsuario').addEventListener('click', function () {
    var myModal = new bootstrap.Modal(document.getElementById('modalNovoUsuario'));
    myModal.show();
});

document.getElementById('btnContinuarComEmail').addEventListener('click', function () {
    var myModal = new bootstrap.Modal(document.getElementById('modalUsuarioExistente'));
    myModal.show();
});