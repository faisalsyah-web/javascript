if (!localStorage.getItem('hitungan')){
    localStorage.setItem('hitungan', 0);
}

      function hitung() {
        let hitungan = localStorage.getItem('hitungan');
        hitungan++;
        document.querySelector("h1").innerHTML = hitungan;
        localStorage.setItem('hitungan', hitungan)
      }

      document.addEventListener('DOMContentLoaded', function(){
        document.querySelector("h1").innerHTML = localStorage.getItem('hitungan');
        document.querySelector("button").onclick = hitung;

        // setInterval(hitung, 1000);
      });
      