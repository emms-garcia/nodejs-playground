(function (w, d) {
    function request(method, endpoint, payload) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open(method, endpoint);
        xmlhttp.setRequestHeader(
            'Content-Type',
            'application/json;charset=UTF-8'
        );
        xmlhttp.send(JSON.stringify(payload || {}));
        setTimeout(function () {
            w.location.reload()
        }, 100);
    }

    /* New Todo */
    var buttonEl = d.getElementById('create-todo');
    if (buttonEl) {
        buttonEl.onclick = function () {
            var name = d.getElementById('todo-name').value;
            var note = d.getElementById('todo-note').value;
            name && note && request('POST', '/todos', {
                name: name,
                note: note,
            });
        };
    }

    /* Update Todo */
    var checkboxEl = d.getElementsByName('update-todo');
    if (checkboxEl.length) {
        for(var i = 0; i < checkboxEl.length; i++) {
            checkboxEl[i].onchange = function (e) {
                request('PUT', '/todos/'+e.target.id, {
                    completed: e.target.checked,
                });
            }
        }
    }

    /* Delete Todo */
    var deleteEl = d.getElementsByName('delete-todo');
    if (deleteEl.length) {
        for(var i = 0; i < deleteEl.length; i++) {
            deleteEl[i].onclick = function (e) {
                request('DELETE', '/todos/'+e.target.id);
            }
        }
    }

})(window, document);
