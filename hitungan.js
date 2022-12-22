  let hitungan = 0;
      function hitung() {
        hitungan++;
        document.querySelector("h1").innerHTML = hitungan;

        if (hitungan % 10 === 0) {
          alert(`Hitungan sekarang ${hitungan}`);
        }
      }

      document.addEventListener('DOMContentLoaded', function(){
        document.querySelector("button").onclick = hitung;
      });
      