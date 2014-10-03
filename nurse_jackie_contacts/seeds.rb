require 'pry'

require_relative './db/connection'
require_relative './lib/category'
require_relative './lib/contact'

Category.delete_all
Contact.delete_all

nurses = Category.create(name: "nurses")
doctors = Category.create(name: "doctors")
pharmacists = Category.create(name: "pharmacists")
administrators = Category.create(name: "administrators")

Contact.create(name: "Jackie Peyton", age: 45, address: "1234 Brickroad", phone_number: "214-234-3444", picture: "http://ia.media-imdb.com/images/M/MV5BMTM4NDAzOTk4MF5BMl5BanBnXkFtZTcwNzQ0MzQxMw@@._V1_SY317_CR7,0,214,317_AL_.jpg", category_id: nurses.id)
Contact.create(name: "Fitch Cooper", age: 30, address: "345 Bedford Avenue", phone_number: "718-765-8989", picture: "http://www.picpicx.com/wp-content/uploads/2014/09/9b26f7da10a9c5bdd7cb963dab31d398.jpg", category_id: nurses.id)
Contact.create(name: "Zoe Barkow", age: 25, address: "455 Driggs Avenue", phone_number: "718-999-0908", picture: "http://ia.media-imdb.com/images/M/MV5BMjIyMTY1OTAwMF5BMl5BanBnXkFtZTcwNTI5OTM0NA@@._V1_SX214_CR0,0,214,317_AL_.jpg", category_id: nurses.id)
Contact.create(name: "Gloria Akalitus", age: 50, address: "5667 125th St.", phone_number: "212-887-5454", picture: "http://www.nndb.com/people/131/000030041/anna-deavere-smith-2-sized.jpg", category_id: administrators.id)
Contact.create(name: "Elenor O'Hara", age: 48, address: "45 Park Avenue South", phone_number: "908-556-8761", picture: "http://graphics8.nytimes.com/images/2013/02/27/arts/27rdv-besta/27rdv-besta-hpMedium-v2.jpg", category_id: doctors.id)
Contact.create(name: "Eddie Walzer", age: 36, address: "34-89 56th Avenue", phone_number: "312-765-3498", picture: "http://ia.media-imdb.com/images/M/MV5BMTAyODc4MDMyMjVeQTJeQWpwZ15BbWU3MDQ4MDE4MjE@._V1_SY317_CR16,0,214,317_AL_.jpg", category_id: pharmacists.id)
Contact.create(name: "Thor Lundgren", age: 30, address: "546 1st Avnue", phone_number: "412-889-0987", picture: "http://img.poptower.com/pic-64113/stephen-wallem.jpg?d=600",category_id: nurses.id)
Contact.create(name: "Carrie Roman", age: 32, address: "307 W 78th St.", phone_number: "212-334-8670", picture: "http://img.poptower.com/pic-64113/stephen-wallem.jpg?d=600",category_id: nurses.id)
Contact.create(name: "Mike Cruz", age: 40, address: "307 W 86th St.", phone_number: "212-776-5500", picture: "http://img.poptower.com/pic-64113/stephen-wallem.jpg?d=600", category_id: doctors.id)
Contact.create(name: "Thor Lundgren", category_id: nurses.id)
Contact.create(name: "Sam Gupta", category_id: nurses.id)
Contact.create(name: "Ike Prentiss", category_id: doctors.id)
Contact.create(name: "Kelly Slater", category_id: nurses.id)

