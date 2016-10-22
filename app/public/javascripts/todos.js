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
    buttonEl.onclick = function () {
        request('POST', '/todos', {
            name: d.getElementById('todo-name').value,
            note: d.getElementById('todo-note').value,
        });
    };

    /* Update Todo */
    var checkboxEl = d.getElementsByName('update-todo');
    for(var i = 0; i < checkboxEl.length; i++) {
        checkboxEl[i].onchange = function (e) {
            request('PUT', '/todos/'+e.target.id, {
                completed: e.target.checked,
            });
        }
    }

    /* Delete Todo */
    var deleteEl = d.getElementsByName('delete-todo');
    for(var i = 0; i < deleteEl.length; i++) {
        deleteEl[i].onclick = function (e) {
            request('DELETE', '/todos/'+e.target.id);
        }
    }

})(window, document);
