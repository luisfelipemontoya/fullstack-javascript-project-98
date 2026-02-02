Brain Games es un conjunto de juegos de consola desarrollados en JavaScript (Node.js).
El proyecto está diseñado para practicar lógica de programación, trabajo con la terminal y arquitectura modular en aplicaciones CLI.

El usuario ejecuta distintos juegos desde la línea de comandos y debe responder correctamente una serie de preguntas. Si falla una respuesta, el juego termina. Si responde bien 3 rondas seguidas, gana.

1. Maintainability (Code Climate / Qlty)
[![Maintainability](https://qlty.sh/gh/luisfelipemontoya/projects/fullstack-javascript-project-98/maintainability.svg)](https://qlty.sh/gh/luisfelipemontoya/projects/fullstack-javascript-project-98)

2. Hexlet Tests & Linter (GitHub Actions)
[![Actions Status](https://github.com/luisfelipemontoya/fullstack-javascript-project-98/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/luisfelipemontoya/fullstack-javascript-project-98/actions)

3. Clonar el repositorio
git clone https://github.com/luisfelipemontoya/fullstack-javascript-project-98.git
cd fullstack-javascript-project-98

4. Instalar dependencias
make install

5.Vincular el paquete globalmente
npm link

6. ¿Cómo jugar?
| Juego                 | Comando             |
| --------------------- | ------------------- |
| Saludo inicial        | `brain-games`       |
| ¿Es un número par?    | `brain-even`        |
| Calculadora           | `brain-calc`        |
| Máximo común divisor  | `brain-gcd`         |
| Progresión aritmética | `brain-progression` |
| ¿Es primo?            | `brain-prime`       |

7. Descripción de los juegos
brain-even

El jugador debe decir si un número es par.
Respuestas válidas: yes o no.

🔹 brain-calc

Se muestra una operación matemática aleatoria (+, -, *).
El jugador debe escribir el resultado correcto.

🔹 brain-gcd

Se muestran dos números.
El jugador debe ingresar su máximo común divisor.

🔹 brain-progression

Se muestra una progresión aritmética con un número oculto (..).
El jugador debe adivinar el número faltante.

🔹 brain-prime

Se muestra un número aleatorio.
El jugador debe responder yes si es primo o no si no lo es.

8. Reglas del juego
Cada juego tiene 3 rondas para ganar.
Una respuesta incorrecta termina el juego.
El sistema muestra la respuesta correcta y anima a intentarlo de nuevo.

9. Tecnologías usadas
Node.js
readline-sync (entrada de usuario)
ESLint (Airbnb Style Guide)
Makefile para automatización
Arquitectura modular con motor común de juego

10. Estructura del proyecto
bin/            # Archivos ejecutables CLI
src/
  cli.js        # Saludo y captura del nombre del usuario
  index.js      # Motor principal del juego
  games/        # Lógica individual de cada juego

11. Pruebas y calidad de código
El proyecto está configurado con:
✔ ESLint (Airbnb)
✔ Verificación automática con GitHub Actions
✔ CodeClimate para calidad del código

12.Demostraciones

## Demo Brain Even
[Ver demostración en asciinema](https://asciinema.org/a/NOdW0yi7nm9TjdRf) 

## Demo Brain Calc
[Ver demostración en asciinema](https://asciinema.org/a/0ONw9lESTH8ThVrU)

## Demo Brain Gdc
[Ver demostración en asciinema](https://asciinema.org/a/LfpJPmjG5xQuxcE0)

## Demo Brain progression
[Ver demostración en assciinema](https://asciinema.org/a/MV8LXXoRAQg9LSP6)

## Demo Brain prime
[Ver demostración en assciinema](https://asciinema.org/a/73Tw5gzo5RMZGAOB)
