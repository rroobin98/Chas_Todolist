# Chas_Todolist
Todolist
All data ska finnas i state i App.jsx. Datat ska bestå av en array av objekt. Varje objekt ska bestå av en sträng: title, en boolean: done och ett nummer: id. Från början ska state bestå av en tom array.

Skapa ett input fält och en Add-knapp som lägger till nya todo-objekt till arrayen i state.

Skapa jsx som ritar ut alla objekt som finns i arrayen i state. För detta används en map-funktion och en TodoItem-komponent. Varje TodoItem ska visa på ett grafiskt sätt om den är gjord eller inte gjord.

TodoItem-komponenten ska ha en knapp som uppdaterar värdet: done i todo-objektet från false till true eller tvärtom. För detta används en callback funktion som tar ett id och ett done-värde som input.

TodoItem-komponenten ska ha en delete-knapp som raderar todo-objektet från state. För detta används en callback funktion som tar ett id som input.
