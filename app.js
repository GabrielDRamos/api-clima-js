const cidadeInput = document.getElementById('cidade')
const buttonSubmit = document.getElementById('submit')
const cidadeClimadados = document.getElementById('cidade-clima-dados')
const cidadeClimaerro  = document.getElementById('cidade-clima-erro')


buttonSubmit.addEventListener('click', () => {
  const cidade = cidadeInput.value
  const apiKey = "73ef2ace58d9a14786d60bf54f1c8a9d"
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`


  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      cidadeClimadados.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>${data.weather[0].description}</p>
      <p>Temperatura: ${data.main.temp} °C</p>
      <p>Umidade: ${data.main.humidity}%</p>
      <p>Pressão: ${data.main.pressure} hPa</p>
      `
      cidadeClimaerro.innerHTML = ''
    })
    .catch((error) => {
        cidadeClimadados.innerHTML = '';
        cidadeClimaerro.innerHTML = 'Erro! Digite uma cidade válida!'
    })
})




