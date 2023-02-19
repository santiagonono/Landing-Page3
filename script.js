const squares = document.querySelectorAll('.square');
let currentPlayer = 'x';

for (const square of squares) {
  square.addEventListener('click', handleClick);
}

function handleClick() {
  this.textContent = currentPlayer;
  this.classList.add(currentPlayer);

  // Verifica si hay un ganador
  if (checkForWinner()) {
    alert(`${currentPlayer} ha ganado!`);
    return;
  }

  currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}

function checkForWinner() {
  // Tu código para verificar si hay un ganador aquí
  // Puedes utilizar una estructura de control de flujo como una condicional (if)
  // para verificar si hay tres casillas consecutivas con el mismo símbolo ("x" o "o")
  // en una fila, columna o diagonal. Si se cumple alguna de estas condiciones,
  // puedes devolver true para indicar que hay un ganador. Si no se cumple ninguna
  // de estas condiciones, puedes devolver false para indicar que aún no hay un ganador.
}
