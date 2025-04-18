document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fom').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const birthdateValue = document.getElementById('birthdate').value;
      const gender = document.getElementById('gender').value;
  
      if (!birthdateValue) {
        alert("Input your birthdate.");
        return;
      }
  
      if (!gender) {
        alert("Input your gender.");
        return;
      }
  
      const date = new Date(birthdateValue);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; 
      const day = date.getDate();
  
      const CC = Math.floor(year / 100);
      const YY = year % 100;
      const MM = month;
      const DD = day;
  
      const dayOfWeek = (
        (4 * CC - 2 * CC - 1) +
        (45 * YY) + Math.floor((1026 * (MM + 1)) / 100) + DD)
       % 7;

       const adjustedDayOfWeek = (dayOfWeek + 7) % 7;
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
      const akanName = gender.toLowerCase() === "male"
        ? maleNames[adjustedDayOfWeek]
        : femaleNames[adjustedDayOfWeek];
  
        document.getElementById('result').textContent = `Your Akan name is: ${akanName}`;
    });
  });
    