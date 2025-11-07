function ordenarNumeros() {
      let num1 = Number(document.getElementById("num1").value);
      let num2 = Number(document.getElementById("num2").value);
      let num3 = Number(document.getElementById("num3").value);

      let resultado = document.getElementById("resultado");

      // Validar números
      if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultado.innerHTML = "<p style='color:red;'>Por favor ingresa solo números válidos.</p>";
        return;
      }

      // Verificar si todos son iguales
      if (num1 === num2 && num2 === num3) {
        resultado.innerHTML = `<p>Los tres números son iguales: ${num1}, ${num2}, ${num3}</p>`;
        return;
      }

      let mayor, medio, menor;

      // Comparaciones básicas
      if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
          medio = num2;
          menor = num3;
        } else {
          medio = num3;
          menor = num2;
        }
      } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
          medio = num1;
          menor = num3;
        } else {
          medio = num3;
          menor = num1;
        }
      } else {
        mayor = num3;
        if (num1 >= num2) {
          medio = num1;
          menor = num2;
        } else {
          medio = num2;
          menor = num1;
        }
      }

      resultado.innerHTML = `
        <p><strong>De mayor a menor:</strong> ${mayor}, ${medio}, ${menor}</p>
        <p><strong>De menor a mayor:</strong> ${menor}, ${medio}, ${mayor}</p>
      `;

      console.log("De mayor a menor:", mayor, medio, menor);
      console.log("De menor a mayor:", menor, medio, mayor);
    }